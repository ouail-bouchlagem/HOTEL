(window.webpackJsonp=window.webpackJsonp||[]).push([[124,429],{2587:function(e,t,o){"use strict";o.r(t);var r=o(23),n=o(532);const l=()=>({rssAtomToken:null});var h={namespaced:!0,state:l,actions:{async loadRssAtomToken(e){let{commit:t}=e;t("setRssAtomToken",(await this.$http({handleApiErrors:!1,requestAlias:"rss-token"}).url("/ab/feed/rss-token").get().json().catch((e=>(this.$logger.error("loadRssAtomToken failed. Error: ".concat(e)),{data:null})))).data)}},mutations:{setRssAtomToken(e,t){e.rssAtomToken=t}}},c={components:{DropdownSecondary:n.a},computed:{...Object(r.e)(["context","user","orgs"]),...Object(r.e)("topics",["currentTopic"]),...Object(r.e)("feedActions",["rssAtomToken"]),...Object(r.e)({isLocationRequirementActive:e=>{var t;return null===(t=e.domesticMarket.i18NSettings.settingsFlags)||void 0===t?void 0:t.showJobSearch}}),feedActions(){const e=[],t=!this.currentTopic||this.currentTopic.match(/^\d+$/),o="domestic"===this.currentTopic;return t&&e.push({key:"settings",groupText:this.$t("fwh_feeds_Settings"),groupItems:[{itemKey:"saved-searches",text:this.$t("fwh_feeds_EditSavedSearches"),onSelect:this.openEditSavedSearchModal}]}),(t||o)&&e.push({key:"feed-links",groupText:t?this.$t("fwh_feeds_FeedLinks"):null,groupItems:[{itemKey:"rss",text:this.$t("fwh_feeds_Rss"),onSelect:()=>this.openRssAtomFeed("rss")},{itemKey:"atom",text:this.$t("fwh_feeds_Atom"),onSelect:()=>this.openRssAtomFeed("atom")}]}),e}},beforeCreate(){this.$store.hasModule("feedActions")||this.$store.registerModule("feedActions",h)},mounted(){this.loadRssAtomToken()},methods:{...Object(r.b)("events",["logRssAtomClick"]),...Object(r.b)("feedActions",["loadRssAtomToken"]),buildRssAtomLink(e){const t=this.user.id,o=this.orgs.current.id,r=this.rssAtomToken;let n="/ab/feed/topics/".concat(e,"?securityToken=").concat(r);return n+="&userUid=".concat(t),n+="&orgUid=".concat(o),this.isLocationRequirementActive&&(n+="&sort=local_jobs_on_top"),this.currentTopic&&(n+="&topic=".concat(this.currentTopic)),n},openRssAtomFeed(e){window.open(this.buildRssAtomLink(e),"_blank"),this.logRssAtomClick({topic:this.currentTopic,feedType:e})},openEditSavedSearchModal(){this.$openModal({title:this.$t("fwh_feeds_EditSavedSearches"),name:"index-topic-saved-searches",params:this.$route.params})}}},d=o(2),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return e.feedActions.length?t("DropdownSecondary",{attrs:{align:"end","data-test":"feed-actions",groups:e.feedActions,"group-key":"key","group-items-key":"groupItems","item-key":"itemKey","item-text":"text","group-text":"groupText",size:"sm"}}):e._e()}),[],!1,null,null,null);t.default=component.exports},321:function(e,t,o){"use strict";var r=o(325),n=o(354),l={name:"UpTransitionIntro",injectStyles:[o.n(n).a],components:{UpTransition:r.a}},h=o(2),component=Object(h.a)(l,(function(){var e=this;return(0,e._self._c)("up-transition",e._g(e._b({attrs:{name:"intro"}},"up-transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},325:function(e,t,o){"use strict";var r=o(349),n={injectStyles:[o.n(r).a],name:"UpTransition",props:{name:{type:String,required:!0}},computed:{transitionName(){return"up-transition-".concat(this.name)}}},l=o(2),component=Object(l.a)(n,(function(){var e=this;return(0,e._self._c)("transition",e._g(e._b({attrs:{name:e.transitionName}},"transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},339:function(e,t,o){"use strict";var r=o(382),n=o.n(r),l=o(93),h=o(96),c=o(321),d={en:o(352),is:o(353)};function m(element,e,t){element&&e&&t&&element.addEventListener(e,t,!1)}function f(element,e,t){element&&e&&element.removeEventListener(e,t,!1)}let y=1;var v={injectStyles:[n.a],name:"UpCPopper",i18n:{messages:d},components:{UpCIconV2:l.default,UpTransitionIntro:c.a},props:{tagName:{type:String,default:"span"},customClass:{type:String,default:""},target:{type:String,default:null},trigger:{type:String,default:"hover",validator:e=>["none","click","hover","focus","blur"].indexOf(e)>-1},autoClose:{type:Boolean,default:!0},delayOnMouseOver:{type:Number,default:10},delayOnMouseOut:{type:Number,default:200},disabled:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},visibleArrow:{type:Boolean,default:!0},closeButton:{type:Boolean,default:!1},size:{type:String,default:"md",validator:e=>["sm","md","lg"].indexOf(e)>-1},placement:{type:String,default:"top",validator:e=>["top","bottom","left","right"].indexOf(e)>-1},options:{type:Object,default:()=>({})}},data:()=>({closeIcon:h.default,popperJSLoaded:!1,referenceElm:null,popperJS:null,showPopper:!1,currentPlacement:"",popperOptions:{},popperID:"popper_".concat(y++),focusable:[],isClosing:!1}),computed:{isShown(){return!this.disabled&&this.showPopper&&this.popperJSLoaded},containerClasses(){return{popper:!0,[this.$options.containerClass]:!!this.$options.containerClass,[this.customClass]:!0}},classes:function(){return{["size-".concat(this.size)]:!0}}},watch:{showPopper(e){e?(this.$emit("open",this),this.popperJS&&this.popperJS.enableEventListeners(),this.updatePopper(),this.focusable=[...this.$refs.popper.querySelectorAll("a[href], area[href], input:not(:disabled), button:not(:disabled),\n            select:not(:disabled), textarea:not(:disabled), audio[controls],\n            video[controls], iframe, object, embed, [tabindex], [contenteditable]")].filter((e=>e.matches("".concat(e.tagName,':not([tabindex^="-"])')))),this.focusable.length&&(this.focusable[0].addEventListener("keydown",this.keydownFirst),this.focusable[this.focusable.length-1].addEventListener("keydown",this.keydownLast))):(this.popperJS&&this.popperJS.disableEventListeners(),this.focusable=[],this.$emit("close",this))},disabled(e){e&&(this.showPopper=!1)}},mounted(){this.appendedToBody=!1;const e=this.options.placement||this.placement,t={...this.popperOptions.modifiers||{},...this.options.modifiers||{}};this.popperOptions={...this.popperOptions,...this.options,modifiers:t,placement:e},this.referenceElm=this.target?document.querySelector(this.target):this.$slots.reference[0].elm,this.popper=this.$refs.popperLayout,this.referenceElm.classList.add("up-popper-trigger");switch(!["INPUT","BUTTON","SELECT","TEXTAREA"].includes(this.referenceElm.tagName)&&"none"!==this.trigger&&(this.referenceElm.tabIndex=0,this.referenceElm.getAttribute("role")||this.referenceElm.setAttribute("role","button")),this.referenceElm.getAttribute("aria-describedby")||this.referenceElm.setAttribute("aria-describedby",this.popperID),this.trigger){case"click":m(this.referenceElm,"click",this.toggle),m(document,"click",this.handleDocumentClick);break;case"hover":m(this.referenceElm,"mouseover",this.onMouseOver),m(this.referenceElm,"mouseout",this.onMouseOut),m(this.popper,"mouseover",this.onMouseOver),m(this.popper,"mouseout",this.onMouseOut),m(this.referenceElm,"focus",this.onFocus),m(this.referenceElm,"blur",this.onBlur);break;case"focus":m(this.referenceElm,"focus",this.onFocus),m(this.referenceElm,"blur",this.onBlur);break;case"blur":m(this.referenceElm,"blur",this.open),m(this.referenceElm,"focus",this.close)}"none"!==this.trigger&&m(this.referenceElm,"keydown",this.handleKeydown)},destroyed(){this.destroyPopper()},methods:{toggle(){clearTimeout(this.timer),this.showPopper=!this.showPopper},open(){this.disabled||(clearTimeout(this.timer),this.showPopper=!0)},close(e){clearTimeout(this.timer),e&&setTimeout((()=>{this.isClosing=!0,this.referenceElm.focus()}),0),this.showPopper=!1},doDestroy(){this.popperJS&&(this.popperJS.destroy(),this.popperJS=null),this.appendedToBody&&(this.appendedToBody=!1,document.body.removeChild(this.popper.parentElement))},async createPopper(){const{default:e}=await o.e(1361).then(o.bind(null,2549));this.popperJSLoaded=!0,this.$nextTick((()=>{this.appendToBody&&!this.appendedToBody&&(this.appendedToBody=!0,document.body.appendChild(this.popper.parentElement)),this.popperJS&&this.popperJS.destroy&&this.popperJS.destroy(),this.popperOptions.onCreate=()=>{this.$emit("created",this),this.$nextTick(this.updatePopper)},this.popperJS=new e(this.referenceElm,this.popper,this.popperOptions)}))},destroyPopper(){clearTimeout(this.timer),f(this.referenceElm,"click",this.toggle),f(this.referenceElm,"focus",this.onFocus),f(this.referenceElm,"focus",this.close),f(this.referenceElm,"blur",this.open),f(this.referenceElm,"blur",this.onBlur),f(this.referenceElm,"mouseout",this.onMouseOut),f(this.referenceElm,"mouseover",this.onMouseOver),f(this.popper,"mouseout",this.onMouseOut),f(this.popper,"mouseover",this.onMouseOver),f(document,"click",this.handleDocumentClick),f(this.referenceElm,"keydown",this.handleKeydown),this.showPopper=!1,this.doDestroy()},updatePopper(){this.popperJS?this.popperJS.scheduleUpdate():this.createPopper()},onMouseOver(){this.isClosing||(clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopper=!0}),this.delayOnMouseOver+this.delayOnMouseOut))},onMouseOut(){clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopper=!1}),this.delayOnMouseOut)},handleDocumentClick(e){(this.disabled||this.autoClose)&&this.$el&&this.referenceElm&&!this.elementContains(this.$el,e.target)&&!this.elementContains(this.referenceElm,e.target)&&this.popper&&!this.elementContains(this.popper,e.target)&&this.close()},handleKeydown(e){9!==e.keyCode||e.shiftKey?27===e.keyCode?this.close(!0):32!==e.keyCode&&13!==e.keyCode||"click"===this.trigger&&(e.preventDefault(),this.toggle()):this.focusable&&this.focusable.length&&(e.preventDefault(),this.focusable[0].focus())},keydownFirst(e){9===e.keyCode&&e.shiftKey&&(e.preventDefault(),this.referenceElm.focus())},elementContains:(e,t)=>!(!e||"function"!=typeof e.contains)&&e.contains(t),onFocus(){this.isClosing?this.isClosing=!1:this.open()},onBlur(){setTimeout((()=>{const e=document.activeElement===document.body?null:document.activeElement;!this.elementContains(this.$refs.popper,e)&&this.showPopper&&this.close()}),0)},keydownLast(e){9!==e.keyCode||e.shiftKey||("hover"!==this.trigger&&"focus"!==this.trigger||this.close(),this.appendToBody&&("hover"!==this.trigger&&"focus"!==this.trigger||(this.isClosing=!0),this.referenceElm.focus()))}}},k=o(2),component=Object(k.a)(v,(function(){var e=this,t=e._self._c;return t(e.tagName,{tag:"component"},[e._t("reference"),e._v(" "),t("up-transition-intro",{on:{"after-leave":e.doDestroy}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}],ref:"popper",class:[e.containerClasses,{"up-popover-appended-to-body":e.appendToBody}],attrs:{id:e.popperID},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.close.apply(null,arguments)}}},[t("div",{ref:"popperLayout",class:e.classes},[t("div",{staticClass:"popper-wrapper"},[t("div",{staticClass:"popper-inner"},[e.closeButton&&!e.disabled?t("button",{staticClass:"up-btn-reset up-popper-close",attrs:{type:"button","data-cy":"popper-close-btn","data-ev-unique_element_id":"t-vc_CloseTheTooltip"},on:{click:function(t){return e.close(!0)}}},[t("span",{staticClass:"sr-only"},[e._v(e._s(e.$t("vc_CloseTheTooltip")))]),e._v(" "),t("up-c-icon-v2",{attrs:{icon:e.closeIcon}})],1):e._e(),e._v(" "),e.disabled?e._e():t("div",{staticClass:"popper-content"},[e._t("default")],2),e._v(" "),e.visibleArrow?t("div",{staticClass:"arrow",attrs:{"x-arrow":""}}):e._e()])])])])])],2)}),[],!1,null,null,null);t.a=component.exports},352:function(e){e.exports=JSON.parse('{"vc_CloseTheTooltip":"Close the tooltip"}')},353:function(e){e.exports=JSON.parse("{}")},371:function(e,t,o){"use strict";function r(element,e,t){function o(e){const path=e.composedPath&&e.composedPath()||e.path;return Array.isArray(path)&&path.indexOf(element)<0?t(e):null}return e.forEach((e=>{document.body.addEventListener(e,o)})),()=>{e.forEach((e=>{document.body.removeEventListener(e,o)}))}}function n(element,e){return r(element,["click"],e)}o.d(t,"a",(function(){return n}))},379:function(e,t,o){"use strict";o.r(t);var r={},n=o(2),component=Object(n.a)(r,(function(){var e=this._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 14 14",role:"img"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3.52 6.75c0 .966-.789 1.75-1.76 1.75A1.755 1.755 0 010 6.75C0 5.784.788 5 1.76 5c.971 0 1.76.784 1.76 1.75m10.48 0c0 .966-.788 1.75-1.76 1.75a1.755 1.755 0 01-1.759-1.75c0-.966.788-1.75 1.759-1.75.972 0 1.76.784 1.76 1.75m-5.24 0c0 .966-.788 1.75-1.76 1.75a1.755 1.755 0 01-1.76-1.75C5.24 5.784 6.03 5 7 5c.972 0 1.76.784 1.76 1.75"}})])}),[],!1,null,null,null);t.default=component.exports},401:function(e,t,o){"use strict";o.d(t,"b",(function(){return h})),o.d(t,"a",(function(){return c}));var r=o(102),n=o.n(r);function l(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&!t?n()(e):e}function h(data){return data.items&&data.items.length&&data.items.forEach((e=>{e[data.itemText]=l(e[data.itemText],e.isSafe),data.itemSublabel&&void 0!==e[data.itemSublabel]&&(e[data.itemSublabel]=l(e[data.itemSublabel],e.isSafe)),e.isSafe||(e.isSafe=!0)})),data.groups&&data.groups.length&&data.groups.forEach((e=>{e[data.groupItemsKey]&&e[data.groupItemsKey].length&&h({itemText:data.itemText,itemSublabel:data.itemSublabel,items:e[data.groupItemsKey]}),e[data.groupText]=l(e[data.groupText],e.isSafe),e.isSafe||(e.isSafe=!0)})),data}function c(e,t,o,r,n){e[t]=o,void 0!==e[r]&&(e[r]=n),delete e.isSafe}},479:function(e){e.exports=JSON.parse('{"vc_MoreOptions_1":"More options"}')},480:function(e){e.exports=JSON.parse("{}")},532:function(e,t,o){"use strict";var r=o(103),n=o(1014),l=o.n(n),h=o(42),c=o(371),d=o(9),m=o(94),f=o.n(m),y=o(93),v=o(379),k=o(339),I=o(33),S=o(401);function w(e){return e.map((e=>{const t={...e};return t._origin=e,t}))}var C={en:o(479),is:o(480)},E={injectStyles:[l.a,f.a],name:"UpCDropdownSecondary",components:{UpCResizeObserver:r.default,upCDropdownMenu:()=>Promise.all([o.e(2),o.e(15),o.e(24),o.e(44),o.e(1196)]).then(o.bind(null,1619)).then((e=>e.default||e)),UpCIconV2:y.default,UpCPopper:k.a},model:{prop:"selected",event:"change"},i18n:{messages:C},props:{items:{type:Array,default:()=>[]},title:{type:String,default:null},label:{type:String,default(){return this.$t("vc_MoreOptions_1")}},icon:{type:[Object,Function],default:null},align:{type:String,default:"start"},size:{type:String,default:"md"},groups:{type:Array,default:()=>[]},checkableBehavior:{type:String,validator:e=>["single","multiple","none"].includes(e),default:"none"},disabled:{type:Boolean,default:!1},itemLink:{type:String,default:""},itemKey:{type:String,default:"id"},itemText:{type:String,default:"label"},itemSublabel:{type:String,default:""},groupKey:{type:String,default:"id"},groupText:{type:String,default:"label"},groupItemsKey:{type:String,default:"items"},selected:{type:[Array,Object],default:null},menuClass:{type:String,default:""},disableLinkNavigation:{type:Boolean,default:!1}},data:()=>({moreIcon:v.default,isOpen:!1,isNativeApp:Object(h.a)(),openNativeMenu:null,selectedIds:[],id:null,isMobile:!1,offClickOutside:null,menuItems:[],groupItems:[]}),computed:{component(){return this.isMobile?"div":"up-c-popper"}},watch:{items:{immediate:!0,deep:!0,handler(e){Array.isArray(this.items)&&(this.menuItems=w(this.items)),e.length&&function(data){if(Array.isArray(data.items)&&data.items.length){const e=data.items.every((e=>e[data.itemText]&&"string"==typeof e[data.itemText]));data.items.every((e=>e[data.itemKey]&&"string"==typeof e[data.itemKey]))?e?data.itemLink&&"none"!==data.checkableBehavior&&console.error("Dropdown with link should be checkable behavior none"):console.error("Each dropdown-secondary menu item should have ".concat(data.itemText," property and type should be string")):console.error("Each dropdown-secondary menu item should have ".concat(data.itemKey," property and type should be string"))}}({items:this.menuItems,itemKey:this.itemKey,itemText:this.itemText,itemLink:this.itemLink,checkableBehavior:this.checkableBehavior})}},groups:{immediate:!0,deep:!0,handler(e){var t,o;Array.isArray(this.groups)&&(this.groupItems=(t=this.groups,o=this.groupItemsKey,t.map((e=>{const t={...e};return t[o]=w(e[o]),t})))),e.length&&function(data){if(Array.isArray(data.groups)&&data.groups.length)if(data.groups[0][data.groupText]&&data.title)console.error("Can not add group title to the first group when there is dropdown title");else{const e=!data.itemLink||data.groups.every((e=>"none"===e.checkableBehavior)),t=data.groups.every((e=>e[data.groupKey]&&"string"==typeof e[data.groupKey])),o=data.groups.every((e=>!Array.isArray(e[data.groupItems])||e[data.groupItems].every((e=>e[data.itemKey]&&"string"==typeof e[data.itemKey])))),r=data.groups.every((e=>!Array.isArray(e[data.groupItems])||e[data.groupItems].every((e=>e[data.itemText]&&"string"==typeof e[data.itemText]))));t?o?r?e||console.error("Group dropdown with link should be checkable behavior none"):console.error("Each dropdown-secondary menu item should have ".concat(data.itemText," property and type should be string")):console.error("Each dropdown-secondary menu item should have ".concat(data.itemKey," property and type should be string")):console.error("Each group items should have ".concat(data.groupKey," property and type should be string"))}}({groups:this.groupItems,groupText:this.groupText,groupKey:this.groupKey,groupItems:this.groupItemsKey,itemKey:this.itemKey,itemText:this.itemText,itemLink:this.itemLink,title:this.title})}},selected:{immediate:!0,handler(e,t){const o=Array.isArray(e)&&e.length,r=!t&&(e||o);this.setDefaultSelectedValues({shouldNotEmitChange:r})}}},mounted(){this.id=Object(I.a)().toString(),this.$refs.container&&(this.offClickOutside=Object(c.a)(this.$refs.container,this.onClickOutside))},beforeDestroy(){this.offClickOutside&&this.offClickOutside()},methods:{handleResize(e){this.isMobile=!e.widthIndex},async open(){if(this.isOpen)this.close();else if(this.isNativeApp&&null===this.openNativeMenu&&(this.openNativeMenu=await d.a.isNativeFeatureAvailable("menus","secondary")),this.isOpen=!0,this.openNativeMenu){const e={itemKey:this.itemKey,itemText:this.itemText};if(this.menuItems&&!this.groupItems.length?e.items=this.menuItems:this.groupItems&&this.groupItems.length&&(e.groups=this.groupItems,e.groupKey=this.groupKey,e.groupText=this.groupText,e.groupItemsKey=this.groupItemsKey),this.itemSublabel&&(e.itemSublabel=this.itemSublabel),this.menuItems&&!this.groupItems.length)"multiple"===this.checkableBehavior&&(this.selectedIds=this.menuItems.filter((e=>e.isChecked)).map((e=>e[this.itemKey])));else if(this.groupItems&&this.groupItems.length){let e=[];this.groupItems.forEach((t=>{t&&Array.isArray(t[this.groupItemsKey])&&(e=e.concat(t[this.groupItemsKey]))})),this.selectedIds=e.filter((e=>e.isChecked)).map((e=>e[this.itemKey]))}Object(S.b)(e);const t=await d.c.open({type:"bottomSheet",menuData:e,title:this.title,checkableBehavior:this.checkableBehavior});this.syncNativeSelection(t),this.selectedIds=[],this.close()}else this.isMobile||(await this.$refs.popper.createPopper(),await this.$refs.popper.open(),this.$refs.menu&&(await this.$refs.menu.load(),this.$refs.menu.setMenuFocus(40)))},onMouseDown(e){this.isOpen&&e.preventDefault()},syncNativeSelection(e){if(!e||!e.length)return;const t=e.filter((e=>e.isChecked)).map((e=>e[this.itemKey])),o=[];t.forEach((e=>{this.selectedIds.indexOf(e)<0&&o.push(e)})),this.selectedIds.forEach((e=>{if(t.indexOf(e)<0)if(this.menuItems&&!this.groupItems.length)o.push(e);else if(this.groupItems&&this.groupItems.length){let t="none";this.groupItems.every((o=>{let r=null;return Array.isArray(o[this.groupItemsKey])&&(r=o[this.groupItemsKey].find((t=>t[this.itemKey]===e)),r&&(t=o.checkableBehavior)),!r})),"multiple"===t&&o.push(e)}})),o.forEach((e=>{if(this.menuItems&&!this.groupItems.length){const t=this.menuItems.find((t=>t[this.itemKey]===e));t&&(t.isChecked=!t.isChecked,this.onSelect(t))}else this.groupItems&&this.groupItems.length&&this.groupItems.every((t=>{let o=null;return Array.isArray(t[this.groupItemsKey])&&(o=t[this.groupItemsKey].find((t=>t[this.itemKey]===e)),o&&(o.isChecked=!o.isChecked,this.groupSelect({groupId:t[this.groupKey],checkableBehavior:t.checkableBehavior,item:o}))),!o}))}))},onClickOutside(){this.isOpen&&!this.isMobile&&this.closeMenu()},close(){this.isOpen&&(this.closeMenu(),this.$emit("close"))},isSelectedChanged(){let e=[];this.selected&&!Array.isArray(this.selected)?e.push(this.selected[this.itemKey]):Array.isArray(this.selected)&&(e=this.selected.map((e=>e[this.itemKey])));let t=[];if(this.menuItems&&!this.groupItems.length)t=this.menuItems.filter((e=>e.isChecked)).map((e=>e[this.itemKey]));else if(this.groupItems&&this.groupItems.length){let e=[];this.groupItems.forEach((t=>{t&&Array.isArray(t[this.groupItemsKey])&&(e=e.concat(t[this.groupItemsKey]))})),t=e.filter((e=>e.isChecked)).map((e=>e[this.itemKey]))}return!(e.length===t.length&&e.every((e=>t.indexOf(e)>=0)))},setDefaultSelectedValues(e){let{shouldNotEmitChange:t}=e;if(this.isSelectedChanged())if(!this.selected||Array.isArray(this.selected)&&!this.selected.length)this.menuItems&&!this.groupItems.length?"none"!==this.checkableBehavior&&this.menuItems.forEach(((e,t)=>{e.isChecked=!1,this.$set(this.menuItems,t,e)})):this.groupItems&&this.groupItems.length&&this.groupItems.forEach((e=>{"none"!==e.checkableBehavior&&Array.isArray(e[this.groupItemsKey])&&e[this.groupItemsKey].forEach(((t,o)=>{t.isChecked=!1,this.$set(e[this.groupItemsKey],o,t)}))}));else{if(Array.isArray(this.selected)){if(this.menuItems&&!this.groupItems.length)this.selected.forEach((e=>{"none"!==this.checkableBehavior&&this.setSelectedProp(e,this.menuItems,this.checkableBehavior,!0)}));else if(this.groupItems&&this.groupItems.length){const e={};this.selected.forEach((t=>{this.groupItems.forEach((o=>{if(o[this.groupItemsKey].find((option=>option[this.itemKey]===t[this.itemKey]))&&"none"!==o.checkableBehavior){const r=o.checkableBehaviorParentId&&"single"===o.checkableBehavior?o.checkableBehaviorParentId:o[this.groupKey];e[r]||(e[r]=[]),"single"===o.checkableBehavior?e[r][0]=t:e[r].push(t)}}))}));const t=Object.values(e).reduce(((e,t)=>e.concat(t)),[]);this.groupItems.forEach((e=>{"none"!==e.checkableBehavior&&Array.isArray(e[this.groupItemsKey])&&t.forEach((t=>{this.setSelectedProp(t,e[this.groupItemsKey],e.checkableBehavior,!0)}))}))}}else this.menuItems&&!this.groupItems.length?"none"!==this.checkableBehavior&&this.setSelectedProp(this.selected,this.menuItems,this.checkableBehavior,!0):this.groupItems&&this.groupItems.length&&this.groupItems.forEach((e=>{"none"!==e.checkableBehavior&&Array.isArray(e[this.groupItemsKey])&&this.setSelectedProp(this.selected,e[this.groupItemsKey],e.checkableBehavior,!0)}));t||this.emitSelectionEvent()}},setSelectedProp(e,t,o,r){const n=t.find((t=>t[this.itemKey]===e[this.itemKey]));t.forEach(((l,h)=>{l[this.itemKey]===e[this.itemKey]?l.isChecked=!("multiple"===o&&!r)||!l.isChecked:"multiple"!==o&&n&&(l.isChecked=!1),this.$set(t,h,l)}))},onSelect(e,t){if(e){if(this.$emit("select",e._origin),e.onSelect&&("multiple"!==this.checkableBehavior?e.onSelect():e.isChecked||e.onSelect()),e[this.itemLink]&&!this.disableLinkNavigation)return window.location=e[this.itemLink],!1;"none"!==this.checkableBehavior&&this.setSelectedProp(e,this.menuItems,this.checkableBehavior),this.emitSelectionEvent(),t&&!this.isMobile&&this.closeMenu(!0)}},groupSelect(e,t){if(!e||!e.item)return;this.$emit("select",e.item._origin),e.item.onSelect&&("multiple"!==e.checkableBehavior?e.item.onSelect():e.item.isChecked||e.item.onSelect());const o=this.groupItems.find((t=>t[this.groupKey]===e.groupId));if("multiple"===o.checkableBehavior)this.setSelectedProp(e.item,o[this.groupItemsKey],e.checkableBehavior);else if("single"===o.checkableBehavior){let t=o[this.groupItemsKey];this.groupItems.forEach((e=>{(o.checkableBehaviorParentId&&(o.checkableBehaviorParentId===e[this.groupKey]||o.checkableBehaviorParentId===e.checkableBehaviorParentId)||o[this.groupKey]===e.checkableBehaviorParentId)&&(t=t.concat(e[this.groupItemsKey]))})),this.setSelectedProp(e.item,t,e.checkableBehavior)}if(e.item[this.itemLink]&&!this.disableLinkNavigation)return window.location=e.item[this.itemLink],!1;"none"!==e.checkableBehavior&&this.emitSelectionEvent(),t&&!this.isMobile&&this.closeMenu(!0)},focus(){setTimeout((()=>{this.$refs.toggle.focus()}),0)},async closeMenu(e){this.isOpen=!1,this.isMobile||this.openNativeMenu||!this.$refs.popper||(setTimeout((()=>{this.$refs.menu.resetMenuIndex()}),0),this.$refs.popper.close(e))},emitSelectionEvent(){if(this.menuItems&&!this.groupItems.length){const e=this.menuItems.filter((e=>e.isChecked)).map((e=>e._origin));"single"===this.checkableBehavior?this.$emit("change",e[0]):"multiple"===this.checkableBehavior&&this.$emit("change",e)}else if(this.groupItems&&this.groupItems.length){let e=[];this.groupItems.forEach((t=>{t&&Array.isArray(t[this.groupItemsKey])&&(e=e.concat(t[this.groupItemsKey]))}));const t=e.filter((e=>e.isChecked)).map((e=>e._origin));this.$emit("change",t)}}}},T=o(2),component=Object(T.a)(E,(function(){var e=this,t=e._self._c;return t("div",{ref:"container",staticClass:"up-dropdown-secondary",class:{open:e.isOpen}},[t("UpCResizeObserver",{attrs:{widths:[991],"observe-viewport":!0},on:{notify:e.handleResize}}),e._v(" "),t(e.component,{ref:"popper",tag:"component",class:{"align-start":"start"===e.align,"align-end":"end"===e.align,"up-popper-sm":"sm"===e.size},attrs:{trigger:"none",options:{placement:"bottom"}}},[t("button",{ref:"toggle",staticClass:"up-btn up-btn-default up-btn-circle up-dropdown-toggle",class:{"up-btn-sm":"sm"===e.size},attrs:{slot:"reference",id:"dropdown-secondary-label-".concat(e.id),type:"button","aria-expanded":e.isOpen?"true":"false",disabled:e.disabled},on:{click:e.open,mousedown:e.onMouseDown,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.open.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.open.apply(null,arguments))}],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.close.apply(null,arguments)}},slot:"reference"},[t("span",{staticClass:"sr-only"},[e._v(e._s(e.label))]),e._v(" "),t("up-c-icon-v2",{attrs:{icon:e.icon||e.moreIcon}})],1),e._v(" "),e.openNativeMenu||e.isMobile&&!e.isOpen?e._e():t("up-c-dropdown-menu",{ref:"menu",attrs:{"aria-labelledby":"dropdown-secondary-label-".concat(e.id),title:e.title,align:e.align,items:e.menuItems,groups:e.groupItems,"checkable-behavior":e.checkableBehavior,"item-key":e.itemKey,"item-text":e.itemText,"item-link":e.itemLink,"item-sublabel":e.itemSublabel,"group-key":e.groupKey,"group-text":e.groupText,"group-items-key":e.groupItemsKey,"is-fullscreen":e.isMobile,"menu-class":e.menuClass},on:{close:e.close,groupSelect:e.groupSelect,select:e.onSelect},scopedSlots:e._u([e.$slots["menu-decoration"]?{key:"menu-decoration",fn:function(){return[e._t("menu-decoration")]},proxy:!0}:null],null,!0)})],1)],1)}),[],!1,null,null,null);t.a=component.exports}}]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/FindWorkHomeNuxt/FeedActions-QgOut.ddc7cbe1.js.map