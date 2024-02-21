(self["webpackChunkstock_frontend"]=self["webpackChunkstock_frontend"]||[]).push([[715],{9582:function(t,e,s){"use strict";s.d(e,{Z:function(){return l}});var i=s(3434),n=s(401),a=s(8860),r=s(7678),l=(0,r.Z)(n.Z,a.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},4886:function(t,e,s){"use strict";s.d(e,{EB:function(){return o},Qq:function(){return r},ZB:function(){return l}});var i=s(9582),n=s(5352);const a=(0,n.Ji)("v-card__actions"),r=(0,n.Ji)("v-card__subtitle"),l=(0,n.Ji)("v-card__text"),o=(0,n.Ji)("v-card__title");i.Z},9223:function(t,e,s){"use strict";s.d(e,{Z:function(){return n}});var i=s(6669),n=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},3385:function(t,e,s){"use strict";s.d(e,{y:function(){return o}});s(7658);var i=s(6174),n=s(3457),a=s(6669),r=s(7678),l=s(4101);const o=(0,r.Z)(i.Z,n.Z,a.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,l.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),s=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(s);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==s)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const s=this.getValue(t,e);t.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const s=e.find((t=>!t.disabled));if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],s=e.slice(),i=s.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&i>-1&&s.length-1<1||null!=this.max&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(t),this.internalValue=s)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},5808:function(t,e,s){"use strict";s.d(e,{Z:function(){return n}});s(7658);var i=s(7423),n=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},4525:function(t,e,s){"use strict";s.d(e,{Z:function(){return p}});var i=s(6878),n=s(8860),a=s(3037),r=s(6669),l=s(1444),o=s(7069),h=s(5352),u=s(4101),d=s(7678);const c=(0,d.Z)(i.Z,n.Z,r.Z,(0,a.d)("listItemGroup"),(0,l.d)("inputValue"));var p=c.extend().extend({name:"v-list-item",directives:{Ripple:o.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...n.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(n.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,u.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:s}=this.generateRouteLink();s.attrs={...s.attrs,...this.genAttrs()},s[this.to?"nativeOn":"on"]={...s[this.to?"nativeOn":"on"],keydown:t=>{this.disabled||(t.keyCode===h.Do.enter&&this.click(t),this.$emit("keydown",t))}},this.inactive&&(e="div"),this.inactive&&this.to&&(s.on=s.nativeOn,delete s.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,s):s,i)}})},5187:function(t,e,s){"use strict";var i=s(144);e["Z"]=i.ZP.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:s=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=s.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,s)}})},7722:function(t,e,s){"use strict";s.d(e,{km:function(){return A},oZ:function(){return S},V9:function(){return V}});var i=s(5352),n=s(5808),a=s(2240),r=s(4525),l=s(144),o=l.ZP.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:s}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,s)}}),h=s(2500),u=s(8223),d=s(6878),c=s(1444),p=s(4712),v=s(7069),m=s(7394),g=s(7678);const f=(0,g.Z)(h.Z,u.Z,d.Z,(0,p.f)("list"),c.Z);var y=f.extend().extend({name:"v-list-group",directives:{ripple:v.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(a.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(o,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(r.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,i.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(o,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(m.Fx,this.genItems())])}}),b=s(3385),C=(0,g.Z)(b.y,d.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...b.y.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...b.y.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),I=s(5187),x=s(8846),Z=s(2637),_=(0,g.Z)(d.Z,x.Z,Z.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,i.kb)(this.size),minWidth:(0,i.kb)(this.size),width:(0,i.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),k=_,$=k.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...k.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=k.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});const B=(0,i.Ji)("v-list-item__action-text","span"),A=(0,i.Ji)("v-list-item__content","div"),V=(0,i.Ji)("v-list-item__title","div"),S=(0,i.Ji)("v-list-item__subtitle","div");n.Z,r.Z,I.Z},8223:function(t,e,s){"use strict";var i=s(4101),n=s(144);e["Z"]=n.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},6174:function(t,e,s){"use strict";var i=s(144),n=s(5352);e["Z"]=i.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.vZ}}})},2325:function(t,e,s){function i(t){let e=[],s=[],i=[];for(let n=0;n<t.length;n++)e.push(t[n].splice(0,1)[0]),s.push(t[n]),i.push([n,t[n][4],t[n][0]>t[n][1]?1:-1]);return{categoryData:e,values:s,volumes:i}}function n(t,e,s=[],i="headers"){let n=e[i].length,a=t.length;for(let r=0;r<n;r++)e[i].pop();for(let r=0;r<a;r++)s.includes(t[r])&&s.length>0?e[i].push({text:"",align:"center",value:t[r]}):e[i].push({text:t[r],align:"center",value:t[r]})}function a(t,e,s=[],i="headers"){let n=e[i].length,a=t.length;for(let r=0;r<n;r++)e[i].pop();for(let r=0;r<a;r++)s.includes(t[r])&&s.length>0?e[i].push({text:"",align:"center",value:`headers${r}`}):e[i].push({text:t[r],align:"center",value:`headers${r}`})}function r(t,e){let s=[];for(let i of e)s.push(t[i]);return s}function l(t){let e=["stock_id","_time","id","Unnamed: 0"],s=[];for(let i of t)e.includes(i)||s.push(i);return s}function o(t){for(let e in t)(e.includes("_")||"id"===e||"股票名称"===e||"股票代码"===e||"季度"===e||"当前股价"===e||"Unnamed: 0"===e||"中文名称"===e||"当前股价(元)"===e)&&delete t[e]}function h(t,e){for(let s=0;s<t.length;s++){let i=0,n=0;Array.isArray(t)&&t.length&&(n=Object.keys(t[0]).length);while(i<=n){let n=Object.keys(t[s])[i],a=e.indexOf(n),r="headers"+a.toString();t[s][r]=t[s][n],i++}}}s(7658),t.exports={splitData:i,initHeaders:n,ObjToArray:r,cleanMeta:l,initHeaders2:a,reMapData:h,cleanFactor:o}}}]);
//# sourceMappingURL=715.1cdbb70b.js.map