# stylZ
Started practicing method chaining and started work on my IDxyz library/code - a shortener for code targeting an element id to add css, color, etc.. - Abandoned that way of doing things for this current build ideas using 'stylZ' or 'Z_' to apply selectors to css stuff

Still working on this fun project - (Bugs:more than one tag doesn't work, and querySelector('*') doesn't work yet either)

Like jQuery - Method chaining - Unique abbreviations

Some test code - compare length of code - The id's and color's name's characters are same length to compare.

Use 'stylZ' or 'Z_' (similar to typing 'jQuery' or '$')

var test_img='https://codepen.io/assets/avatars/user-avatar-80x80-fd2a2ade7f141e06f8fd94c000d6ac7a.png';

jQuery('#one').css({'color':'brown','background-color':'gray','border':'solid indigo 4px','width':'99px'});
$('#two').css({'color':'olive','background-color':'plum','border':'solid salmon 4px','width':'95px'});
stylZ('#thre').z_c('white').z_bgc('teal').zss('border','solid purple 4px').zss('width','77px');
Z_('#four').z_c('wheat').z_bgc('peru').z_b('solid orange 4px').z_w('57px');

Z_('.all').z_bgin(test_img).z_c('black').z_b('solid black 4px').z_w('80px').z_h('75px');

Z_('#six6').z_bgc('gray');
Z_('.sev').zss('color','orange');
Z_('p','0').z_c('red');
Z_('p',[1]).z_c('green');
Z_('body').z_bgc('gray');//1st occurence - and only one body tag anyways

###default repeat background image
Z_('#five').z_bgi('website/picture.gif').z_c('black').z_b('solid black 4px').z_w('80px').z_h('75px');

###no repeat background image
Z_('#five').z_bgino('website/picture.gif').z_c('black').z_b('solid black 4px').z_w('80px').z_h('75px');

###repeat-x background image
Z_('#six6').z_bgix('website/picture.gif').z_c('black').z_b('solid red 4px').z_w('240px').z_h('75px');

###repeat-y background image
Z_('#sevn').z_bgiy('website/picture.gif').z_c('black').z_b('solid green 4px').z_w('80px').z_h('240px');

####chain horizontally, or vertically

Z_('eight')<br>
.z_c('blue')<br>
.z_b('solid green 6px')<br>
.z_w('180px')<br>
.z_h('340px');

