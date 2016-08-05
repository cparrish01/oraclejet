/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var q;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(a){this.Init(a.u(),a.ag,a);this.ee=a}function c(a){this.Init(a)}a.Ei={};a.Ei.eo=function(){return a.B.Va()};a.v.F(a.Ei,a.v);a.Ei.ef=function(a,b,c,h){c=(c-a)*h;a=b-a;return 0==c||0==a?0:c/a};a.Ei.Pi=function(a,b,c,h){b=c*(b-a);return 0==b||0==h?a:b/h+a};a.Db=function(a,b,c){this.Init(a,b,c)};a.v.F(a.Db,a.ma);a.Db.u0a=10;a.Db.lZa=40;a.Db.gZa=20;a.Db.J6=20;a.Db.cFa=5;a.Db.eFa=1;a.Db.prototype.Init=function(c,e,f){a.Db.C.Init.call(this,c);this.Cc=e;this.pb=f;this.gL=this.FR()?
7:6;if(null!=this.Cc||null!=this.pb)this.I=new b(this),this.I.Qf(this),a.Ei.eo()?(this.Ya(a.TouchEvent.Yi,this.kZ,!1,this),this.Ya(a.TouchEvent.Yo,this.DBa,!1,this),this.Ya(a.TouchEvent.Rm,this.Z6,!1,this),this.Ya(a.MouseEvent.Be,this.GN,!1,this)):(this.Ya(a.MouseEvent.wj,this.V6,!1,this),this.Ya(a.MouseEvent.ui,this.U6,!1,this),this.Ya(a.MouseEvent.Be,this.GN,!1,this),this.Ya(a.KeyboardEvent.ts,this.WS,!1,this),this.Ya(a.KeyboardEvent.tv,this.bia,!1,this));this.Voa=0};a.Db.prototype.Lm=function(a,
b,c){null==c&&(c=this.xb);a=this.ef(a);var h=this.ef(b);a<this.Cz||h>this.bea()||(b=Math.max(h-a,this.dea()),0<b&&0<=a&&h<=c&&(h=this.tt(),this.Yq()?this.gN(h,c-(a+b)):this.gN(h,a),this.dga(h,b),this.R7()))};a.Db.prototype.ER=function(){return null==this.K$?!1:-1!=a.na.kb(this.K$,"zoom")};a.Db.prototype.nob=function(){return"off"!==this.N7a};a.Db.prototype.ta=function(b,c,f){if(null==b){var h=this.Zb,k=this.Ic,l=this.tt(),n=this.Bw(l);null!=l&&0!=n&&(this.ROa=a.Ei.Pi(h,k,n,this.xb));this.Fl()}null!=
c&&null!=f&&(this.xb=c,this.Kb=f);b&&(b=this.jD(b),this.Cv(b));b=null!=this.Cc||null!=this.pb;this.vRa(c,f);b&&this.rjb(c,f);this.Mtb(c,f);this.Ypb(c,f);this.Dtb(c,f);this.Wwa(c,f);b&&(this.Uib(c,f),this.FR()&&(this.KV=this.njb()),this.Ltb());null!=this.fLa&&(this.Voa=Math.max(0,a.Ei.ef(this.Zb,this.Ic,this.fLa,this.zb)));0<this.Voa&&this.lpb(this.Voa)};a.Db.prototype.WTa=function(){return new c(this)};a.Db.prototype.jD=function(a){return this.WTa(a).parse(a)};a.Db.prototype.Cv=function(a){this.Zb=
a.start;this.Ic=a.end;this.zb=a.width;this.ROa=a.wxa;this.Yma=a.currentTime;this.fLa=a.job;this.N7a=a.RQa;this.Cz=Math.max(0,a.cpb);this.MV=Math.max(0,a.lrb);isNaN(this.Cz)&&(this.Cz=0);isNaN(this.MV)&&(this.MV=0);this.YP=a.orientation;this.Pdb=a.WVa;this.Jcb=a.vwa;null!=a.aSa&&(this.K$=a.aSa.split(" "));null!=a.Iwa&&0<a.Iwa&&(this.BMa=a.Iwa);this.w8a=a.nib;this.D2=a.xXa;null!=a.xXa&&(this.C2=this.D2.ttb);this.Lna=a.hkb;this.x8a=a.borderTopStyle;this.cma=a.borderTopColor;this.Oca=a.uya;this.lhb=a.GXa;
this.thb=a.Cya;this.rhb=a.Aya;this.nhb=a.wya;this.phb=a.yya;this.shb=a.Bya;this.qhb=a.zya;this.mhb=a.vya;this.ohb=a.xya;this.Sbb=a.Uva;this.y0=a.Rva;this.Coa=a.yUa;this.RKa=a.BUa;this.MKa=a.zUa;this.Odb=a.Swa;this.T9a=a.lta;this.Sgb=a.gya;this.Qgb=a.vXa;this.Rgb=a.wXa;this.VLa=a.xVa;this.Ycb=a.wVa;this.WOa=a.AWa;this.$fb=a.zWa};a.Db.prototype.ef=function(b){return Math.max(0,a.Ei.ef(this.Zb,this.Ic,b,this.uM()))+this.Cz};a.Db.prototype.Pi=function(b){return a.Ei.Pi(this.Zb,this.Ic,Math.max(0,b-this.Cz),
this.uM())};a.Db.prototype.Mo=function(){return"true"==this.Jcb};a.Db.prototype.Yq=function(){return this.Mo()&&!this.Sb()};a.Db.prototype.Sb=function(){return"vertical"==this.YP};a.Db.prototype.$ea=function(){return"above"==this.Pdb};a.Db.prototype.uM=function(){return this.Sb()?this.Kb-this.Cz-this.MV:this.xb-this.Cz-this.MV};a.Db.prototype.bea=function(){return this.Sb()?this.Kb-this.MV:this.xb-this.MV};a.Db.prototype.dea=function(){return null!=this.$pa?this.$pa:null!=this.BMa?this.$pa=a.Ei.ef(this.Zb,
this.Ic,this.Zb+this.BMa,this.uM()):a.Db.u0a};a.Db.prototype.Sda=function(){return a.Ei.eo()?this.XW()/2:0};a.Db.prototype.XW=function(){return a.Ei.eo()?30:10};a.Db.prototype.GR=function(a){var b=a.getId();return"lh"==b||"rh"==b||"lhb"==b||"rhb"==b||"grpy"==b||"lbgrh"==b||"rbgrh"==b||null!=a.getParent()&&"grpy"==a.getParent().getId()};a.Db.prototype.wR=function(){if(null==this.D2)return 0;if(null==this.E2){var b=parseInt(this.D2.width,10);this.E2=!isNaN(b)&&b<this.xb?b:a.Db.lZa}return this.E2};a.Db.prototype.gF=
function(){if(null==this.D2)return 0;if(null==this.UPa){var b=parseInt(this.D2.height,10);this.UPa=!isNaN(b)&&b<this.Kb?b:a.Db.gZa}return this.UPa};a.Db.prototype.mea=function(b){return a.Ei.eo()&&null!=b.targetTouches?0<b.targetTouches.length?b.targetTouches[0].pageX:null:b.pageX};a.Db.prototype.nea=function(b){return a.Ei.eo()&&null!=b.targetTouches?0<b.targetTouches.length?b.targetTouches[0].pageY:null:b.pageY};a.Db.prototype.CC=function(){return!1};a.Db.prototype.tt=function(){return this.hb(1)};
a.Db.prototype.Yda=function(){return this.CC()?this.hb(3):null};a.Db.prototype.d4=function(){return this.CC()?this.hb(4):null};a.Db.prototype.pTa=function(){return this.CC()&&!this.ER()?this.hb(5):null};a.Db.prototype.Wua=function(){return this.CC()&&!this.ER()?this.hb(6):null};a.Db.prototype.Aua=function(){return this.hb(this.Pb()-this.gL)};a.Db.prototype.Xua=function(){return this.hb(this.Pb()-(this.gL-1))};a.Db.prototype.qTa=function(){return this.hb(this.Pb()-(this.gL-2))};a.Db.prototype.fUa=
function(){return this.hb(this.Pb()-(this.gL-3))};a.Db.prototype.wSa=function(){return this.hb(this.Pb()-(this.gL-4))};a.Db.prototype.uUa=function(){return this.hb(this.Pb()-(this.gL-5))};a.Db.prototype.dY=function(a,b,c){this.Sb()?(-1!=b&&a.Gl(b),-1!=c&&a.Hl(c)):(-1!=b&&a.bo(b),-1!=c&&a.un(c))};a.Db.prototype.K3=function(a){return this.Sb()?a.Vr():a.Ur()};a.Db.prototype.JU=function(a){a=a.target;if(null!=a){var b=a.getId();if(null==b)return null;if("_border"==b.substr(b.length-7))return this.Wta(a);
if("tick"!=b.substr(0,4)&&"ltb"!=b&&"rtb"!=b&&"bb"!=b&&"tab"!=b)return a}return null};a.Db.prototype.iVa=function(a){return"window"==a.getId()||"ftr"==a.getId()||"sta"==a.getId()||this.GR(a)?!0:!1};a.Db.prototype.FR=function(){return window&&window.FR};a.Db.prototype.vRa=function(b,c){var f=new a.Rect(this.u(),0,0,b,c,"bg");f.fb(this.Odb);f.md();this.A(f);return f};a.Db.prototype.rjb=function(b,c){var f=this.Sb(),h=f?new a.Rect(this.u(),0,0,b,0,"window"):new a.Rect(this.u(),0,0,0,c,"window");h.fb(this.Oca,
this.lhb);h.md();if(!this.ER()){var k=this.XW(),l=this.Sda();if(f){var n=(b-36)/2,m=a.P.moveTo(n,0)+a.P.Ye(n+3,6,n+8,8)+a.P.lineTo(n+28,8)+a.P.Ye(n+33,6,n+36,0);a.P.closePath();var r=a.P.moveTo(n,0)+a.P.Ye(n+3,-6,n+8,-8)+a.P.lineTo(n+28,-8)+a.P.Ye(n+33,-6,n+36,0);a.P.closePath();var p=new a.Rect(this.u(),0,0,b,k,"lhb"),k=new a.Rect(this.u(),0,0,b,k,"rhb"),w="row-resize";if(this.Coa)var x=this.lda(b,10),n=this.lda(b,10);else x=this.kda(n),n=this.kda(n)}else n=(c-36)/2,m=a.P.moveTo(0,n)+a.P.Ye(6,n+
3,8,n+8)+a.P.lineTo(8,n+28)+a.P.Ye(6,n+33,0,n+36),a.P.closePath(),r=a.P.moveTo(0,n)+a.P.Ye(-6,n+3,-8,n+8)+a.P.lineTo(-8,n+28)+a.P.Ye(-6,n+33,0,n+36),a.P.closePath(),p=new a.Rect(this.u(),0-l,0,k,c,"lhb"),k=new a.Rect(this.u(),l,0,k,c,"rhb"),w="col-resize",this.Coa?(x=this.lda(10,c),n=this.lda(10,c)):(x=this.kda(n),n=this.kda(n));p.fb(this.Oca,0);k.fb(this.Oca,0);p.md();k.md();m=new a.vb(this.u(),m,"lh");r=new a.vb(this.u(),r,"rh");m.fb(this.y0);m.Tb(this.y0);r.fb(this.y0);r.Tb(this.y0);this.Oca==
this.y0&&(m.md(),r.md());p.setCursor(w);k.setCursor(w);m.setCursor(w);r.setCursor(w);x.setCursor(w);n.setCursor(w);h.A(p);h.A(m);h.A(x);h.A(k);h.A(r);h.A(n)}h.setCursor("move");this.A(h);h=f?this.Mo()?new a.Gc(this.u(),this.wR(),0,this.wR(),c,"tab"):new a.Gc(this.u(),b-this.wR(),0,b-this.wR(),c,"tab"):this.$ea()?new a.Gc(this.u(),0,this.gF(),b,this.gF(),"tab"):new a.Gc(this.u(),0,c-this.gF(),b,c-this.gF(),"tab");h.Tb(this.Qgb,this.Rgb);h.md();this.VPa=h;this.A(h);this.CC()&&(f?(h=new a.Rect(this.u(),
0,0,b,0,"lbg"),p=new a.Rect(this.u(),0,0,b,0,"rbg")):(h=new a.Rect(this.u(),0,0,0,c,"lbg"),p=new a.Rect(this.u(),0,0,0,c,"rbg")),h.fb(this.VLa,this.Ycb),this.A(h),p.fb(this.WOa,this.$fb),this.A(p),a.Ei.eo()&&void 0!=l&&(this.Sda(),f?(f=new a.Rect(this.u(),0,0,b,l,"lbgrh"),l=new a.Rect(this.u(),0,0,b,l,"rbgrh")):(f=new a.Rect(this.u(),0,0,l,c,"lbgrh"),l=new a.Rect(this.u(),0,0,l,c,"rbgrh")),f.fb(this.VLa,0),this.A(f),l.fb(this.WOa,0),this.A(l)))};a.Db.prototype.lda=function(b,c){var f=new a.Image(this.u(),
this.Coa,(b-this.RKa)/2,(c-this.MKa)/2,this.RKa,this.MKa,"grpy");f.nb(!1);return f};a.Db.prototype.kda=function(b){var c=new a.ma(this.u(),"grpy"),f=this.Sbb;if(this.Sb()){var h=8+b;b=3;for(var k=0;9>k;k++){var l=new a.Gc(this.u(),h+2*k,b,h+2*k+1,b,"dot1"+k);l.Tb(f);c.A(l);b+=2;l=new a.Gc(this.u(),h+1+2*k,b,h+1+2*k+1,b,"dot2"+k);l.Tb(f);c.A(l);b+=2;l=new a.Gc(this.u(),h+2*k,b,h+2*k+1,b,"dot3"+k);l.Tb(f);c.A(l);b=3}l=new a.Gc(this.u(),h+18,b,h+18+1,b,"dot4");l.Tb(f);c.A(l);b+=4;l=new a.Gc(this.u(),
h+18,b,h+18+1,b,"dot5")}else{h=3;b=8+b;for(k=0;9>k;k++)l=new a.Gc(this.u(),h,b+2*k,h,b+2*k+1,"dot1"+k),l.Tb(f),c.A(l),h+=2,l=new a.Gc(this.u(),h,b+1+2*k,h,b+1+2*k+1,"dot2"+k),l.Tb(f),c.A(l),h+=2,l=new a.Gc(this.u(),h,b+2*k,h,b+2*k+1,"dot3"+k),l.Tb(f),c.A(l),h=3;l=new a.Gc(this.u(),h,b+18,h,b+18+1,"dot4");l.Tb(f);c.A(l);h+=4;l=new a.Gc(this.u(),h,b+18,h,b+18+1,"dot5")}l.Tb(f);c.A(l);c.md();return c};a.Db.prototype.Ltb=function(){var b=this.Sb(),c=this.tt(),f=this.uM(),h=b?this.Kb:this.xb,k=this.zb,
l=this.Zb,n=this.Ic,b=this.ROa,m=a.Ei.Pi(l,n,0,k),k=a.Ei.Pi(l,n,h,k),m=this.ef(m),h=Math.min(h,this.ef(k)),b=this.ef(b),h=h-m;this.Yq()?this.gN(c,f-b-h):this.gN(c,b);this.dga(c,h);this.R7();this.XU=this.zib(f)};a.Db.prototype.Uib=function(b,c){var f=this.tt(),h=a.Db.eFa/2;if(this.Sb())var k=f.ib(),l=k+h,n=k+f.getHeight(),m=n-h,r=0,p=h,w=b-h,h=new a.Gc(this.u(),r,l,b,l,"lh"),x=new a.Gc(this.u(),r,m,b,m,"rh"),v=new a.Gc(this.u(),p,0,p,k,"ltb"),z=new a.Gc(this.u(),p,n,p,c,"rtb"),m=new a.Gc(this.u(),
w,k,w,n,"bb"),k=new a.Gc(this.u(),p,k,p,n,"tb");else k=0,l=k+h,n=c,m=n-h,r=f.Ua(),p=r+h,f=r+f.getWidth(),w=f-h,h=new a.Gc(this.u(),p,k,p,n,"lh"),x=new a.Gc(this.u(),w,k,w,n,"rh"),v=new a.Gc(this.u(),0,l,r+1,l,"ltb"),z=new a.Gc(this.u(),f-1,l,b,l,"rtb"),m=new a.Gc(this.u(),r,m,f,m,"bb"),k=new a.Gc(this.u(),r,l,f,l,"tb");h.md();x.md();v.md();z.md();m.md();k.md();"none"!=this.phb&&h.Tb(this.ohb);this.A(h);"none"!=this.rhb&&x.Tb(this.qhb);this.A(x);"none"!=this.x8a&&this.cma&&(v.Tb(this.cma),z.Tb(this.cma));
this.A(v);this.A(z);"none"!=this.nhb&&m.Tb(this.mhb);this.A(m);"none"!=this.thb&&k.Tb(this.shb);this.A(k)};a.Db.prototype.njb=function(){var b=this.Sb()?a.P.moveTo(6,0)+a.P.lineTo(0,5)+a.P.lineTo(5,5)+a.P.lineTo(5,17)+a.P.lineTo(0,17)+a.P.lineTo(6,22)+a.P.lineTo(12,17)+a.P.lineTo(7,17)+a.P.lineTo(7,5)+a.P.lineTo(12,5)+a.P.closePath():a.P.moveTo(5,0)+a.P.lineTo(0,6)+a.P.lineTo(5,12)+a.P.lineTo(5,7)+a.P.lineTo(17,7)+a.P.lineTo(17,12)+a.P.lineTo(22,6)+a.P.lineTo(17,0)+a.P.lineTo(17,4)+a.P.lineTo(5,4)+
a.P.lineTo(5,0)+a.P.closePath(),b=new a.vb(this.u(),b,"arr");b.fb("#ffffff");b.Tb("#000000");b.Kc(!1);this.A(b);return b};a.Db.prototype.iy=function(a){return this.Sb()?a.getHeight():a.getWidth()};a.Db.prototype.Rsb=function(a,b){this.Sb()?a.qb(b):a.Xa(b)};a.Db.prototype.Bw=function(a){return this.Sb()?a.pa():a.ra()};a.Db.prototype.gN=function(b,c){c=Math.max(0,c);this.Sb()?b.wa(c):b.ha(c);if(this.CC()){this.Yda().Xa(c);var f=c+this.e4(b),h=this.d4();h.Fa(f);h.Xa(Math.max(0,this.xb-f));a.Ei.eo()&&
!this.ER()&&(h=this.Sda(),this.pTa().Fa(c-h),this.Wua().Fa(f))}};a.Db.prototype.e4=function(a){return this.iy(a)};a.Db.prototype.dga=function(b,c){c=Math.max(this.dea(),c);c=Math.min(this.Sb()?this.Kb:this.xb,c);this.Rsb(b,c);if(this.CC()){var f=this.Bw(b)+c,h=this.d4();h.Fa(f);h.Xa(Math.max(0,this.xb-f));a.Ei.eo()&&!this.ER()&&this.Wua().Fa(f)}if(!this.ER()){var f=b.hb(3),h=b.hb(4),k=b.hb(5);this.Sb()?(h.wa(c),f.wa(c-this.XW()),k.wa(c-10)):(h.ha(c),f.ha(c-this.XW()),k.ha(c-10))}};a.Db.prototype.zib=
function(b){var c=this.zb,f=this.Zb,h=this.Ic,k=a.Ei.Pi(f,h,1,b);b=a.Ei.Pi(f,h,2,b);k=a.Ei.ef(f,h,k,c);return a.Ei.ef(f,h,b,c)-k};a.Db.prototype.Mtb=function(b,c){if(null!=this.C2)for(var f=this.Sb(),h=this.uM(),k=0;k<this.C2.length;k++){var l=this.C2[k],n=this.ef(parseInt(l.time,10)),l=l.label,m=0,m=k+1<this.C2.length?this.ef(parseInt(this.C2[k+1].time,10))-n:h-n;this.Yq()&&(n=h-n);f&&(m=this.xb);m-=2*a.Db.cFa;this.Nsa(n,b,c,"tick"+k);this.Msa(n,l,b,c,m,"label"+k)}};a.Db.prototype.Nsa=function(b,
c,f,h){b=this.Sb()?new a.Gc(this.u(),0,b,c,b,h):new a.Gc(this.u(),b,0,b,f,h);c=new a.xa(this.Sgb);c.ea(a.Yc.$C,3);b.Ga(c);b.md();this.A(b)};a.Db.prototype.Msa=function(b,c,f,h,k,l,n){n=n||new a.j("font-weight:bold");this.Sb()?(c=new a.ca(this.u(),c,4,b,l),c.Bb(n),this.Mo()&&(this.A(c),n=c.aa(),this.removeChild(c),c.Fa(Math.max(4,this.xb-n.a-4)))):(h=this.$ea()?2:h-this.gF()+2,f=a.Db.cFa,c=new a.ca(this.u(),c,b+f,h,l),c.Bb(n),this.Yq()&&(this.A(c),n=c.aa(),this.removeChild(c),c.Fa(b-Math.min(n.a,k)-
f)));a.Ca.kd(c,k,Infinity,this);c.Keb=c.Xq()};a.Db.prototype.Dtb=function(b,c){if(null!=this.Yma&&!isNaN(this.Yma)){var f=this.ef(this.Yma);this.Sb()?f=new a.Gc(this.u(),0,f,b,f,"ocd"):(this.Mo()&&(f=b-f),f=new a.Gc(this.u(),f,0,f,c,"ocd"));f.Tb(this.T9a);f.md();this.A(f)}};a.Db.prototype.Ypb=function(a,b){if(null!=this.Lna)for(var c=0;c<this.Lna.length;c++)this.Khb(this.Lna[c],a,b)};a.Db.prototype.Khb=function(b,c,f){var h=parseInt(b.rs,10),k=parseInt(b.re,10);b=b.c;if(null!=h&&null!=k){var l=this.uM(),
h=this.ef(h),k=this.ef(k)-h;this.Yq()&&(h=l-h-k);c=this.Sb()?new a.Rect(this.u(),0,h,c-this.wR(),k,"ftr"):new a.Rect(this.u(),h,this.$ea()?this.gF():0,k,f-this.gF(),"ftr");null!=b&&c.fb(b,.4);c.setCursor("move");c.md();this.A(c)}};a.Db.prototype.Wwa=function(){};a.Db.prototype.Qsa=function(b){var c=this.tt();c.hb(3);c.hb(4);c.hb(5);if(b!=this.Bw(c)){var f=this.Aua(),h=this.Xua(),k=this.qTa(),l=this.fUa(),n=this.wSa(),m=this.uUa();if(this.Sb())var r=c.pa,p=c.wa,w=f.Vr,x=f.Gl,v=f.vt,z=f.Hl,u=h.Vr,D=
h.Gl,C=h.vt,B=h.Hl,A=k.vt,F=k.Hl,y=l.Vr,E=l.Gl,M=n.Vr,S=n.Gl,O=n.vt,fa=n.Hl,ga=m.Vr,aa=m.Gl,ea=m.vt,ia=m.Hl;else r=c.ra,p=c.ha,w=f.Ur,x=f.bo,v=f.ut,z=f.un,u=h.Ur,D=h.bo,C=h.ut,B=h.un,A=k.ut,F=k.un,y=l.Ur,E=l.bo,M=n.Ur,S=n.bo,O=n.ut,fa=n.un,ga=m.Ur,aa=m.bo,ea=m.ut,ia=m.un;var T=this.Cz,Z=this.bea(),W=this.e4(c);b=Math.max(T,Math.min(Z-W,b));T=this.nob()?new a.G(this.u(),.5,0,a.Ke.nF):null;this.dt(T,c,r,p,b);this.dt(T,f,w,x,b);this.dt(T,f,v,z,b);this.dt(T,h,u,D,b+W);this.dt(T,h,C,B,b+W);this.dt(T,k,
A,F,b+1);this.dt(T,l,y,E,b+W-1);this.dt(T,n,M,S,b);this.dt(T,m,ga,aa,b);this.dt(T,n,O,fa,b+W);this.dt(T,m,ea,ia,b+W);this.CC()&&(c=this.Yda(),this.dt(T,c,c.getWidth,c.Xa,b),W=b+W,c=this.d4(),f=c.getWidth,h=c.Xa,k=c.Ua,l=c.Fa,n=this.Sb()?this.Kb:this.xb,this.dt(T,c,f,h,n-W),this.dt(T,c,k,l,W),a.Ei.eo()&&!this.ER()&&(c=this.Sda(),f=this.pTa(),h=f.Ua,k=f.Fa,l=this.Wua(),n=l.Ua,m=l.Fa,this.dt(T,f,h,k,b-c),this.dt(T,l,n,m,W)));null!=T&&T.play()}};a.Db.prototype.dt=function(b,c,f,h,k){null!=b?b.N(a.G.V,
c,f,h,k):h.call(c,k)};a.Db.prototype.V6=function(b){var c=this.JU(b);if(c&&"bg"!=c.getId()&&"ocd"!=c.getId())if("label"==c.getId().substr(0,5)&&(c instanceof a.ca||c instanceof a.Ie))c.$n()&&this.u().Bf().sY(b.pageX,b.pageY,c.Keb,"#000000");else if(null!=this.KV&&this.GR(c)&&(b=this.u().eh(b.pageX,b.pageY),b=this.Md(b),this.Sb()?this.KV.Na(b.x+6,b.y-10):this.KV.Na(b.x-6,b.y-20),this.KV.Kc(!0)),"window"==c.getId()||"ftr"==c.getId()||"arr"==c.getId()||this.GR(c))this.FR()&&this.setCursor("move");else return c};
a.Db.prototype.U6=function(a){null==this.pu&&this.setCursor("default");a=this.JU(a);if(null!=a)return this.GR(a)&&null!=this.KV&&this.KV.Kc(!1),a};a.Db.prototype.GN=function(b,c,f){b.stopPropagation();var h=this.JU(b);if(h&&"window"!=h.getId()&&!this.GR(h))if("bg"==h.getId()||"label"==h.getId().substr(0,5)||"ocd"==h.getId()||"lbg"==h.getId()||"rbg"==h.getId()){void 0==c&&(c=b.pageX);void 0==f&&(f=b.pageY);b=this.u().eh(c,f);b=this.Md(b);this.Sb()?(f=b.y,h=this.Kb):(f=b.x,h=this.xb);b=this.tt();c=
f-this.iy(b)/2;this.Qsa(c);this.Yq()&&(f=this.xb-f);var k=this.Pi(f);f=new a.Qc(a.Qc.JZ);f.setTime(k);c=Math.max(0,Math.min(c,h-this.iy(b)));this.Yq()?(h=this.Pi(this.xb-(c+this.iy(b))),b=this.Pi(this.xb-c)):(h=this.Pi(c),b=this.Pi(c+this.iy(b)));f.aga(h);f.$fa(b);this.dispatchEvent(f)}else return h};a.Db.prototype.NQ=function(b,c,f){b=this.JU(b);if(null!=b&&this.iVa(b)){if("ftr"==b.getId()||"sta"==b.getId())b=this.tt();this.saa=c;this.eLa=f;if(this.GR(b)){c=this.tt();this.Yq()?(this.mqa=this.xb-
c.Ua(),this.vqa=this.mqa-c.getWidth()):(this.vqa=c.Ua(),this.mqa=this.vqa+c.getWidth());"grpy"==b.getParent().getId()&&(b=b.getParent());f=b.getId();"grpy"==f&&(b=c.r3(b),f=b.getId());if("lh"==f||"rh"==f)b=c.r3(b),f=b.getId();"lbgrh"==f&&(b=c.hb(0));"rbgrh"==f&&(b=c.hb(c.Pb()-3));a.Ei.eo()||(this.Sb()?(b.jb(0-a.Db.J6),b.qb(2*(b.getHeight()+a.Db.J6))):(b.Fa(0-a.Db.J6),b.Xa(2*(b.getWidth()+a.Db.J6))));this.Ppb(b.getCursor())}this.pu=b;b=new a.Qc(a.Qc.Kja);this.dispatchEvent(b);return!0}return!1};a.Db.prototype.Ppb=
function(a){var b=this.tt();null!=b&&b.setCursor(a);if(this.CC()){var b=this.Yda(),c=this.d4();null!=b&&null!=c&&(b.setCursor(a),c.setCursor(a))}};a.Db.prototype.erb=function(){var a=this.tt();null!=a&&a.setCursor("move");if(this.CC()){var a=this.Yda(),b=this.d4();null!=a&&null!=b&&(a.setCursor("default"),b.setCursor("default"))}};a.Db.prototype.dI=function(){null!=this.pu&&("window"==this.pu.getId()?this.dSa(0,0):this.GR(this.pu)&&(this.xta(),a.Ei.eo()||(this.Sb()?(this.pu.jb(0),this.pu.qb(this.XW())):
(this.pu.Fa(0),this.pu.Xa(this.XW()))),this.erb()),this.pu=null,this.saa=-1)};a.Db.prototype.U2=function(a,b,c){if(null!=this.pu&&-1!=this.saa){var h=b-this.saa,k=c-this.eLa;this.saa=b;this.eLa=c;"window"==this.pu.getId()?this.CUa(0,h,k):"lh"==this.pu.getId()||"lhb"==this.pu.getId()?this.Unb(a,h,k):"rh"!=this.pu.getId()&&"rhb"!=this.pu.getId()||this.Sva(a,h,k)}};a.Db.prototype.kZ=function(a){var b=a.touches;this.nW=b[0].pageX;this.HQ=b[0].pageY;2==b.length&&(a.preventDefault(),this.oW=b[1].pageX,
this.I2=b[1].pageY,20>Math.abs(this.HQ-this.I2)?this.qB=0:this.I2=this.oW=this.HQ=this.nW=null)};a.Db.prototype.DBa=function(a){a.preventDefault();a=a.touches;if(null!=this.oW&&null!=this.I2)50>this.qB?this.qB++:(this.Sva(null,a[1].pageX-this.oW,0),this.oW=a[1].pageX,this.qB=0);else{var b=Math.abs(this.HQ-a[0].pageY);if(3<Math.abs(this.nW-a[0].pageX)||3<b)this.HQ=this.nW=null}};a.Db.prototype.Z6=function(a){null!=this.oW&&null!=this.I2?this.xta():null!=this.nW&&null!=this.HQ&&this.GN(a,this.nW,this.HQ);
this.I2=this.oW=this.HQ=this.nW=null};a.Db.prototype.WS=function(b){var c=b.keyCode;if(c===a.KeyboardEvent.Kf||c===a.KeyboardEvent.wf)c=c===a.KeyboardEvent.Kf?-1:1,(b.shiftKey?this.Sva:this.CUa).call(this,b,c,c)};a.Db.prototype.bia=function(b){var c=b.keyCode;if(c===a.KeyboardEvent.Kf||c===a.KeyboardEvent.wf)c=c===a.KeyboardEvent.Kf?-1:1,(b.shiftKey?this.xta:this.dSa).call(this,c,c)};a.Db.prototype.lpb=function(a){a/=this.XU;this.Yq()&&(a=0-a);this.Qsa(a)};a.Db.prototype.CUa=function(b,c,f){this.eSa(a.Qc.Lja,
c,f)};a.Db.prototype.dSa=function(b,c){this.eSa(a.Qc.IDa,b,c)};a.Db.prototype.eSa=function(b,c,f){var h=this.tt(),k=this.Bw(h),l=this.iy(h),n=this.Cz,m=this.bea();c=this.Sb()?f:c;k+c<=n?(this.gN(h,n),l=this.Yq()?a.Qc.s6:a.Qc.I7):k+l+c>=m?(this.gN(h,m-l),l=this.Yq()?a.Qc.I7:a.Qc.s6):(this.gN(h,k+c),l=this.Yq()?(m-l-k-this.Cz)*this.XU:(k-this.Cz)*this.XU);this.R7();b=new a.Qc(b);b.setPosition(l);this.Yq()?(l=this.Pi(this.xb-(k+this.iy(h))),h=this.Pi(this.xb-k)):(l=this.Pi(k),h=this.Pi(k+this.iy(h)));
b.aga(l);b.$fa(h);this.dispatchEvent(b)};a.Db.prototype.Unb=function(a,b,c){this.AUa(a,b,c,!0)};a.Db.prototype.Sva=function(a,b,c){this.AUa(a,b,c,!1)};a.Db.prototype.AUa=function(b,c,f,h){var k=this.uM();f=this.Sb()?f:c;if(0!=f){c=this.tt();var l=this.Bw(c),n=this.e4(c);if(h){if(n-f<=this.dea()||l+f<=this.Cz)return;b=this.Sb()?this.u().eh(this.mea(b),this.nea(b)).y:this.u().eh(this.mea(b),this.nea(b)).x;b=this.Md(b);if(0<f&&b<=l||0>f&&b>=l)return;this.gN(c,l+f);this.dga(c,n-f)}else{if(n+f<=this.dea()||
l+n+f>=this.bea())return;b=this.Sb()?this.u().eh(this.mea(b),this.nea(b)).y:this.u().eh(this.mea(b),this.nea(b)).x;b=this.Md(b);if(0<f&&b<=l+n||0>f&&b>=l+n)return;this.dga(c,n+f)}this.R7();b=this.Pi(this.e4(c));b=k*(this.Ic-this.Zb)/(b-this.Zb);k=new a.Qc(a.Qc.HDa);k.bXa(b);k.csb(this.Yq()?h:!h);h?k.QWa(0>f):k.QWa(0<f);this.Yq()?(h=this.Pi(this.xb-(this.Bw(c)+this.iy(c))),c=this.Pi(this.xb-this.Bw(c))):(h=this.Pi(this.Bw(c)),c=this.Pi(this.Bw(c)+this.iy(c)));k.aga(h);k.$fa(c);this.dispatchEvent(k)}};
a.Db.prototype.xta=function(){var b=this.Zb,c=this.Ic,f=this.zb,h=this.uM(),k=this.tt(),l=this.Pi(this.iy(k)),b=h*(c-b)/(l-b),c=this.Pi(this.vqa),h=this.Pi(this.mqa);this.Yq()?(l=this.Pi(this.xb-(this.Bw(k)+this.iy(k))),k=this.Pi(this.xb-this.Bw(k))):(l=this.Pi(this.Bw(k)),k=this.Pi(this.Bw(k)+this.iy(k)));var n=new a.Qc(a.Qc.M7);n.Fsb(f);n.bXa(b);n.Gsb(c);n.Dsb(h);n.aga(l);n.$fa(k);this.dispatchEvent(n)};a.Db.prototype.R7=function(){var b=this.tt(),c=a.Db.eFa/2,f=this.Bw(b),h=f+c,b=f+this.e4(b)-
c,c=this.Aua(),k=this.Xua(),l=this.qTa(),n=this.fUa(),m=this.wSa(),r=this.uUa();this.dY(c,h,h);this.dY(k,b,b);this.dY(l,-1,f);this.dY(n,this.K3(k),-1);this.dY(m,this.K3(c),this.K3(k));this.dY(r,this.K3(c),this.K3(k))};a.Db.prototype.dispatchEvent=function(b){a.KA.dispatchEvent(this.Cc,this.pb,this,b)};a.Db.prototype.ya=function(){this.I&&(this.I.il(this),this.I.ya(),this.I=null);a.Ei.eo()?(this.jc(a.TouchEvent.Yi,this.kZ,!1,this),this.jc(a.TouchEvent.Yo,this.DBa,!1,this),this.jc(a.TouchEvent.Rm,this.Z6,
!1,this),this.jc(a.MouseEvent.Be,this.GN,!1,this)):(this.jc(a.MouseEvent.wj,this.V6,!1,this),this.jc(a.MouseEvent.ui,this.U6,!1,this),this.jc(a.MouseEvent.Be,this.GN,!1,this),this.jc(a.KeyboardEvent.ts,this.WS,!1,this),this.jc(a.KeyboardEvent.tv,this.bia,!1,this));a.Db.C.ya.call(this)};a.v.F(c,a.v);c.prototype.Init=function(a){this.ga=a};c.prototype.parse=function(a){return this.DZ(a)};c.prototype.DZ=function(b){var c={};c.RQa=b.animationOnClick;null!=b.startTime&&(c.start=b.startTime);null!=b.endTime&&
(c.end=b.endTime);null==c.start&&(c.start=(new Date).getTime());if(null==c.end||c.end<=c.start)c.end=c.start+864E5;null!=b.currentTime&&(c.currentTime=b.currentTime);null!=b.initialFocusTime&&(c.job=b.initialFocusTime);c.orientation="horizontal";null!=b.orientation&&(c.orientation=b.orientation);c.aSa=b.featuresOff;c.Iwa=b.minimumWindowSize;c.cpb=b.leftMargin;c.lrb=b.rightMargin;if(null!=b.viewportEndTime){var f=b.viewportEndTime,h=c.start;null!=b.viewportStartTime&&b.viewportStartTime<f&&(h=b.viewportStartTime);
c.width=null!=b.viewportEndPos?this.kRa(c.start,c.end,h,f,b.viewportEndPos):this.kRa(c.start,c.end,h,f,this.ga.xb);c.wxa=h}else c.wxa=c.start;0==c.width&&(c.width=1E3);c.WVa="below";c.XR="none";c.vwa=a.B.da(this.ga.u()).toString();null!=b.rtl&&(c.vwa=b.rtl.toString());c.Rva="#FFFFFF";c.Uva="#B3C6DB";c.uya="#FFFFFF";c.GXa=1;c.Cya="solid";c.Aya="solid";c.wya="solid";c.yya="solid";c.Bya="#4F4F4F";c.zya="#4F4F4F";c.vya="#4F4F4F";c.xya="#4F4F4F";c.Swa="#E6ECF3";c.lta="#C000D1";c.gya="#BCC7D2";c.vXa="#e5e5e5";
c.wXa=1;c.xVa="#FFFFFF";c.wVa=.7;c.AWa="#FFFFFF";c.zWa=.7;null!=b.style&&(null!=b.style.handleFillColor&&(c.Rva=b.style.handleFillColor),null!=b.style.handleTextureColor&&(c.Uva=b.style.handleTextureColor),null!=b.style.handleBackgroundImage&&(c.yUa=b.style.handleBackgroundImage),null!=b.style.handleWidth&&(c.BUa=b.style.handleWidth),null!=b.style.handleHeight&&(c.zUa=b.style.handleHeight),null!=b.style.windowBackgroundColor&&(c.uya=b.style.windowBackgroundColor),null!=b.style.windowBackgroundAlpha&&
(c.GXa=b.style.windowBackgroundAlpha),null!=b.style.windowBorderTopStyle&&(c.Cya=b.style.windowBorderTopStyle),null!=b.style.windowBorderRightStyle&&(c.Aya=b.style.windowBorderRightStyle),null!=b.style.windowBorderBottomStyle&&(c.wya=b.style.windowBorderBottomStyle),null!=b.style.windowBorderLeftStyle&&(c.yya=b.style.windowBorderLeftStyle),null!=b.style.windowBorderTopColor&&(c.Bya=b.style.windowBorderTopColor),null!=b.style.windowBorderRightColor&&(c.zya=b.style.windowBorderRightColor),null!=b.style.windowBorderBottomColor&&
(c.vya=b.style.windowBorderBottomColor),null!=b.style.windowBorderLeftColor&&(c.xya=b.style.windowBorderLeftColor),null!=b.style.overviewBackgroundColor&&(c.Swa=b.style.overviewBackgroundColor),null!=b.style.currentTimeIndicatorColor&&(c.lta=b.style.currentTimeIndicatorColor),null!=b.style.timeIndicatorColor&&(c.gya=b.style.timeIndicatorColor),null!=b.style.leftFilterPanelColor&&(c.xVa=b.style.leftFilterPanelColor),null!=b.style.leftFilterPanelAlpha&&(c.wVa=b.style.leftFilterPanelAlpha),null!=b.style.rightFilterPanelColor&&
(c.AWa=b.style.rightFilterPanelColor),null!=b.style.rightFilterPanelAlpha&&(c.zWa=b.style.rightFilterPanelAlpha));return c};c.prototype.kRa=function(a,b,c,h,k){a=k*(b-a);c=h-c;return 0==a||0==c?0:a/c};a.Qc=function(b){this.Init(a.Qc.xe);this.$s=b};a.v.F(a.Qc,a.Vg);a.Qc.xe="overview";a.Qc.Kja="dropCallback";a.Qc.JZ="scrollTime";a.Qc.Lja="scrollPos";a.Qc.IDa="scrollEnd";a.Qc.M7="rangeChange";a.Qc.HDa="rangeChanging";a.Qc.eEa="time";a.Qc.PCa="pos";a.Qc.G0a="oldSize";a.Qc.x0a="newSize";a.Qc.H0a="oldStartTime";
a.Qc.xCa="newStartTime";a.Qc.F0a="oldEndTime";a.Qc.wCa="newEndTime";a.Qc.LZa="expand";a.Qc.KZa="endHandle";a.Qc.I7=-1;a.Qc.s6=-2;a.Qc.prototype.Yn=function(){return this.$s};a.Qc.prototype.setTime=function(b){this.$k(a.Qc.eEa,b)};a.Qc.prototype.getTime=function(){return this.Vq(a.Qc.eEa)};a.Qc.prototype.Fsb=function(b){this.$k(a.Qc.G0a,b)};a.Qc.prototype.bXa=function(b){this.$k(a.Qc.x0a,b)};a.Qc.prototype.Gsb=function(b){this.$k(a.Qc.H0a,b)};a.Qc.prototype.aga=function(b){this.$k(a.Qc.xCa,b)};a.Qc.prototype.Hua=
function(){return this.Vq(a.Qc.xCa)};a.Qc.prototype.Dsb=function(b){this.$k(a.Qc.F0a,b)};a.Qc.prototype.$fa=function(b){this.$k(a.Qc.wCa,b)};a.Qc.prototype.Gua=function(){return this.Vq(a.Qc.wCa)};a.Qc.prototype.QWa=function(b){this.$k(a.Qc.LZa,b)};a.Qc.prototype.csb=function(b){this.$k(a.Qc.KZa,b)};a.Qc.prototype.setPosition=function(b){this.$k(a.Qc.PCa,b)};a.Qc.prototype.pi=function(){return this.Vq(a.Qc.PCa)};a.v.F(b,a.I);b.prototype.Qf=function(c){b.C.Qf.call(this,c);a.xj.R2(this.ee,this.XP,this.WP,
this.VP,this)};b.prototype.XP=function(b){return a.B.Va()?this.E1(b):this.B1(b)};b.prototype.WP=function(b){return a.B.Va()?this.D1(b):this.A1(b)};b.prototype.VP=function(b){return a.B.Va()?this.C1(b):this.z1(b)};b.prototype.Li=function(b,c){this.Dm||(this.Dm=this.Ba.sC());return new a.R(b-this.Dm.x,c-this.Dm.y)};b.prototype.B1=function(b){if(b.button!=a.MouseEvent.eja){var c=this.Li(b.pageX,b.pageY);a.I.sc(b);this.u().Pe.nG.parentNode.focus();return this.ee.NQ(b,c.x,c.y)}return!1};b.prototype.A1=
function(a){var b=this.Li(a.pageX,a.pageY);a.stopPropagation();this.ee.U2(a,b.x,b.y);return!0};b.prototype.z1=function(a){a.stopPropagation();this.ee.dI();this.Dm=null};b.prototype.E1=function(a){var b=a.touches;a.stopPropagation();return 1==b.length?(b=this.Li(b[0].pageX,b[0].pageY),a.preventDefault(),this.ee.NQ(a,b.x,b.y)):!1};b.prototype.D1=function(a){var b=a.touches;1==b.length&&(b=this.Li(b[0].pageX,b[0].pageY),this.ee.U2(a,b.x,b.y),a.preventDefault());a.stopPropagation()};b.prototype.C1=function(b){this.ee.dI();
a.I.sc(b);this.Dm=null};a.Ha(a,"Overview",a.Db);a.Ha(a.Db.prototype,"render",a.Db.prototype.ta)})(dvt);
  return dvt;
});
