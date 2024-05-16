import{b as Xe,i as He,j as R,r as _,R as m,u as qe,I as Me}from"./index-OG3N9WCC.js";var ve={},ze=He;Object.defineProperty(ve,"__esModule",{value:!0});var Te=ve.default=void 0,Be=ze(Xe()),Ue=R;Te=ve.default=(0,Be.default)((0,Ue.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");var g;(function(e){e.ARROW_DOWN="ArrowDown",e.ARROW_LEFT="ArrowLeft",e.ARROW_RIGHT="ArrowRight",e.ARROW_UP="ArrowUp",e.END="End",e.HOME="Home",e.PAGE_DOWN="PageDown",e.PAGE_UP="PageUp",e.DELETE="Delete",e.BACKSPACE="Backspace",e.ENTER="Enter"})(g||(g={}));var U=function(e){return function(n){throw new Error("".concat(e).concat(n))}},$e=[g.ARROW_LEFT,g.ARROW_RIGHT,g.HOME,g.END],Ye=new Set($e),Ke=function(e){return Ye.has(e)},Qe=function(e){var n=e-1;return n<0?0:n},Ge=function(e,n){var r=e+1;return r>n?n:r},Ze=function(){return 0},Je=function(e){return e},en=U("Invalid move action: "),nn=function(e,n){var r=e.cursorPosition,t=e.lastPosition;switch(n){case g.ARROW_LEFT:return Qe(r);case g.ARROW_RIGHT:return Ge(r,t);case g.HOME:return Ze();case g.END:return Je(t);default:en(n)}return r},rn=function(e,n){var r=e.renderValue,t=e.cursorPosition,a=e.inputValue,i=r.length;return{renderValue:r,cursorPosition:nn({cursorPosition:t,lastPosition:i},n),inputValue:a}},tn=[g.ARROW_DOWN,g.ARROW_LEFT,g.ARROW_RIGHT,g.ARROW_UP,g.END,g.HOME,g.PAGE_DOWN,g.PAGE_UP,g.DELETE,g.BACKSPACE,g.ENTER],an=new Set(tn),on=function(e){return an.has(e)},sn=function(e){e.preventDefault()},cn=[g.ENTER],un=new Set(cn),ln=function(e){return un.has(e)},dn="",mn=[],fn=0,vn=function(){return{inputValue:dn,renderValue:mn,cursorPosition:fn}};/*! *****************************************************************************
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
***************************************************************************** */var C=function(){return C=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},C.apply(this,arguments)};function _e(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function pe(e,n,r,t){function a(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function c(u){try{o(t.next(u))}catch(f){s(f)}}function d(u){try{o(t.throw(u))}catch(f){s(f)}}function o(u){u.done?i(u.value):a(u.value).then(c,d)}o((t=t.apply(e,[])).next())})}function he(e,n){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(o){return function(u){return d([o,u])}}function d(o){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,a&&(i=o[0]&2?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[o[0]&2,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=n.call(e,r)}catch(u){o=[6,u],a=0}finally{t=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}function v(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,i;t<a;t++)(i||!(t in n))&&(i||(i=Array.prototype.slice.call(n,0,t)),i[t]=n[t]);return e.concat(i||Array.prototype.slice.call(n))}var pn=[g.BACKSPACE,g.DELETE],hn=new Set(pn),_n=function(e){return hn.has(e)},wn=U("Invalid remove action: "),We=function(e,n){return e<0?0:e>n?n:e},Oe=function(e,n){return v(v([],e.slice(0,n),!0),e.slice(n+1),!0)},Re=function(e,n){return"".concat(e.substring(0,n)).concat(e.substring(n+1))},gn=function(e){var n=e.renderValue,r=e.inputValue,t=e.cursorPosition,a=t-1;return a<0?e:{renderValue:Oe(n,a),inputValue:Re(r,a),cursorPosition:We(a,n.length)}},kn=function(e){var n=e.renderValue,r=e.inputValue,t=e.cursorPosition;return t===n.length?e:{renderValue:Oe(n,t),inputValue:Re(r,t),cursorPosition:We(t,n.length-1)}},yn=function(e,n){switch(n){case g.BACKSPACE:return gn(e);case g.DELETE:return kn(e);default:wn(n)}return e},bn=function(e){var n=e.oldLength,r=e.newLength,t=e.cursorPosition,a=n===t;return a?r:t},Ln=function(e){var n=e.renderValue,r=e.cursorPosition,t=e.newInput,a=n.length,i=t.length-n.length,s=t.substring(r,r+i);return v(v(v([],n.slice(0,r),!0),s.split(""),!0),n.slice(r,a),!0)},xn=function(e){var n=e.newInput,r=e.renderValue,t=e.cursorPosition;if(!n)throw new Error("Cannot press without a new input");if(n.length<r.length)throw new Error("New input is shorter then old one");return{inputValue:n,renderValue:Ln({newInput:n,renderValue:r,cursorPosition:t}),cursorPosition:bn({oldLength:r.length,newLength:n.length,cursorPosition:t})}},Pn=[g.ARROW_UP,g.ARROW_DOWN],En=new Set(Pn),Cn=function(e){return En.has(e)},An=U("Invalid service action: "),we=function(e){var n=e(),r=n.length,t=n.split("");return{renderValue:t,inputValue:n,cursorPosition:r}},Sn=function(e,n){var r=e.renderValue,t=e.inputValue,a=e.cursorPosition,i=e.services,s=i.nextCommand,c=i.prevCommand;switch(n){case g.ARROW_UP:return we(c);case g.ARROW_DOWN:return we(s);default:An(n)}return{renderValue:r,inputValue:t,cursorPosition:a}},me={renderValue:[],inputValue:"",cursorPosition:0};function Nn(){var e=_.useState(me.inputValue),n=e[0],r=e[1],t=_.useState(me.renderValue),a=t[0],i=t[1],s=_.useState(me.cursorPosition),c=s[0],d=s[1],o=function(w){var x=w.renderValue,S=w.inputValue,N=w.cursorPosition;a!==x&&i(x),n!==S&&r(S),c!==N&&d(N)},u=function(w){return sn(w)},f=function(w){return o(xn({renderValue:a,inputValue:n,cursorPosition:c,newInput:w}))},l=function(w){return o({renderValue:w.split(""),inputValue:w,cursorPosition:w.length})},p=function(w){return o(yn({renderValue:a,inputValue:n,cursorPosition:c},w))},k=function(w){return o(rn({renderValue:a,inputValue:n,cursorPosition:c},w))},h=function(){return o(vn())},b=function(w,x){return o(Sn({renderValue:a,inputValue:n,cursorPosition:c,services:x},w))};return{state:{inputValue:n,renderValue:a,cursorPosition:c},handlers:{preventDefault:u,addCharacter:f,setInput:l,moveCommandCursor:k,removeCharacter:p,submitCommand:h,provideCommandService:b}}}function Tn(){var e=_.useRef(null),n=function(t){e.current&&(e.current.selectionStart=t,e.current.selectionEnd=t)},r=function(){var t;return(t=e.current)===null||t===void 0?void 0:t.focus()};return{state:{inputElementRef:e},handlers:{focus:r,setInputCursor:n}}}var Ie="",Wn=function(e){var n=e.commandsHistory,r=e.cursorPosition,t=n.length-1,a=r+1,i=t<a?n.length:a,s=n[i]||Ie;return{commandsHistory:n,cursorPosition:i,command:s}},On=function(e){var n=e.commandsHistory,r=e.cursorPosition,t=r-1,a=t<0?-1:t,i=n[a]||Ie;return{commandsHistory:n,cursorPosition:a,command:i}},Rn=function(e){var n=e.commandsHistory,r=e.command,t=e.maxHistoryCommands,a=n.length,i=a-1,s=n[i]===r;if(s)return{commandsHistory:n,cursorPosition:a};var c=a<t;if(c)return{commandsHistory:v(v([],n,!0),[r],!1),cursorPosition:a+1};var d=!!a;return d?{commandsHistory:v(v([],n.slice(1),!0),[r],!1),cursorPosition:a}:{commandsHistory:n,cursorPosition:a}},ge={commandsHistory:[],cursorPosition:0};function In(e){var n=e.maxHistoryCommands,r=_.useState(ge.commandsHistory),t=r[0],a=r[1],i=_.useState(ge.cursorPosition),s=i[0],c=i[1],d=function(l){var p=l.commandsHistory,k=l.cursorPosition;t!==p&&a(p),s!==k&&c(k)},o=function(l){d(Rn({maxHistoryCommands:n,commandsHistory:t,command:l}))},u=function(){var l=Wn({commandsHistory:t,cursorPosition:s}),p=l.command,k=_e(l,["command"]);return d(k),p},f=function(){var l=On({commandsHistory:t,cursorPosition:s}),p=l.command,k=_e(l,["command"]);return d(k),p};return{state:{commandsHistory:t},handlers:{addCommand:o,nextCommand:u,prevCommand:f}}}var Ve=function(e){var n=e.remainingWords,r=e.printedWords,t=e.charactersToPrint,a=n[0];if(!a)return{printedWords:r,remainingWords:null,wordFullyPrinted:!0};var i=a.characters.slice(0,t),s=i.length;return s===t?s<a.characters.length?{printedWords:v(v([],r,!0),[C(C({},a),{characters:i})],!1),remainingWords:v([C(C({},a),{characters:a.characters.slice(s)})],n.slice(1),!0),wordFullyPrinted:!1}:{printedWords:v(v([],r,!0),[a],!1),remainingWords:n.slice(1),wordFullyPrinted:!0}:Ve({remainingWords:n.slice(1),printedWords:v(v([],r,!0),[a],!1),charactersToPrint:t-s})},Vn=function(e){var n=e.prevWord,r=e.nextWord,t=e.wordFullyPrinted;return n&&r&&!t?C(C({},n),{characters:n.characters+r.characters}):r},jn=function(e){var n=e.firstWord,r=e.printedWords;return n?v([n],r.slice(1),!0):r},Dn=function(e){var n=e.printedWordsPrev,r=e.wordChunk,t=e.wordFullyPrintedPrev;return v(t?v([],n,!0):v([],n.slice(0,n.length-1),!0),r,!0)},Fn=function(e){var n=e.remainingLine,r=e.remainingWords;return r&&r.length>0?C(C({},n),{words:r}):null},Xn=function(e){var n=e.remainingLine,r=e.printedLine,t=e.charactersToPrint,a=e.wordFullyPrinted,i=r.words,s=Ve({remainingWords:n.words,printedWords:[],charactersToPrint:t}),c=s.printedWords,d=s.remainingWords,o=s.wordFullyPrinted,u=i[i.length-1],f=c[0],l=Vn({prevWord:u,nextWord:f,wordFullyPrinted:a}),p=jn({firstWord:l,printedWords:c});return{remainingLine:Fn({remainingLine:n,remainingWords:d}),printedLine:C(C({},r),{words:Dn({printedWordsPrev:i,wordChunk:p,wordFullyPrintedPrev:a})}),wordFullyPrinted:o}},Hn=function(e){var n=e.printedLines,r=e.printedLine,t=e.newLine;return t?v(v([],n,!0),[r],!1):v(v([],n.slice(0,n.length-1),!0),[r],!1)},qn=function(e){var n=e.remainingLines,r=e.remainingLine,t=r?v([r],n.slice(1),!0):n.slice(1);return t.length>0?t:null},Mn=function(e){var n=e.remainingLines,r=e.printedLines,t=e.wordFullyPrinted,a=e.newLine,i=e.charactersToPrint,s=n[0];if(!s)return{newLine:a,wordFullyPrinted:t,printedLines:r,remainingLines:null};var c=Xn({remainingLine:s,printedLine:a?C(C({},s),{words:[]}):r[r.length-1],charactersToPrint:i,wordFullyPrinted:t}),d=c.remainingLine,o=c.printedLine,u=c.wordFullyPrinted;return{newLine:!d,wordFullyPrinted:u,printedLines:Hn({printedLines:r,printedLine:o,newLine:a}),remainingLines:qn({remainingLines:n,remainingLine:d})}},zn=function(e){var n=e.prevState,r=e.printedLinesNext,t=e.newLine;return v(t?v([],n,!0):v([],n.slice(0,n.length-1),!0),r,!0)},ke=function(e){var n=e.remainingLines,r=e.printedLines,t=e.state,a=e.wordFullyPrinted,i=e.newLine,s=e.charactersToPrint,c=Mn({remainingLines:n,printedLines:r,wordFullyPrinted:a,newLine:i,charactersToPrint:s}),d=c.remainingLines,o=c.printedLines,u=c.wordFullyPrinted,f=c.newLine;return{remainingLines:d,printedLines:o,wordFullyPrinted:u,newLine:f,state:zn({prevState:t,printedLinesNext:o,newLine:i})}},Bn=function(e,n){return setTimeout(function(){return e()},n)},ye={state:[],remainingLines:null,printedLines:[],wordFullyPrinted:!0,newLine:!0};function Un(e){var n=this,r=e.printerSpeed,t=e.charactersPerTick,a=e.afterPrintCallback,i=_.useState(!1),s=i[0],c=i[1],d=_.useState(null),o=d[0],u=d[1],f=_.useState(ye),l=f[0],p=f[1],k=_.useRef(null),h=function(){o&&(clearTimeout(o),u(null))},b=function(){k.current&&(k.current(!0),k.current=null)},w=function(){var L=l.remainingLines,P=l.printedLines,O=l.wordFullyPrinted,W=l.newLine,F=l.state;if(L){var X=ke({remainingLines:L,printedLines:W?[]:P,wordFullyPrinted:O,newLine:W,state:F,charactersToPrint:t});p(X),u(null)}},x=function(L){return pe(n,void 0,void 0,function(){var P;return he(this,function(O){return P=ke({remainingLines:L,printedLines:[],state:l.state,wordFullyPrinted:!0,newLine:!0,charactersToPrint:t}),c(!0),p(P),[2,new Promise(function(W){k.current=W})]})})},S=function(){c(!1),clearTimeout(),b()},N=function(){p(ye)};return _.useEffect(function(){var L=s&&!l.remainingLines,P=s&&!o,O=!s&&o;return L?(S(),a()):P?(u(Bn(w,r)),a()):O&&h(),function(){}},[s,o]),_.useEffect(function(){return function(){h(),b()}},[]),{state:l.state,handlers:{startPrint:x,clear:N}}}function $n(e){var n=e.printerConfig,r=Un(n),t=r.state,a=r.handlers,i=a.startPrint,s=a.clear;return{state:t,handlers:{print:i,clear:s}}}var I;(function(e){e.ANCHOR="ANCHOR",e.TEXT="TEXT",e.BUTTON="BUTTON",e.COMMAND="COMMAND"})(I||(I={}));var be=function(e){var n=e.characters,r=e.dataAttribute,t=e.className,a=e.id;return{type:I.TEXT,characters:n,dataAttribute:r,id:a,className:t}},je=function(e){var n=e.characters,r=e.prompt,t=e.dataAttribute,a=e.className,i=e.id;return{type:I.COMMAND,characters:n,prompt:r,dataAttribute:t,className:a,id:i}},M;(function(e){e.TEXT="TEXT",e.COMMAND="COMMAND"})(M||(M={}));var Yn=function(e){var n=e.words,r=e.dataAttribute,t=e.className,a=e.id;return{type:M.COMMAND,words:n,dataAttribute:r,className:t,id:a}},Le=function(e){var n=e.words,r=e.dataAttribute,t=e.className,a=e.id;return{type:M.TEXT,words:n,dataAttribute:r,className:t,id:a}},T;(function(e){e.PRINT="PRINT",e.CLEAR="CLEAR"})(T||(T={}));var xe=[];function Kn(){var e=_.useRef(xe).current,n=_.useState(v([],xe,!0)),r=n[0],t=n[1],a=function(o){e.push(o),t(v([],e,!0))},i=function(o){e.shift(),t(v([],e,!0)),o()},s=function(){return r[0]},c=function(o){a({type:T.PRINT,payload:o})},d=function(){a({type:T.CLEAR})};return{state:r,handlers:{print:c,clear:d,dequeue:i,nextEvent:s}}}var A;(function(e){e.FOCUS="FOCUS",e.LOCK="LOCK",e.LOADING="LOADING"})(A||(A={}));var Pe=[];function Qn(){var e=_.useRef(Pe).current,n=_.useState(v([],Pe,!0)),r=n[0],t=n[1],a=function(u){e.push(u),t(v([],e,!0))},i=function(u){e.shift(),t(v([],e,!0)),u()},s=function(){return r[0]},c=function(){a({type:A.FOCUS})},d=function(u){a({type:A.LOCK,payload:u})},o=function(u){a({type:A.LOADING,payload:u})};return{state:r,handlers:{focus:c,lock:d,loading:o,dequeue:i,nextEvent:s}}}var Ee=[];function Gn(){var e=_.useRef(Ee).current,n=_.useState(v([],Ee,!0)),r=n[0],t=n[1],a=function(l){e.push(l),t(v([],e,!0))},i=function(l){e.shift(),t(v([],e,!0)),l()},s=function(){return r[0]},c=function(l){a({type:T.PRINT,payload:l})},d=function(){a({type:T.CLEAR})},o=function(){a({type:A.FOCUS})},u=function(l){a({type:A.LOCK,payload:l})},f=function(l){a({type:A.LOADING,payload:l})};return{state:r,api:{enqueue:a,dequeue:i,nextEvent:s},handlers:{print:c,clear:d,focus:o,lock:u,loading:f}}}var Zn=function(e){var n=e.characters,r=e.prompt;return Yn({words:[je({characters:n,prompt:r})]})};function Jn(e){var n=this,r=e.terminalApp,t=r.state.inputLocked,a=r.handlers.lock,i=e.input.handlers,s=i.setInputCursor,c=i.focus,d=e.commandScreen.handlers,o=d.print,u=d.clear,f=e.commandLine,l=f.state,p=l.cursorPosition,k=l.inputValue,h=f.handlers,b=h.preventDefault,w=h.addCharacter,x=h.removeCharacter,S=h.moveCommandCursor,N=h.submitCommand,L=h.provideCommandService,P=e.commandHistory.handlers,O=P.addCommand,W=P.nextCommand,F=P.prevCommand,X=e.loaderComponent,H=X.isLoading,$=X.handlers,Y=$.startLoading,ae=$.endLoading,j=e.interface,ie=j.onCommand,K=j.prompt,Q=j.banner,q=j.queue.api.enqueue,oe=e.focusOnMount,G=_.useState(!1),Z=G[0],J=G[1],se=function(){c()},z=function(y){var E=H&&!y;E||a(y)},ee=function(){return u()},ce=function(y){return pe(n,void 0,void 0,function(){return he(this,function(E){switch(E.label){case 0:return[4,o(y)];case 1:return E.sent(),[2]}})})},ne=function(y){var E=y&&y!==t,Fe=!y&&Z;E?(a(!0),J(!0)):Fe&&(a(!1),J(!1))},ue=function(y){y&&!H?(ne(!0),Y()):!y&&H&&(ae(),ne(!1))},le=function(y){t||w(y)},B=function(y){if(Ke(y)&&S(y),_n(y)&&x(y),Cn(y)&&L(y,{nextCommand:W,prevCommand:F}),ln(y)){N();var E=k.trim();E&&(O(E),q({type:T.PRINT,payload:[Zn({characters:E,prompt:K})]}),ie(E))}},de=function(y){var E=y.key;on(E)&&b(y),t||B(E)};return _.useEffect(function(){s(p)},[p]),_.useEffect(function(){Q&&q({type:T.PRINT,payload:Q}),oe&&c()},[]),{handlers:{focus:se,lock:z,clear:ee,print:ce,handleInputChange:le,handleKeyboardDown:de,loading:ue}}}var er={inputLocked:!1};function nr(){var e=_.useState(er.inputLocked),n=e[0],r=e[1],t=_.useRef(null),a=function(c){var d=c.inputLocked;n!==d&&r(d)},i=function(c){return a({inputLocked:c})},s=function(){var c=t.current;c&&(c.scrollTop=c.scrollHeight)};return{state:{terminalRef:t,inputLocked:n},handlers:{lock:i,scrollDown:s}}}function rr(e){var n=this,r=e.controller,t=r.clear,a=r.print,i=e.queue,s=i.state,c=i.handlers,d=c.dequeue,o=c.nextEvent,u=_.useState(null),f=u[0],l=u[1],p=function(){return l(null)},k=function(h){return pe(n,void 0,void 0,function(){var b;return he(this,function(w){switch(w.label){case 0:switch(b=h.type,b){case T.CLEAR:return[3,1];case T.PRINT:return[3,2]}return[3,4];case 1:return t(),d(p),[3,4];case 2:return[4,a(h.payload)];case 3:return w.sent(),d(p),[3,4];case 4:return[2]}})})};_.useEffect(function(){var h=o(),b=f!==h;h&&b&&(l(h),k(h))},[s,f])}function tr(e){var n=e.controller,r=n.focus,t=n.loading,a=n.lock,i=e.queue,s=i.state,c=i.handlers,d=c.dequeue,o=c.nextEvent,u=_.useState(null),f=u[0],l=u[1],p=function(){return l(null)},k=function(h){switch(h.type){case A.FOCUS:r(),d(p);break;case A.LOADING:t(h.payload),d(p);break;case A.LOCK:a(h.payload),d(p);break}};_.useEffect(function(){var h=o(),b=f!==h;h&&b&&(l(h),k(h))},[s,f])}function ar(e){var n=e.controller,r=e.queue,t=r.state,a=r.api,i=a.dequeue,s=a.nextEvent,c=_.useState(null),d=c[0],o=c[1],u=function(){return o(null)},f=Kn(),l=f.handlers,p=l.print,k=l.clear;rr({queue:f,controller:n});var h=Qn(),b=h.handlers,w=b.focus,x=b.loading,S=b.lock;tr({queue:h,controller:n});var N=function(L){switch(L.type){case A.FOCUS:w(),i(u);break;case A.LOADING:x(L.payload),i(u);break;case A.LOCK:S(L.payload),i(u);break;case T.CLEAR:k(),i(u);break;case T.PRINT:p(L.payload),i(u);break}};_.useEffect(function(){var L=s(),P=d!==L;L&&P&&(o(L),N(L))},[t,d])}var De="",Ce=-1,ir=function(e){var n=e.slides,r=e.slideIndex,t=r+1,a=n[t];return a?{slideIndex:t,slide:a}:{slideIndex:0,slide:n[0]||De}},or=function(e,n){return setTimeout(function(){return e()},n)};function sr(e){var n=e.slides,r=e.loaderSpeed,t=e.onSetOuterState,a=_.useState(!1),i=a[0],s=a[1],c=_.useState(Ce),d=c[0],o=c[1],u=_.useState(null),f=u[0],l=u[1],p=function(){f&&(clearTimeout(f),l(null))},k=function(w){return function(){var x=ir({slides:n,slideIndex:d}),S=x.slide,N=x.slideIndex;o(N),w(S),l(null)}},h=function(){s(!0),k(t)()},b=function(){s(!1),t(De),o(Ce)};return _.useEffect(function(){var w=!i&&f,x=i&&!f;return x?l(or(k(t),r)):w&&p(),function(){}},[i,f]),_.useEffect(function(){return function(){return p()}},[]),{isLoading:i,handlers:{startLoading:h,endLoading:b}}}function V(e,n){n===void 0&&(n={});var r=n.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",r==="top"&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var cr=`.printer-line-module_commandLine__estqY {
  padding: 1.4285714286rem 1.4285714286rem 1.4285714286rem 1.4285714286rem;
}

.printer-line-module_textLine__nz4P- {
  padding: 0 1.4285714286rem 0 2.8571428571rem;
}`,Ae={commandLine:"printer-line-module_commandLine__estqY",textLine:"printer-line-module_textLine__nz4P-"};V(cr);var ur=U("Unknown line type: "),lr=function(n){var r=n.line,t=n.children,a=r.className,i=a===void 0?"":a,s=r.dataAttribute,c=r.id;return function(){switch(r.type){case M.TEXT:return m.createElement("div",{id:c,className:[Ae.textLine,"crt-text-line",i].join(" "),"data-crt-terminal":s},t);case M.COMMAND:return m.createElement("div",{id:c,className:[Ae.commandLine,"crt-command-line",i].join(" "),"data-crt-terminal":s},t);default:return ur(r)}}()},dr=`@-webkit-keyframes character-module_blink-character__xvpwk {
  50% {
    color: #d0fc7e;
    background-color: transparent;
  }
}
@keyframes character-module_blink-character__xvpwk {
  50% {
    color: #d0fc7e;
    background-color: transparent;
  }
}
@-webkit-keyframes character-module_scanner__eZs7v {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@keyframes character-module_scanner__eZs7v {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes character-module_pulse-text__PBNwr {
  50% {
    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;
    color: #c6fc7e;
  }
}
@keyframes character-module_pulse-text__PBNwr {
  50% {
    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;
    color: #c6fc7e;
  }
}
@-webkit-keyframes character-module_shiver-screen__37A2O {
  0% {
    transform: skewX(0deg);
  }
  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }
  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }
  16% {
    transform: skewX(0.2deg);
  }
  50% {
    transform: skewX(0.2deg);
  }
}
@keyframes character-module_shiver-screen__37A2O {
  0% {
    transform: skewX(0deg);
  }
  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }
  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }
  16% {
    transform: skewX(0.2deg);
  }
  50% {
    transform: skewX(0.2deg);
  }
}
.character-module_character__MzT4w {
  white-space: pre-wrap;
  word-break: break-all;
}

.character-module_characterSelected__axWlO {
  color: #111010;
  background-color: #d0fc7e;
  -webkit-animation: character-module_blink-character__xvpwk 1s steps(1, end) infinite;
          animation: character-module_blink-character__xvpwk 1s steps(1, end) infinite;
}`,Se={character:"character-module_character__MzT4w",characterSelected:"character-module_characterSelected__axWlO","blink-character":"character-module_blink-character__xvpwk",scanner:"character-module_scanner__eZs7v","pulse-text":"character-module_pulse-text__PBNwr","shiver-screen":"character-module_shiver-screen__37A2O"};V(dr);var D=function(n){var r=n.children,t=n.selected,a=t===void 0?!1:t,i=n.className,s=i===void 0?"":i,c=a?Se.characterSelected:"";return m.createElement("span",{className:[Se.character,c,s,"crt-character"].join(" ")},r)},mr=`.printer-word-module_commandWord__nSXjX {
  display: inline-block;
}

.printer-word-module_textWord__akJYx {
  display: inline-block;
}

.printer-word-module_buttonWord__iu6fj {
  font-family: "Courier New", courier, monospace;
  font-size: 1rem;
  line-height: 1.5;
  text-shadow: 0 0 1.1428571429rem #d0fc7e, 0 0 1.7142857143rem #d0fc7e;
  color: #d0fc7e;
  margin: 0;
  padding: 0 5px;
  display: inline-block;
  background-color: transparent;
  border: 1px solid #d0fc7e;
  cursor: pointer;
}
.printer-word-module_buttonWord__iu6fj:hover {
  color: #111010;
  background-color: #d0fc7e;
}

.printer-word-module_anchorWord__dLnZB {
  font-family: "Courier New", courier, monospace;
  font-size: 1rem;
  line-height: 1.5;
  text-shadow: 0 0 1.1428571429rem #d0fc7e, 0 0 1.7142857143rem #d0fc7e;
  color: #d0fc7e;
  display: inline-block;
}
.printer-word-module_anchorWord__dLnZB:hover {
  color: white;
}`,re={commandWord:"printer-word-module_commandWord__nSXjX",textWord:"printer-word-module_textWord__akJYx",buttonWord:"printer-word-module_buttonWord__iu6fj",anchorWord:"printer-word-module_anchorWord__dLnZB"};V(mr);var fr=U("Unknown word type: "),vr=function(n){var r=n.word,t=n.children,a=r.className,i=a===void 0?"":a,s=r.dataAttribute,c=r.id;return function(){switch(r.type){case I.TEXT:return m.createElement("span",{id:c,className:[re.textWord,"crt-text-word",i].join(" "),"data-crt-terminal":s},m.createElement(D,null,t));case I.ANCHOR:return m.createElement("a",{id:c,className:[re.anchorWord,"crt-anchor-word",i].join(" "),"data-crt-terminal":s,href:r.href,onClick:r.onClick},m.createElement(D,null,t));case I.BUTTON:return m.createElement("button",{type:"button",id:c,className:[re.buttonWord,"crt-button-word",i].join(" "),"data-crt-terminal":s,onClick:r.onClick},m.createElement(D,null,t));case I.COMMAND:return m.createElement("span",{id:c,className:[re.commandWord,"crt-command-word",i].join(" "),"data-crt-terminal":s},m.createElement(D,null,r.prompt),m.createElement(D,null,t));default:return fr(r)}}()},pr=_.memo(function(e){var n=e.state;return m.createElement("div",{className:"crt-screen"},n.map(function(r,t){return m.createElement(lr,{line:r,key:t},r.words.map(function(a,i){return m.createElement(vr,{word:a,key:i},a.characters)}))}))}),hr=`@-webkit-keyframes overlay-module_blink-character__Ye2qL {
  50% {
    color: #d0fc7e;
    background-color: transparent;
  }
}
@keyframes overlay-module_blink-character__Ye2qL {
  50% {
    color: #d0fc7e;
    background-color: transparent;
  }
}
@-webkit-keyframes overlay-module_scanner__jkhjA {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@keyframes overlay-module_scanner__jkhjA {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes overlay-module_pulse-text__KyZ3A {
  50% {
    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;
    color: #c6fc7e;
  }
}
@keyframes overlay-module_pulse-text__KyZ3A {
  50% {
    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;
    color: #c6fc7e;
  }
}
@-webkit-keyframes overlay-module_shiver-screen__sjqEZ {
  0% {
    transform: skewX(0deg);
  }
  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }
  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }
  16% {
    transform: skewX(0.2deg);
  }
  50% {
    transform: skewX(0.2deg);
  }
}
@keyframes overlay-module_shiver-screen__sjqEZ {
  0% {
    transform: skewX(0deg);
  }
  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }
  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }
  16% {
    transform: skewX(0.2deg);
  }
  50% {
    transform: skewX(0.2deg);
  }
}
.overlay-module_overlay__zbWt1 {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.overlay-module_scanner__jkhjA {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  height: 1.7142857143rem;
  opacity: 0.05;
  background: linear-gradient(180deg, transparent 0, #fffcfc 85%, #d0fc7e 0, transparent);
  -webkit-animation: overlay-module_scanner__jkhjA 8s linear infinite forwards;
          animation: overlay-module_scanner__jkhjA 8s linear infinite forwards;
}

.overlay-module_pixels__m5X6w {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.21) 0), linear-gradient(90deg, rgba(255, 0, 0, 0.055), rgba(0, 255, 0, 0.03), rgba(0, 0, 255, 0.055));
  background-position-y: 0.0714285714rem;
  background-size: 100% 0.2142857143rem, 0.2857142857rem 100%;
}`,fe={overlay:"overlay-module_overlay__zbWt1",scanner:"overlay-module_scanner__jkhjA",pixels:"overlay-module_pixels__m5X6w","blink-character":"overlay-module_blink-character__Ye2qL","pulse-text":"overlay-module_pulse-text__KyZ3A","shiver-screen":"overlay-module_shiver-screen__sjqEZ"};V(hr);var _r=function(n){var r=n.scanner,t=n.pixels;return m.createElement("div",{className:[fe.overlay,"crt-overlay"].join(" ")},r&&m.createElement("div",{className:[fe.scanner,"crt-scanner"].join(" ")}),t&&m.createElement("div",{className:[fe.pixels,"crt-pixels"].join(" ")}))},wr=`@-webkit-keyframes text-effects-module_blink-character__CrwdV {
  50% {
    color: #d0fc7e;
    background-color: transparent;
  }
}
@keyframes text-effects-module_blink-character__CrwdV {
  50% {
    color: #d0fc7e;
    background-color: transparent;
  }
}
@-webkit-keyframes text-effects-module_scanner__EXIFB {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@keyframes text-effects-module_scanner__EXIFB {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes text-effects-module_pulse-text__AVts8 {
  50% {
    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;
    color: #c6fc7e;
  }
}
@keyframes text-effects-module_pulse-text__AVts8 {
  50% {
    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;
    color: #c6fc7e;
  }
}
@-webkit-keyframes text-effects-module_shiver-screen__ysQ0c {
  0% {
    transform: skewX(0deg);
  }
  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }
  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }
  16% {
    transform: skewX(0.2deg);
  }
  50% {
    transform: skewX(0.2deg);
  }
}
@keyframes text-effects-module_shiver-screen__ysQ0c {
  0% {
    transform: skewX(0deg);
  }
  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }
  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }
  16% {
    transform: skewX(0.2deg);
  }
  50% {
    transform: skewX(0.2deg);
  }
}
.text-effects-module_textEffects__OWNjV {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-animation: text-effects-module_pulse-text__AVts8 5s linear infinite;
          animation: text-effects-module_pulse-text__AVts8 5s linear infinite;
}`,gr={textEffects:"text-effects-module_textEffects__OWNjV","pulse-text":"text-effects-module_pulse-text__AVts8","blink-character":"text-effects-module_blink-character__CrwdV",scanner:"text-effects-module_scanner__EXIFB","shiver-screen":"text-effects-module_shiver-screen__ysQ0c"};V(wr);var kr=function(n){var r=n.enabled,t=n.children;return m.createElement(m.Fragment,null,r?m.createElement("div",{className:[gr.textEffects,"crt-text-effects"].join(" ")},t):t)},yr=`@-webkit-keyframes screen-effects-module_blink-character__CftBz {
  50% {
    color: #d0fc7e;
    background-color: transparent;
  }
}
@keyframes screen-effects-module_blink-character__CftBz {
  50% {
    color: #d0fc7e;
    background-color: transparent;
  }
}
@-webkit-keyframes screen-effects-module_scanner__N91BH {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@keyframes screen-effects-module_scanner__N91BH {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes screen-effects-module_pulse-text__awrsE {
  50% {
    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;
    color: #c6fc7e;
  }
}
@keyframes screen-effects-module_pulse-text__awrsE {
  50% {
    text-shadow: 0 0 1.1428571429rem white, 0 0 1.5714285714rem white;
    color: #c6fc7e;
  }
}
@-webkit-keyframes screen-effects-module_shiver-screen__xieUK {
  0% {
    transform: skewX(0deg);
  }
  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }
  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }
  16% {
    transform: skewX(0.2deg);
  }
  50% {
    transform: skewX(0.2deg);
  }
}
@keyframes screen-effects-module_shiver-screen__xieUK {
  0% {
    transform: skewX(0deg);
  }
  4% {
    transform: skewX(0.7deg) scale(1.0001);
  }
  8% {
    transform: skewX(0.2deg) skewY(-0.1deg);
  }
  16% {
    transform: skewX(0.2deg);
  }
  50% {
    transform: skewX(0.2deg);
  }
}
.screen-effects-module_screenEffects__bNTzl {
  width: 100%;
  height: 100%;
  -webkit-animation: screen-effects-module_shiver-screen__xieUK 10s linear infinite;
          animation: screen-effects-module_shiver-screen__xieUK 10s linear infinite;
}`,br={screenEffects:"screen-effects-module_screenEffects__bNTzl","shiver-screen":"screen-effects-module_shiver-screen__xieUK","blink-character":"screen-effects-module_blink-character__CftBz",scanner:"screen-effects-module_scanner__N91BH","pulse-text":"screen-effects-module_pulse-text__awrsE"};V(yr);var Lr=function(n){var r=n.enabled,t=n.children;return m.createElement(m.Fragment,null,r?m.createElement("div",{className:[br.screenEffects,"crt-screen-effects"].join(" ")},t):t)},xr=_.memo(function(e){var n=e.cursorPosition,r=e.renderValue;return m.createElement(m.Fragment,null,r.map(function(t,a){return m.createElement(D,{selected:n===a,key:a},t)}))}),Pr=`.command-line-module_commandLine__lnMf6 {
  padding: 1.4285714286rem 1.4285714286rem 1.4285714286rem 1.4285714286rem;
}

.command-line-module_inputWrap__OpY8r {
  display: inline-block;
}

.command-line-module_input__ZPwEm {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.command-line-module_inputString__J1jZF {
  display: inline-block;
  overflow: visible;
  white-space: normal;
  word-break: break-all;
}`,te={commandLine:"command-line-module_commandLine__lnMf6",inputWrap:"command-line-module_inputWrap__OpY8r",input:"command-line-module_input__ZPwEm",inputString:"command-line-module_inputString__J1jZF"};V(Pr);var Er=m.forwardRef(function(e,n){var r=e.state,t=r.cursorPosition,a=r.renderValue,i=r.inputValue,s=e.handleKeyboardDown,c=e.handleInputChange,d=e.prompt,o=e.cursorSymbol,u=function(p){var k=p.currentTarget.value;c(k)},f=function(p){s(p)},l=t===a.length;return m.createElement("div",{className:[te.commandLine,"crt-command-line"].join(" ")},m.createElement("span",{className:"crt-command-line__prompt"},d),m.createElement("div",{className:[te.inputWrap,"crt-command-line__input-wrapper"].join(" ")},m.createElement("input",{className:[te.input,"crt-command-line__input"].join(" "),id:"crt-command-line-input",ref:n,value:i,onInput:u,onKeyDown:f,type:"text"}),m.createElement("div",{className:[te.inputString,"crt-command-line__input-string"].join(" ")},m.createElement(xr,{renderValue:a,cursorPosition:t}),l&&m.createElement(D,{className:"crt-cursor-symbol",selected:!0},o))))}),Cr=`.terminal-module_terminal__4qfYI {
  font-family: "Courier New", courier, monospace;
  font-size: 1rem;
  line-height: 1.5;
  text-shadow: 0 0 1.1428571429rem #d0fc7e, 0 0 1.7142857143rem #d0fc7e;
  color: #d0fc7e;
  position: relative;
  margin: 0;
  padding: 1.1428571429rem 0.5714285714rem;
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #354228 0, #0f140a 100%);
  border: 1.1428571429rem solid #111010;
  border-radius: 3.4285714286rem;
  box-shadow: 0 0 2.8571428571rem #252925, inset 0 0 2rem 1.4285714286rem #000;
  -webkit-font-smoothing: antialiased;
}
.terminal-module_terminal__4qfYI ::-moz-selection {
  color: #111010;
  background: #d0fc7e;
  -moz-appearance: none;
       appearance: none;
}
.terminal-module_terminal__4qfYI ::selection {
  color: #111010;
  background: #d0fc7e;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.terminal-module_terminal__4qfYI * {
  box-sizing: border-box;
}

.terminal-module_overflowContainer__p2duW {
  position: relative;
  overflow-y: auto;
  width: 100%;
  max-height: 100%;
  border-radius: 1.2857142857rem;
}
.terminal-module_overflowContainer__p2duW::-webkit-scrollbar {
  width: 0.3571428571rem;
  height: 0.3571428571rem;
}
.terminal-module_overflowContainer__p2duW::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
.terminal-module_overflowContainer__p2duW::-webkit-scrollbar-thumb {
  background: #d0fc7e;
  border: 0 none #fffcfc;
  border-radius: 0.2857142857rem;
}`,Ne={terminal:"terminal-module_terminal__4qfYI",overflowContainer:"terminal-module_overflowContainer__p2duW"};V(Cr);var Ar=function(n){var r=n.onCommand,t=n.queue,a=n.banner,i=n.prompt,s=i===void 0?"> ":i,c=n.cursorSymbol,d=c===void 0?" ":c,o=n.maxHistoryCommands,u=o===void 0?10:o,f=n.loader,l=f===void 0?{}:f,p=l.slides,k=p===void 0?[".","..","..."]:p,h=l.loaderSpeed,b=h===void 0?1e3:h,w=n.printer,x=w===void 0?{}:w,S=x.printerSpeed,N=S===void 0?20:S,L=x.charactersPerTick,P=L===void 0?5:L,O=n.effects,W=O===void 0?{}:O,F=W.scanner,X=F===void 0?!0:F,H=W.pixels,$=H===void 0?!0:H,Y=W.screenEffects,ae=Y===void 0?!0:Y,j=W.textEffects,ie=j===void 0?!0:j,K=n.focusOnMount,Q=K===void 0?!0:K,q=nr(),oe=q.state.terminalRef,G=q.handlers.scrollDown,Z=$n({printerConfig:{printerSpeed:N,charactersPerTick:P,afterPrintCallback:G}}),J=Z.state,se=Z.handlers,z=Nn(),ee=Tn(),ce=ee.state.inputElementRef,ne=ee.handlers,ue=In({maxHistoryCommands:u}),le=sr({slides:k,loaderSpeed:b,onSetOuterState:z.handlers.setInput}),B=Jn({input:{handlers:ne},terminalApp:q,commandHistory:ue,commandLine:z,commandScreen:{handlers:se},loaderComponent:le,interface:{banner:a,prompt:s,onCommand:r,queue:t},focusOnMount:Q}).handlers,de=B.handleKeyboardDown,y=B.handleInputChange;return ar({queue:t,controller:B}),m.createElement("label",{className:[Ne.terminal,"crt-terminal"].join(" "),htmlFor:"crt-command-line-input"},m.createElement(_r,{scanner:X,pixels:$}),m.createElement(Lr,{enabled:ae},m.createElement("div",{ref:oe,className:[Ne.overflowContainer,"crt-terminal__overflow-container"].join(" ")},m.createElement(kr,{enabled:ie},m.createElement("div",{className:"crt-terminal__screen"},m.createElement(pr,{state:J})),m.createElement("div",{className:"crt-terminal__command-line"},m.createElement(Er,{ref:ce,prompt:s,cursorSymbol:d,state:z.state,handleKeyboardDown:de,handleInputChange:y}))))))};const Sr="Welcome to Vault-Tec's Google Hacking Termninal";function Nr(){const e=Gn(),{print:n}=e.handlers,r=t=>{n([Le({words:[be({characters:"You entered command: "}),je({characters:t,prompt:">"})]})])};return R.jsx("div",{style:{width:"100%",height:"100vh"},children:R.jsx(Ar,{printer:{printerSpeed:50,charactersPerTick:1},maxHistoryCommands:5,pixels:!1,queue:e,banner:[Le({words:[be({characters:Sr})]})],onCommand:r})})}const Wr=()=>{const e=qe(),n=window.location.pathname;return n.includes("settings")||n.includes("connect"),R.jsxs("div",{className:"container",children:[R.jsx(Me,{class:"watch-button","aria-label":"settings",onClick:()=>e("/connection"),children:R.jsx(Te,{sx:{color:"#5A7346",width:"12px",height:"12px"}})}),R.jsx("div",{className:"screen crt-effect",children:R.jsx("header",{className:"settings-container",style:{height:"100%",padding:"0px",overflow:"hidden"},children:R.jsx(Nr,{})})})]})};export{Wr as default};
