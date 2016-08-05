/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtLegend"],function(a,g,c,b,d){a.Na("oj.ojLegend",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{categoryFilter:null,categoryHighlight:null,drill:null},yg:function(a,b,c){return d.Legend.newInstance(a,b,c)},tk:function(a){var b=a.subId;"oj-legend-section"==b?b="section"+this.Cu(a.indexPath):"oj-legend-item"==b?(b="section"+this.Cu(a.sectionIndexPath),b+=":item["+a.itemIndex+"]"):"oj-legend-tooltip"==
b&&(b="tooltip");return b},Mh:function(a){var b={};if(0<a.indexOf(":item")){var c=a.indexOf(":item"),d=a.substring(0,c);a=a.substring(c);b.subId="oj-legend-item";b.sectionIndexPath=this.Yn(d);b.itemIndex=this.wk(a)}else 0==a.indexOf("section")?(b.subId="oj-legend-section",b.indexPath=this.Yn(a)):"tooltip"==a&&(b.subId="oj-legend-tooltip");return b},Cf:function(){var a=this._super();a.push("oj-legend");return a},uk:function(){var a=this._super();a["oj-legend"]={path:"textStyle",property:"CSS_TEXT_PROPERTIES"};
a["oj-legend-title"]={path:"titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-section-title"]={path:"_sectionTitleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-section-close-icon"]={path:"_resources/closedEnabled",property:"CSS_URL"};a["oj-legend-section-close-icon oj-hover"]={path:"_resources/closedOver",property:"CSS_URL"};a["oj-legend-section-close-icon oj-active"]={path:"_resources/closedDown",property:"CSS_URL"};a["oj-legend-section-open-icon"]={path:"_resources/openEnabled",property:"CSS_URL"};
a["oj-legend-section-open-icon oj-hover"]={path:"_resources/openOver",property:"CSS_URL"};a["oj-legend-section-open-icon oj-active"]={path:"_resources/openDown",property:"CSS_URL"};return a},Mi:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.LEGEND"]=a.componentName;return b},tj:function(){return["categoryFilter","categoryHighlight","drill"]},sl:function(a){var b=a.type;"categoryHide"===b||"categoryShow"===b?(this._trigger("categoryFilter",null,{category:a.category,type:"categoryHide"===
b?"out":"in"}),this.ee("hiddenCategories",a.hiddenCategories)):"categoryHighlight"===b?(this._trigger("categoryHighlight",null,{categories:a.categories,type:a.categories&&0<a.categories.length?"on":"off"}),this.ee("highlightedCategories",a.categories)):"drill"===b?this._trigger("drill",null,{id:a.id}):this._super(a)},co:function(){null==this.options._resources&&(this.options._resources={});this.options._resources.overviewGrippy=a.ga.gb("resources/internal-deps/dvt/chart/drag_horizontal.png")},Qh:function(){this._super();
this.element.attr("role")||this.element.attr("tabIndex",null)},getTitle:function(){return this.xa.getAutomation().getTitle()},getSection:function(a){var b=this.xa.getAutomation().getSection(a);if(b){var c=this;this.Ji(b);b.getSection=function(a){(a=b.sections?b.sections[a]:null)&&c.Ji(a);return a};b.getItem=function(a){(a=b.items?b.items[a]:null)&&c.Ji(a);return a}}return b},getItem:function(a){a=this.xa.getAutomation().getItem(a);this.Ji(a);return a},getPreferredSize:function(a,b){var c=this.xa.getPreferredSize(this.options,
a,b);return{width:c.getWidth(),height:c.getHeight()}},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-legend-tooltip"!==a.subId?a:null},vk:function(){return{sections:["items"]}}});a.Components.Va("ojLegend","dvtBaseComponent",{properties:{drilling:{type:"string"},halign:{type:"string"},hiddenCategories:{type:"Array\x3cstring\x3e"},hideAndShowBehavior:{type:"string"},highlightedCategories:{type:"Array\x3cstring\x3e"},hoverBehavior:{type:"string"},hoverBehaviorDelay:{type:"number|string"},
orientation:{type:"string"},scrolling:{type:"string"},sections:{type:"Array\x3cobject\x3e"},symbolHeight:{type:"number"},symbolWidth:{type:"number"},textStyle:{type:"string"},title:{type:"string"},titleHalign:{type:"string"},titleStyle:{type:"string"},valign:{type:"string"}},methods:{getContextByNode:{},getItem:{},getPreferredSize:{},getSection:{},getTitle:{}},extension:{_widgetName:"ojLegend"}});a.Components.register("oj-legend",a.Components.getMetadata("ojLegend"))});