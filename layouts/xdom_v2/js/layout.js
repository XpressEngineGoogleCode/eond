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



function web_translate()
{
if(document.getElementById("web_url").value=='' || document.getElementById("web_url").value=='http://')
{
alert('웹주소를 입력해주세요');
document.getElementById("web_url").focus();
return;
}
window.open('http://translate.google.com/translate_c?u='+document.getElementById("web_url").value+'&sl='+document.getElementById("sl").value+'&tl='+document.getElementById("tl").value+'&hl=ko&ie=UTF-8','','')
}


// family site
function startFamilySiteScroll() {
	setTimeout("slideFamilySite()", 10);
}
function slideFamilySite() {
	el = document.getElementById("site_list");

	if (el.heightPos == null || (el.isDone && el.isOn == false)) {
		el.isDone = false;
		el.heightPos = 0;
		el.heightTo = 80;
	} else if (el.isDone && el.isOn){
		el.isDone = false;
		el.heightTo = 0;
	}
	if (Math.abs(el.heightTo - el.heightPos) > 1) {
		el.heightPos += (el.heightTo - el.heightPos) / 10;
		el.style.height = el.heightPos + "px";
		startFamilySiteScroll();
	} else {
		if (el.heightTo == 80) {
			el.isOn = true;
		} else {
			el.isOn = false;
		}
		el.heightPos = el.heightTo;
		el.style.height = el.heightPos + "px";
		el.isDone = true;
	}
}

// Roll_over Menu
// Brower
var browserType=''; 
if(navigator.userAgent.indexOf("MSIE") >-1) {
   browserType = 'IE'; 
} else if(navigator.userAgent.indexOf("Firefox") >-1) {
   browserType = 'FF'; 
} else {
   browserType = 'OTHER'; 
}
function gnbinToggle(id, gnbblock) {
 if(browserType == 'FF') {
  gnbinToggleFF(id, gnbblock);
 } else {
  gnbinToggleIE(id, gnbblock);
 }
}
// Local Navigation Toggle IE
function gnbinToggleIE(id, gnbblock) {
 for(num=0; num<gnb_count; num++) {
  document.getElementById('gnb'+num).style.display='none';              // 2차 메뉴
  document.getElementById('gnbli'+num).setAttribute('className', 'off');  // 1차 메뉴
 }
 var sub_1 = document.getElementById('gnbli'+id);     // 1 차메뉴 
 var sub_2 = document.getElementById('gnb'+id);     // 2 차메뉴
 document.getElementById('gnb'+id).style.display = 'block';
 gnbblock.className = "on";
     
}
// Local Navigation Toggle FF
function gnbinToggleFF(id, gnbblock) {
 for(var num=0; num<gnb_count; num++) {
  document.getElementById('gnb'+num).style.display='none'; // 2차 메뉴
  document.getElementById('gnbli'+num).className = null;  // 1차 메뉴
 }
 var sub_1 = document.getElementById('gnbli'+id);     // 1 차메뉴 
 var sub_2 = document.getElementById('gnb'+id);     // 2 차메뉴
 document.getElementById('gnb'+id).style.display = '';
 gnbblock.className = "on";
}
function reset_menu()
{
  var sub_1 = document.getElementById('gnbli'+gnb_count_now);     // 1 차메뉴 
  var sub_2 = document.getElementById('gnb'+gnb_count_now);     // 2 차메뉴
}

function setPng24(obj) {
    obj.width=obj.height=1;
    obj.className=obj.className.replace(/\bpng24\b/i,'');
    obj.style.filter =
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
    obj.src=''; 
    return '';
}
