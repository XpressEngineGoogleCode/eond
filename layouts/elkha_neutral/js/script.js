/**
 * ±è¹«°Ç || Elkha (elkha1914@hotmail.com)
 * http://elkha.kr
 * 2010-07-07
 **/

menu_slide = true;

(function($){

	// ieSelect
	function ieSelectFunc (tmp) {
		var ieSelect = false;
		if($.browser.msie == true) ieSelect = parseInt($.browser.version);
		if(ieSelect == 6) $('#container select').css({"visibility":tmp});
	}

	$(document).ready(function(){
		var gnb = $("#gnb");
		var gnbHover = false;

		function gnb_func(select){
			gnbHover = true;

			if(select){
				select.addClass("hover")
					.parents("li").addClass("hover");
				ieSelectFunc("hidden");
			} else {
				ieSelectFunc("visible");
			}
			if(!menu_slide) {
				$("#gnb li:not('.hover') ul").css("display", "none");
				$("#gnb .hover").removeClass("hover").children("ul").css("display", "block");
			} else {
				$("#gnb li:not('.hover') ul:not(':animated')").fadeOut("fast");
				$("#gnb .hover").removeClass("hover")
					.children('ul').animate({
					"height":"show",
					"opacity":"show"
				}, "fast");
			}
		}

		// #header .gnb
		gnb.find("li").hover(function(){
			gnb_func( $(this) );
		}).children("a").focus(function(){
			gnb_func( $(this).parent("li") );
		});
		gnb.mouseleave(function(){
			gnbHover = false;
			setTimeout(function(){
				if(!gnbHover) gnb_func( false );
			}, 1000);
		});
		$('*:not("#gnb a")').focus(function(){
			gnb_func( false );
		});

		// #footer .sLang
		$("#footer .sLang .select_language button").click(function(){
			$(this).parent().next("ul").toggle();
			return false;
		});
	});
})(jQuery);
