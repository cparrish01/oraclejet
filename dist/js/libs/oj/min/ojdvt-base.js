/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojvalidation","ojs/internal-deps/dvt/DvtToolkit","ojdnd","promise"],function(a,g,c,b,d){function e(a,b){this.sza=b;this.qBa=a;this.fra="/"}a.gk=function(a){this.Init(a)};o_("AttributeGroupHandler",a.gk,a);a.b.ta(a.gk,a.b,"oj.AttributeGroupHandler");a.gk.prototype.Init=function(a){this.bC={};this.qL=0;this.TU={};for(var b in a)this.bX(b,a[b])};a.gk.prototype.yn=function(){return[]};a.b.g("AttributeGroupHandler.prototype.getValueRamp",{yn:a.gk.prototype.yn});
a.gk.prototype.ie=function(a){if(this.TU[a])return this.TU[a];this.bC[a]||(this.Mg||(this.Mg=this.yn().slice()),this.bC[a]=this.Mg[this.qL],this.qL++,this.qL==this.Mg.length&&(this.qL=0));return this.bC[a]};a.b.g("AttributeGroupHandler.prototype.getValue",{ie:a.gk.prototype.ie});a.gk.prototype.Lea=function(){var a=[],b;for(b in this.bC)a.push({category:b,value:this.bC[b]});return a};a.b.g("AttributeGroupHandler.prototype.getCategoryAssignments",{Lea:a.gk.prototype.Lea});a.gk.prototype.bX=function(a,
b){this.TU[a]=b};a.b.g("AttributeGroupHandler.prototype.addMatchRule",{bX:a.gk.prototype.bX});a.tx=function(a){this.Init(a)};o_("ShapeAttributeGroupHandler",a.tx,a);a.b.ta(a.tx,a.gk,"oj.ShapeAttributeGroupHandler");a.tx.cC="square circle diamond plus triangleDown triangleUp human".split(" ");a.tx.prototype.yn=function(){return a.tx.cC};a.b.g("ShapeAttributeGroupHandler.prototype.getValueRamp",{yn:a.tx.prototype.yn});e.prototype.gBa=function(a,b,c,d){for(var e={};a&&-1<b.indexOf(c);){var f=b.substring(0,
b.indexOf(c));d&&void 0===a[f]&&(a[f]={});a=a[f];b=b.substring(b.indexOf(c)+1,b.length)}a&&(e.object=a,e.parameter=b);return e};e.prototype.jba=function(a){void 0===this.uD&&(a=this.gBa(this.qBa,this.sza,this.fra,a),this.uD=a.object,this.fV=a.parameter)};e.prototype.ie=function(){this.jba(!1);return void 0===this.uD?void 0:this.uD[this.fV]};e.prototype.wia=function(a,b){this.jba(!0);if(b||!this.uD[this.fV])this.uD[this.fV]=a};a.pg=function(b){this.cC=[];if(g(document.body).hasClass("oj-hicontrast"))this.cC=
a.pg.a1.slice();else{if(!a.pg.nC){a.pg.nC=[];var c=g(document.createElement("div"));c.attr("style","display:none;");c.attr("id","attrGps");g(document.body).append(c);for(var d=0;d<a.pg.s2.length;d++){var e=g(document.createElement("div"));e.addClass(a.pg.s2[d]);c.append(e);(e=e.css("color"))&&a.pg.nC.push(e)}c.remove()}this.cC=0<a.pg.nC.length?a.pg.nC.slice():a.pg.a1.slice()}this.Init(b)};o_("ColorAttributeGroupHandler",a.pg,a);a.b.ta(a.pg,a.gk,"oj.ColorAttributeGroupHandler");a.pg.a1="#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" ");
a.pg.s2="oj-dvt-category1 oj-dvt-category2 oj-dvt-category3 oj-dvt-category4 oj-dvt-category5 oj-dvt-category6 oj-dvt-category7 oj-dvt-category8 oj-dvt-category9 oj-dvt-category10 oj-dvt-category11 oj-dvt-category12".split(" ");a.pg.nC=null;a.pg.prototype.yn=function(){return this.cC};a.b.g("ColorAttributeGroupHandler.prototype.getValueRamp",{yn:a.pg.prototype.yn});var f={CSS_TEXT_PROPERTIES:function(a){var b={};a&&(a.hasClass("oj-gauge-metric-label")&&a.hasClass(a.parentNode,"oj-ledgauge")?(b["font-size"]=
!0,b.color=!0):a.hasClass(a,"oj-chart-slice-label")?b.color=!0:a.hasClass("oj-treemap-node-header")&&(b["font-weight"]=!0));return f.Xoa(a,b)},CSS_BACKGROUND_PROPERTIES:function(a){return f.Poa(a)},CSS_URL:function(a){return f.rza(a)},s1:"rgb(254, 0, 254)",Bla:"Times",Cla:"1px",u1:"1",t1:"normal",ula:4,WK:{},uFa:function(a,b){return a.css(b)},rza:function(a){return(a=a.css("background-image"))&&-1!==a.indexOf("url(")?a.slice(a.indexOf("url(")+4,a.length-1).replace(/"/g,""):a},Poa:function(a){var b=
{};a.css("border-top-color")&&(b["border-color"]=a.css("border-top-color"));a.css("border-width")&&a.css("border-style")&&"none"!=a.css("border-style")&&(b["border-width"]=a.css("border-width"));a.css("background-color")&&(b["background-color"]=a.css("background-color"));return b},Xoa:function(a,b){var c={},d=a.css("font-family");d&&d!==f.Bla&&(c["font-family"]=d.replace(/"/g,"'"));d=a.css("font-size");!d||-1<d.indexOf("px")&&parseFloat(d)<f.ula||b["font-size"]||(c["font-size"]=d);(d=a.css("font-weight"))&&
d!==f.u1&&!b["font-weight"]&&(c["font-weight"]=d);(d=a.css("color"))&&d!==f.s1&&!b.color&&(c.color=d);(d=a.css("font-style"))&&d!==f.t1&&(c["font-style"]=d);return c},IIa:function(a,b,c,d){var e=g(document.createElement("div"));e.attr("style","display:none;");a.append(e);a="";for(var t=0;t<c.length;t++)a=a+c[t]+" ";e.attr("class",a);g(document.body).append(e);c=g(document.createElement("div"));c.css("font-size",f.Cla);c.css("color",f.s1);c.css("font-weight",f.u1);c.css("font-style",f.t1);e.append(c);
for(var r in d)a=d[r],a instanceof Array||(a=[a]),f.Oza(c,b,r,a);e.remove()},Oza:function(a,b,c,d){f.WK[c]||(f.WK[c]={});for(var s=null,t=0;t<d.length;t++){var r=d[t],n=r.property;if(n){var p=f.WK[c][n];"undefined"==typeof p&&(s||(s=g(document.createElement("div")),s.addClass(c),a.append(s)),p=f.hBa(s,n),f.WK[c][n]=p);if(null!=p){var r=new e(b,r.path),q=f[n];if(null!=q){var u=r.ie();if("CSS_URL"!==n){n="";if(null!=u){var u=f.gua(u),w;for(w in p)-1===u.indexOf(w)&&(n+=w+":"+p[w]+";");n+=u}else for(w in p)n+=
w+":"+p[w]+";";p=n}}r.wia(p,null!=q)}}}},gua:function(a){if(a instanceof Object){var b="",c;for(c in a)var d=c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),b=b+(d+":"+a[c]+";");return b}return null!=a&&"string"==typeof a?a:""},hBa:function(a,b){var c=f[b],c=c?c(a):f.uFa(a,b);return null==c||"string"==typeof c&&""==c.replace(/^\s+/g,"")?null:c}};a.Na("oj.dvtBaseComponent",g.oj.baseComponent,{_ComponentCreate:function(){this._super();this.GD=this.EV=0;this.Lo=null;for(var b=this.Cf(),c=0;c<b.length;c++)this.element.addClass(b[c]);
this.qK=g(document.createElement("div"));this.qK.attr("style","visibility:hidden;");this.element.append(this.qK);this.$f=(b=this.element[0].parentElement)&&b.yC?b.yC:new d.Context(this.element[0],null,this.qK[0]);this.$f.setReadingDirection(this.jd());this.$f.setTooltipAttachedCallback(a.Components.Ug);this.$f.setOverlayAttachedCallback(a.Components.Ug);this.$f.setTooltipStyleClass("oj-dvt-tooltip");this.$f.setDatatipStyleClass("oj-dvt-datatip");this.$f.setDefaultFontFamily(this.qK.css("font-family"));
g(document.body).hasClass("oj-hicontrast")&&d.Agent.setHighContrast(!0);this.xa=this.yg(this.$f,this.sl,this);this.$f.getStage().addChild(this.xa);!1!==d.requireJS&&(this.iCa(),this.jaa());this.co();this.options._environment="jet";this.options._widgetConstructor=a.Components.Kf(this.element)},Lh:function(){this._super();this.element.attr("tabIndex",0);"off"!=this.options.trackResize&&this.rQ();this.daa();this.Qh()},refresh:function(){this._super();this.$f.setReadingDirection(this.jd());this.jaa();
this.Qh()},getNodeBySubId:function(a){var b=this.xa&&this.xa.getAutomation?this.xa.getAutomation():null;if(b)return a=this.tk(a),b.getDomElementForSubId(a)},getSubIdByNode:function(a){var b=this.xa&&this.xa.getAutomation?this.xa.getAutomation():null;if(b)return(a=b.getSubIdForDomElement(a))?this.Mh(a):null},tk:function(){return null},Mh:function(){return null},iH:function(){f.IIa(this.element,this.options,this.Cf(),this.uk())},Cf:function(){return["oj-dvtbase"]},uk:function(){return{"oj-dvt-no-data-message":{path:"_statusMessageStyle",
property:"CSS_TEXT_PROPERTIES"}}},tj:function(){return[]},Mi:function(){var b=this.options.translations,b={"DvtUtilBundle.CLEAR_SELECTION":b.labelClearSelection,"DvtUtilBundle.COLON_SEP_LIST":b.labelAndValue,"DvtUtilBundle.INVALID_DATA":b.labelInvalidData,"DvtUtilBundle.NO_DATA":b.labelNoData,"DvtUtilBundle.DATA_VISUALIZATION":b.labelDataVisualization,"DvtUtilBundle.STATE_SELECTED":b.stateSelected,"DvtUtilBundle.STATE_UNSELECTED":b.stateUnselected,"DvtUtilBundle.STATE_MAXIMIZED":b.stateMaximized,
"DvtUtilBundle.STATE_MINIMIZED":b.stateMinimized,"DvtUtilBundle.STATE_EXPANDED":b.stateExpanded,"DvtUtilBundle.STATE_COLLAPSED":b.stateCollapsed,"DvtUtilBundle.STATE_ISOLATED":b.stateIsolated,"DvtUtilBundle.STATE_HIDDEN":b.stateHidden,"DvtUtilBundle.STATE_VISIBLE":b.stateVisible,"DvtUtilBundle.SCALING_SUFFIX_THOUSAND":b.labelScalingSuffixThousand,"DvtUtilBundle.SCALING_SUFFIX_MILLION":b.labelScalingSuffixMillion,"DvtUtilBundle.SCALING_SUFFIX_BILLION":b.labelScalingSuffixBillion,"DvtUtilBundle.SCALING_SUFFIX_TRILLION":b.labelScalingSuffixTrillion,
"DvtUtilBundle.SCALING_SUFFIX_QUADRILLION":b.labelScalingSuffixQuadrillion},c=a.$a.aF("abbreviated");b["DvtUtilBundle.MONTH_SHORT_JANUARY"]=c[0];b["DvtUtilBundle.MONTH_SHORT_FEBRUARY"]=c[1];b["DvtUtilBundle.MONTH_SHORT_MARCH"]=c[2];b["DvtUtilBundle.MONTH_SHORT_APRIL"]=c[3];b["DvtUtilBundle.MONTH_SHORT_MAY"]=c[4];b["DvtUtilBundle.MONTH_SHORT_JUNE"]=c[5];b["DvtUtilBundle.MONTH_SHORT_JULY"]=c[6];b["DvtUtilBundle.MONTH_SHORT_AUGUST"]=c[7];b["DvtUtilBundle.MONTH_SHORT_SEPTEMBER"]=c[8];b["DvtUtilBundle.MONTH_SHORT_OCTOBER"]=
c[9];b["DvtUtilBundle.MONTH_SHORT_NOVEMBER"]=c[10];b["DvtUtilBundle.MONTH_SHORT_DECEMBER"]=c[11];return b},jaa:function(){var a=this.Mi();d.Bundle.addLocalizedStrings(a)},iCa:function(){var b={};b.numberConverterFactory=a.Ea.Vea("number");b.dateToIsoConverter=function(b){return b instanceof Date?a.Qa.dateToLocalIso(b):b};b.isoToDateConverter=function(b){return"string"==typeof b?a.Qa.isoToLocalDate(b):b};this.$f.setLocaleHelpers(b)},_destroy:function(){this.$f.hideTooltips();this.$f=null;var a=this.element[0].parentElement;
a&&a.yC&&(a.yC=null);this.xa.destroy&&this.xa.destroy();this.xa=null;this.AV();this.element.children().remove();this.element.removeAttr("role").removeAttr("tabIndex").removeAttr("aria-activedescendant");for(var a=this.Cf(),b=0;b<a.length;b++)this.element.removeClass(a[b]);this._super()},_setOptions:function(a,b){this._superApply(arguments);var c=this.options.trackResize;"off"==c&&this.Nl?this.AV():"off"==c||this.Nl||this.rQ();this.daa();if(!this.H3){var d=!1,e=this.tj(),f=["highlightedCategories",
"selection","dataCursorPosition"];g.each(a,function(a){if(0>e.indexOf(a)&&0>f.indexOf(a))return d=!0,!1});d?this.Qh():(void 0!==a.highlightedCategories&&this.xa.highlight(a.highlightedCategories),void 0!==a.selection&&this.xa.select(a.selection),void 0!==a.dataCursorPosition&&this.xa.positionDataCursor&&this.xa.positionDataCursor(a.dataCursorPosition))}},yg:function(){return null},sl:function(a){var b=a.type;"selection"===b?this.ee("selection",a.selection):"categoryHide"===b||"categoryShow"===b?this.ee("hiddenCategories",
a.hiddenCategories):"categoryHighlight"===b?this.ee("highlightedCategories",a.categories):"optionChange"===b?this.ee(a.key,a.value,a.optionMetadata):"touchHoldRelease"===b&&this.options.contextMenu?this.kh(g.Event(a.nativeEvent),"touch"):"ready"===b&&0===this.GD&&(this.oV&&this.oV(!0),this.maa=!0,this.nV=this.oV=null)},rQ:function(){this.Nl||(this.Nl=this.Gg.bind(this),a.A.Ok(this.element[0],this.Nl,250))},AV:function(){this.Nl&&(a.A.nm(this.element[0],this.Nl),this.Nl=null)},Gg:function(){var a=
this.element.width(),b=this.element.height();(null==this.rL||null==this.BJ||5<=Math.abs(a-this.rL)+Math.abs(b-this.BJ))&&this.Qh(!0)},co:function(){},Qh:function(b){this.$f.hideTooltips();this.U1();this.$f.isReadyToRender()?(this.rL=this.UG()?null:this.element.width(),this.BJ=this.UG()?null:this.element.height(),this.options._width=this.rL,this.options._height=this.BJ,this.options._locale=a.ga.Yi(),this.options.dnd&&this.element.attr("draggable",!0),this.iH(),this.EV++,b?this.Lo||this.CV(null):0===
this.fBa().length&&this.CV(this.options),this.GV=!1):this.GV=!0},Rp:function(){this._super();this.GV&&this.Qh()},Mr:function(){this._super();this.GV&&this.Qh()},uj:function(){this._super();this.$f.hideTooltips()},Lm:function(){this._super();this.$f.hideTooltips()},ee:function(a,b,c){this.H3=!0;this.option(a,b,{_context:{Ed:!0,Ot:c,pb:!0}});this.H3=!1},jh:function(a,b,c){"touch"!==c&&("keyboard"===c?this.kh(b,c,{position:{of:this.xa.getKeyboardFocus()}}):this._super(a,b,c))},AB:function(b){return(b=
a.Components.Kf(b)("instance"))?b.xa:null},Ji:function(a){if(a){var b={},c;for(c in a)this.Qna(a,c,b);Object.defineProperties(a,b)}},Qna:function(a,b,c){var d=("selected"==b?"is":"get")+b.charAt(0).toUpperCase()+b.slice(1);c[d]={value:function(){return a[b]}}},Cu:function(a){for(var b="",c=0;c<a.length;c++)b+="["+a[c]+"]";return b},Yn:function(a){for(var b=[],c=0;0<a.indexOf("[",c);){var d=a.indexOf("[",c)+1,c=a.indexOf("]",c);b.push(Number(a.substring(d,c)));c+=1}return b},wk:function(a){return Number(this.OG(a))},
OG:function(a){var b=a.indexOf("[")+1,c=a.indexOf("]");return a.substring(b,c)},vk:function(){return{}},fBa:function(){this.Lo=null;var a=this.vk(),b;for(b in a)for(var c=a[b],d=0;d<c.length;d++)if("root"===b){if(this.Yu(this.options,c[d]))break}else{var e=this.options[b];if(e)for(var f=0;f<e.length&&!this.Yu(e[f],c[d]);f++);}var g=[];this.GD=0;if(this.Lo){var n=this;for(b in a)c=a[b],c.forEach(function(a){var c;if("root"===b)(c=n.B7(n.Lo,a))&&g.push(c);else{var d=n.Lo[b];if(d)for(var e=0;e<d.length;e++)(c=
n.B7(d[e],a))&&g.push(c)}})}return g},Yu:function(a,b){if(!this.Lo){var c=(new e(a,b)).ie();c&&(c instanceof Function||c instanceof Promise)&&(this.Lo=d.JsonUtils.clone(this.options))}return null!==this.Lo},B7:function(a,b){var c=new e(a,b),d=c.ie();d instanceof Function&&(d=Promise.resolve(d(this.o1(a))));if(d&&d instanceof Promise){this.GD++;var f=this.EV,g=this;d.then(function(a){g.Waa(f,c,a)},function(){g.Waa(f,c,[])});return d}return null},Waa:function(a,b,c){a===this.EV&&(this.GD--,b.wia(c,
!0),0===this.GD&&(this.CV(this.Lo),this.Lo=null))},CV:function(a){var b=this.UG()&&this.Nl;b&&this.AV();this.xa.render(a,this.rL,this.BJ);b&&this.rQ()},o1:function(){return{}},UG:function(){return!1},whenReady:function(){if(this.maa)return Promise.resolve(!0);if(!this.nV){var a=this;this.nV=new Promise(function(b){a.oV=b})}return this.nV},U1:function(){this.maa=!1},daa:function(){var a=this.options.tooltip;"function"===typeof a&&(this.options.tooltip={renderer:a})}},!0);a.Components.Va("dvtBaseComponent",
"baseComponent",{properties:{trackResize:{type:"string"}},methods:{whenReady:{}},extension:{_widgetName:"dvtBaseComponent"}})});