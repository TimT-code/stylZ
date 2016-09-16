var Z_=function(el){/* Z_ is an alias for "styleZ" */
  var/*comma chain*/
    el=document.getElementById(el),
    elz=el.style,
      
    zss=function(property,value){
      elz[property]=value;
      return this;
    },
      
    z_c=function(colorz){
      elz.color=colorz;
      return this;
    },
      
    z_bgc=function(bg_colorz){
      elz.backgroundColor=bg_colorz;
      return this;
    },
      
    z_b=function(value){
      elz.border=value;
      return this;
  },
      
    z_w=function(value){
      elz.width=value;
      return this;
  };
  
  return {
    el:el,
    elz:elz,
    zss:zss,
    z_c:z_c,
    z_bgc:z_bgc,
    z_b:z_b,
    z_w:z_w
  };
};

//test code - compare length of code - The id's and color's name's characters are same length to compare
$('#two').css({'color':'olive','background-color':'plum','border':'solid salmon 4px','width':'95px'});
Z_('thre').z_c('white').z_bgc('teal').zss('border','solid purple 4px').zss('width','77px');
Z_('four').z_c('wheat').z_bgc('peru').z_b('solid orange 4px').z_w('57px');

//Practice for method chaining
//Work in progress - will add more style stuff from my other pen/library
//http://codepen.io/TimT_code/pen/mEavPA
