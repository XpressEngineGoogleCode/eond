first = 0;
menu_first = new Array();
menu_first_link = new Array();
menu_first_window = new Array();

second = 0;
menu_second = new Array();
menu_second_link = new Array();
menu_second_window = new Array();
menu_second_length = new Array();

first_selected = 100;
second_selected = 100;

function flash_color(normal, rollover, nor, rol, nor_num, rol_num) {
	first_color = '0x'+normal;
	first_color_rollover = '0x'+rollover;
	second_color = '0x'+nor;
	second_color_rollover = '0x'+rol;
	second_color_num = '0x'+nor_num;
	second_color_rollover_num = '0x'+rol_num;
}

function f_vars () {
	f_var = '';
	
	/* menu */
	for (i=0;i<first;i++){
		menu_first[i] = 'menu_first'+String(i)+'='+menu_first[i]+'&amp;';
		menu_first_link[i] = 'menu_first_link'+String(i)+'='+menu_first_link[i]+'&amp;';
		f_var += menu_first[i];
		f_var += menu_first_link[i];
		if(menu_first_window[i]) {
			menu_first_window[i] = 'menu_first_window'+String(i)+'='+menu_first_window[i]+'&amp;';
			f_var += menu_first_window[i];
		}
		for (i2=0;i2<menu_second_length[i];i2++){
			menu_second[i][i2] = 'menu_second'+String(i)+String(i2)+'='+menu_second[i][i2]+'&amp;';
			menu_second_link[i][i2] = 'menu_second_link'+String(i)+String(i2)+'='+menu_second_link[i][i2]+'&amp;';
			f_var += menu_second[i][i2];
			f_var += menu_second_link[i][i2];
			if(menu_second_window[i][i2]) {
				menu_second_window[i][i2] = 'menu_second_window'+String(i)+String(i2)+'='+menu_second_window[i][i2]+'&amp;';
				f_var += menu_second_window[i][i2];
			}
		}
		f_var += 'menu_second_length'+String(i)+'='+String(menu_second_length[i])+'&amp;';
	}
	f_var += 'first='+String(first)+'&amp;';
	f_var += 'first_selected='+String(first_selected)+'&amp;';
	f_var += 'second_selected='+String(second_selected)+'&amp;';
	
	/* flash_color */
	f_var += 'first_color='+first_color+'&amp;';
	f_var += 'first_color_rollover='+first_color_rollover+'&amp;';
	f_var += 'second_color='+second_color+'&amp;';
	f_var += 'second_color_rollover='+second_color_rollover+'&amp;';
	f_var += 'second_color_num='+second_color_num+'&amp;';
	f_var += 'second_color_rollover_num='+second_color_rollover_num+'&amp;';
	/* end */
	f_var += 'loading=load';
}

function flash(src,width,height,tr,flash_vars){
    object = '';
    object += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="param" width="'+width+'" height="'+height+'"/>';
    object += '<param name="movie" value="'+src+'"/>';
    if(tr=='1'){
         object += '<param name="wmode" Value="Transparent"/>';
    }
    object += ((flash_vars)? ' <param name="FlashVars" value="'+flash_vars+'" /> ' : '');
    object += '<embed src="'+src+'" quality="high" ';    
    if(tr=='1'){
        object += ' wmode="transparent" ';
    }
    object += ' bgcolor="#000000" menu="false" width="'+width+'" height="'+height+'" swliveconnect="true" id="param" name="param" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"';
    object += ((flash_vars)? ' flashvars="'+flash_vars+'" ' : '');
		object += '></embed>';
    object += '</object>';
    document.write(object);
}

function second_select(tmp){
	selected = tmp;
}

function login_open (){
	jQuery('#loginWindow').css({display:"block"});
	jQuery('.loginWindow .modalWindow').fadeTo(0, 0.5);
	jQuery('.loginWindow .modalWindow').css({height:document.body.scrollHeight});
}

jQuery(document).ready(function () {
	
	if(slide_menu == true) {
		fristPosition = document.getElementById('slidemenu').offsetTop;
		jQuery(window).scroll(function() {
			footer_y = document.getElementById('footer').offsetTop;
			currentPosition = jQuery(window).scrollTop();
			if(footer_y-fristPosition>currentPosition+250){
				jQuery("#slidemenu").stop().animate({
					top:currentPosition+fristPosition
				},'slow');
			}
		});
	}
	
	/* widget menu */
	
	jQuery('#widget_menu_box .widget_menu li').hover(
		function () {
			if(selected != 'none') jQuery(('#widget_menu_box .widget_menu li.'+selected)).removeClass('item_on');
			jQuery(this).animate({
				height:"40px",
				width:"170px"
			},250);
		}, 
		function () {
			jQuery(this).stop();
			jQuery(this).animate({
				height:"28px",
				textIndent:"0px"
			},250);
		}
	);
	jQuery('#widget_menu_box').hover(
		function () {},
		function () {
			/* menu rollout */
			if(selected != 'none') jQuery(('#widget_menu_box .widget_menu li.'+selected)).addClass('item_on');
			if(selected != 'none') jQuery(('#widget_menu_box .widget_menu li.'+selected)).animate({
				height:"40px",
				width:"170px"
			},250);
		}
	);
});
