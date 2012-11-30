/**
 * ±è¹«°Ç || Elkha (elkha1914@hotmail.com)
 * http://elkha.kr
 * 2010-07-07
 **/

(function($){

	// gnb
	gnbLayer = "#header #gnb ";
	function gnb (tmp){
		$(tmp + "li:not('.hover')")
			.children("ul").fadeOut("fast");
		$(gnbLayer).find('.hover').removeClass('hover')
			.children('ul:not(":animated")').animate({
			"height":"show",
			"opacity":"show"
		}, "fast");
	}

	$(document).ready(function(){
		
		// ieSelect
		ieSelect = false;
		if($.browser.msie == true) ieSelect = parseInt($.browser.version);
		function ieSelectFn (tmp) {
			if(ieSelect == 6) $('#container select').css({visibility:tmp}); // ieSelect
		}

		// #header .gnb
		$(gnbLayer).find("li").hover(function () {
			$(this).addClass("hover")
				.parents("li").addClass("hover");
			gnb(gnbLayer);
		}).children("a").focus(function(){
			$(this).parents("li").addClass("hover");
			gnb(gnbLayer);
		});
		$(gnbLayer).mouseleave(function(){
			gnb(gnbLayer);
		});
		$('*:not("'+ gnbLayer +'a")').focus(function(){
			$(gnbLayer).find(".hover").removeClass("hover");
			gnb(gnbLayer);
		});

		// #footer .sLang
		$("#footer .sLang .select_language button").click(function(){
			$(this).parent().next("ul").toggle();
			return false;
		});
	});
})(jQuery);
