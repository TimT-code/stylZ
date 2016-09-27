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

        z_bgc=function(val){
          elz.backgroundColor=val;
          return this;
        },

        z_bgi=function(val){
          elz.backgroundImage='url("'+val+'")';
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
        z_c:z_c,
        z_bgc:z_bgc,
        z_bgi:z_bgi,
        z_b:z_b,
        z_w:z_w,
        z_h:z_h
      };
    };
return window.stylZ=window.Z_=stylZ/*stylZ=Z_*/
}());

//test code - compare length of code - The id's and color's name's characters are same length to compare
jQuery('#one').css({'color':'brown','background-color':'gray','border':'solid indigo 4px','width':'99px'});
$('#two').css({'color':'olive','background-color':'plum','border':'solid salmon 4px','width':'95px'});
stylZ('thre').z_c('white').z_bgc('teal').zss('border','solid purple 4px').zss('width','77px');
Z_('four').z_c('wheat').z_bgc('peru').z_b('solid orange 4px').z_w('57px');
Z_('five').z_bgi('https://codepen.io/assets/avatars/user-avatar-80x80-fd2a2ade7f141e06f8fd94c000d6ac7a.png').z_c('black').z_b('solid black 4px').z_w('auto').z_h('auto');

//Practice for method chaining
//Work in progress - will add more style stuff from my other pen/library
//http://codepen.io/TimT_code/pen/mEavPA
//https://github.com/TimT-code/stylZ
