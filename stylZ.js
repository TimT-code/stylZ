var stylZ=(function(){/* 'Z_' is an alias for 'styleZ' */
    var stylZ=function(el){
      var
        ele=document.getElementById(el),
        elz=ele.style,

        zss=function(prop,val){/*zss=css*/elz[prop]=val;return this;},
          
        z_dno=function(){elz.display='none';return this;},
        z_din=function(){elz.display='inline';return this;},
        z_dib=function(){elz.display='inline-block';return this;},
        z_dbl=function(){elz.display='block';return this;},
          
        z_btm=function(val){elz.bottom=val;return this;},

        z_c=function(val){elz.color=val;return this;},        
        
        z_bg=function(val){elz.background=val;return this;},
        z_bgc=function(val){elz.backgroundColor=val;return this;},
        z_bgi=function(val){if(arguments[0])elz.backgroundImage='url("'+val+'")';/*default x-y repeat*/return this;},
          
        z_bgix=function(val){
          if(arguments[0])elz.backgroundImage='url("'+val+'")';
          elz.backgroundRepeat='repeat-x';
          return this;
        },
          
        z_bgiy=function(val){
          if(arguments[0])elz.backgroundImage='url("'+val+'")';
          elz.backgroundRepeat='repeat-y';
          return this;
        },
          
        z_bgin=function(val){
          if(arguments[0])elz.backgroundImage='url("'+val+'")';
          elz.backgroundRepeat='no-repeat';
          return this;
        },
          
        z_bgino=function(val){elz.backgroundImage='none';return this;},
        z_bgini=function(val){elz.backgroundImage='initial';return this;},
        z_bginh=function(val){elz.backgroundImage='inherit';return this;},
          
        z_bm=function(val){elz.backgroundBlendMode=val;return this;},/*(CSS3 - noIE) - normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity*/
        z_bmn=function(){elz.backgroundBlendMode='normal';return this;},
        z_bmm=function(){elz.backgroundBlendMode='multiply';return this;},
        z_bmscr=function(){elz.backgroundBlendMode='screen';return this;},
        z_bmo=function(){elz.backgroundBlendMode='overlay';return this;},
        z_bmd=function(){elz.backgroundBlendMode='darken';return this;},
        z_bml=function(){elz.backgroundBlendMode='lighten';return this;},
        z_bmcd=function(){elz.backgroundBlendMode='color-dodge';return this;},
        z_bmsat=function(){elz.backgroundBlendMode='saturation';return this;},
        z_bmlum=function(){elz.backgroundBlendMode='luminosity';return this;},
        
        z_bgclp=function(val){elz.background-clip=val;return this;},/*(CSS3 - noIE) - border-box|padding-box|content-box|initial|inherit*/
        z_bgclpb=function(){elz.background-clip='border-box';return this;},
        z_bgclpp=function(){elz.background-clip='padding-box';return this;},
        z_bgclpc=function(val){elz.background-clip='content-box';return this;},
        z_bgclpi=function(val){elz.background-clip='initial';return this;},
        z_bgclpih=function(val){elz.background-clip='inherit';return this;},
      
        z_b=function(val){elz.border=val;return this;},          
        z_bt=function(val){elz.borderTop=val;return this;},          
        z_br=function(val){elz.borderRight=val;return this;},          
        z_bb=function(val){elz.borderBottom=val;return this;},          
        z_bl=function(val){elz.borderLeft=val;return this;},        
          
        z_bc=function(val){elz.borderColor=val;/*color|transparent|initial|inherit - up to 4 values*/return this;},        
        z_btc=function(val){elz.borderTopColor=val;return this;},          
        z_brc=function(val){elz.borderRightColor=val;return this;},          
        z_bbc=function(val){elz.borderBottomColor=val;return this;},          
        z_blc=function(val){elz.borderLeftColor=val;return this;},
          
        z_bs=function(val){elz.borderStyle=val;/*none|hidden|dotted|dash|solid|double|groove|ridge|inset|outset|initial|inherit*/return this;}, 
        z_bts=function(val){elz.borderTopStyle=val;return this;},          
        z_brs=function(val){elz.borderRightStyle=val;return this;},          
        z_bbs=function(val){elz.borderBottomStyle=val;return this;},          
        z_bls=function(val){elz.borderLeftStyle=val;return this;},
          
        z_bw=function(val){elz.borderWidth=val;return this;},          
        z_btw=function(val){elz.borderTopWidth=val;return this;},          
        z_brw=function(val){elz.borderRightWidth=val;return this;},          
        z_bbw=function(val){elz.borderBottomWidth=val;return this;},          
        z_blw=function(val){elz.borderLeftWidth=val;return this;},
          
        z_bcl=function(val){elz.borderCollapse=val;/*separate|collapse|initial|inherit*/return this;},          
        z_bsp=function(val){elz.borderSpacing=val;/*has no effect if borderCollapse is set to 'collapse'*/return this;},
          
        z_p=function(val){elz.padding=val;return this;},          
        z_pt=function(val){elz.paddingTop=val;return this;},          
        z_pr=function(val){elz.paddingRight=val;return this;},          
        z_pb=function(val){elz.paddingBottom=val;return this;},          
        z_pl=function(val){elz.paddingLeft=val;return this;},
          
        z_m=function(val){elz.margin=val;return this;},          
        z_mt=function(val){elz.marginTop=val;return this;},          
        z_mr=function(val){elz.marginRight=val;return this;},          
        z_mb=function(val){elz.marginBottom=val;return this;},          
        z_ml=function(val){elz.marginLeft=val;return this;},
          
        z_wb=function(val){elz.wordBreak=val;return this;},/*normal|break-all|keep-all|initial|inherit*/
          
        z_ws=function(val){elz.whiteSpace=val;return this;},/*normal|nowrap|pre|initial|inherit*/
          
        z_wsp=function(val){elz.wordSpacing=val;return this;},/*normal|length|initial|inherit - number can be positive, or negative*/
          
        z_w=function(val){elz.width=val;return this;};/*auto|length|%|initial|inherit*/
      
        z_h=function(val){elz.height=val;return this;};/*auto|length|%|initial|inherit*/
      
        z_zi=function(val){elz.zIndex=val;return this;}/*auto|number|initial|inherit - number can be positive, or negative*/

      return {/*To-do list--Return one function ONLY... that is equivalent to this whole object being returned*/
        zss:zss,
        
        z_dno:z_dno,
        z_din:z_din,
        z_dib:z_dib,
        z_dbl:z_dbl,
        
        z_btm:z_btm,
        
        /*text color*/
        z_c:z_c,
        
        /*background*/
        z_bg:z_bg,        
        z_bgc:z_bgc,
        z_bgi:z_bgi,
        z_bgix:z_bgix,
        z_bgiy:z_bgiy,
        z_bgin:z_bgin,
        z_bgino:z_bgino,
        z_bgini:z_bgini,
        z_bginh:z_bginh,
          
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
        
        z_bgclp:z_bgclp,
        z_bgclpb:z_bgclpb,
        z_bgclpp:z_bgclpp,
        z_bgclpc:z_bgclpc,
        z_bgclpi:z_bgclpi,
        z_bgclpih:z_bgclpih,
        
        /*border*/
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
        z_zi:z_zi
      };
    };
return window.stylZ=window.Z_=stylZ;/*stylZ=Z_*/
}());
