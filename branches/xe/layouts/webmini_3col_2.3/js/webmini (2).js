// Hide And Show Toggle
var cc=0
function hideShow(id) {
    if (cc==0) {
        cc=1
        document.getElementById(id).style.display="none";
    } else {
        cc=0
        document.getElementById(id).style.display="block";
    }
}

// Show And Hide Toggle
var cc=0
function showHide(id) {
    if (cc==0) {
        cc=1
        document.getElementById(id).style.display="block";
    } else {
        cc=0
        document.getElementById(id).style.display="none";
    }
}

// Local Navigation Toggle
function lnbToggle(id) {
	for(num=1; num<=3; num++) document.getElementById('D3MG'+num).style.display='none'; //D4MG1~D4MG3 까지 숨긴 다음
	document.getElementById(id).style.display='block'; //해당 ID만 보임
}

// IS
function chkIsKind(key, value) {
    showHide('selectOrder');
    xGetElementById('search_target'+key).checked = true;
    xInnerHtml('search_target_label', value);
}

// bookmark
function bookmarksite(title,url) {
   if (window.sidebar) // firefox 
   window.sidebar.addPanel(title, url, ""); 
   else if(window.opera && window.print)

   { // opera 
      var elem = document.createElement('a'); 
      elem.setAttribute('href',url); 
      elem.setAttribute('title',title); 
      elem.setAttribute('rel','sidebar'); 
      elem.click(); 
   } 

   else if(document.all) // ie
   window.external.AddFavorite(url, title);
}

// background color
function tile(){
if (!document.all)
return
var source=event.srcElement
if (source.tagName=="IMG")
document.body.style.backgroundImage="url("+source.src+")"
}

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