/*--- Top ---*/
function back_top()
{
	x = document.body.scrollLeft;
	y = document.body.scrollTop;
	step = 2;

	while ((x != 0) || (y != 0)) {
		scroll (x, y);
		step += (step * step / 100);
		x -= step;
		y -= step;
		if (x < 0) x = 0;
		if (y < 0) y = 0;
	} 
	scroll (0, 0);
}

/*--- slide ---*/

jQuery(document).ready(function () {
	
	if(slide_menu == true) {
		fristPosition = document.getElementById('aside').offsetTop;
		jQuery(window).scroll(function() {
			footer_y = document.getElementById('footer').offsetTop;
			currentPosition = jQuery(window).scrollTop();
			if(footer_y-fristPosition>currentPosition+250){
				jQuery("#aside").stop().animate({
					top:currentPosition+fristPosition
				},'slow');
			}
		});
	}

	if(slide_menu == false) {
		fristPosition = document.getElementById('snb').offsetTop;
		jQuery(window).scroll(function() {
			footer_y = document.getElementById('footer').offsetTop;
			currentPosition = jQuery(window).scrollTop();
			if(footer_y-fristPosition>currentPosition+250){
				jQuery("#snb").stop().animate({
					top:currentPosition+fristPosition
				},'slow');
			}
		});
	}

});

// family site
function startFamilySiteScroll() {
	setTimeout("slideFamilySite()", 10);
}
function slideFamilySite() {
	el = document.getElementById("site_list");

	if (el.heightPos == null || (el.isDone && el.isOn == false)) {
		el.isDone = false;
		el.heightPos = 0;
		el.heightTo = 110;
	} else if (el.isDone && el.isOn){
		el.isDone = false;
		el.heightTo = 0;
	}
	if (Math.abs(el.heightTo - el.heightPos) > 1) {
		el.heightPos += (el.heightTo - el.heightPos) / 10;
		el.style.height = el.heightPos + "px";
		startFamilySiteScroll();
	} else {
		if (el.heightTo == 110) {
			el.isOn = true;
		} else {
			el.isOn = false;
		}
		el.heightPos = el.heightTo;
		el.style.height = el.heightPos + "px";
		el.isDone = true;
	}
}