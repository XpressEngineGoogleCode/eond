
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

//sitemap

function toggle(el)
{
var el = document.getElementById(el);
if (el)
el.style.display = (el.style.display == "none") ? "" : "none";
}

//onfocus
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