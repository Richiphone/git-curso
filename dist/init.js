window.addEventListener?window.addEventListener("resize",browserResize):window.attachEvent&&window.attachEvent("onresize",browserResize);var xbeforeResize=window.innerWidth,ybeforeResize=window.innerWidth,zbeforeResize=window.innerWidth,sbeforeResize=window.innerWidth,abeforeResize=window.innerWidth;function skyscraperResize(){window.innerWidth<992&&document.getElementById("div-gpt-ad-1422003450156-5")&&(document.getElementById("div-gpt-ad-1422003450156-5").style.minHeight="0")}function browserResize(){var e=window.innerWidth;(xbeforeResize<1464&&1464<=e||1464<=xbeforeResize&&e<1464||xbeforeResize<714&&714<=e||714<=xbeforeResize&&e<714||xbeforeResize<497&&497<=e||497<=xbeforeResize&&e<497)&&(xbeforeResize=e,googletag.cmd.push(function(){googletag.pubads().refresh([gptAdSlots[0]])})),(ybeforeResize<1689&&1689<=e||1689<=ybeforeResize&&e<1689||ybeforeResize<1114&&1114<=e||1114<=ybeforeResize&&e<1114||ybeforeResize<992&&992<=e||992<=ybeforeResize&&e<992)&&(ybeforeResize=e,skyscraperResize(),googletag.cmd.push(function(){googletag.pubads().refresh([gptAdSlots[1]])})),(zbeforeResize<1254&&1254<=e||1254<=zbeforeResize&&e<1254)&&(zbeforeResize=e,googletag.cmd.push(function(){googletag.pubads().refresh([gptAdSlots[2],gptAdSlots[3]])})),(sbeforeResize<1689&&1689<=e||1689<=sbeforeResize&&e<1689||sbeforeResize<1114&&1114<=e||1114<=sbeforeResize&&e<1114||sbeforeResize<992&&992<=e||992<=sbeforeResize&&e<992)&&(sbeforeResize=e,googletag.cmd.push(function(){googletag.pubads().refresh([gptAdSlots[4]])})),(abeforeResize<1454&&1454<=e||1454<=abeforeResize&&e<1454||abeforeResize<1149&&1149<=e||1149<=abeforeResize&&e<1149||abeforeResize<1007&&1007<=e||1007<=abeforeResize&&e<1007||abeforeResize<764&&1149<=e||764<=abeforeResize&&e<764||abeforeResize<507&&507<=e||507<=abeforeResize&&e<507)&&(abeforeResize=e,googletag.cmd.push(function(){googletag.pubads().refresh([gptAdSlots[5]])}))}function open_menu(){var e,t;if("block"==(t=document.getElementById("leftmenu")||document.getElementById("sidenav")).style.display)close_menu();else{if(w3_close_all_nav(),t.style.display="block",document.getElementsByClassName){for(e=document.getElementsByClassName("chapter"),i=0;i<e.length;i++)e[i].style.visibility="hidden";for(e=document.getElementsByClassName("nav"),i=0;i<e.length;i++)e[i].style.visibility="hidden";for(e=document.getElementsByClassName("sharethis"),i=0;i<e.length;i++)e[i].style.visibility="hidden"}fix_sidemenu()}}function close_menu(){if((document.getElementById("leftmenu")||document.getElementById("sidenav")).style.display="none",document.getElementsByClassName){for(x=document.getElementsByClassName("chapter"),i=0;i<x.length;i++)x[i].style.visibility="visible";for(x=document.getElementsByClassName("nav"),i=0;i<x.length;i++)x[i].style.visibility="visible";for(x=document.getElementsByClassName("sharethis"),i=0;i<x.length;i++)x[i].style.visibility="visible"}}function fix_sidemenu(){var e,t;e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t=scrolltop(),e<993&&600<e?(0==t&&(document.getElementById("sidenav").style.top="144px"),0<t&&t<100&&(document.getElementById("sidenav").style.top=144-t+"px"),100<t?(document.getElementById("sidenav").style.top=document.getElementById("topnav").offsetHeight+"px",document.getElementById("belowtopnav").style.paddingTop="44px",document.getElementById("topnav").style.position="fixed",document.getElementById("topnav").style.top="0",document.getElementById("googleSearch").style.position="fixed",document.getElementById("googleSearch").style.top="0",document.getElementById("google_translate_element").style.position="fixed",document.getElementById("google_translate_element").style.top="0"):(document.getElementById("belowtopnav").style.paddingTop="0",document.getElementById("topnav").style.position="relative",document.getElementById("googleSearch").style.position="absolute",document.getElementById("googleSearch").style.top="",document.getElementById("google_translate_element").style.position="absolute",document.getElementById("google_translate_element").style.top=""),document.getElementById("leftmenuinner").style.paddingTop="0"):(0==t&&(document.getElementById("sidenav").style.top="112px"),0<t&&t<66&&(document.getElementById("sidenav").style.top=112-t+"px"),66<t?(document.getElementById("sidenav").style.top="44px",992<e&&(document.getElementById("leftmenuinner").style.paddingTop="44px"),document.getElementById("belowtopnav").style.paddingTop="44px",document.getElementById("topnav").style.position="fixed",document.getElementById("topnav").style.top="0",document.getElementById("googleSearch").style.position="fixed",document.getElementById("googleSearch").style.top="0",document.getElementById("google_translate_element").style.position="fixed",document.getElementById("google_translate_element").style.top="0"):(992<e&&(document.getElementById("leftmenuinner").style.paddingTop=112-t+"px"),document.getElementById("belowtopnav").style.paddingTop="0",document.getElementById("topnav").style.position="relative",document.getElementById("googleSearch").style.position="absolute",document.getElementById("googleSearch").style.top="",document.getElementById("google_translate_element").style.position="absolute",document.getElementById("google_translate_element").style.top=""))}function sidemenuitemintoview(){var e,t,n=0;if(!(e=document.getElementById("leftmenuinnerinner"))||!e.getElementsByClassName)return!1;if((t=e.getElementsByClassName("active")).length<1)return!1;for(;!(isIntoView(e,t[0])||1e3<++n);)e.scrollTop+=10}function isIntoView(e,t){var n=e.scrollTop,s=n+window.innerHeight,o=t.offsetTop;return o+140<=s&&n<=o}function scrolltop(){var e=0;return"number"==typeof window.pageYOffset?e=window.pageYOffset:document.body&&document.body.scrollTop?e=document.body.scrollTop:document.documentElement&&document.documentElement.scrollTop&&(e=document.documentElement.scrollTop),e}function open_translate(e){var t=document.getElementById("google_translate_element");""==t.style.display?(t.style.display="none",e.innerHTML="&#xe801;"):(t.style.display="",500<window.innerWidth?t.style.width="40%":t.style.width="100%",e.innerHTML="<span style='font-family:verdana;font-weight:bold;'>X</span>")}function open_search(e){var t=document.getElementById("googleSearch");""==t.style.display?(t.style.display="none",t.style.paddingRight="",e.innerHTML="&#xe802;"):(t.style.display="",700<window.innerWidth?t.style.width="40%":t.style.width="80%",document.getElementById("gsc-i-id1")&&document.getElementById("gsc-i-id1").focus(),e.innerHTML="<span style='font-family:verdana;font-weight:bold;'>X</span>")}function w3_open_nav(e){var t;"block"==document.getElementById("nav_"+e).style.display?w3_close_nav(e):(w3_close_all_nav(),document.getElementById("nav_"+e).style.display="block",document.getElementById("topnavbtn_"+e)&&(document.getElementById("topnavbtn_"+e).getElementsByTagName("i")[0].style.display="none",document.getElementById("topnavbtn_"+e).getElementsByTagName("i")[1].style.display="inline")),(t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)<document.getElementById("nav_"+e).offsetHeight&&(document.getElementById("nav_"+e).style.height=t-106+"px")}function w3_close_nav(e){document.getElementById("nav_"+e).style.display="none",document.getElementById("topnavbtn_"+e)&&(document.getElementById("topnavbtn_"+e).getElementsByTagName("i")[0].style.display="inline",document.getElementById("topnavbtn_"+e).getElementsByTagName("i")[1].style.display="none",document.getElementById("nav_"+e).style.height="")}function w3_close_all_nav(){w3_close_all_topnav(),close_menu()}function w3_close_all_topnav(){w3_close_nav("tutorials"),w3_close_nav("references"),w3_close_nav("examples")}function searchfield_focus(e){e.style.color="",e.style.fontStyle="","Search w3schools.com"==e.value&&(e.value="")}skyscraperResize(),window.addEventListener?(window.addEventListener("scroll",function(){fix_sidemenu()}),window.addEventListener("resize",function(){fix_sidemenu()}),window.addEventListener("touchmove",function(){fix_sidemenu()}),window.addEventListener("load",function(){fix_sidemenu()})):window.attachEvent&&(window.attachEvent("onscroll",function(){fix_sidemenu()}),window.attachEvent("onresize",function(){fix_sidemenu()}),window.attachEvent("ontouchmove",function(){fix_sidemenu()}),window.attachEvent("onload",function(){fix_sidemenu()})),function(){var e,t,n,s,o,l,r;for(e=(r=document.getElementById("leftmenu")||document.getElementById("sidenav")).getElementsByTagName("A"),l=document.location.href,t=0;t<e.length;t++)0<=l.indexOf(e[t].href)?e[t].className="active":-1<l.indexOf("/tags/att_")?(o=l.substring(l.indexOf("/tags/att_")+10,l.lastIndexOf("_")),e[t].href==l.substr(0,l.indexOf("/tags/"))+"/tags/tag_"+o+".asp"&&(e[t].className="active")):-1<l.indexOf("/howto/default_page")&&-1<e[t].href.indexOf("default.asp")&&(e[t].className="active");for(sidemenuitemintoview(),e=document.getElementById("topnav").getElementsByTagName("A"),t=0;t<e.length;t++)n=document.location.pathname,s=e[t].pathname,("LI"==e[t].parentNode.tagName||-1<e[t].parentNode.className.indexOf("w3-bar"))&&n.substr(0,n.indexOf("/",1))==s.substr(0,s.indexOf("/",1))&&(e[t].className+=" active");window.addEventListener?(document.getElementById("main").addEventListener("click",w3_close_all_nav,!0),r.addEventListener("click",w3_close_all_topnav,!0),document.getElementById("right").addEventListener("click",w3_close_all_nav,!0)):window.attachEvent&&(document.getElementById("main").attachEvent("onclick",w3_close_all_nav),r.attachEvent("onclick",w3_close_all_topnav),document.getElementById("right").attachEvent("onclick",w3_close_all_nav)),("ontouchstart"in window||"onmsgesturechange"in window)&&(document.getElementById("leftmenuinnerinner").style.overflowY="scroll")}(),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https:":"http:")+"//www.google.com/cse/cse.js?cx=012971019331610648934:m2tou3_miwy";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var addr=document.location.href;function displayError(){document.getElementById("err_url").value=addr,document.getElementById("err_form").style.display="block",document.getElementById("err_email").focus(),hideSent()}function hideError(){document.getElementById("err_form").style.display="none"}function hideSent(){document.getElementById("err_sent").style.display="none"}function sendErr(){var e,t=document.getElementById("err_url").value,n=document.getElementById("err_email").value,s=document.getElementById("err_desc").value;(e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("POST","/err_sup.asp",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("err_url="+t+"&err_email="+n+"&err_desc="+escape(s)),document.getElementById("err_desc").value="",hideError(),document.getElementById("err_sent").style.display="block"}function clickFBLike(){document.getElementById("fblikeframe").style.display="block",document.getElementById("popupDIV").innerHTML="<iframe src='/fblike.asp?r="+Math.random()+"' frameborder='no' style='height:200px;width:250px;'></iframe><br><button onclick='hideFBLike()' class='w3-btn w3-black'>Close</button>"}function hideFBLike(){document.getElementById("fblikeframe").style.display="none"}function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"en",autoDisplay:!1,gaTrack:!0,gaId:"UA-3855518-1",layout:google.translate.TranslateElement.InlineLayout.SIMPLE},"google_translate_element")}function printPage(){var e,t=document.getElementById("main").innerHTML,n=document.getElementById("main").cloneNode(!0);for(e=0;e<n.childNodes.length;e++)if(1==n.childNodes[e].nodeType&&"mainLeaderboard"==n.childNodes[e].getAttribute("id")){n.removeChild(n.childNodes[e]),t=n.innerHTML;break}var s=document.getElementsByTagName("head")[0].innerHTML;window.open("","","").document.write("<html><head>"+s+"<style>body{padding:15px;}@media print {.printbtn {display:none;}}</style></head><body><button class='printbtn' onclick='window.print()'>Print Page</button><br><br>"+t+"<p><a href='/about/about_copyright.asp'>Copyright 1999-2015</a> by Refsnes Data. All Rights Reserved.</p></body></html>")}function openGoogleTranslate(){var a="text/javascript",d="text/css",c="stylesheet",u="script",m="link",n="head",g="UTF-8",p=".";function E(e){var t=document.getElementsByTagName(n)[0];t||(t=document.body.parentNode.appendChild(document.createElement(n))),t.appendChild(e)}document.getElementById("google_translate_element").innerHTML="",window.addEventListener&&void 0===document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1),function(e){e=e.split(p);for(var t=window,n=0;n<e.length;++n)if(!(t=t[e[n]]))return!1;return!0}("google.translate.Element")||function(){var e=function(e){e=e.split(p);for(var t=window,n=0;n<e.length;++n)t=t.hasOwnProperty?t.hasOwnProperty(e[n])?t[e[n]]:t[e[n]]={}:t[e[n]]||(t[e[n]]={});return t}("google.translate._const");e._cl="no",e._cuc="googleTranslateElementInit",e._cac="",e._cam="";var t,n,s,o,l="translate.googleapis.com",r="https://",i=r+l;e._pah=l,e._pas=r,e._pbi=i+"/translate_static/img/te_bk.gif",e._pci=i+"/translate_static/img/te_ctrl3.gif",e._pli=i+"/translate_static/img/loading.gif",e._plla=l+"/translate_a/l",e._pmi=i+"/translate_static/img/mini_google.png",e._ps=i+"/translate_static/css/translateelement.css",e._puh="translate.google.com",t=e._ps,(n=document.createElement(m)).type=d,n.rel=c,n.charset=g,n.href=t,E(n),s=i+"/translate_static/js/element/main_no.js",(o=document.createElement(u)).type=a,o.charset=g,o.src=s,E(o)}()}!function(){var e,t,n,s,o,l=["html","js","css","sql","python"];if(document.getElementsByClassName)for(s=l.length,n=0;n<s;n++)for(o=(e=document.getElementsByClassName(l[n]+"High")).length,t=0;t<o;t++)e[t].innerHTML=r(e[t].innerHTML+" ",l[n]);function r(e,t){var r="mediumblue",i="brown",d="red",c="mediumblue",n="green",u="brown",a="red",l="mediumblue",m="black",g="red",E="black",s="mediumblue",o="brown",p="red",f="black",y="red",h="black",b="mediumblue",I="goldenrod",T="brown",_="red",v="black",R="mediumblue",w="brown",O="red",N="red",B="black",S="mediumblue",L="brown",C="";return t||(t="html"),"html"==t?function(e){var t,n,s,o,l,r,i,a=e,d="";t=new x(a,"&lt;\\?php","?&gt;",q,"W3PHPPOS"),a=t.rest,n=new x(a,"&lt;!--","--&gt;",M,"W3HTMLCOMMENTPOS"),a=n.rest;for(;-1<a.indexOf("&lt;");)r="",o=a.indexOf("&lt;"),"&LT;STYLE"==a.substr(o,9).toUpperCase()&&(r="css"),"&LT;SCRIPT"==a.substr(o,10).toUpperCase()&&(r="javascript"),-1==(l=a.indexOf("&gt;",o))&&(l=a.length),d+=a.substring(0,o),d+=A(a.substring(o,l+4)),a=a.substr(l+4),"css"==r&&-1<(l=a.indexOf("&lt;/style&gt;"))&&(d+=P(a.substring(0,l)),a=a.substr(l)),"javascript"==r&&-1<(l=a.indexOf("&lt;/script&gt;"))&&(d+=k(a.substring(0,l)),a=a.substr(l));for(s=new x(a=d+a,"{{","}}",z),a=s.rest,i=0;i<n.arr.length;i++)a=a.replace("W3HTMLCOMMENTPOS",n.arr[i]);for(i=0;i<t.arr.length;i++)a=a.replace("W3PHPPOS",t.arr[i]);return a}(e):"css"==t?P(e):"js"==t?k(e):"php"==t?q(e):"sql"==t?function(e){var t,n,s,o,l,r,i,a=e,d="";1;for(;t=oe(a,"'","'",$),n=oe(a,'"','"',$),s=oe(a,/\/\*/,"*/",M),o=oe(a,/--/,"<br>",M),r=le(a,j),l=se("sql",a,K),-1!=Math.max(r[0],t[0],n[0],s[0],o[0],l[0])&&-1!=(i=G(r,t,n,s,o,l))[0];)-1<i[0]&&(d+=a.substring(0,i[0]),d+=i[2](a.substring(i[0],i[1])),a=a.substr(i[1]));return"<span style=color:"+B+">"+(a=d+a)+"</span>"}(e):"python"==t?function(e){var t,n,s,o,l,r,i,a=e,d="";1;for(;t=oe(a,"'","'",ee),n=oe(a,'"','"',ee),s=oe(a,/\/\*/,"*/",M),o=oe(a,/\/\//,"<br>",M),l=oe(a,"#","<br>",M),numpos=le(a,te),r=se("python",a,ne),-1!=Math.max(numpos[0],t[0],n[0],s[0],o[0],l[0],r[0])&&-1!=(i=G(numpos,t,n,s,o,l,r))[0];)-1<i[0]&&(d+=a.substring(0,i[0]),d+=i[2](a.substring(i[0],i[1])),a=a.substr(i[1]));return"<span style=color:"+v+">"+(a=d+a)+"</span>"}(e):e;function x(e,t,n,s,o){for(var l,r,i="",a=[];-1<e.search(t);)l=e.search(t),-1==(r=e.indexOf(n,l))&&(r=e.length),o?(a.push(s(e.substring(l,r+n.length))),e=e.substring(0,l)+o+e.substr(r+n.length)):(i+=e.substring(0,l),i+=s(e.substring(l,r+n.length)),e=e.substr(r+n.length));this.rest=i+e,this.arr=a}function A(e){for(var t,n,s,o=e,l="";-1<o.search(/(\s|<br>)/);)t=o.search(/(\s|<br>)/),-1==(n=o.indexOf("&gt;"))&&(n=o.length),l+=o.substring(0,t),l+=U(o.substring(t,n)),o=o.substr(n);return"&gt;"==(s="<span style=color:"+r+">&lt;</span>"+(s=l+o).substring(4)).substr(s.length-4,4)&&(s=s.substring(0,s.length-4)+"<span style=color:"+r+">&gt;</span>"),"<span style=color:"+i+">"+s+"</span>"}function U(e){for(var t,n,s,o,l,r,i=e,a="";-1<i.indexOf("=");)n=-1,t=i.indexOf("="),s=i.indexOf("'",t),o=i.indexOf('"',t),-1<(l=i.indexOf(" ",t+2))&&(l<s||-1==s)&&(l<o||-1==o)?n=i.indexOf(" ",t):-1<o&&(o<s||-1==s)&&(o<l||-1==l)?n=i.indexOf('"',i.indexOf('"',t)+1):-1<s&&(s<o||-1==o)&&(s<l||-1==l)&&(n=i.indexOf("'",i.indexOf("'",t)+1)),(!n||-1==n||n<t)&&(n=i.length),a+=i.substring(0,t),a+=(r=i.substring(t,n+1),"<span style=color:"+c+">"+r+"</span>"),i=i.substr(n+1);return"<span style=color:"+d+">"+a+i+"</span>"}function z(e){return"<span style=color:"+N+">"+e+"</span>"}function M(e){return"<span style=color:"+n+">"+e+"</span>"}function P(e){var t,n,s,o,l,r,i,a=e,d="";for(a=(s=new x(a,/\/\*/,"*/",M,"W3CSSCOMMENTPOS")).rest;-1<a.search("{");){for(t=a.search("{"),l=a.substr(t+1),i=1,o=r=0;o<l.length&&("{"==l.substr(o,1)&&(i++,r++),"}"==l.substr(o,1)&&i--,0!=i);o++);for(0!=i&&(r=0),n=t,o=0;o<=r;o++)n=a.indexOf("}",n+1);-1==n&&(n=a.length),d+=a.substring(0,t+1),d+=D(a.substring(t+1,n)),a=a.substr(n)}for(a=(a=(a=d+a).replace(/{/g,"<span style=color:"+m+">{</span>")).replace(/}/g,"<span style=color:"+m+">}</span>"),o=0;o<s.arr.length;o++)a=a.replace("W3CSSCOMMENTPOS",s.arr[o]);return"<span style=color:"+u+">"+a+"</span>"}function D(e){var t,n,s,o,l=e,r="";if(-1<l.indexOf("{"))return P(l);for(;-1<l.search(":");){for(o=!0,s=t=l.search(":");1==o;)o=!1,n=l.indexOf(";",s),"&nbsp;"==l.substring(n-5,n+1)&&(o=!0,s=n+1);-1==n&&(n=l.length),r+=l.substring(0,t),r+=H(l.substring(t,n+1)),l=l.substr(n+1)}return"<span style=color:"+a+">"+r+l+"</span>"}function H(e){var t,n,s=e,o="";for(s="<span style=color:"+m+">:</span>"+s.substring(1);-1<s.search(/!important/i);)t=s.search(/!important/i),o+=s.substring(0,t),o+=(n=s.substring(t,t+10),"<span style=color:"+g+";font-weight:bold;>"+n+"</span>"),s=s.substr(t+10);return result=o+s,";"==result.substr(result.length-1,1)&&"&nbsp;"!=result.substr(result.length-6,6)&&"&lt;"!=result.substr(result.length-4,4)&&"&gt;"!=result.substr(result.length-4,4)&&"&amp;"!=result.substr(result.length-5,5)&&(result=result.substring(0,result.length-1)+"<span style=color:"+m+">;</span>"),"<span style=color:"+l+">"+result+"</span>"}function k(e){var t,n,s,o,l,r,i,a,d,c,u=e,m="",g=[],p="";for(t=0;t<u.length;t++)"\\"==(n=u.substr(t,1))&&(g.push(u.substr(t,2)),n="W3JSESCAPE",t++),p+=n;for(u=p,1;s=oe(u,"'","'",W),o=oe(u,'"','"',W),l=oe(u,/\/\*/,"*/",M),r=oe(u,/\/\//,"<br>",M),a=le(u,Y),i=se("js",u,F),c=X(u,V),-1!=Math.max(a[0],s[0],o[0],l[0],r[0],i[0],c[0])&&-1!=(d=G(a,s,o,l,r,i,c))[0];)-1<d[0]&&(m+=u.substring(0,d[0]),m+=d[2](u.substring(d[0],d[1])),u=u.substr(d[1]));for(u=m+u,t=0;t<g.length;t++)u=u.replace("W3JSESCAPE",g[t]);return"<span style=color:"+E+">"+u+"</span>"}function W(e){return"<span style=color:"+o+">"+e+"</span>"}function F(e){return"<span style=color:"+s+">"+e+"</span>"}function Y(e){return"<span style=color:"+p+">"+e+"</span>"}function V(e){return"<span style=color:"+f+">"+e+"</span>"}function X(e,t){var n,s,o,l,r=[".","<"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%"];if(-1<(l=e.indexOf(".")))for(n=e.substr(l+1),o=0;o<n.length;o++)for(cc=n[o],s=0;s<r.length;s++)if(-1<cc.indexOf(r[s]))return[l+1,o+l+1,t];return[-1,-1,t]}function G(){var e,t=[];for(e=0;e<arguments.length;e++)-1<arguments[e][0]&&(0==t.length||arguments[e][0]<t[0])&&(t=arguments[e]);return 0==t.length&&(t=arguments[e]),t}function $(e){return"<span style=color:"+L+">"+e+"</span>"}function K(e){return"<span style=color:"+S+">"+e+"</span>"}function j(e){return"<span style=color:"+C+">"+e+"</span>"}function q(e){var t,n,s,o,l,r,i,a=e,d="";for(1;t=oe(a,"'","'",Q),n=oe(a,'"','"',Q),s=oe(a,/\/\*/,"*/",M),o=oe(a,/\/\//,"<br>",M),l=oe(a,"#","<br>",M),numpos=le(a,J),r=se("php",a,Z),-1!=Math.max(numpos[0],t[0],n[0],s[0],o[0],l[0],r[0])&&-1!=(i=G(numpos,t,n,s,o,l,r))[0];)-1<i[0]&&(d+=a.substring(0,i[0]),d+=i[2](a.substring(i[0],i[1])),a=a.substr(i[1]));return"?&gt;"==(a="<span style=color:"+y+">&lt;"+(a=d+a).substr(4,4)+"</span>"+a.substring(8)).substr(a.length-5,5)&&(a=a.substring(0,a.length-5)+"<span style=color:"+y+">?&gt;</span>"),"<span style=color:"+h+">"+a+"</span>"}function Q(e){return"<span style=color:"+T+">"+e+"</span>"}function J(e){return"<span style=color:"+_+">"+e+"</span>"}function Z(e){var t=["$GLOBALS","$_SERVER","$_REQUEST","$_POST","$_GET","$_FILES","$_ENV","$_COOKIE","$_SESSION"];return-1<t.indexOf(e.toUpperCase())?-1<t.indexOf(e)?"<span style=color:"+I+">"+e+"</span>":e:"<span style=color:"+b+">"+e+"</span>"}function ee(e){return"<span style=color:"+w+">"+e+"</span>"}function te(e){return"<span style=color:"+O+">"+e+"</span>"}function ne(e){return"<span style=color:"+R+">"+e+"</span>"}function se(e,t,n){var s,o,l,r,i=-1,a=-1;for("js"==e?s=["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","event","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"]:"php"==e?s=["$GLOBALS","$_SERVER","$_REQUEST","$_POST","$_GET","$_FILES","$_ENV","$_COOKIE","$_SESSION","__halt_compiler","abstract","and","array","as","break","callable","case","catch","class","clone","const","continue","declare","default","die","do","echo","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","eval","exit","extends","final","for","foreach","function","global","goto","if","implements","include","include_once","instanceof","insteadof","interface","isset","list","namespace","new","or","print","private","protected","public","require","require_once","return","static","switch","throw","trait","try","unset","use","var","while","xor"]:"sql"==e?s=["ADD","EXTERNAL","PROCEDURE","ALL","FETCH","PUBLIC","ALTER","FILE","RAISERROR","AND","FILLFACTOR","READ","ANY","READTEXT","AS","FOREIGN","RECONFIGURE","ASC","FREETEXT","REFERENCES","AUTHORIZATION","FREETEXTTABLE","REPLICATION","BACKUP","FROM","RESTORE","BEGIN","FULL","RESTRICT","BETWEEN","FUNCTION","RETURN","BREAK","GOTO","REVERT","BROWSE","GRANT","REVOKE","BULK","GROUP","RIGHT","BY","HAVING","ROLLBACK","CASCADE","HOLDLOCK","ROWCOUNT","CASE","IDENTITY","ROWGUIDCOL","CHECK","IDENTITY_INSERT","RULE","CHECKPOINT","IDENTITYCOL","SAVE","CLOSE","IF","SCHEMA","CLUSTERED","IN","SECURITYAUDIT","COALESCE","INDEX","SELECT","COLLATE","INNER","SEMANTICKEYPHRASETABLE","COLUMN","INSERT","SEMANTICSIMILARITYDETAILSTABLE","COMMIT","INTERSECT","SEMANTICSIMILARITYTABLE","COMPUTE","INTO","SESSION_USER","CONSTRAINT","IS","SET","CONTAINS","JOIN","SETUSER","CONTAINSTABLE","KEY","SHUTDOWN","CONTINUE","KILL","SOME","CONVERT","LEFT","STATISTICS","CREATE","LIKE","SYSTEM_USER","CROSS","LINENO","TABLE","CURRENT","LOAD","TABLESAMPLE","CURRENT_DATE","MERGE","TEXTSIZE","CURRENT_TIME","NATIONAL","THEN","CURRENT_TIMESTAMP","NOCHECK","TO","CURRENT_USER","NONCLUSTERED","TOP","CURSOR","NOT","TRAN","DATABASE","NULL","TRANSACTION","DBCC","NULLIF","TRIGGER","DEALLOCATE","OF","TRUNCATE","DECLARE","OFF","TRY_CONVERT","DEFAULT","OFFSETS","TSEQUAL","DELETE","ON","UNION","DENY","OPEN","UNIQUE","DESC","OPENDATASOURCE","UNPIVOT","DISK","OPENQUERY","UPDATE","DISTINCT","OPENROWSET","UPDATETEXT","DISTRIBUTED","OPENXML","USE","DOUBLE","OPTION","USER","DROP","OR","VALUES","DUMP","ORDER","VARYING","ELSE","OUTER","VIEW","END","OVER","WAITFOR","ERRLVL","PERCENT","WHEN","ESCAPE","PIVOT","WHERE","EXCEPT","PLAN","WHILE","EXEC","PRECISION","WITH","EXECUTE","PRIMARY","WITHIN GROUP","EXISTS","PRINT","WRITETEXT","EXIT","PROC","LIMIT","MODIFY","COUNT"]:"python"==e&&(s=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"]),o=0;o<s.length;o++)-1<(l="php"==e||"sql"==e?t.toLowerCase().indexOf(s[o].toLowerCase()):t.indexOf(s[o]))&&(r=/\W/g,t.substr(l+s[o].length,1).match(r)&&t.substr(l-1,1).match(r)&&-1<l&&(-1==i||l<i)&&(a=(i=l)+s[o].length));return[i,a,n]}function oe(e,t,n,s){var o,l;return o=e.search(t),-1==(l=e.indexOf(n,o+n.length))&&(l=e.length),[o,l+n.length,s]}function le(e,t){var n,s,o,l,r,i=["<br>"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%","="],a=0;for(n=0;n<e.length;n++)for(s=0;s<i.length;s++)if((o=e.substr(n,i[s].length))==i[s]){if("-"==o&&("e"==e.substr(n-1,1)||"E"==e.substr(n-1,1)))continue;if(a<(l=n)&&(r=e.substring(a,l),!isNaN(r)))return[a,l,t];a=n+=i[s].length,n-=1;break}return[-1,-1,t]}}}();