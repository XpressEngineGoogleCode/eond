/**
 * ±è¹«°Ç || Elkha (elkha1914@hotmail.com)
 **/

colorset = 'default';

snb_more = new Array();
snb_more['silver'] = -37;
snb_more['default'] = -261;

colors = new RegExp('silver|purple|default|green|pink|orange|skyblue|red');

banner = 1;
banners = 0;
banner_speed = 5500;

design = 'black';

(function($){
	$(document).ready(function () {
		
		// snb submenu view & Reset
		$('#widget .second_ol .expand .more').addClass('down');
		$('#widget .second_ol .expand .down').css({'background-position':'center '+snb_more[colorset.match(colors)]+'px'});		
		
		/**
		 * function start
		 **/
		$('.gray_button').hover(function(){
			$('*', this).addClass('hover');
		}, function(){
			$('*', this).removeClass('hover');
		});
		
		// .header_
		$('#header .header_ .layers').hover(function(){
			$('.open *', this).addClass('mouseOn');
		}, function(){
			$('.open *', this).removeClass('mouseOn');
		});
		/* .set_area .loginLayer */
		$('#header .header_ .layers .open button').click(function(){
			$('.headerLayer').addClass('closed');
			$(this).parent().next('.headerLayer').removeClass('closed');
			$('.headerLayer.closed').fadeOut('fast');
			$(this).parent().next('.headerLayer').slideToggle('normal');
		});
		$('.headerLayer .close').click(function (){
				$('.headerLayer').fadeOut('fast');
		});
		if(design == 'simple' || design == 'white'){
			inputColor = '#333'; inputColorOrg = '#aaa'; inputTop = '#9a9a9a'; inputBottom = '#d8d8d8'; inputTopOrg = inputTop; inputBottomOrg = inputBottom;
		}	else {
			inputTop = '#555'; inputBottom = '#777'; inputTopOrg = '#444'; inputBottomOrg = '#696969'; inputColor = '#eee'; inputColorOrg = '#999';
		}
		$('#header .header_ .headerLayer .inputText').focus(function(){
			$(this).css({'background-position':'center 0'});
			$(this).animate({
				backgroundColor:'#eff5e1',
				borderTopColor:inputTop,
				borderLeftColor:inputTop,
				borderRightColor:inputBottom,
				borderBottomColor:inputBottom,
				color:inputColor
			},'fast');
		}).blur(function(){
			$(this).css({'background-position':'center bottom'});
			$(this).animate({
				backgroundColor:'#fff',
				borderTopColor:inputTopOrg,
				borderLeftColor:inputTopOrg,
				borderRightColor:inputBottomOrg,
				borderBottomColor:inputBottomOrg,
				color:inputColorOrg
			},'fast');
		});
		$('#header .header_ .headerLayer .selectLanguage li button').hover(function(){
			$(this).addClass('hover');
		}, function(){
			$(this).removeClass('hover');
		});
		
		// gnb show & hide
		$('#gnb ul li').hover(function () {
				$(this).children('ul:not(":animated")').show('fast');
			}, function () {	
				$('ul', this).fadeOut(100);
		}).children('a').focus(function(){
			$(this).parent('li').parent('ul').children('li').children('.sub').addClass('closed');
			$(this).removeClass('closed').addClass('opened');
			$(this).parent('li').children('ul').show('fast');
			if($(this).attr('class').match('opened')) $(this).parent('li').parent('ul').children('li').children('.closed').parent('li').children('ul').fadeOut(70);
		});
		$('*:not("#gnb a")').focus(function(){
			$('#gnb ul li ul').fadeOut(100);
		});
		
		// lnb more show & hide
		$('#widget .lnb .widget_content .second_ol .second_li .more').click(function(){
			if($(this).parent().children('.third_ol').css('display') != 'none' ) {
				$(this).css({'background-position':'center -5px'});
				$(this).parent().children('.third_ol').hide('fast');
				$(this).removeClass('down');
			} else {
				$(this).css({'background-position':'center '+snb_more[$(this).attr('class').match(colors)]+'px'});
				$(this).parent().children('.third_ol').show('fast');
				$(this).addClass('down');
			}
		}).hover(function(){
			$(this).css({'background-position':'center '+snb_more[$(this).attr('class').match(colors)]+'px'});
		},function(){
			if(!$(this).attr('class').match('down')) $(this).css({'background-position':'center -5px'});
		});
		
		// lnb animate
		lnb_bg = (design=='simple')? '#f7f7f7' : ((design=='white')? '#fff' :'#eee');
		$('#widget .lnb .widget_content ol li a').hover(function(){
			$(this).animate({
				backgroundColor:'#ddd'
			}, 'fast');
		},function(){
			$(this).animate({
				backgroundColor:lnb_bg
			}, 'fast');
		});
		
		$('.select_language_button button').click(function () {
				$(this).css({'border-bottom':'1px'});
				$('.language_line ul').slideToggle('fast');
		});
		
	});
})(jQuery);
