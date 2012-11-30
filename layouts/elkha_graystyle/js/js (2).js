(function($){
	$(document).ready(function () {
		
		// gnb show & hide
		$('#gnb ul li').hover(function () {
				$(this).children('ul:not(":animated")').slideDown('fast');
			}, function () {	
				$('ul', this).fadeOut('fast');
		}).children('a').focus(function(){
			$(this).parent('li').parent('ul').children('li').children('.sub').addClass('closed');
			$(this).removeClass('closed').addClass('opened');
			$(this).parent('li').children('ul').slideDown('fast');
			if($(this).attr('class').match('opened')) $(this).parent('li').parent('ul').children('li').children('.closed').parent('li').children('ul').fadeOut('fast');
		});
		$('*:not("#gnb a")').focus(function(){
			$('#gnb ul li ul').fadeOut('fast');
		});
		
		jQuery('.select_language_button button').click(function () {
				jQuery(this).css({'border-bottom':'1px'});
				jQuery('.language_line ul').slideToggle('fast');
		});
	});
})(jQuery);
