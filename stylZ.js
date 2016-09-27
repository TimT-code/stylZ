var stylZ=(function(){
    var stylZ=function(el){/* Z_ is an alias for "styleZ" */
      var/*comma chain*/
        el=document.getElementById(el),
        elz=el.style,

        zss=function(prop,val){/*zss=css*/
          elz[prop]=val;
          return this;
        },

        z_c=function(val){
          elz.color=val;
          return this;
        },
          
        z_bg=function(val){
          elz.background=val;
          return this;
        },

        z_bgc=function(val){
          elz.backgroundColor=val;
          return this;
        },

        z_bgi=function(val){
          elz.backgroundImage='url("'+val+'")';
          /*default x-y repeat*/
          return this;
        },
          
        z_bgix=function(val){
          elz.backgroundImage='url("'+val+'")';
          elz.backgroundRepeat='repeat-x';
          return this;
        },
          
        z_bgiy=function(val){
          elz.backgroundImage='url("'+val+'")';
          elz.backgroundRepeat='repeat-y';
          return this;
        },
          
        z_bgin=function(val){
          //to-do:Add check for missing argument to use as automatic no-repeat without providing a url again - toggle no-repeat
          elz.backgroundImage='url("'+val+'")';
          elz.backgroundRepeat='no-repeat';
          return this;
        },

        z_b=function(val){
          elz.border=val;
          return this;
      },

        z_w=function(val){
          elz.width=val;
          return this;
      };

        z_h=function(val){
          elz.height=val;
          return this;
      };

      return {
        el:el,
        elz:elz,
        zss:zss,
        /*text color*/
        z_c:z_c,
        /*background*/
        z_bg:z_bg,
        z_bgc:z_bgc,
        z_bgi:z_bgi,
        z_bgix:z_bgix,
        z_bgiy:z_bgiy,
        z_bgin:z_bgin,
        /*border*/
        z_b:z_b,
        /*width & height*/
        z_w:z_w,
        z_h:z_h
      };
    };
return window.stylZ=window.Z_=stylZ/*stylZ=Z_*/
}());
