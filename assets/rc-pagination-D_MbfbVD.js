import{c as fe,b as K,g as J,e as xt}from"./@babel-gmUhV_pN.js";import{c as B}from"./classnames-Bxm1Ctah.js";import{K as y,B as Ge,A as Ct}from"./rc-util-BttELmaR.js";import{a,r as St}from"./react-CPNw1Jrz.js";var wt={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},Pt={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"},_t=["10","20","50","100"],yt=function(e){var s=e.pageSizeOptions,f=s===void 0?_t:s,n=e.locale,C=e.changeSize,T=e.pageSize,b=e.goButton,p=e.quickGo,R=e.rootPrefixCls,k=e.selectComponentClass,z=e.selectPrefixCls,I=e.disabled,i=e.buildOptionText,A=a.useState(""),w=fe(A,2),S=w[0],j=w[1],P=function(){return!S||Number.isNaN(S)?void 0:Number(S)},pe=typeof i=="function"?i:function(d){return"".concat(d," ").concat(n.items_per_page)},te=function(o){C==null||C(Number(o))},de=function(o){j(o.target.value)},G=function(o){b||S===""||(j(""),!(o.relatedTarget&&(o.relatedTarget.className.indexOf("".concat(R,"-item-link"))>=0||o.relatedTarget.className.indexOf("".concat(R,"-item"))>=0))&&(p==null||p(P())))},h=function(o){S!==""&&(o.keyCode===y.ENTER||o.type==="click")&&(j(""),p==null||p(P()))},ae=function(){return f.some(function(o){return o.toString()===T.toString()})?f:f.concat([T.toString()]).sort(function(o,ne){var V=Number.isNaN(Number(o))?0:Number(o),U=Number.isNaN(Number(ne))?0:Number(ne);return V-U})},g="".concat(R,"-options");if(!C&&!p)return null;var H=null,M=null,q=null;if(C&&k){var N=ae().map(function(d,o){return a.createElement(k.Option,{key:o,value:d.toString()},pe(d))});H=a.createElement(k,{disabled:I,prefixCls:z,showSearch:!1,className:"".concat(g,"-size-changer"),optionLabelProp:"children",popupMatchSelectWidth:!1,value:(T||f[0]).toString(),onChange:te,getPopupContainer:function(o){return o.parentNode},"aria-label":n.page_size,defaultOpen:!1},N)}return p&&(b&&(q=typeof b=="boolean"?a.createElement("button",{type:"button",onClick:h,onKeyUp:h,disabled:I,className:"".concat(g,"-quick-jumper-button")},n.jump_to_confirm):a.createElement("span",{onClick:h,onKeyUp:h},b)),M=a.createElement("div",{className:"".concat(g,"-quick-jumper")},n.jump_to,a.createElement("input",{disabled:I,type:"text",value:S,onChange:de,onKeyUp:h,onBlur:G,"aria-label":n.page}),n.page,q)),a.createElement("li",{className:g},H,M)},ee=function(e){var s,f=e.rootPrefixCls,n=e.page,C=e.active,T=e.className,b=e.showTitle,p=e.onClick,R=e.onKeyPress,k=e.itemRender,z="".concat(f,"-item"),I=B(z,"".concat(z,"-").concat(n),(s={},K(s,"".concat(z,"-active"),C),K(s,"".concat(z,"-disabled"),!n),s),T),i=function(){p(n)},A=function(j){R(j,p,n)},w=k(n,"page",a.createElement("a",{rel:"nofollow"},n));return w?a.createElement("li",{title:b?String(n):null,className:I,onClick:i,onKeyDown:A,tabIndex:0},w):null},Et=function(e,s,f){return f};function He(){}function qe(E){var e=Number(E);return typeof e=="number"&&!Number.isNaN(e)&&isFinite(e)&&Math.floor(e)===e}function $(E,e,s){var f=typeof E>"u"?e:E;return Math.floor((s-1)/f)+1}var jt=function(e){var s,f=e.prefixCls,n=f===void 0?"rc-pagination":f,C=e.selectPrefixCls,T=C===void 0?"rc-select":C,b=e.className,p=e.selectComponentClass,R=e.current,k=e.defaultCurrent,z=k===void 0?1:k,I=e.total,i=I===void 0?0:I,A=e.pageSize,w=e.defaultPageSize,S=w===void 0?10:w,j=e.onChange,P=j===void 0?He:j,pe=e.hideOnSinglePage,te=e.showPrevNextJumpers,de=te===void 0?!0:te,G=e.showQuickJumper,h=e.showLessItems,ae=e.showTitle,g=ae===void 0?!0:ae,H=e.onShowSizeChange,M=H===void 0?He:H,q=e.locale,N=q===void 0?Pt:q,d=e.style,o=e.totalBoundaryShowSizeChanger,ne=o===void 0?50:o,V=e.disabled,U=e.simple,Se=e.showTotal,ge=e.showSizeChanger,De=e.pageSizeOptions,Pe=e.itemRender,D=Pe===void 0?Et:Pe,_e=e.jumpPrevIcon,ye=e.jumpNextIcon,Le=e.prevIcon,Qe=e.nextIcon,We=a.useRef(null),Fe=Ge(10,{value:A,defaultValue:S}),Ee=fe(Fe,2),v=Ee[0],Xe=Ee[1],Ye=Ge(1,{value:R,defaultValue:z,postState:function(l){return Math.max(1,Math.min(l,$(void 0,v,i)))}}),be=fe(Ye,2),r=be[0],ke=be[1],Ze=a.useState(r),ze=fe(Ze,2),L=ze[0],re=ze[1];St.useEffect(function(){re(r)},[r]);var Ie=Math.max(1,r-(h?3:5)),we=Math.min($(void 0,v,i),r+(h?3:5));function le(t,l){var c=t||a.createElement("button",{type:"button","aria-label":l,className:"".concat(n,"-item-link")});return typeof t=="function"&&(c=a.createElement(t,xt({},e))),c}function je(t){var l=t.target.value,c=$(void 0,v,i),O;return l===""?O=l:Number.isNaN(Number(l))?O=L:l>=c?O=c:O=Number(l),O}function et(t){return qe(t)&&t!==r&&qe(i)&&i>0}var tt=i>v?G:!1;function at(t){(t.keyCode===y.UP||t.keyCode===y.DOWN)&&t.preventDefault()}function Oe(t){var l=je(t);switch(l!==L&&re(l),t.keyCode){case y.ENTER:x(l);break;case y.UP:x(l-1);break;case y.DOWN:x(l+1);break}}function nt(t){x(je(t))}function rt(t){var l=$(t,v,i),c=r>l&&l!==0?l:r;Xe(t),re(c),M==null||M(r,t),ke(c),P==null||P(c,t)}function x(t){if(et(t)&&!V){var l=$(void 0,v,i),c=t;return t>l?c=l:t<1&&(c=1),c!==L&&re(c),ke(c),P==null||P(c,v),c}return r}var oe=r>1,ie=r<$(void 0,v,i),lt=ge??i>ne;function Be(){oe&&x(r-1)}function Ke(){ie&&x(r+1)}function Te(){x(Ie)}function Re(){x(we)}function Q(t,l){if(t.key==="Enter"||t.charCode===y.ENTER||t.keyCode===y.ENTER){for(var c=arguments.length,O=new Array(c>2?c-2:0),ve=2;ve<c;ve++)O[ve-2]=arguments[ve];l.apply(void 0,O)}}function ot(t){Q(t,Be)}function it(t){Q(t,Ke)}function ct(t){Q(t,Te)}function ut(t){Q(t,Re)}function st(t){var l=D(t,"prev",le(Le,"prev page"));return a.isValidElement(l)?a.cloneElement(l,{disabled:!oe}):l}function mt(t){var l=D(t,"next",le(Qe,"next page"));return a.isValidElement(l)?a.cloneElement(l,{disabled:!ie}):l}function ce(t){(t.type==="click"||t.keyCode===y.ENTER)&&x(L)}var $e=null,vt=Ct(e,{aria:!0,data:!0}),ft=Se&&a.createElement("li",{className:"".concat(n,"-total-text")},Se(i,[i===0?0:(r-1)*v+1,r*v>i?i:r*v])),Me=null,u=$(void 0,v,i);if(pe&&i<=v)return null;var m=[],W={rootPrefixCls:n,onClick:x,onKeyPress:Q,showTitle:g,itemRender:D,page:-1},pt=r-1>0?r-1:0,dt=r+1<u?r+1:u,ue=G&&G.goButton,F=ue,Ve=null;U&&(ue&&(typeof ue=="boolean"?F=a.createElement("button",{type:"button",onClick:ce,onKeyUp:ce},N.jump_to_confirm):F=a.createElement("span",{onClick:ce,onKeyUp:ce},ue),F=a.createElement("li",{title:g?"".concat(N.jump_to).concat(r,"/").concat(u):null,className:"".concat(n,"-simple-pager")},F)),Ve=a.createElement("li",{title:g?"".concat(r,"/").concat(u):null,className:"".concat(n,"-simple-pager")},a.createElement("input",{type:"text",value:L,disabled:V,onKeyDown:at,onKeyUp:Oe,onChange:Oe,onBlur:nt,size:3}),a.createElement("span",{className:"".concat(n,"-slash")},"/"),u));var _=h?1:2;if(u<=3+_*2){u||m.push(a.createElement(ee,J({},W,{key:"noPager",page:1,className:"".concat(n,"-item-disabled")})));for(var X=1;X<=u;X+=1)m.push(a.createElement(ee,J({},W,{key:X,page:X,active:r===X})))}else{var gt=h?N.prev_3:N.prev_5,ht=h?N.next_3:N.next_5,Ue=D(Ie,"jump-prev",le(_e,"prev page")),Je=D(we,"jump-next",le(ye,"next page"));de&&($e=Ue?a.createElement("li",{title:g?gt:null,key:"prev",onClick:Te,tabIndex:0,onKeyDown:ct,className:B("".concat(n,"-jump-prev"),K({},"".concat(n,"-jump-prev-custom-icon"),!!_e))},Ue):null,Me=Je?a.createElement("li",{title:g?ht:null,key:"next",onClick:Re,tabIndex:0,onKeyDown:ut,className:B("".concat(n,"-jump-next"),K({},"".concat(n,"-jump-next-custom-icon"),!!ye))},Je):null);var he=Math.max(1,r-_),Ne=Math.min(r+_,u);r-1<=_&&(Ne=1+_*2),u-r<=_&&(he=u-_*2);for(var Y=he;Y<=Ne;Y+=1)m.push(a.createElement(ee,J({},W,{key:Y,page:Y,active:r===Y})));if(r-1>=_*2&&r!==3&&(m[0]=a.cloneElement(m[0],{className:B("".concat(n,"-item-after-jump-prev"),m[0].props.className)}),m.unshift($e)),u-r>=_*2&&r!==u-2){var Ae=m[m.length-1];m[m.length-1]=a.cloneElement(Ae,{className:B("".concat(n,"-item-before-jump-next"),Ae.props.className)}),m.push(Me)}he!==1&&m.unshift(a.createElement(ee,J({},W,{key:1,page:1}))),Ne!==u&&m.push(a.createElement(ee,J({},W,{key:u,page:u})))}var se=st(pt);if(se){var xe=!oe||!u;se=a.createElement("li",{title:g?N.prev_page:null,onClick:Be,tabIndex:xe?null:0,onKeyDown:ot,className:B("".concat(n,"-prev"),K({},"".concat(n,"-disabled"),xe)),"aria-disabled":xe},se)}var me=mt(dt);if(me){var Z,Ce;U?(Z=!ie,Ce=oe?0:null):(Z=!ie||!u,Ce=Z?null:0),me=a.createElement("li",{title:g?N.next_page:null,onClick:Ke,tabIndex:Ce,onKeyDown:it,className:B("".concat(n,"-next"),K({},"".concat(n,"-disabled"),Z)),"aria-disabled":Z},me)}var Nt=B(n,b,(s={},K(s,"".concat(n,"-simple"),U),K(s,"".concat(n,"-disabled"),V),s));return a.createElement("ul",J({className:Nt,style:d,ref:We},vt),ft,se,U?Ve:m,me,a.createElement(yt,{locale:N,rootPrefixCls:n,disabled:V,selectComponentClass:p,selectPrefixCls:T,changeSize:lt?rt:null,pageSize:v,pageSizeOptions:De,quickGo:tt?x:null,goButton:F}))};export{jt as P,wt as l};
