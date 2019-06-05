/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";var t=(...e)=>e,n=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:r}=Array,o=n.prototype.nodeType,a=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),l=(e,t)=>("svg"===t?c:s)(e),s=e=>{const t=a("template");return t.innerHTML=e,t.content},c=e=>{const{content:t}=a("template"),n=a("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:o}=r;for(;o--;)t.appendChild(r[0]);return t},i=(e,t,n,r,o,a)=>{if(o-r<2)t.insertBefore(e(n[r],1),a);else{const l=t.ownerDocument.createDocumentFragment();for(;r<o;)l.appendChild(e(n[r++],1));t.insertBefore(l,a)}},u=(e,t)=>e==t,f=e=>e,p=(e,t,n,r,o,a,l)=>{const s=a-o;if(s<1)return-1;for(;n-t>=s;){let s=t,c=o;for(;s<n&&c<a&&l(e[s],r[c]);)s++,c++;if(c===a)return t;t=s+1}return-1},d=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,h=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},m=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},g=(e,t,n,r,o,a,l,s,c,u,f,p,d)=>{((e,t,n,r,o,a,l,s,c)=>{const u=new Map,f=e.length;let p=l,d=0;for(;d<f;)switch(e[d++]){case 0:o++,p++;break;case 1:u.set(r[o],1),i(t,n,r,o++,o,p<s?t(a[p],0):c);break;case-1:p++}for(d=0;d<f;)switch(e[d++]){case 0:l++;break;case-1:u.has(a[l])?l++:h(t,n,a,l++,l)}})(((e,t,n,r,o,a,l)=>{const s=n+a,c=[];let i,u,f,p,d,h,m;e:for(i=0;i<=s;i++){if(i>50)return null;for(m=i-1,d=i?c[i-1]:[0,0],h=c[i]=[],u=-i;u<=i;u+=2){for(f=(p=u===-i||u!==i&&d[m+u-1]<d[m+u+1]?d[m+u+1]:d[m+u-1]+1)-u;p<a&&f<n&&l(r[o+p],e[t+f]);)p++,f++;if(p===a&&f===n)break e;h[i+u]=p}}const g=Array(i/2+s/2);let v=g.length-1;for(i=c.length-1;i>=0;i--){for(;p>0&&f>0&&l(r[o+p-1],e[t+f-1]);)g[v--]=0,p--,f--;if(!i)break;m=i-1,d=i?c[i-1]:[0,0],(u=p-f)==-i||u!==i&&d[m+u-1]<d[m+u+1]?(f--,g[v--]=1):(p--,g[v--]=-1)}return g})(n,r,a,l,s,u,p)||((e,t,n,r,o,a,l,s)=>{let c=0,i=r<s?r:s;const u=Array(i++),f=Array(i);f[0]=-1;for(let e=1;e<i;e++)f[e]=l;const p=new Map;for(let e=a;e<l;e++)p.set(o[e],e);for(let r=t;r<n;r++){const t=p.get(e[r]);null!=t&&-1<(c=m(f,i,t))&&(f[c]=t,u[c]={newi:r,oldi:t,prev:u[c-1]})}for(c=--i,--l;f[c]>l;)--c;i=s+r-c;const d=Array(i);let h=u[c];for(--n;h;){const{newi:e,oldi:t}=h;for(;n>e;)d[--i]=1,--n;for(;l>t;)d[--i]=-1,--l;d[--i]=0,--n,--l,h=h.prev}for(;n>=t;)d[--i]=1,--n;for(;l>=a;)d[--i]=-1,--l;return d})(n,r,o,a,l,s,c,u),e,t,n,r,l,s,f,d)},v=(e,t,n,r)=>{r||(r={});const o=r.compare||u,a=r.node||f,l=null==r.before?null:a(r.before,0),s=t.length;let c=s,m=0,v=n.length,y=0;for(;m<c&&y<v&&o(t[m],n[y]);)m++,y++;for(;m<c&&y<v&&o(t[c-1],n[v-1]);)c--,v--;const w=m===c,b=y===v;if(w&&b)return n;if(w&&y<v)return i(a,e,n,y,v,d(a,t,m,s,l)),n;if(b&&m<c)return h(a,e,t,m,c),n;const N=c-m,x=v-y;let C=-1;if(N<x){if(-1<(C=p(n,y,v,t,m,c,o)))return i(a,e,n,y,C,a(t[m],0)),i(a,e,n,C+N,v,d(a,t,c,s,l)),n}else if(x<N&&-1<(C=p(t,m,c,n,y,v,o)))return h(a,e,t,m,C),h(a,e,t,C+x,c),n;return N<2||x<2?(i(a,e,n,y,v,a(t[m],0)),h(a,e,t,m,c),n):N===x&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,v,t,m,c,o)?(i(a,e,n,y,v,d(a,t,c,s,l)),n):(g(a,e,n,y,v,x,t,m,c,N,s,o,l),n)};var y,w=document.importNode,b="".trim,N="-"+Math.random().toFixed(6)+"%";try{"content"in(y=document.createElement("template"))&&(y.innerHTML='<p tabindex="'+N+'"></p>',y.content.childNodes[0].getAttribute("tabindex")==N)||(N="_dt: "+N.slice(1,-1)+";")}catch(e){}var x="\x3c!--"+N+"--\x3e",C=8,k=1,E=3,A=/^(?:style|textarea)$/i,$=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var j=" \\f\\n\\r\\t",S="[^"+j+"\\/>\"'=]+",T="["+j+"]+"+S,M="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",L="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+S.replace("\\/","")+"))?)",D=new RegExp(M+T+L+"+)(["+j+"]*/?>)","g"),Z=new RegExp(M+T+L+"*)(["+j+"]*/>)","g"),_=new RegExp("("+T+"\\s*=\\s*)(['\"]?)"+x+"\\2","gi");function z(e,t,n,r){return"<"+t+n.replace(_,O)+r}function O(e,t,n){return t+(n||'"')+N+(n||'"')}function R(e,t,n){return $.test(t)?e:"<"+t+n+"></"+t+">"}function B(e,t,n,r){return{name:r,node:t,path:n,type:e}}function G(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function V(e,t,n,r){for(var o=new Map,a=e.attributes,l=[],s=l.slice.call(a,0),c=s.length,i=0;i<c;){var u=s[i++];if(u.value===N){var f=u.name;if(!o.has(f)){var p=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),d=a[p]||a[p.toLowerCase()];o.set(f,d),t.push(B("attr",d,r,p))}l.push(u)}}for(c=l.length,i=0;i<c;){var h=l[i++];/^id$/i.test(h.name)?e.removeAttribute(h.name):e.removeAttributeNode(h)}var m=e.nodeName;if(/^script$/i.test(m)){var g=document.createElement(m);for(c=a.length,i=0;i<c;)g.setAttributeNode(a[i++].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}}var W=new WeakMap,F=new WeakMap;function H(e,t){var n=function(e){return e.join(x).replace(Z,R).replace(D,z)}(t),r=e.transform;r&&(n=r(n));var o=l(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===b.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var a=t.childNodes,l=a.length,s=0;s<l;){var c=a[s];switch(c.nodeType){case k:var i=o.concat(s);V(c,n,r,i),e(c,n,r,i);break;case C:var u=c.textContent;if(u===N)r.shift(),n.push(A.test(t.nodeName)?B("text",t,o):B("any",c,o.concat(s)));else switch(u.slice(0,2)){case"/*":if("*/"!==u.slice(-2))break;case"👻":t.removeChild(c),s--,l--}break;case E:A.test(t.nodeName)&&b.call(c.textContent)===x&&(r.shift(),n.push(B("text",t,o)))}s++}}(o,a,t.slice(0),[]);var s={content:o,updates:function(n){for(var r=[],o=a.length,l=0;l<o;){var s=a[l++],c=G(n,s.path);switch(s.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,s.name,s.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,a=e-1,l=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;l<e;)r[l-1](arguments[l++]);return n}}};return W.set(t,s),s}function P(e){return function(t){var n=F.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=W.get(t)||H(e,t),r=w.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return F.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var q=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,l;return function(s){var c,i,u,f;switch(typeof s){case"object":if(s){if("object"===a){if(!o&&l!==s)for(i in l)i in s||(r[i]="")}else o?r.value="":r.cssText="";for(i in c=o?{}:r,s)u="number"!=typeof(f=s[i])||e.test(i)?f:f+"px",!o&&/^--/.test(i)?c.setProperty(i,u):c[i]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(l=c):l=s;break}default:l!=s&&(a="string",l=s,o?r.value=s||"":r.cssText=s||"")}}}}();const U=(e,t)=>e.nodeType===o?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,I=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},J=(e,t)=>n=>{null==n?(e[t]="",e.removeAttribute(t)):e[t]=n},K=/^(?:form|list)$/i,Q=[].slice,X=(e,t)=>e.ownerDocument.createTextNode(t);function Y(e){return this.type=e,P(this)}function ee(e){return e(this)}Y.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return I(e,n);t="className";case"data":case"props":return J(e,t);case"style":return q(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||K.test(t))?J(e,t):I(e,n)}},any(e,t){const n={node:U,before:e},o="ownerSVGElement"in e?"svg":"html";let a,s=!1;const c=i=>{switch(typeof i){case"string":case"number":case"boolean":s?a!==i&&(a=i,t[0].textContent=i):(s=!0,a=i,t=v(e.parentNode,t,[X(e,i)],n));break;case"function":c(i(e));break;case"object":case"undefined":if(null==i){s=!1,t=v(e.parentNode,t,[],n);break}default:if(s=!1,a=i,r(i))if(0===i.length)t.length&&(t=v(e.parentNode,t,[],n));else switch(typeof i[0]){case"string":case"number":case"boolean":c(String(i));break;case"function":c(i.map(ee,e));break;case"object":r(i[0])&&(i=i.concat.apply([],i));default:t=v(e.parentNode,t,i,n)}else(e=>"ELEMENT_NODE"in e)(i)?t=v(e.parentNode,t,11===i.nodeType?Q.call(i.childNodes):[i],n):"text"in i?c(String(i.text)):"any"in i?c(i.any):"html"in i?t=v(e.parentNode,t,Q.call(l([].concat(i.html).join(""),o).childNodes),n):"length"in i&&c(Q.call(i))}};return c},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Q.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const te=new WeakMap,ne=new WeakMap;let re=null;function oe(e,t){const n=function(e,t){const n=re;(re=te.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return te.set(e,t),t}(e)).i=0;const r=t.call(this);let o;if(r instanceof fe){o=se(ie(r,0),re.update);const{i:e,length:t,stack:n,update:a}=re;e<t&&n.splice(re.length=e),a&&(re.update=!1)}else o=se(r,!1);return re=n,o}.call(this,e,t);return ne.get(e)!==n&&(ne.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}const ae=ce("html"),le=ce("svg");function se(e,t){return e.nodeType===o?e.valueOf(t):e}function ce(e){const n=new WeakMap;return r.for=((r,o)=>{const a=n.get(r)||function(e){const t={$:null};return n.set(e,t),t}(r);return null==o&&(o="$"),a[o]||function(n,r){let o=null;const a=new Y(e);return n[r]=function(){const e=a.apply(null,t.apply(null,arguments));return o||(o=ue(e))}}(a,o)}),r;function r(){const n=t.apply(null,arguments);return re?new fe(e,n):new Y(e).apply(null,n)}}function ie(e,t){const{i:n,length:o,stack:a}=re,{type:l,args:s}=e,c=n<o;re.i++,c||(re.length=a.push({l:t,kind:l,tag:null,tpl:s[0],wire:null})),function e(t,n,o){for(const{length:a}=t;n<a;n++){const a=t[n];"object"==typeof a&&a&&(a instanceof fe?t[n]=ie(a,o-1):r(a)&&(t[n]=e(a,0,o++)))}return t}(s,1,t+1);const i=a[n];if(c){const{l:e,kind:n,tag:r,tpl:o,wire:a}=i;if(e===t&&l===n&&o===s[0])return r.apply(null,s),a}const u=new Y(l),f=ue(u.apply(null,s));return i.l=t,i.kind=l,i.tag=u,i.tpl=s[0],i.wire=f,n<1&&(re.update=!0),f}function ue(e){const t=e.childNodes,{length:r}=t;return 1===r?t[0]:r?new n(t):e}function fe(e,t){this.type=e,this.args=t}Object.freeze(fe);const{defineProperties:pe}=Object,de={},he=(e,t)=>(...n)=>ge(e,()=>t(...n));let me=null;const ge=(e,t)=>oe(e,"function"==typeof t?t:()=>t),ve=(...e)=>new fe("html",e),ye=(...e)=>new fe("svg",e);ve.for=ae.for,ye.for=le.for;let we=0;const be=()=>{const e=we?"-"+we:"";return we++,(t,n)=>{if("function"==typeof t&&(t=(n=t).name+":"+n.tagName),!/^([A-Z][A-Za-z0-9_]*):([A-Za-z0-9-]+)$/.test(t))throw"Unable to retrieve name and tagName";const{$1:r,$2:o}=RegExp,{prototype:a,style:l}=n,s={html:{configurable:!0,get:Ce},svg:{configurable:!0,get:ke}};"render"in a&&!("connectedCallback"in a)&&(s.connectedCallback={configurable:!0,value:xe}),"handleEvent"in a||(s.handleEvent={configurable:!0,value:Ee}),pe(a,s);const c=function(e,t){return e.replace(/([A-Z])([A-Z][a-z])/g,t="$1"+(t||"-")+"$2").replace(/([a-z])([A-Z])/g,t).toLowerCase()}(r)+e+"-heresy";customElements.define(c,n,{extends:o}),de[r]={tagName:o,is:c},l&&(e=>{const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));const n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)})(l.call(n,`${o}[is="${c}"]`)),me||(e=>{const{transform:t}=Y.prototype;Y.prototype.transform=t?n=>e(t(n)):e})(e=>e.replace(me,(e,t,n,r)=>{const{tagName:o,is:a}=de[n];return t?`</${o}>`:`<${o} is="${a}"${r}`}));const i=Object.keys(de).join("|");return me=new RegExp(`<(/)?(${i})([^A-Za-z0-9_])`,"g"),n}},Ne=pe(be(),{local:{get:be}});function xe(){this.render()}function Ce(){return he(this,ae)}function ke(){return he(this,le)}function Ee(e){this[`on${e.type}`](e)}return e.define=Ne,e.html=ve,e.ref=((e,t)=>e?e[t]||(e[t]={current:null}):{current:null}),e.render=ge,e.svg=ye,e}({});
