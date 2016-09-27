# stylZ
Related to my IDxyz library/code - a shortener for code targeting an element id to add css, color, etc.. - Like jQuery, only just element id's so far.  Method chaining




Some test code - compare length of code - The id's and color's name's characters are same length to compare.
Use 'stylZ' or 'Z_' (similar to 'jQuery' or '$')

jQuery('#one').css({'color':'brown','background-color':'gray','border':'solid indigo 4px','width':'99px'});
$('#two').css({'color':'olive','background-color':'plum','border':'solid salmon 4px','width':'95px'});

stylZ('thre').z_c('white').z_bgc('teal').zss('border','solid purple 4px').zss('width','77px');
Z_('four').z_c('wheat').z_bgc('peru').z_b('solid orange 4px').z_w('57px');

###default repeat background image
Z_('five').z_bgi('https://www.examplez.com/picture.gif').z_c('black').z_b('solid black 4px').z_w('80px').z_h('75px');

###no repeat background image
Z_('five').z_bgin('https://www.examplez.com/picture.gif').z_c('black').z_b('solid black 4px').z_w('80px').z_h('75px');

###repeat-x background image
Z_('six6').z_bgix('https://www.examplez.com/picture.gif').z_c('black').z_b('solid red 4px').z_w('240px').z_h('75px');

###repeat-y background image
Z_('sevn').z_bgiy('https://www.examplez.com/picture.gif').z_c('black').z_b('solid green 4px').z_w('80px').z_h('240px');

####chain horizontally, or vertically
Z_('eight')
.z_c('blue')
.z_b('solid green 6px')
.z_w('180px')
.z_h('340px');
