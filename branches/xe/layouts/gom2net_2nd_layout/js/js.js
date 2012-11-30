jQuery(document).ready(function () {	
	jQuery('#menuWrapper ul li').hover(
		function () {
			jQuery('ol', this).slideDown(230);
		}, 
		function () {
			jQuery('ol', this).fadeOut(200);
		}
	);
});

// anchor

jQuery(document).ready(function() {
	jQuery("a.anchorLink").anchorAnimate()
});
jQuery.fn.anchorAnimate = function(settings) {
 	settings = jQuery.extend({
		speed : 600
	}, settings);	
	return this.each(function(){
		var caller = this
		jQuery(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = jQuery(caller).attr("href")
			var destination = jQuery(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}

/* 입력박스 컬러링 */
jQuery(document).ready(function($){
    $("input.id, input.oid, input.password, input.inputTypeText").fadeTo("slow", 0.5);
    $("input.id, input.oid, input.password, input.inputTypeText").focus(function(){
    $(this).css({"background-color":"#eff5e1"}).fadeTo("slow", 1.0);
    });
});

jQuery(document).ready(function($){
    $("input.id, input.oid, input.password, input.inputTypeText").blur(function(){
    $(this).css({"background-color":"#ffffff"}).fadeTo("slow", 0.5);
    });
});