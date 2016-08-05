/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var q;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(a){this.Init(a)}function c(a,b,c,d){this.Init(b,c,d);this.ga=a}function d(){}function e(){this.Init({alta:e.lh})}function f(a,b,c){this.Init(a,b,c)}function h(a,b,c,d,e,f,h,k,l){this.Init(a,b,c,d,e,f,h,k,l)}function k(a){this.BE=a}a.Wh=function(a,b,c){this.Init(a,b,c)};a.v.F(a.Wh,a.Je);a.Wh.newInstance=function(b,c,d){return new a.Wh(b,c,d)};a.Wh.prototype.Init=function(d,f,h){a.Wh.C.Init.call(this,d,f,h);this.u().Pe.Wa().setAttributeNS(null,"text-rendering","geometricPrecision");
this.I=new c(this,d,this.ag,this);this.I.Qf(this);a.B.Va()||this.I.bs(new b(this.I));this.Xg=new e;this.dc=[];this.gw=[];this.hk=null;this.Uj=new a.Ef(this.u());this.I.$R(this.Uj)};a.Wh.prototype.ta=function(b,c,d){isNaN(c)||isNaN(d)||(this.xb=c,this.Kb=d);this.ZZ();this.xf(b);this.ir();this.Ej=this.Ea;this.s1=this.dc;this.dc=[];this.BLa=[];this.Ea=new a.ma(this.u());this.A(this.Ea);l.ta(this,this.Ea,new a.Z(0,0,this.xb,this.Kb));this.Rc&&this.Rc.zt(this.W.selection,this.Aw());c=this.W.animationDuration;
d=new a.Z(0,0,this.xb,this.Kb);this.Ej?"none"!==this.W.animationOnDataChange&&b&&(this.$h=new a.ma(this.u()),this.A(this.$h),b=new a.vq(this.u(),this.$h),b.Io(this.s1,this.dc),this.lc=b.vw()):"none"!==this.W.animationOnDisplay&&(this.lc=a.pc.UE(this.u(),a.pc.TC,this.Ea,d,c));this.lc?(this.I.qe(),this.I.il(this),this.lc.lg(this.GCa,this),this.lc.play()):this.GCa();this.kr()};a.Wh.prototype.rxa=function(a){this.dc=a};a.Wh.prototype.oh=function(){this.Rd||(this.Rd=new k(this));return this.Rd};a.Wh.prototype.TM=
function(a,b){this.gw.push(a);this.BLa[b]=a};a.Wh.prototype.Aw=function(){return this.gw};a.Wh.prototype.dl=function(){return this.BLa};a.Wh.prototype.Xe=function(b){this.W.highlightedCategories=a.ac.clone(b);a.uh.Xe(b,this.Aw(),"any"===this.W.highlightMatch);this.hk&&this.hk.Xe(b)};a.Wh.prototype.select=function(b){this.W.selection=a.ac.clone(b);this.Rc&&this.Rc.zt(this.W.selection,this.Aw())};a.Wh.prototype.xf=function(b){b?this.W=this.Xg.fn(b):this.W||(this.W=this.NF());b=this.W.selectionMode;
this.Rc="single"===b?new a.Rc(a.Rc.Vy):"multiple"===b?new a.Rc(a.Rc.Uy):null;this.I.BA(this.Rc);a.B.uj()||(this.W.animationOnDisplay="none",this.W.animationOnDataChange="none")};a.Wh.prototype.em=function(){return a.H.Cf(this.D(),"componentName",a.H.Ia,"TAG_CLOUD")};a.Wh.prototype.GCa=function(){this.Ej&&(this.removeChild(this.Ej),this.Ej.ya(),this.Ej=null);this.$h&&(this.removeChild(this.$h),this.$h.ya(),this.$h=null);this.lc&&this.I.Qf(this);this.W.highlightedCategories&&0<this.W.highlightedCategories.length&&
this.Xe(this.W.highlightedCategories);this.vn||this.ys();this.lc=null;this.vn=!1};a.Wh.prototype.ZZ=function(){this.I.qe();this.gw.length=0};a.Wh.prototype.ag=function(b,c){var d=b.type;if("categoryHide"==d||"categoryShow"==d){var e=b.category,f=a.na.kb(this.W.hiddenCategories,e);"categoryHide"==d&&0>f&&this.W.hiddenCategories.push(e);"categoryShow"==d&&0<=f&&this.W.hiddenCategories.splice(f,1);this.ta(this.W,this.xb,this.Kb)}else"categoryHighlight"==d&&(this!=c?this.Xe(b.categories):this.hk&&this.hk!=
c&&this.hk.ag(b,c));b&&this.dispatchEvent(b)};a.Wh.prototype.sob=function(a){return this.Rc?a[0]:null};a.Wh.prototype.nlb=function(a){a.wb()||(this.Rc.rq(a,!1),this.I.gI());a=[];for(var b=this.Rc.getSelection(),c=0;c<b.length;c++){var d=b[c];d instanceof f&&a.push(d.getId())}return a};a.Wh.prototype.ht=function(){for(var a=[],b=this.Rc.getSelection(),c=0;c<b.length;c++)a=a.concat(b[c].Re());return a};a.Wh.prototype.Xl=function(a,b,c){return this.Uj.Xl(c)};a.Wh.prototype.Im=function(a,b){return this.Uj.Im(a,
b)};a.Wh.prototype.aA=function(a,b){return this.Uj.aA(a,b)};a.Wh.prototype.pC=function(a,b){return this.Uj.pC(a,b)};a.v.F(k,a.Rd);k.prototype.yn=function(a){return(a=this.BE.I.lb(a))&&a instanceof f?"item["+this.BE.dl().indexOf(a)+"]":null};k.prototype.ph=function(b){if(b==a.Rd.qD)return this.RF(this.BE);var c=b.indexOf("[");return 0<c&&"item"===b.substring(0,c)&&(b=parseInt(b.substring(c+1,b.length-1)),b=this.BE.dl()[b])?b.Re()[0].Wa():null};k.prototype.getItem=function(a){if(a=this.BE.dl()[a]){var b=
{};b.color=a.Ul();b.tooltip=a.me();b.label=a.ge();b.value=a.getValue();b.selected=a.wb();return b}return null};k.prototype.nM=function(){return this.BE.Aw().length};a.v.F(h,a.Ie);h.T4a=.3;h.U4a=.6;h.uga=0;h.D5=1;h.vga=2;h.prototype.Init=function(a,b,c,d,e,f,k,l,n){h.C.Init.call(this,b,c,d,e,f,n);this.BE=a;this.KE();this.Gf.ea(k);this.Gf.He(l);f&&this.gIa(f)};h.prototype.kc=function(a){this.Nl!=a&&((this.Nl=a)?this.Tp?this.Bb(this.oaa):this.Bb(this.ica):this.Bb(this.pL))};h.prototype.od=function(){this.Tp||
(this.Tp=!0,this.Nl?this.Bb(this.oaa):this.Bb(this.Noa))};h.prototype.Jc=function(){this.Nl?this.Bb(this.ica):this.Bb(this.pL);this.Tp=!1};h.prototype.sg=function(b,c){var d=new a.gd(this.u(),this,n.ob(this.BE)),e=this.Jd(),f=c.Jd(),k=!1,l=f.M(a.j.mc),u=e.M(a.j.mc);if(l!=u){var D=this;this.Bb(e.ea(a.j.mc,l));d.ja.N(a.G.mEa,this,function(){return D.Jd().M(a.j.mc)},function(b){D.Bb(D.Jd().ea(a.j.mc,b))},u)}f=parseFloat(f.M(a.j.fi));e=parseFloat(e.M(a.j.fi));f!=e&&(k=!0,D=this,this.fh(f),d.ja.N(a.G.V,
this,function(){return parseFloat(D.Jd().M(a.j.fi))},this.fh,e));e=c.Ua();f=this.Ua();l=c.Sq();u=this.Sq();if(f!=e||k&&u!=l)u!=l&&(e=h.v7a(c,e,l)),this.Fa(e),d.ja.N(a.G.V,this,this.Ua,this.Fa,f);k=c.ib();e=this.ib();e!=k&&(this.jb(k),d.ja.N(a.G.V,this,this.ib,this.jb,e));c.T(0);b.add(d,h.D5)};h.prototype.Jj=function(b){b.add(new a.Vi(this.u(),this,n.ob(this.BE)),h.uga)};h.prototype.Oi=function(b){this.T(0);b.add(new a.hh(this.u(),this,n.ob(this.BE)),h.vga)};h.prototype.fh=function(a){h.C.fh.call(this,
a);this.gIa(this.Jd())};h.prototype.gIa=function(b){this.pL=b.clone();b=this.pL.M(a.j.mc);this.pL.ea(a.j.Mb,null);this.Noa=this.pL.clone();var c=h.XLa(b,h.T4a);this.Noa.ea(a.j.Mb,c);this.Noa.ea(a.j.mc,a.O.Tl(c));this.ica=this.pL.clone();this.ica.ea(a.j.Mb,b);this.ica.ea(a.j.mc,a.O.Tl(b));this.oaa=this.pL.clone();b=h.XLa(b,h.U4a);this.oaa.ea(a.j.Mb,b);this.oaa.ea(a.j.mc,a.O.Tl(b))};h.v7a=function(b,c,d){b=b.xnb();return d==a.ca.Hp?c+b.a:d==a.ca.Il?c-b.a:c};h.XLa=function(b,c){var d=a.O.Ug(b),e=a.O.Rg(b),
f=a.O.Og(b);return a.O.EI(Math.floor(255*(1-c)+c*d),Math.floor(255*(1-c)+c*e),Math.floor(255*(1-c)+c*f))};a.v.F(f,a.v);f.prototype.Init=function(b,c,d){this.ga=b;this.cj=c;this.Nb=d;this.BO=this.Nl=!1;d.url?(c.bg("link"),this.Ipa=a.L.sM("_blank",d.url)):c.bg("img");this.Lr()};f.prototype.getId=function(){return this.Nb.id};f.prototype.ge=function(){return this.Nb.label};f.prototype.getValue=function(){return this.Nb.value};f.prototype.me=function(){return this.Nb.shortDesc};f.prototype.Ah=function(){return this.Nb.action};
f.prototype.Qg=function(){var a=this.ga.D().tooltip;return(a=a?a.renderer:null)?this.ga.u().Bf().by(a,this.jn()):this.me()};f.prototype.jn=function(){return{id:this.getId(),label:this.ge(),color:this.Ul(),value:this.getValue()}};f.prototype.sM=function(){return this.Ipa};f.prototype.Ul=function(){return this.cj.pL.M(a.j.mc)};f.prototype.jj=function(a){this.BO=a};f.prototype.tb=function(){return this.BO};f.prototype.wb=function(){return this.Nl};f.prototype.kc=function(a){this.Nl=a;this.cj.kc(a);this.Lr()};
f.prototype.od=function(){this.cj.od()};f.prototype.Jc=function(){this.cj.Jc()};f.prototype.Fd=function(c){var d=this.ga.I.Cb;return c.type==a.MouseEvent.Be||d.Uu(c)?this:d.Si(c)?b.Fd(this,c,this.ga.Aw()):null};f.prototype.tf=function(a){return this.cj.aa(a)};f.prototype.Jm=function(){return this.cj.Wa()};f.prototype.Sf=function(){this.dd=!0;this.od()};f.prototype.Qd=function(){this.dd&&(this.dd=!1,this.Jc())};f.prototype.Kd=function(){return this.dd};f.prototype.Re=function(){return[this.cj]};f.prototype.Ed=
function(){var b=[];this.tb()&&b.push(a.H.va(a.H.Ia,this.wb()?"STATE_SELECTED":"STATE_UNSELECTED"));return a.oa.Fk(this.me(),b)};f.prototype.Yd=function(){return this.Nb.categories};f.prototype.Lr=function(){a.B.hj()||this.cj.Gd("label",this.Ed())};f.prototype.Af=function(){if(!this.df&&(this.df=[],this.Nb.showPopupBehaviors))for(var b=this.Nb.showPopupBehaviors,c=0;c<b.length;c++)this.df.push(new a.Wc(b[c].popupId,b[c].triggerType,b[c].alignId,b[c].align));return this.df};f.prototype.Xl=function(a){return this.ga.sob(a)};
f.prototype.Im=function(){return this.ga.nlb(this)};f.prototype.ht=function(){return this.ga.ht()};a.v.F(e,a.eb);e.lh={animationOnDisplay:"none",animationOnDataChange:"none",emptyText:null,hiddenCategories:[],hideAndShowBehavior:"none",highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",layout:"rectangular",selectionMode:"none",_statusMessageStyle:new a.j(a.eb.Pm+"color: #333333;"),styleDefaults:{animationDuration:500,hoverBehaviorDelay:200,_style:new a.j(a.eb.Pm+"color: #333333;")},
touchResponse:"auto"};var l={};a.v.F(l,a.v);l.ta=function(a,b,c){l.Kr(a,b,c);l.EL(a,b,c);l.AD(c);var d=a.D();d.items&&0<d.items.length?(d=l.hra(a,b,c),0<d.length?(a.rxa(d),a.I.Zu(a.Aw()[0])):l.IH(a,b,c)):l.IH(a,b,c)};l.IH=function(b,c,d){var e=b.D(),f=e.emptyText;f||(f=a.H.Cf(e,"labelNoData",a.H.Ia,"NO_DATA",null));a.Ca.xp(c,f,new a.Z(d.x,d.y,d.a,d.b),b.I,e._statusMessageStyle)};l.Kr=function(b,c,d){b=new a.Rect(b.u(),d.x,d.y,d.a,d.b);b.Wb();c.A(b)};l.hra=function(b,c,e){for(var k=b.D(),l=[],v=k.items,
n=Number.MAX_VALUE,u=-Number.MAX_VALUE,D=0;D<v.length;D++)n=Math.min(n,v[D].value),u=Math.max(u,v[D].value);var n=d.Clb(n,u),u=a.na.QQ(k.hiddenCategories),C=a.j.rUa(),B=k.styleDefaults.style;!B||B instanceof Object||(B=a.j.SQ(B));for(D=0;D<v.length;D++){var A=v[D];A.categories||(A.categories=[A.label]);if(!u||!a.na.tX(u,A.categories)){var F=k.styleDefaults._style.clone(),y=A.style;!y||y instanceof Object||(y=a.j.SQ(y));var E=y&&y.color?y.color:A.color?A.color:B&&B.color?B.color:null;if(y=a.ac.Wd(y,
B)){for(var M=0;M<C.length;M++){var S=a.j.aM(C[M]);y[S]&&(F.ea(C[M],y[S]),delete y[S])}delete y.color}E&&F.ea(a.j.mc,E);F.ea(a.j.fi,n.call(null,A.value).toString());F=new h(b,b.u(),A.label,0,0,F,y,A.className,A.id);y=new f(b,F,A);b.I.mb(F,y);b.TM(y,D);"none"!==k.selectionMode&&y.jj(!0);(y.tb()||A.url||y.Ah())&&F.setCursor("pointer");l.push(F);c.A(F)}}0<l.length&&("cloud"===k.layout?d.Pib(e,l):d.Aqb(e,l,a.B.da(b.u())));return l};l.EL=function(b,c,d){var e=b.D(),f=e.legend;if(f&&f.sections){f=a.ac.clone(f);
f.orientation="horizontal";f.halign="center";f.hoverBehavior=e.hoverBehavior;f.hideAndShowBehavior=e.hideAndShowBehavior;f.hiddenCategories=e.hiddenCategories;e=a.vf.newInstance(b.u(),b.ag,b);c.A(e);var h=e.ot(f,d.a,d.b/3);e.ta(f,h.a,h.b);a.Cn.position(d,"bottom",e,h.a,h.b,0);b.hk&&(b.hk.ya(),c.removeChild(b.hk));b.hk=e}};l.AD=function(a){a.x=Math.round(a.x);a.y=Math.round(a.y);a.a=Math.round(a.a);a.b=Math.round(a.b)};a.v.F(d,a.v);d.Clb=function(a,b){return function(c){return 12+Math.ceil(2*(c-a)/
(b-a)*12)}};d.Pib=function(b,c){var d=[],e=10/180,f=10/180;b.a>b.b?e*=b.a/b.b:f*=b.b/b.a;for(var h=2*Math.PI/180,k=null,l=0,n=[],C=[],B=0;B<c.length;B++)for(var A=!1,F=0,y=4,E=c[B],M=E.aa(),l=Math.max(l,parseFloat(E.Jd().M(a.j.fi))),S=-1;!A;){var O=F%180;void 0===n[O]&&(n[O]=Math.cos(F*h));void 0===C[O]&&(C[O]=Math.sin(F*h));var fa=e*F*n[O],ga=f*F*C[O],aa=new a.Z(fa,ga,M.a,M.b),A=!0;-1!=S&&d[S].ewa(aa)&&(A=!1);if(A)for(O=0;O<B;O++)if(d[O].ewa(aa)){S=O;A=!1;break}A&&(k=k?k.tj(aa):aa,S=-1,d[B]=aa,E.Fa(fa),
E.jb(-M.y+ga));3600===F?y=3:5400===F?y=2:10800===F&&(y=1);F+=y}d=Math.max(k.a/b.a,k.b/b.b);e=k.x+k.a/2;k=k.y+k.b/2;for(O=0;O<c.length;O++)E=c[O],E.Fa(b.x+E.Ua()/d+(b.a/2-e/d)),E.jb(b.y+E.ib()/d+(b.b/2-k/d)),f=parseFloat(E.Jd().M(a.j.fi)),E.fh(f/d)};d.Aqb=function(b,c,e){for(var f=[],h=0,k=0,l=0,n=0;n<c.length;n++){var D=c[n],C=D.aa(),h=Math.max(h,C.a),k=Math.max(k,C.b),l=Math.max(l,parseFloat(D.Jd().M(a.j.fi)));f.push(new a.vj(C.a,C.b))}n=0;for(D=(b.a-10)/h;.001<D-n;)h=(n+D)/2,l=d.yHa(f,(b.a-10)/
h),l.length*(h*k+2)-2>b.b-10?D=h:n=h;h=n;l=d.yHa(f,(b.a-10)/h);l.push(c.length);for(n=0;n<l.length-1;n++){var C=l[n],B=l[n+1],A=0,F=0,y=!0;if(1<B-C){for(var D=0,E=C;E<B;E++)D+=f[E].a*h,F=Math.max(F,f[E].b*h);A=(b.a-10-D)/(B-C-1);n==l.length-2&&(E=.5*F,E<A&&D+(B-C)*E<.9*(b.a-10)&&(A=E,y=!1))}for(var F=5+(n+1)*(k*h+2)-2,M=e?b.a-5:5,E=C;E<B;E++){var D=c[E],S=parseFloat(D.Jd().M(a.j.fi));D.fh(S*h);D.jb(b.y+F);y&&E==B-1&&E!=C?e?(D.Rh(),D.Fa(b.x+5)):(D.Sh(),D.Fa(b.x+b.a-5)):(D.Fa(b.x+M),e?(D.Sh(),M-=f[E].a*
h+A):(D.Rh(),M+=f[E].a*h+A))}}};d.yHa=function(a,b){var c=[0],d=a[0].a+2;if(1<a.length)for(var e=1;e<a.length;e++)d+a[e].a>b&&(c.push(e),d=0),d+=a[e].a+2;return c};var n={};a.v.F(n,a.v);n.ob=function(a){return a.D().styleDefaults.animationDuration/1E3};a.v.F(c,a.I);c.prototype.eT=function(a){a=this.lb(a.target);this.Doa(a);this.jQ(a)};c.prototype.jZ=function(a){a=this.lb(a.target);this.jQ(a)};c.prototype.Xw=function(a){a=this.lb(a.target);this.Doa(a);this.jQ(a)};c.prototype.Doa=function(a){a instanceof
f&&(a=a.sM())&&a.call()};c.prototype.ll=function(b){var d=!0,e=this.lf();b.keyCode==a.KeyboardEvent.Xi?this.Doa(e):d=c.C.ll.call(this,b);return d};c.prototype.xq=function(b,c,d){b=this.ga.D();"dim"==b.hoverBehavior&&(c=c.Yd?c.Yd():[],b.highlightedCategories=d?c.slice():null,d=a.Za.HI(b.highlightedCategories,d),c=a.Ta.Tr(b.styleDefaults.hoverBehaviorDelay),this.LJ.ag(d,this.ga.Aw(),c,"any"==b.highlightMatch))};c.prototype.jQ=function(b){b&&b.Ah&&b.Ah()&&this.kl(a.Za.GI("action",b.Ah(),b.getId()))};
c.prototype.NA=function(){return this.ga.D().touchResponse};a.v.F(b,a.Cb);b.prototype.Init=function(a){b.C.Init.call(this,a)};b.prototype.lF=function(a){return this.Si(a)&&!a.ctrlKey};b.prototype.Uu=function(b){return b.keyCode==a.KeyboardEvent.ji&&b.ctrlKey};b.Fd=function(b,c,d){c=c.keyCode==a.KeyboardEvent.wf||c.keyCode==a.KeyboardEvent.Tf?!0:!1;b=a.na.kb(d,b)+(c?1:-1);return b<d.length&&0<=b?d[b]:null};a.v.F(function(){},a.FS);a.Ha(a,"TagCloud",a.Wh);a.Ha(a.Wh,"newInstance",a.Wh.newInstance);a.Ha(a.Wh.prototype,
"render",a.Wh.prototype.ta);a.Ha(a.Wh.prototype,"getAutomation",a.Wh.prototype.oh);a.Ha(a.Wh.prototype,"highlight",a.Wh.prototype.Xe);a.Ha(a.Wh.prototype,"select",a.Wh.prototype.select);a.Ha(k.prototype,"getDomElementForSubId",k.prototype.ph);a.Ha(k.prototype,"getItem",k.prototype.getItem);a.Ha(k.prototype,"getItemCount",k.prototype.nM)})(dvt);
  return dvt;
});
