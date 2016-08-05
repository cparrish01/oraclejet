/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","ojs/ojknockout","ojs/ojmessaging"],function(a,g,c){a.vc=function(){};a.vc.tB="invalidComponentTracker";a.vc.l1="ojoptionchange";a.vc.Sp="messagesShown";a.vc.Pr="messagesHidden";a.vc.Or="disabled";a.vc.FB="readOnly";a.vc.Zs=function(b,d,e,f,h){e={};h=h.call()[a.vc.tB];var k;if(b===a.vc.Or||b===a.vc.FB)return k=h&&h.peek()||null,null!==k&&c.isWriteableObservable(h)&&k.Zs.call(k,f,b,d)&&h.valueHasMutated(),e[b]=d,e};a.vc._init=function(a,c){var e={};e[a]=c;return e};
a.vc.koa=function(b,c,e,f){f=f.call();var h;b===a.vc.tB&&(h=f[b]?!0:!1)&&a.vc.oAa(b,f,c,e);return{}};a.vc.Koa=function(b,d,e,f){d=g(d);f=f.call()[b];b===a.vc.tB&&d&&(d.off(a.vc.l1,a.vc.hda),f&&c.isWriteableObservable(f)&&(b=f.peek(),b.Jd.call(b,e)&&f.valueHasMutated()))};a.vc.hda=function(b,d){var e=b.data.WZ,f,h=b.data.R,k=d.option,g=d.value;(k===a.vc.Sp||k===a.vc.Pr)&&e&&c.isWriteableObservable(e)&&(f=e.peek())&&f.Zs.call(f,h,k,g)&&e.valueHasMutated()};a.vc.oAa=function(b,d,e,f){b=d[b];var h,k;
e=g(e);if(c.isObservable(b))k=b.peek(),null==k&&(k=new a.Lc,b(k));else throw Error("Binding attribute "+a.vc.tB+" should be bound to a ko observable.");null!==k&&(c.isWriteableObservable(b)&&(d=f.call(f,"option",a.vc.Sp),h=f.call(f,"option",a.vc.Pr),k.Zs.call(k,f,a.vc.Sp,d),k.Zs.call(k,f,a.vc.Pr,h),b.valueHasMutated()),f={WZ:b,R:f},e.on(a.vc.l1,f,a.vc.hda))};a.za.Ng().Tg({"for":"editableValue",attributes:[a.vc.tB,a.vc.Or,a.vc.FB],init:a.vc._init,update:a.vc.Zs,afterCreate:a.vc.koa,beforeDestroy:a.vc.Koa});
a.Lc=function(){this.Init()};o_("InvalidComponentTracker",a.Lc,a);a.b.ta(a.Lc,a.b,"oj.InvalidComponentTracker");a.Lc.Sp="messagesShown";a.Lc.Pr="messagesHidden";a.Lc.Or="disabled";a.Lc.FB="readOnly";a.Lc.prototype.Init=function(){a.Lc.u.Init.call(this);this.Az=[];this.Ds=[];this.Qy=[];this.invalidHidden=this.invalidShown=!1};a.Lc.prototype.Cea=function(){var a=null,c=this,e=this.jL;this.invalidShown&&(a=this.KS());setTimeout(function(){(a=e===c.jL?a||c.KS():c.KS())&&a.call(a,"Focus")},1);return a?
!0:!1};a.b.g("InvalidComponentTracker.prototype.focusOnFirstInvalid",{Cea:a.Lc.prototype.Cea});a.Lc.prototype.showMessages=function(){var a,c,e;if(this.invalidHidden)for(c=this.Qy.length,e=0;e<c;e++)this.Qy[e]&&(a=this.Az[e].call(a,"showMessages"))};a.b.g("InvalidComponentTracker.prototype.showMessages",{showMessages:a.Lc.prototype.showMessages});a.Lc.prototype.KS=function(){for(var a,c=0,e=this.Ds.length,c=0;c<e;c++)if(a=this.Ds[c])return this.Az[c];return null};a.Lc.prototype.Jd=function(a){var c=
-1,e=!1;g.each(this.Az,function(e,h){0>c&&h===a&&(c=e)});0<=c&&(this.Az.splice(c,1),this.Ds.splice(c,1),this.Qy.splice(c,1),this.VW(),e=!0);return e};a.Lc.prototype.Zs=function(b,c,e){var f=b.call(b,"isValid"),h=-1,k=!0,l;g.each(this.Az,function(a,c){0>h&&c===b&&(h=a)});switch(c){case a.Lc.Sp:case a.Lc.Pr:l=!1;e&&(0>h&&(h=this.Az.push(b)-1,this.oxa(h,l)),!f&&a.Lc.cU(e)&&(l=!0,c===a.Lc.Sp&&(e=b.call(b,"option",a.Lc.Or),f=b.call(b,"option",a.Lc.FB),l=e||f?!1:!0)),k=this.BE(c,h||0,l),this.VW(),k&&(void 0===
this.jL&&(this.jL=0),this.jL++));break;case a.Lc.Or:case a.Lc.FB:k=!1,e&&(k=this.BE(a.Lc.Sp,h||0,!1),k=this.BE(a.Lc.Pr,h||0,!1)||k,this.VW())}return k};a.Lc.prototype.oxa=function(b,c){void 0===this.Ds[b]&&this.BE(a.Lc.Sp,b,c);void 0===this.Qy[b]&&this.BE(a.Lc.Pr,b,c)};a.Lc.prototype.VW=function(){this.invalidShown=0<=this.Ds.indexOf(!0);this.invalidHidden=0<=this.Qy.indexOf(!0)};a.Lc.prototype.BE=function(b,c,e){var f=!1;b=b===a.Lc.Sp?this.Ds:b===a.Lc.Pr?this.Qy:[];0<=c&&void 0!==b[c]?(f=b[c]!==
e?!0:!1)&&b.splice(c,1,e):(b.push(e),f=!0);return f};a.Lc.cU=function(b){return!a.ia.isValid(b)}});