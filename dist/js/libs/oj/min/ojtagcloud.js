/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTagCloud"],function(a,g,c,b,d){a.Na("oj.ojTagCloud",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{optionChange:null},yg:function(a,b,c){return d.TagCloud.newInstance(a,b,c)},tk:function(a){var b=a.subId;"oj-tagcloud-item"==b?b="item["+a.index+"]":"oj-tagcloud-tooltip"==b&&(b="tooltip");return b},Mh:function(a){var b={};0==a.indexOf("item")?(b.subId="oj-tagcloud-item",b.index=this.wk(a)):"tooltip"==
a&&(b.subId="oj-tagcloud-tooltip");return b},Cf:function(){var a=this._super();a.push("oj-tagcloud");return a},uk:function(){var a=this._super();a["oj-tagcloud"]={path:"styleDefaults/style",property:"CSS_TEXT_PROPERTIES"};return a},tj:function(){return["optionChange"]},Mi:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.TAG_CLOUD"]=a.componentName;return b},getItem:function(a){return this.xa.getAutomation().getItem(a)},getItemCount:function(){return this.xa.getAutomation().getItemCount()},
getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-tagcloud-tooltip"!==a.subId?a:null},vk:function(){return{root:["items"]}}});a.Components.Va("ojTagCloud","dvtBaseComponent",{properties:{animationOnDataChange:{type:"string"},animationOnDisplay:{type:"string"},hiddenCategories:{type:"Array\x3cstring\x3e"},highlightedCategories:{type:"Array\x3cstring\x3e"},highlightMatch:{type:"string"},hoverBehavior:{type:"string"},items:{type:"Array\x3cobject\x3e"},layout:{type:"string"},selection:{type:"Array\x3cstring\x3e"},
selectionMode:{type:"string"},styleDefaults:{type:"object"},tooltip:{type:"object"},touchResponse:{type:"string"}},methods:{getContextByNode:{},getItem:{},getItemCount:{}},extension:{_widgetName:"ojTagCloud"}});a.Components.register("oj-tag-cloud",a.Components.getMetadata("ojTagCloud"))});