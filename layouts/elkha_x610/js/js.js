/**
 * 김무건 || Elkha (elkha1914@hotmail.com)
 * http://elkha.kr
 * 2010-07-14
 **/

SlideSpeed = true;

(function($){

	function ieGnbFix (act) { if($.browser.msie == true) {
		if(parseInt($.browser.version) == 6 && (act == "visible" || act == "hidden")) {
			$("#content select").css("visibility", act);
		}

		if(parseInt($.browser.version) == 7 && (act == "show" || act == "hide")) {
			padding = ( slide.match(/show_once/i) )? 60 : 61;
			if( act == "show") {
				$("#gnb .a1").each(function(){
					$(this).css("width",$(this).parents(".li1").width());
				});
				$("#gnb .ul2").each(function(){
					$(this).css("width", "auto");
					$(this).css("width", $(this).parents(".li1").width() - padding);
				});
			} else if ( act == "hide" ){
				$("#gnb .a1").each(function(){
					$(this).css("width","auto");
				});
			}
		}
	}}

	function GNBshow (gnb) {
		// Show GNB
		if(gnb == "show"){
			if(slide.match(/show_once/i)){ // 하나씩
				if(($.browser.msie == true && parseInt($.browser.version) <= 6) || slide.match(/no_slide/i) ) {
					$("#gnb li:not('.hover') .ul2").css({"display":"none"});
					$("#gnb li.hover .ul2:not(':animated')").css({"display":"block"});
					ieGnbFix ("hidden");
					ieGnbFix("show");
				} else {
					$("#gnb li:not('.hover') .ul2").fadeOut(100);
					$("#gnb li.hover .ul2:not(':animated')").animate({
						"height":"show",
						"opacity":"show"
					}, "fast", function(){
						ieGnbFix("show");
					});
				}
			}
			else if( !slide.match(/no_sub/i) ){
				$("#gnb").addClass("hover");
				if(($.browser.msie == true && parseInt($.browser.version) <= 6) || slide.match(/no_slide/i) ) {
					$("#gnb .ul2").css({
						"display":"block",
						"margin":"20px 0"
					});
					ieGnbFix ("hidden");
				} else {
					$("#gnb .ul2:not(':animated')").slideDown("fast", function(){
						ieGnbFix("show");
					});
				}
			}
		}

		// Hide GNB
		if(gnb == "hidden" && !slide.match(/no_sub/i) ){
			if(slide.match(/show_once/i)){ // 하나씩
				if(($.browser.msie == true && parseInt($.browser.version) <= 6) || slide.match(/no_slide/i) ) {
					$("#gnb li:not('.hover') .ul2").css({"display":"none"});
					ieGnbFix ("visible");
				} else {
					$("#gnb li:not('.hover') .ul2").fadeOut(100,function(){
						ieGnbFix("hide");
					});
				}
			}
			else if(($.browser.msie == true && parseInt($.browser.version) <= 6) || slide.match(/no_slide/i) ) { // 모두 - no_slide
				ieGnbFix ("visible");
				$("#gnb .ul2").css({"display":"none"});
				$("#gnb").removeClass("hover");
			}
			else { // 모두
				$("#gnb .ul2").slideUp("fast", function(){
					ieGnbFix("hide");
					$("#gnb").removeClass("hover");
				});
			}
		}
	}

	function LNBact () {
		// out
		$("#column .lnb .li2 .a2").stop().animate({
			"height":"15px"
		}, "fast").children("span").stop().animate({
			"paddingTop":"0",
			"paddingLeft":"0"
		}, "fast");

		// on
		$("#column .lnb .hover .a2").stop().animate({
			"height":"34px"
		}, "fast").children("span").stop().animate({
			"paddingTop":"9px",
			"paddingLeft":"15px"
		}, "fast");
	}
	$(document).ready(function(){

		/**
		 * #gnb
		 **/
		$("#gnb").mouseleave(function(){
			$("#gnb .li1").removeClass("hover");
			GNBshow("hidden");
		});
		$("#gnb .li1").hover(function(){
			$("#gnb .li1").removeClass("hover");
			$(this).addClass("hover");
			GNBshow("show");
		})
		.find("a").focus(function(){
			GNBshow("show");
		});
		$("*:not('#gnb a')").focus(function(){
			GNBshow("hidden");
		});

		/**
		 * .lnb
		 **/
		$("#column .lnb .li2").hover(function(){
			$("#column .lnb .hover").removeClass("hover");
			$(this).addClass("hover");
//				.children(".ul3").slideDown("fast");
			LNBact();
		}, function(){
			$(this).removeClass("hover");
			$("#column .lnb .on2").addClass("hover");
			LNBact();
		});
		/*$("#column .lnb").mouseleave(function(){
			$(this).find(".li2:not('.on2')").children(".ul3").slideUp("normal");
		});*/

		$("#column .lnb .on2").addClass("hover");
//			.children(".ul3").slideDown("fast");
		LNBact();

		$("#gnb .plus a").click(function(){
			if(slide == "no_sub_click"){
				if( $("#gnb .ul2").css("display") == "none" ){
					$("#gnb").addClass("hover");
					$("#gnb .ul2").css({
						"display":"block",
						"margin":"20px 0"
					});
				} else {
					$("#gnb").removeClass("hover");
					$("#gnb .ul2").css({
						"display":"none"
					});
				}
				return false;
			}
		});

		/**
		 * #footer .sLnag
		 **/

		$("#footer .sLang li.on button").click(function(){
			$(this).parents("ul").toggleClass("on");
		});
		/* $("#footer .sLang").mouseleave(function(){
			$(this).find("ul").removeClass("on");
		}); */
	});
})(jQuery);
