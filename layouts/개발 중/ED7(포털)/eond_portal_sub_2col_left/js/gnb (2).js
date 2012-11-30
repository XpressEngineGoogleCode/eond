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
function unblur() {this.blur();}
function blurLinks() {
if (!document.getElementById) return;
var lnks = document.getElementsByTagName("a");
var i;
for(i=0; i<lnks.length; i++) {
lnks[i].onfocus = unblur;
// lnks[i].target = '_blank';
}
}
window.onload = blurLinks;