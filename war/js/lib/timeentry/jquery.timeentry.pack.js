/* http://keith-wood.name/timeEntry.html
   Time entry for jQuery v1.4.7.
   Written by Keith Wood (kbwood{at}iinet.com.au) June 2007.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(q($){q 1j(){o.X=[];o.22=[];o.22[\'\']={1b:A,1c:\':\',1k:\'\',Y:[\'3G\',\'3H\'],2A:[\'3I\',\'3J 2B\',\'3K 2B\',\'3L\',\'3M\']};o.1z={2C:\'\',1A:A,25:[1,1,1],2D:0,2E:K,2F:u,2G:u,2H:u,2I:\'3N.3O\',1l:[20,20,8],2J:\'\',1B:[40,40,16],2K:A,26:[3P,3Q],2L:u,2M:u};$.1m(o.1z,o.22[\'\'])}7 m=\'n\';$.1m(1j.2N,{1d:\'3R\',3S:q(a){1C(o.1z,a||{});t o},2O:q(b,c){7 d=$(b);p(d.2P(o.1d)){t}7 e={};e.1n=$.1m({},c);e.D=0;e.Z=0;e.13=0;e.w=0;e.v=$(b);$.x(b,m,e);7 f=o.r(e,\'2I\');7 g=o.r(e,\'3T\');7 h=o.r(e,\'1l\');7 i=o.r(e,\'2C\');7 j=(!f?u:$(\'<14 1D="3U" 2Q="3V: 3W-3X; \'+\'27: 2R(\\\'\'+f+\'\\\') 0 0 2S-2T; \'+\'28: \'+h[0]+\'N; 2U: \'+h[1]+\'N;\'+($.J.2V&&$.J.3Y<\'1.9\'?\' 2W-T: \'+h[0]+\'N; 2W-3Z: \'+(h[1]-18)+\'N;\':\'\')+\'"></14>\'));d.41(\'<14 1D="42"></14>\').2X(i?\'<14 1D="43">\'+i+\'</14>\':\'\').2X(j||\'\');d.44(o.1d).15(\'29.n\',o.2a).15(\'45.n\',o.2Y).15(\'47.n\',o.2Z).15(\'49.n\',o.30).15(\'4a.n\',o.31);p($.J.2V){d.15(\'v.n\',q(a){$.n.1e(e)})}p($.J.2b){d.15(\'4b.n\',q(a){1E(q(){$.n.1e(e)},1)})}p(o.r(e,\'2E\')&&$.1F.2c){d.2c(o.32)}p(j){j.33(o.2d).2e(o.1G).4c(o.34).2f(o.1G).3a(o.2g)}},4d:q(a){o.2h(a,A)},4e:q(a){o.2h(a,K)},2h:q(b,c){7 d=$.x(b,m);p(!d){t}b.3b=c;p(b.2i&&b.2i.1H.1o()==\'14\'){$.n.1I(d,b.2i,(c?5:-1))}$.n.X=$.3c($.n.X,q(a){t(a==b?u:a)});p(c){$.n.X.4f(b)}},1p:q(a){t $.4g(a,o.X)>-1},4h:q(a,b){7 c=$.x(a,m);p(c){7 d=o.1J(c);1C(c.1n,b||{});p(d){o.17(c,E I(0,0,0,d[0],d[1],d[2]))}}$.x(a,m,c)},4i:q(b){$v=$(b);p(!$v.2P(o.1d)){t}$v.4j(o.1d).4k(\'.n\');p($.1F.2c){$v.4l()}o.X=$.3c(o.X,q(a){t(a==b?u:a)});$v.4m().4n($v);$.4o(b,m)},4p:q(a,b){7 c=$.x(a,m);p(c){o.17(c,b?(1q b==\'4q\'?E I(b.2j()):b):u)}},3d:q(a){7 b=$.x(a,m);7 c=(b?o.1J(b):u);t(!c?u:E I(0,0,0,c[0],c[1],c[2]))},2a:q(a){7 b=(a.1H&&a.1H.1o()==\'v\'?a:o);p($.n.O==b||$.n.1p(b)){$.n.1K=A;t}7 c=$.x(b,m);$.n.1K=K;$.n.O=b;$.n.1f=u;7 d=$.n.r(c,\'2L\');1C(c.1n,(d?d.1L(b,[b]):{}));$.x(b,m,c);$.n.1e(c);1E(q(){$.n.19(c)},10)},2Y:q(a){$.n.1f=$.n.O;$.n.O=u},2Z:q(b){7 c=b.1g;7 d=$.x(c,m);p(!$.n.1K){7 e=$.n.r(d,\'1c\').F+2;d.w=0;p(c.3e!=u){1M(7 f=0;f<=G.1h(1,d.U,d.C);f++){7 g=(f!=d.C?(f*e)+2:(d.C*e)+$.n.r(d,\'1k\').F+$.n.r(d,\'Y\')[0].F);d.w=f;p(c.3e<g){B}}}L p(c.1N){7 h=$(b.3f);7 i=c.1N();7 j=q(a){t{4r:2,4s:4,4t:6}[a]||a};7 k=b.3g+1r.2k.1s-(h.1O().T+P(j(h.1t(\'4u-T-28\')),10))-i.2l;1M(7 f=0;f<=G.1h(1,d.U,d.C);f++){7 g=(f!=d.C?(f*e)+2:(d.C*e)+$.n.r(d,\'1k\').F+$.n.r(d,\'Y\')[0].F);i.4v();i.3h(\'2m\',g);d.w=f;p(k<i.4w){B}}}}$.x(c,m,d);$.n.19(d);$.n.1K=A},30:q(a){p(a.2n>=48){t K}7 b=$.x(a.1g,m);2o(a.2n){y 9:t(a.4x?$.n.V(b,-1,K):$.n.V(b,+1,K));y 35:p(a.3i){$.n.1P(b,\'\')}L{b.w=G.1h(1,b.U,b.C);$.n.Q(b,0)}B;y 36:p(a.3i){$.n.17(b)}L{b.w=0;$.n.Q(b,0)}B;y 37:$.n.V(b,-1,A);B;y 38:$.n.Q(b,+1);B;y 39:$.n.V(b,+1,A);B;y 40:$.n.Q(b,-1);B;y 46:$.n.1P(b,\'\');B}t A},31:q(a){7 b=4y.4z(a.3j==4A?a.2n:a.3j);p(b<\' \'){t K}7 c=$.x(a.1g,m);$.n.3k(c,b);t A},32:q(a,b){p($.n.1p(a.1g)){t}b=($.J.3l?-b/G.1Q(b):($.J.2p?b/G.1Q(b):b));7 c=$.x(a.1g,m);c.v.29();p(!c.v.R()){$.n.1e(c)}$.n.Q(c,b);a.4B()},34:q(b){7 c=$.n.1a(b);7 d=$.x($.n.1i(c),m);7 e=$.n.r(d,\'2J\');p(e){d.1R=K;7 f=$(c).1O();7 g=u;$(c).3m().2q(q(){7 a=$(o);p(a.1t(\'1u\')==\'4C\'||a.1t(\'1u\')==\'3n\'){g=a.1O()}t!g});7 h=$.n.r(d,\'1l\');7 i=$.n.r(d,\'1B\');$(\'<3o 1D="4D" 2Q="1u: 3n; T: \'+(f.T-(i[0]-h[0])/2-(g?g.T:0))+\'N; 1v: \'+(f.1v-(i[1]-h[1])/2-(g?g.1v:0))+\'N; 28: \'+i[0]+\'N; 2U: \'+i[1]+\'N; 27: 4E 2R(\'+e+\') 2S-2T 2r 2r; z-4F: 10;"></3o>\').33($.n.2d).2e($.n.1G).2f($.n.3p).3a($.n.2g).4G(c)}},1i:q(a){t $(a).4H(\'.\'+$.n.1d)[0]},2g:q(a){7 b=$.n.1a(a);7 c=$.x($.n.1i(b),m);b.4I=$.n.r(c,\'2A\')[$.n.2s(c,a)]},2d:q(a){7 b=$.n.1a(a);7 c=$.n.1i(b);p($.n.1p(c)){t}p(c==$.n.1f){$.n.O=c;$.n.1f=u}7 d=$.x(c,m);$.n.2a(c);7 e=$.n.2s(d,a);$.n.1I(d,b,e);$.n.2t(d,e);$.n.W=u;$.n.1S=K;7 f=$.n.r(d,\'26\');p(e>=3&&f[0]){$.n.W=1E(q(){$.n.2u(d,e)},f[0]);$(b).3q(\'2f\',$.n.2v).3q(\'2e\',$.n.2v)}},2t:q(a,b){p(!a.v.R()){$.n.1e(a)}2o(b){y 0:o.17(a);B;y 1:o.V(a,-1,A);B;y 2:o.V(a,+1,A);B;y 3:o.Q(a,+1);B;y 4:o.Q(a,-1);B}},2u:q(a,b){p(!$.n.W){t}$.n.O=$.n.1f;o.2t(a,b);o.W=1E(q(){$.n.2u(a,b)},o.r(a,\'26\')[1])},2v:q(a){4J($.n.W);$.n.W=u},3p:q(a){$.n.W=u;7 b=$.n.1a(a);7 c=$.n.1i(b);7 d=$.x(c,m);$(b).4K();d.1R=A},1G:q(a){$.n.W=u;7 b=$.n.1a(a);7 c=$.n.1i(b);7 d=$.x(c,m);p(!$.n.1p(c)){$.n.1I(d,b,-1)}p($.n.1S){$.n.O=$.n.1f}p($.n.O&&$.n.1S){$.n.19(d)}$.n.1S=A},1a:q(a){t a.1g||a.3f},2s:q(a,b){7 c=o.1a(b);7 d=($.J.3l||$.J.2p?$.n.3r(c):$(c).1O());7 e=($.J.2p?$.n.3s(c):[1r.2k.1s||1r.3t.1s,1r.2k.1T||1r.3t.1T]);7 f=o.r(a,\'2K\');7 g=(f?3u:b.3g+e[0]-d.T-($.J.2b?2:0));7 h=b.4L+e[1]-d.1v-($.J.2b?2:0);7 i=o.r(a,(a.1R?\'1B\':\'1l\'));7 j=(f?3u:i[0]-1-g);7 k=i[1]-1-h;p(i[2]>0&&G.1Q(g-j)<=i[2]&&G.1Q(h-k)<=i[2]){t 0}7 l=G.3v(g,h,j,k);t(l==g?1:(l==j?2:(l==h?3:4)))},1I:q(a,b,c){$(b).1t(\'27-1u\',\'-\'+((c+1)*o.r(a,(a.1R?\'1B\':\'1l\'))[0])+\'N 2r\')},3r:q(a){7 b=1U=0;p(a.3w){b=a.2l;1U=a.3x;2w(a=a.3w){7 c=b;b+=a.2l;p(b<0){b=c}1U+=a.3x}}t{T:b,1v:1U}},3s:q(a){7 b=A;$(a).3m().2q(q(){b|=$(o).1t(\'1u\')==\'4M\'});p(b){t[0,0]}7 c=a.1s;7 d=a.1T;2w(a=a.4N){c+=a.1s||0;d+=a.1T||0}t[c,d]},r:q(a,b){t(a.1n[b]!=u?a.1n[b]:$.n.1z[b])},1e:q(a){7 b=o.1J(a);7 c=o.r(a,\'1A\');p(b){a.D=b[0];a.Z=b[1];a.13=b[2]}L{7 d=o.1w(a);a.D=d[0];a.Z=d[1];a.13=(c?d[2]:0)}a.U=(c?2:-1);a.C=(o.r(a,\'1b\')?-1:(c?3:2));a.1V=\'\';a.w=G.1h(0,G.3v(G.1h(1,a.U,a.C),o.r(a,\'2D\')));p(a.v.R()!=\'\'){o.2x(a)}},1J:q(a){7 b=a.v.R();7 c=o.r(a,\'1c\');7 d=b.4O(c);p(c==\'\'&&b!=\'\'){d[0]=b.1x(0,2);d[1]=b.1x(2,4);d[2]=b.1x(4,6)}7 e=o.r(a,\'Y\');7 f=o.r(a,\'1b\');p(d.F>=2){7 g=!f&&(b.3y(e[0])>-1);7 h=!f&&(b.3y(e[1])>-1);7 i=P(d[0],10);i=(2y(i)?0:i);i=((g||h)&&i==12?0:i)+(h?12:0);7 j=P(d[1],10);j=(2y(j)?0:j);7 k=(d.F>=3?P(d[2],10):0);k=(2y(k)||!o.r(a,\'1A\')?0:k);t o.1w(a,[i,j,k])}t u},1w:q(a,b){7 c=(b!=u);p(!c){7 d=o.1y(o.r(a,\'2F\'))||E I();b=[d.1W(),d.1X(),d.1Y()]}7 e=A;7 f=o.r(a,\'25\');1M(7 i=0;i<f.F;i++){p(e){b[i]=0}L p(f[i]>1){b[i]=G.4P(b[i]/f[i])*f[i];e=K}}t b},2x:q(a){7 b=o.r(a,\'1b\');7 c=o.r(a,\'1c\');7 d=(o.1Z(b?a.D:((a.D+11)%12)+1)+c+o.1Z(a.Z)+(o.r(a,\'1A\')?c+o.1Z(a.13):\'\')+(b?\'\':o.r(a,\'1k\')+o.r(a,\'Y\')[(a.D<12?0:1)]));o.1P(a,d);o.19(a)},19:q(a){7 b=a.v[0];p(a.v.4Q(\':4R\')||$.n.O!=b){t}7 c=o.r(a,\'1c\');7 d=c.F+2;7 e=(a.w!=a.C?(a.w*d):(a.C*d)-c.F+o.r(a,\'1k\').F);7 f=e+(a.w!=a.C?2:o.r(a,\'Y\')[0].F);p(b.3z){b.3z(e,f)}L p(b.1N){7 g=b.1N();g.4S(\'2m\',e);g.3h(\'2m\',f-a.v.R().F);g.4T()}p(!b.3b){b.29()}},1Z:q(a){t(a<10?\'0\':\'\')+a},1P:q(a,b){p(b!=a.v.R()){a.v.R(b).4U(\'4V\')}},V:q(a,b,c){7 d=(a.v.R()==\'\'||a.w==(b==-1?0:G.1h(1,a.U,a.C)));p(!d){a.w+=b}o.19(a);a.1V=\'\';$.x(a.v[0],m,a);t(d&&c)},Q:q(a,b){p(a.v.R()==\'\'){b=0}7 c=o.r(a,\'25\');o.17(a,E I(0,0,0,a.D+(a.w==0?b*c[0]:0)+(a.w==a.C?b*12:0),a.Z+(a.w==1?b*c[1]:0),a.13+(a.w==a.U?b*c[2]:0)))},17:q(a,b){b=o.1y(b);7 c=o.1w(a,b?[b.1W(),b.1X(),b.1Y()]:u);b=E I(0,0,0,c[0],c[1],c[2]);7 b=o.21(b);7 d=o.21(o.1y(o.r(a,\'2G\')));7 e=o.21(o.1y(o.r(a,\'2H\')));b=(d&&b<d?d:(e&&b>e?e:b));7 f=o.r(a,\'2M\');p(f){b=f.1L(a.v[0],[o.3d(a.v[0]),b,d,e])}a.D=b.1W();a.Z=b.1X();a.13=b.1Y();o.2x(a);$.x(a.v[0],m,a)},1y:q(h){7 i=q(a){7 b=E I();b.4W(b.2j()+a*4X);t b};7 j=q(a){7 b=E I();7 c=b.1W();7 d=b.1X();7 e=b.1Y();7 f=/([+-]?[0-9]+)\\s*(s|S|m|M|h|H)?/g;7 g=f.3A(a);2w(g){2o(g[2]||\'s\'){y\'s\':y\'S\':e+=P(g[1],10);B;y\'m\':y\'M\':d+=P(g[1],10);B;y\'h\':y\'H\':c+=P(g[1],10);B}g=f.3A(a)}b=E I(0,0,10,c,d,e,0);p(/^!/.4Y(a)){p(b.3B()>10){b=E I(0,0,10,23,59,59)}L p(b.3B()<10){b=E I(0,0,10,0,0,0)}}t b};t(h?(1q h==\'2z\'?j(h):(1q h==\'4Z\'?i(h):h)):u)},21:q(a){p(!a){t u}a.50(51);a.52(0);a.53(0);t a},3k:q(a,b){p(b==o.r(a,\'1c\')){o.V(a,+1,A)}L p(b>=\'0\'&&b<=\'9\'){7 c=P(b,10);7 d=P(a.1V+b,10);7 e=o.r(a,\'1b\');7 f=(a.w!=0?a.D:(e?(d<24?d:c):(d>=1&&d<=12?d:(c>0?c:a.D))%12+(a.D>=12?12:0)));7 g=(a.w!=1?a.Z:(d<3C?d:c));7 h=(a.w!=a.U?a.13:(d<3C?d:c));7 i=o.1w(a,[f,g,h]);o.17(a,E I(0,0,0,i[0],i[1],i[2]));a.1V=b}L p(!o.r(a,\'1b\')){7 j=o.r(a,\'Y\');p((b==j[0].1x(0,1).1o()&&a.D>=12)||(b==j[1].1x(0,1).1o()&&a.D<12)){7 k=a.w;a.w=a.C;o.Q(a,+1);a.w=k;o.19(a)}}}});q 1C(a,b){$.1m(a,b);1M(7 c 54 b){p(b[c]==u){a[c]=u}}t a}$.1F.n=q(c){7 d=55.2N.56.57(58,1);p(1q c==\'2z\'&&(c==\'5a\'||c==\'2j\')){t $.n[\'3D\'+c+\'1j\'].1L($.n,[o[0]].3E(d))}t o.2q(q(){7 a=o.1H.1o();p(a==\'v\'){p(1q c==\'2z\'){$.n[\'3D\'+c+\'1j\'].1L($.n,[o].3E(d))}L{7 b=($.1F.3F?$(o).3F():{});$.n.2O(o,$.1m(b,c))}}})};$.n=E 1j()})(5b);',62,322,'|||||||var||||||||||||||||timeEntry|this|if|function|_get||return|null|input|_field|data|case||false|break|_ampmField|_selectedHour|new|length|Math||Date|browser|true|else||px|_lastInput|parseInt|_adjustField|val||left|_secondField|_changeField|_timer|_disabledInputs|ampmNames|_selectedMinute||||_selectedSecond|span|bind||_setTime||_showField|_getSpinnerTarget|show24Hours|separator|markerClassName|_parseTime|_blurredInput|target|max|_getInput|TimeEntry|ampmPrefix|spinnerSize|extend|options|toLowerCase|_isDisabledTimeEntry|typeof|document|scrollLeft|css|position|top|_constrainTime|substring|_determineTime|_defaults|showSeconds|spinnerBigSize|extendRemove|class|setTimeout|fn|_endSpinner|nodeName|_changeSpinner|_extractTime|_focussed|apply|for|createTextRange|offset|_setValue|abs|_expanded|_handlingSpinner|scrollTop|curTop|_lastChr|getHours|getMinutes|getSeconds|_formatNumber||_normaliseTime|regional|||timeSteps|spinnerRepeat|background|width|focus|_doFocus|msie|mousewheel|_handleSpinner|mouseup|mouseout|_describeSpinner|_enableDisable|nextSibling|getTime|documentElement|offsetLeft|character|keyCode|switch|safari|each|0px|_getSpinnerRegion|_actionSpinner|_repeatSpinner|_releaseSpinner|while|_showTime|isNaN|string|spinnerTexts|field|appendText|initialField|useMouseWheel|defaultTime|minTime|maxTime|spinnerImage|spinnerBigImage|spinnerIncDecOnly|beforeShow|beforeSetTime|prototype|_connectTimeEntry|hasClass|style|url|no|repeat|height|mozilla|padding|after|_doBlur|_doClick|_doKeyDown|_doKeyPress|_doMouseWheel|mousedown|_expandSpinner||||||mousemove|disabled|map|_getTimeTimeEntry|selectionStart|srcElement|clientX|moveEnd|ctrlKey|charCode|_handleKeyPress|opera|parents|absolute|div|_endExpand|one|_findPos|_findScroll|body|99|min|offsetParent|offsetTop|indexOf|setSelectionRange|exec|getDate|60|_|concat|metadata|AM|PM|Now|Previous|Next|Increment|Decrement|spinnerDefault|png|500|250|hasTimeEntry|setDefaults|spinnerText|timeEntry_control|display|inline|block|version|bottom||wrap|timeEntry_wrap|timeEntry_append|addClass|blur||click||keydown|keypress|paste|mouseover|_enableTimeEntry|_disableTimeEntry|push|inArray|_changeTimeEntry|_destroyTimeEntry|removeClass|unbind|unmousewheel|parent|replaceWith|removeData|_setTimeTimeEntry|object|thin|medium|thick|border|collapse|boundingWidth|shiftKey|String|fromCharCode|undefined|preventDefault|relative|timeEntry_expand|transparent|index|insertAfter|siblings|title|clearTimeout|remove|clientY|fixed|parentNode|split|round|is|hidden|moveStart|select|trigger|change|setTime|1000|test|number|setFullYear|1900|setMonth|setDate|in|Array|slice|call|arguments||isDisabled|jQuery'.split('|'),0,{}))