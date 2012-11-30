

// style mode
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);

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

// 메뉴
jQuery(function($){

	var menu = $('div.wdg_menu');
	var major = $('div.major');
	var li_list = major.find('li');
	
	// Selected
	function onselectmenu(){
		var t = $(this);
		var myclass = [];
		
		t.parentsUntil('div.major').filter('li').each(function(){
			myclass.push( $(this).attr('class') );
		});
		
		myclass = myclass.join(' ');
		if (!major.hasClass(myclass)) major.attr('class','major').addClass(myclass);
	}
	
	// Show
	function show_this(){
		var t = $(this);
		
		li_list.removeClass('active');
		t.parentsUntil('div.major').filter('li').addClass('active');
		
		// IE7 or IE7 documentMode bug fix
		if($.browser.msie) {
			var v = document.documentMode || parseInt($.browser.version);

			if (v == 7) {
				var div = t.parentsUntil('div.sub').eq(-1);
				div.css('width', '').css('width', div.width()+'px');
			}
		}
	}
	li_list.find('>a').click(onselectmenu).mouseover(show_this).focus(show_this);
	
	// Hide
	function hide_this(){
		li_list.removeClass('active');
	}
	menu.mouseleave(hide_this);
	li_list.find('div.sub>ul').mouseleave(hide_this);
	li_list.find('div.sub li:last-child>a').focusout(hide_this);

	//icon
	major.find('div.sub').prev('a').find('>span').append('<span class="i"></span>');
	
});





