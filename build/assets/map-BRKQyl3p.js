import{g as _t,r as Y,a as st,b as Mt,j as N}from"./index-0Jlou12h.js";var A={exports:{}},it={},lt={exports:{}},Ct="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nt=Ct,Ot=Nt;function ut(){}function ct(){}ct.resetWarningCache=ut;var Et=function(){function t(r,o,s,u,d,p){if(p!==Ot){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ct,resetWarningCache:ut};return n.PropTypes=n,n};lt.exports=Et();var dt=lt.exports;function ft(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=ft(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ot(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=ft(t))&&(r&&(r+=" "),r+=e);return r}const Rt=Object.freeze(Object.defineProperty({__proto__:null,clsx:ot,default:ot},Symbol.toStringTag,{value:"Module"})),Yt=_t(Rt);var h={},x={};Object.defineProperty(x,"__esModule",{value:!0});x.dontSetMe=Ft;x.findInArray=Wt;x.int=Ut;x.isFunction=Xt;x.isNum=It;function Wt(t,e){for(let n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function Xt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function It(t){return typeof t=="number"&&!isNaN(t)}function Ut(t){return parseInt(t,10)}function Ft(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var O={};Object.defineProperty(O,"__esModule",{value:!0});O.browserPrefixToKey=ht;O.browserPrefixToStyle=$t;O.default=void 0;O.getPrefix=pt;const k=["Moz","Webkit","O","ms"];function pt(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(t=window.document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!n||e in n)return"";for(let r=0;r<k.length;r++)if(ht(e,k[r])in n)return k[r];return""}function ht(t,e){return e?"".concat(e).concat(At(t)):t}function $t(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t}function At(t){let e="",n=!0;for(let r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):t[r]==="-"?n=!0:e+=t[r];return e}O.default=pt();Object.defineProperty(h,"__esModule",{value:!0});h.addClassName=yt;h.addEvent=Ht;h.addUserSelectStyles=te;h.createCSSTransform=Kt;h.createSVGTransform=Jt;h.getTouch=Qt;h.getTouchIdentifier=Zt;h.getTranslation=q;h.innerHeight=Gt;h.innerWidth=qt;h.matchesSelector=mt;h.matchesSelectorAndParentsTo=Lt;h.offsetXYFromParent=zt;h.outerHeight=kt;h.outerWidth=jt;h.removeClassName=vt;h.removeEvent=Vt;h.removeUserSelectStyles=ee;var b=x,at=Bt(O);function gt(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(gt=function(r){return r?n:e})(t)}function Bt(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=gt(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var u=o?Object.getOwnPropertyDescriptor(t,s):null;u&&(u.get||u.set)?Object.defineProperty(r,s,u):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}let $="";function mt(t,e){return $||($=(0,b.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,b.isFunction)(t[n])})),(0,b.isFunction)(t[$])?t[$](e):!1}function Lt(t,e,n){let r=t;do{if(mt(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function Ht(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function Vt(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function kt(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,b.int)(n.borderTopWidth),e+=(0,b.int)(n.borderBottomWidth),e}function jt(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,b.int)(n.borderLeftWidth),e+=(0,b.int)(n.borderRightWidth),e}function Gt(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,b.int)(n.paddingTop),e-=(0,b.int)(n.paddingBottom),e}function qt(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,b.int)(n.paddingLeft),e-=(0,b.int)(n.paddingRight),e}function zt(t,e,n){const o=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),s=(t.clientX+e.scrollLeft-o.left)/n,u=(t.clientY+e.scrollTop-o.top)/n;return{x:s,y:u}}function Kt(t,e){const n=q(t,e,"px");return{[(0,at.browserPrefixToKey)("transform",at.default)]:n}}function Jt(t,e){return q(t,e,"")}function q(t,e,n){let{x:r,y:o}=t,s="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){const u="".concat(typeof e.x=="string"?e.x:e.x+n),d="".concat(typeof e.y=="string"?e.y:e.y+n);s="translate(".concat(u,", ").concat(d,")")+s}return s}function Qt(t,e){return t.targetTouches&&(0,b.findInArray)(t.targetTouches,n=>e===n.identifier)||t.changedTouches&&(0,b.findInArray)(t.changedTouches,n=>e===n.identifier)}function Zt(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function te(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&yt(t.body,"react-draggable-transparent-selection")}function ee(t){if(t)try{if(t.body&&vt(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function yt(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function vt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var T={};Object.defineProperty(T,"__esModule",{value:!0});T.canDragX=oe;T.canDragY=ae;T.createCoreData=ie;T.createDraggableData=le;T.getBoundPosition=ne;T.getControlPosition=se;T.snapToGrid=re;var D=x,W=h;function ne(t,e,n){if(!t.props.bounds)return[e,n];let{bounds:r}=t.props;r=typeof r=="string"?r:ue(r);const o=z(t);if(typeof r=="string"){const{ownerDocument:s}=o,u=s.defaultView;let d;if(r==="parent"?d=o.parentNode:d=s.querySelector(r),!(d instanceof u.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const p=d,m=u.getComputedStyle(o),P=u.getComputedStyle(p);r={left:-o.offsetLeft+(0,D.int)(P.paddingLeft)+(0,D.int)(m.marginLeft),top:-o.offsetTop+(0,D.int)(P.paddingTop)+(0,D.int)(m.marginTop),right:(0,W.innerWidth)(p)-(0,W.outerWidth)(o)-o.offsetLeft+(0,D.int)(P.paddingRight)-(0,D.int)(m.marginRight),bottom:(0,W.innerHeight)(p)-(0,W.outerHeight)(o)-o.offsetTop+(0,D.int)(P.paddingBottom)-(0,D.int)(m.marginBottom)}}return(0,D.isNum)(r.right)&&(e=Math.min(e,r.right)),(0,D.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,D.isNum)(r.left)&&(e=Math.max(e,r.left)),(0,D.isNum)(r.top)&&(n=Math.max(n,r.top)),[e,n]}function re(t,e,n){const r=Math.round(e/t[0])*t[0],o=Math.round(n/t[1])*t[1];return[r,o]}function oe(t){return t.props.axis==="both"||t.props.axis==="x"}function ae(t){return t.props.axis==="both"||t.props.axis==="y"}function se(t,e,n){const r=typeof e=="number"?(0,W.getTouch)(t,e):null;if(typeof e=="number"&&!r)return null;const o=z(n),s=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,W.offsetXYFromParent)(r||t,s,n.props.scale)}function ie(t,e,n){const r=!(0,D.isNum)(t.lastX),o=z(t);return r?{node:o,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:o,deltaX:e-t.lastX,deltaY:n-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:n}}function le(t,e){const n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function ue(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function z(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var B={},L={};Object.defineProperty(L,"__esModule",{value:!0});L.default=ce;function ce(){}Object.defineProperty(B,"__esModule",{value:!0});B.default=void 0;var j=fe(Y),S=K(dt),de=K(st),y=h,M=T,G=x,I=K(L);function K(t){return t&&t.__esModule?t:{default:t}}function St(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(St=function(r){return r?n:e})(t)}function fe(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=St(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var u=o?Object.getOwnPropertyDescriptor(t,s):null;u&&(u.get||u.set)?Object.defineProperty(r,s,u):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function v(t,e,n){return e=pe(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pe(t){var e=he(t,"string");return typeof e=="symbol"?e:String(e)}function he(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const w={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let C=w.mouse,H=class extends j.Component{constructor(){super(...arguments),v(this,"dragging",!1),v(this,"lastX",NaN),v(this,"lastY",NaN),v(this,"touchIdentifier",null),v(this,"mounted",!1),v(this,"handleDragStart",e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&typeof e.button=="number"&&e.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(e.target instanceof r.defaultView.Node)||this.props.handle&&!(0,y.matchesSelectorAndParentsTo)(e.target,this.props.handle,n)||this.props.cancel&&(0,y.matchesSelectorAndParentsTo)(e.target,this.props.cancel,n))return;e.type==="touchstart"&&e.preventDefault();const o=(0,y.getTouchIdentifier)(e);this.touchIdentifier=o;const s=(0,M.getControlPosition)(e,o,this);if(s==null)return;const{x:u,y:d}=s,p=(0,M.createCoreData)(this,u,d);(0,I.default)("DraggableCore: handleDragStart: %j",p),(0,I.default)("calling",this.props.onStart),!(this.props.onStart(e,p)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,y.addUserSelectStyles)(r),this.dragging=!0,this.lastX=u,this.lastY=d,(0,y.addEvent)(r,C.move,this.handleDrag),(0,y.addEvent)(r,C.stop,this.handleDragStop))}),v(this,"handleDrag",e=>{const n=(0,M.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let d=r-this.lastX,p=o-this.lastY;if([d,p]=(0,M.snapToGrid)(this.props.grid,d,p),!d&&!p)return;r=this.lastX+d,o=this.lastY+p}const s=(0,M.createCoreData)(this,r,o);if((0,I.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(e,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const p=document.createEvent("MouseEvents");p.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(p)}return}this.lastX=r,this.lastY=o}),v(this,"handleDragStop",e=>{if(!this.dragging)return;const n=(0,M.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let p=r-this.lastX||0,m=o-this.lastY||0;[p,m]=(0,M.snapToGrid)(this.props.grid,p,m),r=this.lastX+p,o=this.lastY+m}const s=(0,M.createCoreData)(this,r,o);if(this.props.onStop(e,s)===!1||this.mounted===!1)return!1;const d=this.findDOMNode();d&&this.props.enableUserSelectHack&&(0,y.removeUserSelectStyles)(d.ownerDocument),(0,I.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,d&&((0,I.default)("DraggableCore: Removing handlers"),(0,y.removeEvent)(d.ownerDocument,C.move,this.handleDrag),(0,y.removeEvent)(d.ownerDocument,C.stop,this.handleDragStop))}),v(this,"onMouseDown",e=>(C=w.mouse,this.handleDragStart(e))),v(this,"onMouseUp",e=>(C=w.mouse,this.handleDragStop(e))),v(this,"onTouchStart",e=>(C=w.touch,this.handleDragStart(e))),v(this,"onTouchEnd",e=>(C=w.touch,this.handleDragStop(e)))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,y.addEvent)(e,w.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:n}=e;(0,y.removeEvent)(n,w.mouse.move,this.handleDrag),(0,y.removeEvent)(n,w.touch.move,this.handleDrag),(0,y.removeEvent)(n,w.mouse.stop,this.handleDragStop),(0,y.removeEvent)(n,w.touch.stop,this.handleDragStop),(0,y.removeEvent)(e,w.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,y.removeUserSelectStyles)(n)}}findDOMNode(){var e,n;return(e=this.props)!==null&&e!==void 0&&e.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:de.default.findDOMNode(this)}render(){return j.cloneElement(j.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};B.default=H;v(H,"displayName","DraggableCore");v(H,"propTypes",{allowAnyClick:S.default.bool,children:S.default.node.isRequired,disabled:S.default.bool,enableUserSelectHack:S.default.bool,offsetParent:function(t,e){if(t[e]&&t[e].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:S.default.arrayOf(S.default.number),handle:S.default.string,cancel:S.default.string,nodeRef:S.default.object,onStart:S.default.func,onDrag:S.default.func,onStop:S.default.func,onMouseDown:S.default.func,scale:S.default.number,className:G.dontSetMe,style:G.dontSetMe,transform:G.dontSetMe});v(H,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return p.default}}),t.default=void 0;var e=bt(Y),n=P(dt),r=P(st),o=P(Yt),s=h,u=T,d=x,p=P(B),m=P(L);function P(a){return a&&a.__esModule?a:{default:a}}function J(a){if(typeof WeakMap!="function")return null;var i=new WeakMap,c=new WeakMap;return(J=function(l){return l?c:i})(a)}function bt(a,i){if(a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=J(i);if(c&&c.has(a))return c.get(a);var l={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(f!=="default"&&Object.prototype.hasOwnProperty.call(a,f)){var _=g?Object.getOwnPropertyDescriptor(a,f):null;_&&(_.get||_.set)?Object.defineProperty(l,f,_):l[f]=a[f]}return l.default=a,c&&c.set(a,l),l}function V(){return V=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(a[l]=c[l])}return a},V.apply(this,arguments)}function E(a,i,c){return i=wt(i),i in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,a}function wt(a){var i=Pt(a,"string");return typeof i=="symbol"?i:String(i)}function Pt(a,i){if(typeof a!="object"||a===null)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var l=c.call(a,i||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}class U extends e.Component{static getDerivedStateFromProps(i,c){let{position:l}=i,{prevPropsPosition:g}=c;return l&&(!g||l.x!==g.x||l.y!==g.y)?((0,m.default)("Draggable: getDerivedStateFromProps %j",{position:l,prevPropsPosition:g}),{x:l.x,y:l.y,prevPropsPosition:{...l}}):null}constructor(i){super(i),E(this,"onDragStart",(c,l)=>{if((0,m.default)("Draggable: onDragStart: %j",l),this.props.onStart(c,(0,u.createDraggableData)(this,l))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),E(this,"onDrag",(c,l)=>{if(!this.state.dragging)return!1;(0,m.default)("Draggable: onDrag: %j",l);const g=(0,u.createDraggableData)(this,l),f={x:g.x,y:g.y,slackX:0,slackY:0};if(this.props.bounds){const{x:X,y:R}=f;f.x+=this.state.slackX,f.y+=this.state.slackY;const[F,Q]=(0,u.getBoundPosition)(this,f.x,f.y);f.x=F,f.y=Q,f.slackX=this.state.slackX+(X-f.x),f.slackY=this.state.slackY+(R-f.y),g.x=f.x,g.y=f.y,g.deltaX=f.x-this.state.x,g.deltaY=f.y-this.state.y}if(this.props.onDrag(c,g)===!1)return!1;this.setState(f)}),E(this,"onDragStop",(c,l)=>{if(!this.state.dragging||this.props.onStop(c,(0,u.createDraggableData)(this,l))===!1)return!1;(0,m.default)("Draggable: onDragStop: %j",l);const f={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:X,y:R}=this.props.position;f.x=X,f.y=R}this.setState(f)}),this.state={dragging:!1,dragged:!1,x:i.position?i.position.x:i.defaultPosition.x,y:i.position?i.position.y:i.defaultPosition.y,prevPropsPosition:{...i.position},slackX:0,slackY:0,isElementSVG:!1},i.position&&!(i.onDrag||i.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var i,c;return(i=(c=this.props)===null||c===void 0||(c=c.nodeRef)===null||c===void 0?void 0:c.current)!==null&&i!==void 0?i:r.default.findDOMNode(this)}render(){const{axis:i,bounds:c,children:l,defaultPosition:g,defaultClassName:f,defaultClassNameDragging:_,defaultClassNameDragged:X,position:R,positionOffset:F,scale:Q,...xt}=this.props;let Z={},tt=null;const et=!!!R||this.state.dragging,nt=R||g,rt={x:(0,u.canDragX)(this)&&et?this.state.x:nt.x,y:(0,u.canDragY)(this)&&et?this.state.y:nt.y};this.state.isElementSVG?tt=(0,s.createSVGTransform)(rt,F):Z=(0,s.createCSSTransform)(rt,F);const Tt=(0,o.default)(l.props.className||"",f,{[_]:this.state.dragging,[X]:this.state.dragged});return e.createElement(p.default,V({},xt,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),e.cloneElement(e.Children.only(l),{className:Tt,style:{...l.props.style,...Z},transform:tt}))}}t.default=U,E(U,"displayName","Draggable"),E(U,"propTypes",{...p.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:d.dontSetMe,style:d.dontSetMe,transform:d.dontSetMe}),E(U,"defaultProps",{...p.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(it);const{default:Dt,DraggableCore:ge}=it;A.exports=Dt;A.exports.default=Dt;A.exports.DraggableCore=ge;var me=A.exports;const ye=Mt(me),ve="/assets/commonwealth_map-CRY_0NGc.webp",we=()=>{const[t,e]=Y.useState(1),n=Y.useRef(null),r=Y.useRef(null),[o]=Y.useState({top:Math.floor(Math.random()*250)+20,left:Math.floor(Math.random()*250)+20}),s=u=>{u.preventDefault();const d=Math.max(1,Math.min(5,t+(u.deltaY<0?.1:-.1))),p=document.getElementById("map-container-inner");p.style.transform=`scale(${d})`,console.log(d),e(d)};return N.jsx("section",{className:"core-display",id:"map-section",ref:r,children:N.jsx("div",{className:"menu-container map-container",style:{width:"400px",height:"300px",overflow:"hidden"},children:N.jsx("div",{id:"map-container-inner",style:{width:"400px",height:"300px",position:"relative"},children:N.jsx(ye,{bounds:{left:-300,right:300,top:-200,bottom:200},nodeRef:n,scale:1,children:N.jsxs("div",{ref:n,style:{position:"relative"},children:[N.jsx("img",{src:ve,id:"idf-map",alt:"a map of Ile-de-France french region",onWheel:s,style:{transformOrigin:"top left",overflow:"visible",width:"100%"}}),N.jsx("div",{style:{position:"absolute",width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"red",boxShadow:"0 0 10px 5px rgba(255, 0, 0, 0.5)",zIndex:1,animation:"glow 1.5s ease-in-out infinite alternate",top:`${o.top}px`,left:`${o.left}px`}})]})})})})})};export{we as default};
