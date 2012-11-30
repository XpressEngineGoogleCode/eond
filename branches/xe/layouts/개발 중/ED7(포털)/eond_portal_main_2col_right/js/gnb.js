jQuery(document).ready(function () {	
	jQuery('#menuWrapper ul li').hover(
		function () {
			jQuery('ol', this).slideDown(120);
		}, 
		function () {
			jQuery('ol', this).fadeOut(5);
		}
	);
	jQuery('span.more').hover(
		function () {
			
		},
		function () {
			
		}
	);
});
