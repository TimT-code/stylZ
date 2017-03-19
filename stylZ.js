var stylZ=(function(window,undefined){// 'Z_' is an alias for 'styleZ'
    console.clear();//testing console
  
    var stylZ=function(el,index){
      var ele;/*this variable turns into elemz to work inside functions*/
        if( arguments[0] &&
           !arguments[1]){
                          //No 2nd argument passed/no index passed or asterisk
                          if(arguments[0] &&
                             el.charAt(0)==='#'){
                                                 console.log('id');//id
                                                 ele=document.getElementById(el.substring(1));// remove 1st character '#'
          }else if(arguments[0] &&
                   el.charAt(0)==='.'){
                                       console.log('class - 1st occurence');//class
                                       ele=document.querySelector(el);//1st Class occurence - don't use substring to remove '.' since querySelector needs it
          }else if(arguments[0] &&
                   el.charAt(0)!=='#' &&
                   el.charAt(0)!=='.' &&
                   el.charAt(0)!=='*'){
                                       console.log('tagname only-first occurence');
                                       ele=document.getElementsByTagName(el)[0];
          }
        }
        else{if(arguments[0] &&
                arguments[0]!=='*' &&
                arguments[1] &&
                arguments[1]!=='*' &&
                el.charAt(0)!=='#' &&
                el.charAt(0)!=='.'){
                                    console.log('tagname and index');//tagname and index
                                    ele=document.getElementsByTagName(el)[index];//index
          }else if(arguments[0] &&
                   arguments[0]!=='*' &&
                   arguments[1] &&
                   arguments[1]==='*'){
                                       console.log('id, class, or tagname - first occurence');
                                       ele=document.querySelectorAll(el)[0];
          }else if(arguments[0] &&
                   arguments[0]==='*' &&
                   arguments[1] &&
                   arguments[1]==='*'){
                                       console.log('ALL elements on page-- all by getElementsByTagName(\'*\') - need loop here');
                                       //document.getElementsByTagName('*')[i];//make loop code
          }else if(arguments[0] &&
                   arguments[0]==='*' &&
                   arguments[1] &&
                   arguments[1]==='**'){
                                        console.log('ALL elements on page-- all by querySelectorAll(\'*\') - need loop here');
                                        //document.querySelectorAll('*')[i];//make loop code                                        
          }
            }
    elemz=ele;  
    elz=ele.style;/*get ele from if/else statement-tried to make it a function already-couldn't figure out how to extract/return ele outside of function.*/
        var f=Function,/*https://github.com/jed/140bytes/wiki/Byte-saving-techniques*/
        
        //zss=function(prop,val){elz[prop]=val;return this;},
        zss=f('prop','val','elz[prop]=val;return this'),/*zss=css*/
        //z_dno=f('elz.display="none';return this'),  
        z_dno=f('elz.display="none";return this'),
        z_din=f('elz.display="inline";return this'),
        z_dib=f('elz.display="inline-block";return this'),
        z_dbl=f('elz.display="block";return this'),
            
        z_clr=f('val','elz.clear=val;return this'),
        z_clrn=f('elz.clear="none";return this'),
        z_clrl=f('elz.clear="left";return this'),
        z_clrr=f('elz.clear="right";return this'),
        z_clrb=f('elz.clear="both";return this'),
        z_clrini=f('elz.clear="initial";return this'),
        z_clrinh=f('elz.clear="inherit";return this'),
          
        z_btm=f('val','elz.bottom=val;return this'),
          
        z_f=f('val','elz.font=val;return this'),
        z_ff=f('val','elz.fontFamily=val;return this'),
        z_fvn=f('elz.fontVariant="normal";return this'),
        z_fvs=f('elz.fontVariant="small-caps";return this'),
        z_fvin=f('elz.fontVariant="initial";return this'),
        z_fvih=f('elz.fontVariant="inherit";return this'),

        z_c=f('val','elz.color=val;return this'),
        z_o=f('val','elz.opacity=val;elz.filter="alpha(opacity=\'+val*100+\')";return this'),
        
        z_bg=f('val','elz.background=val;return this'),
        z_bgc=f('val','elz.backgroundColor=val;return this'),
        z_bgi=f('val','elz.backgroundImage=\'url("\'+val+\'")\';/*default x-y repeat*/return this'),
        z_bgir=f('if(arguments[0])elz.backgroundImage=\'url("\'+val+\'")\';elz.backgroundRepeat="repeat";return this'),/*doesnt like being broken into separate lines*/
          
        z_bgix=f('val','if(arguments[0])elz.backgroundImage=\'url("\'+val+\'")\';elz.backgroundRepeat="repeat-x";return this'),
          
        z_bgiy=f('val','if(arguments[0])elz.backgroundImage=\'url("\'+val+\'")\';elz.backgroundRepeat="repeat-y";return this'),
          
        z_bgin=f('val','if(arguments[0])elz.backgroundImage=\'url("\'+val+\'")\';elz.backgroundRepeat="no-repeat";return this'),
          
        z_bgino=f('elz.backgroundImage="none";return this'),
        z_bgini=f('elz.backgroundImage="initial";return this'),
        z_bginh=f('elz.backgroundImage="inherit";return this'),
          
        z_bgr=f('val','elz.backgroundRepeat=val;return this'),
        z_bgrr=f('elz.backgroundRepeat="repeat";return this'),
        z_bgrx=f('elz.backgroundRepeat="repeat-x";return this'),
        z_bgry=f('elz.backgroundRepeat="repeat-y";return this'),
        z_bgrn=f('elz.backgroundRepeat="no-repeat";return this'),
        z_bgri=f('elz.backgroundRepeat="initial";return this'),
          
        z_bgp=f('val','elz.backgroundPosition=val;return this'),
        z_bgplt=f('elz.backgroundPosition="left top";return this'),
        z_bgplc=f('elz.backgroundPosition="left center";return this'),
        z_bgplb=f('elz.backgroundPosition="left bottom";return this'),
        z_bgprt=f('elz.backgroundPosition="right top";return this'),
        z_bgprc=f('elz.backgroundPosition="right center";return this'),
        z_bgprb=f('elz.backgroundPosition="right bottom";return this'),
        z_bgpct=f('elz.backgroundPosition="center top";return this'),
        z_bgpcc=f('elz.backgroundPosition="center center";return this'),
        z_bgpcb=f('elz.backgroundPosition="center bottom";return this'),
        z_bgpini=f('elz.backgroundPosition="initial";return this'),
        z_bgpinh=f('elz.backgroundPosition="inherit";return this'),
          
        z_bga=f('val','elz.backgroundAttachment=val;return this'),
        z_bgas=f('elz.backgroundAttachment="scroll";return this'),
        z_bgaf=f('elz.backgroundAttachment="fixed";return this'),
        z_bgal=f('elz.backgroundAttachment="local";return this'),
        z_bgaini=f('elz.backgroundAttachment="initial";return this'),
        z_bgainh=f('elz.backgroundAttachment="inherit";return this'),
          
        z_bm=f('val','elz.backgroundBlendMode=val;return this'),/*(CSS3 - noIE) - normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity*/
        z_bmn=f('elz.backgroundBlendMode="normal";return this'),
        z_bmm=f('elz.backgroundBlendMode="multiply";return this'),
        z_bmscr=f('elz.backgroundBlendMode="screen";return this'),
        z_bmo=f('elz.backgroundBlendMode="overlay";return this'),
        z_bmd=f('elz.backgroundBlendMode="darken";return this'),
        z_bml=f('elz.backgroundBlendMode="lighten";return this'),
        z_bmcd=f('elz.backgroundBlendMode="color-dodge";return this'),
        z_bmsat=f('elz.backgroundBlendMode="saturation";return this'),
        z_bmlum=f('elz.backgroundBlendMode="luminosity";return this'),
        
        z_clp=f('val','elz.backgroundClip=val;return this'),/*(CSS3 - IE9+) - border-box|padding-box|content-box|initial|inherit*/
        z_clpb=f('elz.backgroundClip="border-box";return this'),
        z_clpp=f('elz.backgroundClip="padding-box";return this'),
        z_clpc=f('val','elz.backgroundClip="content-box";return this'),
        z_clpi=f('val','elz.backgroundClip="initial";return this'),
        z_clpih=f('val','elz.backgroundClip="inherit";return this'),
          
        z_ori=f('val','elz.backgroundOrigin=val;return this'),/*(CSS3 - IE9+) - padding-box|border-box|content-box|initial|inherit*/
        z_orip=f('elz.backgroundOrigin="padding-box";return this'),
        z_orib=f('elz.backgroundOrigin="border-box";return this'),
        z_oric=f('elz.backgroundOrigin="content-box";return this'),
        z_orin=f('elz.backgroundOrigin="initial";return this'),
        z_orih=f('elz.backgroundOrigin="inherit";return this'),
          
        z_ol=f('val','elz.outline=val;return this'),
        z_olini=f('elz.outline="initial";return this'),
        z_olinh=f('elz.outline="inherit";return this'),
        z_olc=f('val','elz.outlineColor=val;return this'),
        z_olci=f('elz.outlineColor="invert";return this'),
        z_olcini=f('elz.outlineColor="initial";return this'),
        z_olcinh=f('elz.outlineColor="inherit";return this'),
        z_ols=f('val','elz.outlineStyle=val;return this'),
        /*maybe abbreviate the outline.style list too*/
        z_olw=f('val','elz.outlineWidth=val;return this'),
        z_olwtn=f('elz.outlineWidth="thin";return this'),
        z_olwm=f('elz.outlineWidth="medium";return this'),
        z_olwtk=f('elz.outlineWidth="thick";return this'),
        z_olwl=f('len','elz.outlineWidth=len;return this'),
        z_olwini=f('elz.outlineWidth="initial";return this'),
        z_olwinh=f('elz.outlineWidth="inherit";return this'),        
          
        z_b=f('val','elz.border=val;return this'),          
        z_bt=f('val','elz.borderTop=val;return this'),          
        z_br=f('val','elz.borderRight=val;return this'),          
        z_bb=f('val','elz.borderBottom=val;return this'),          
        z_bl=f('val','elz.borderLeft=val;return this'),        
          
        z_bc=f('val','elz.borderColor=val;/*color|transparent|initial|inherit - up to 4 values*/return this'),        
        z_btc=f('val','elz.borderTopColor=val;return this'),          
        z_brc=f('val','elz.borderRightColor=val;return this'),          
        z_bbc=f('val','elz.borderBottomColor=val;return this'),          
        z_blc=f('val','elz.borderLeftColor=val;return this'),
          
        z_bs=f('val','elz.borderStyle=val;/*none|hidden|dotted|dash|solid|double|groove|ridge|inset|outset|initial|inherit*/return this'), 
        z_bts=f('val','elz.borderTopStyle=val;return this'),          
        z_brs=f('val','elz.borderRightStyle=val;return this'),          
        z_bbs=f('val','elz.borderBottomStyle=val;return this'),          
        z_bls=f('val','elz.borderLeftStyle=val;return this'),
          
        z_bw=f('val','elz.borderWidth=val;return this'),          
        z_btw=f('val','elz.borderTopWidth=val;return this'),          
        z_brw=f('val','elz.borderRightWidth=val;return this'),          
        z_bbw=f('val','elz.borderBottomWidth=val;return this'),          
        z_blw=f('val','elz.borderLeftWidth=val;return this'),
          
        z_bcl=f('val','elz.borderCollapse=val;/*separate|collapse|initial|inherit*/return this'),          
        z_bsp=f('val','elz.borderSpacing=val;/*has no effect if borderCollapse is set to "collapse"*/return this'),
          
        z_p=f('val','elz.padding=val;return this'),          
        z_pt=f('val','elz.paddingTop=val;return this'),          
        z_pr=f('val','elz.paddingRight=val;return this'),          
        z_pb=f('val','elz.paddingBottom=val;return this'),          
        z_pl=f('val','elz.paddingLeft=val;return this'),
          
        z_m=f('val','elz.margin=val;return this'),          
        z_mt=f('val','elz.marginTop=val;return this'),          
        z_mr=f('val','elz.marginRight=val;return this'),          
        z_mb=f('val','elz.marginBottom=val;return this'),          
        z_ml=f('val','elz.marginLeft=val;return this'),
          
        z_wb=f('val','elz.wordBreak=val;return this'),/*normal|break-all|keep-all|initial|inherit*/
          
        z_ws=f('val','elz.whiteSpace=val;return this'),/*normal|nowrap|pre|initial|inherit*/
          
        z_wsp=f('val','elz.wordSpacing=val;return this'),/*normal|length|initial|inherit - number can be positive, or negative*/
          
        z_w=f('val','elz.width=val;return this'),/*auto|length|%|initial|inherit*/
      
        z_h=f('val','elz.height=val;return this'),/*auto|length|%|initial|inherit*/
      
        z_zi=f('val','elz.zIndex=val;return this'),/*auto|number|initial|inherit - number can be positive, or negative*/
      
        z_iH=f('val','elemz.innerHTML=val;return this'),
        z_oH=f('val','elemz.outerHTML=val;return this'),
        z_tC=f('val','var valz=ele.textContent||ele.innerText;valz=val;return this'),/*make sure this line is correct*/
        z_iT=f('val','elemz.innerText=val;return this'),/*<IE9*/
        z_oT=f('val','elemz.outerText=val;return this'),
        //z_iAE=function(pos,element){var elmnt=document.createElement(element);elemz.insertAdjacentElement(pos,elmnt);return this'),
        z_iAE=f('pos','element','var elmnt=document.createElement(element);elemz.insertAdjacentElement(pos,elmnt);return this'),
        z_iAEbb=f('element','var elmnt=document.createElement(element);elemz.insertAdjacentElement("beforebegin",elmnt);return this'),
        z_iAEab=f('element','var elmnt=document.createElement(element);elemz.insertAdjacentElement("afterbegin",elmnt);return this'),
        z_iAEbe=f('element','var elmnt=document.createElement(element);elemz.insertAdjacentElement("beforeend",elmnt);return this'),
        z_iAEae=f('element','var elmnt=document.createElement(element);elemz.insertAdjacentElement("afterend",elmnt);return this'),          
        z_iAH=f('pos','element','elemz.insertAdjacentHTML(pos,element);return this'),
        z_iAHbb=f('element','elemz.insertAdjacentHTML("beforebegin",element);return this'),
        z_iAHab=f('element','elemz.insertAdjacentHTML("afterbegin",element);return this'),
        z_iAHbe=f('element','elemz.insertAdjacentHTML("beforeend",element);return this'),
        z_iAHae=f('element','elemz.insertAdjacentHTML("afterend",element);return this');        
          

      return {/*To-do list--Return one function ONLY... that is equivalent to this whole object being returned*/
        zss:zss,
        
        z_dno:z_dno,
        z_din:z_din,
        z_dib:z_dib,
        z_dbl:z_dbl,
          
        z_clr:z_clr,
        z_clrn:z_clrn,
        z_clrl:z_clrl,
        z_clrr:z_clrr,
        z_clrb:z_clrb,
        z_clrini:z_clrini,
        z_clrinh:z_clrinh,
        
        z_btm:z_btm,
        
        z_f:z_f,
        z_ff:z_ff,
        z_fvn:z_fvn,
        z_fvs:z_fvs,
        z_fvin:z_fvin,
        z_fvih:z_fvih,
        
        
        /*text color*/
        z_c:z_c,
        z_o:z_o,
        
        /*background*/
        z_bg:z_bg,        
        z_bgc:z_bgc,
        z_bgi:z_bgi,
        z_bgir:z_bgir,
        z_bgix:z_bgix,
        z_bgiy:z_bgiy,
        z_bgin:z_bgin,
        z_bgino:z_bgino,
        z_bgini:z_bgini,
        z_bginh:z_bginh,
        z_bgr:z_bgr,
        z_bgrr:z_bgrr,
        z_bgrx:z_bgrx,
        z_bgry:z_bgry,
        z_bgrn:z_bgrn,
        z_bgri:z_bgri,
        
        z_bgp:z_bgp,
        z_bgplt:z_bgplt,
        z_bgplc:z_bgplc,
        z_bgplb:z_bgplb,
        z_bgprt:z_bgprt,
        z_bgprc:z_bgprc,
        z_bgprb:z_bgprb,
        z_bgpct:z_bgpct,
        z_bgpcc:z_bgpcc,
        z_bgpcb:z_bgpcb,
        z_bgpini:z_bgpini,
        z_bgpinh:z_bgpinh,
        
        z_bga:z_bga,
        z_bgas:z_bgas,
        z_bgaf:z_bgaf,
        z_bgal:z_bgal,
        z_bgaini:z_bgaini,
        z_bgainh:z_bgainh,
        z_bm:z_bm,
        z_bmn:z_bmn,
        z_bmm:z_bmm,
        z_bmscr:z_bmscr,
        z_bmo:z_bmo,
        z_bmd:z_bmd,
        z_bml:z_bml,
        z_bmcd:z_bmcd,
        z_bmsat:z_bmsat,
        z_bmlum:z_bmlum,
        
        z_clp:z_clp,
        z_clpb:z_clpb,
        z_clpp:z_clpp,
        z_clpc:z_clpc,
        z_clpi:z_clpi,
        z_clpih:z_clpih,
        
        z_ori:z_ori,
        z_orip:z_orip,
        z_orib:z_orib,
        z_oric:z_oric,
        z_orin:z_orin,
        z_orih:z_orih,
        
        /*outline & border*/
        z_ol:z_ol,
        z_olini:z_olini,
        z_olinh:z_olinh,
        z_olc:z_olc,
        z_olci:z_olci,
        z_olcini:z_olcini,
        z_olcinh:z_olcinh,
        z_ols:z_ols,
        z_olw:z_olw,
        z_olwtn:z_olwtn,
        z_olwm:z_olwm,
        z_olwtk:z_olwtk,
        z_olwl:z_olwl,
        z_olwini:z_olwini,
        z_olwinh:z_olwinh,
        z_b:z_b,
        z_bt:z_bt,
        z_br:z_br,
        z_bb:z_bb,
        z_bl:z_bl,        
        z_bc:z_bc,
        z_btc:z_btc,
        z_brc:z_brc,
        z_bbc:z_bbc,
        z_blc:z_blc,
        z_bs:z_bs,
        z_bts:z_bts,
        z_brs:z_brs,
        z_bbs:z_bbs,
        z_bls:z_bls,
        z_bw:z_bw,
        z_btw:z_btw,
        z_brw:z_brw,
        z_bbw:z_bbw,
        z_blw:z_blw,
        z_bcl:z_bcl,
        z_bsp:z_bsp,
        
        z_p:z_p,
        z_pt:z_pt,
        z_pr:z_pr,
        z_pb:z_pb,
        z_pl:z_pl,
        
        z_m:z_m,
        z_mt:z_mt,
        z_mr:z_mr,
        z_mb:z_mb,
        z_ml:z_ml,
        
        z_wb:z_wb,
        
        z_ws:z_ws,
        
        z_wsp:z_wsp,
        
        /*width & height*/
        z_w:z_w,
        z_h:z_h,
        
        /*zIndex*/
        z_zi:z_zi,
        
        /*innerHTML, textContent, innerText ,insertAdjacentElement, insertAdjacentHTML*/
        z_iH:z_iH,
        z_oH:z_oH,
        z_tC:z_tC,
        z_iT:z_iT,
        z_oT:z_oT,
        z_iAE:z_iAE,
        z_iAEbb:z_iAEbb,
        z_iAEab:z_iAEab,
        z_iAEae:z_iAEae,
        z_iAEbe:z_iAEbe,
        z_iAH:z_iAH,
        z_iAHbb:z_iAHbb,
        z_iAHae:z_iAHae,
        z_iAHbe:z_iAHbe
      };
    };
var ZZ_=window.stylZ=window.Z_=stylZ;/*stylZ=Z_*/
return ZZ_;
})(window);
