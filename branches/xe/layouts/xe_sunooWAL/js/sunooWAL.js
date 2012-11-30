// * xe_sunooWAL layout. Layout Design by SunooTC (http://www.goodpr.me/) 

function show(id) {
	document.getElementById(id).style.display="block";  }
function hide(id) {
	var evt = window.event;
	document.getElementById(id).style.display="none";
	if (evt.stopPropagation) { 
	evt.stopPropagation(); 	} 
	else { 
	evt.cancelBubble = true; 	}  }

window.onclick = function(){clearAll();}
function clearAll(){
clearMenu3();clearMenu2();clearMenu1();  }

function clearMenu3() {
	var mi = document.getElementsByTagName("table"); 
	for(var i=0,len=mi.length ; i<len ; i++) { 
		if(mi[i].id.substr(0,6) == "menu3_") { 
			document.getElementById(mi[i].id).style.display="none";		} 	}  }

function clearMenu2() {
	var mi = document.getElementsByTagName("table"); 
	for(var i=0,len=mi.length ; i<len ; i++) { 
		if(mi[i].id.substr(0,6) == "menu2_") { 
			document.getElementById(mi[i].id).style.display="none";		} 	}  }

function clearMenu1() {
	var mi = document.getElementsByTagName("table"); 
	for(var i=0,len=mi.length ; i<len ; i++) { 
		if(mi[i].id.substr(0,5) == "menu_") { 
			document.getElementById(mi[i].id).style.display="none";		} 	}	 }

// table layer 
function roundTable(objID) {
var obj = document.getElementById(objID);
var Parent, objTmp, Table, TBody, TR, TD;
var bdcolor, bgcolor, Space;
var trIDX, tdIDX, MAX;
var styleWidth, styleHeight;

// get parent node
Parent = obj.parentNode;
objTmp = document.createElement('SPAN');
Parent.insertBefore(objTmp, obj);
Parent.removeChild(obj);

// get attribute
bdcolor = obj.getAttribute('rborder');
bgcolor = obj.getAttribute('rbgcolor');
radius = parseInt(obj.getAttribute('radius'));
if (radius == null || radius < 1) radius = 1;
else if (radius > 6) radius = 6;

MAX = radius * 2 + 1;

// create table {{
Table = document.createElement('TABLE');
TBody = document.createElement('TBODY');

Table.cellSpacing = 0;
Table.cellPadding = 0;

for (trIDX=0; trIDX < MAX; trIDX++) {
TR = document.createElement('TR');
Space = Math.abs(trIDX - parseInt(radius));
for (tdIDX=0; tdIDX < MAX; tdIDX++) {
TD = document.createElement('TD');

styleWidth = '1px'; styleHeight = '1px';
if (tdIDX == 0 || tdIDX == MAX - 1) styleHeight = null;
else if (trIDX == 0 || trIDX == MAX - 1) styleWidth = null;
else if (radius > 2) {
if (Math.abs(tdIDX - radius) == 1) styleWidth = '2px';
if (Math.abs(trIDX - radius) == 1) styleHeight = '2px';
}

if (styleWidth != null) TD.style.width = styleWidth;
if (styleHeight != null) TD.style.height = styleHeight;

if (Space == tdIDX || Space == MAX - tdIDX - 1) TD.style.backgroundColor = bdcolor;
else if (tdIDX > Space && Space < MAX - tdIDX - 1) TD.style.backgroundColor = bgcolor;

if (Space == 0 && tdIDX == radius) TD.appendChild(obj);
TR.appendChild(TD);
}
TBody.appendChild(TR);
}
Table.appendChild(TBody);

// insert table and remove original table
Parent.insertBefore(Table, objTmp);
}


var $j = jQuery.noConflict(); 
$j(document).ready(function(){ 
  var currentPosition = parseInt($j("#quickMenu").css("top")); 
  $j(window).scroll(function() { 
    var position = $j(window).scrollTop(); 
    $j("#quickMenu").stop().animate({"top":position+currentPosition+"px"},1000);
  }); 
}); 

function siteLayerScroll() {
	setTimeout("siteLayer()", 10);
}
function siteLayer() {
	el = document.getElementById("sitelist");

	if (el.heightPos == null || (el.isDone && el.isOn == false)) {
		el.isDone = false;
		el.heightPos = 0;
		el.heightTo = 120;
	} else if (el.isDone && el.isOn){
		el.isDone = false;
		el.heightTo = 0;
	}
	if (Math.abs(el.heightTo - el.heightPos) > 1) {
		el.heightPos += (el.heightTo - el.heightPos) / 10;
		el.style.height = el.heightPos + "px";
		siteLayerScroll();
	} else {
		if (el.heightTo == 120) {
			el.isOn = true;
		} else {
			el.isOn = false;
		}
		el.heightPos = el.heightTo;
		el.style.height = el.heightPos + "px";
		el.isDone = true;
	}
}



