/***********************************
 * 둥근 테이블 스크립트 (넓이, 배경색)
 **********************************/
function top_round(w,c) {
var top_html;
top_html="<table cellpadding=0 cellspacing=0 border=0 width="+w+">";
top_html+="<tr height=1><td rowspan=4 width=1></td><td rowspan=3 width=1></td>";
top_html+="<td rowspan=2 width=1></td><td width=2></td><td bgcolor="+c+"></td>";
top_html+="<td width=2></td><td rowspan=2 width=1></td><td rowspan=3 width=1></td>";
top_html+="<td rowspan=4 width=1></td></tr><tr height=1><td bgcolor="+c+"></td>";
top_html+="<td bgcolor="+c+"></td><td bgcolor="+c+"></td></tr>";
top_html+="<tr height=1><td bgcolor="+c+"></td><td colspan=3 bgcolor="+c+"></td>";
top_html+="<td bgcolor="+c+"></td></tr><tr height=2><td bgcolor="+c+"></td>";
top_html+="<td colspan=5 bgcolor="+c+"></td><td bgcolor="+c+"></td></tr></table>";
document.write(top_html);
}

function bottom_round(w,c) {
var bottom_html;
bottom_html="<table cellpadding=0 cellspacing=0 border=0 width="+w+">";
bottom_html+="<tr height=2><td rowspan=4 width=1></td><td width=1 bgcolor="+c+"></td><td width=1 bgcolor="+c+"></td>";
bottom_html+="<td width=2 bgcolor="+c+"></td><td bgcolor="+c+"></td><td width=2 bgcolor="+c+"></td>";
bottom_html+="<td width=1 bgcolor="+c+"></td><td width=1 bgcolor="+c+"></td><td rowspan=4 width=1></td></tr>";
bottom_html+="<tr height=1><td rowspan=3></td><td bgcolor="+c+"></td><td colspan=3 bgcolor="+c+"></td>";
bottom_html+="<td bgcolor="+c+"></td><td rowspan=3></td>  </tr><tr height=1><td rowspan=2></td>";
bottom_html+="<td bgcolor="+c+"></td><td bgcolor="+c+"></td><td bgcolor="+c+"></td><td rowspan=2></td></tr>";
bottom_html+="<tr height=1><td></td><td bgcolor="+c+"></td><td></td></tr></table>";
document.write(bottom_html);
}


/***********************************
 * Top으로 스크롤 되면서 돌아가기
 **********************************/
function back_top()
{
	x = document.body.scrollLeft;
	y = document.body.scrollTop;
	step = 2;

	while ((x != 0) || (y != 0)) {
		scroll (x, y);
		step += (step * step / 15);
		x -= step;
		y -= step;
		if (x < 0) x = 0;
		if (y < 0) y = 0;
	} 
	scroll (0, 0);
}


/***********************************
 * 토글을 이용한 Show&Hide
 **********************************/
function toggleD(obj) { 
	if (obj.style.display == 'none')
		obj.style.display = ''; 
	else obj.style.display = 'none'; }


/***********************************
 * 토글 블랜딩 Show&Hide
 **********************************/
function toggle(el) {
	if (el.style.display == 'none') {
		el.filters.blendTrans.Apply(); 
		el.style.display = ''; 
		el.filters.blendTrans.Play() }
	else { 
		el.filters.blendTrans.Apply(); 
		el.style.display = 'none'; 
		el.filters.blendTrans.Play() } 
	} 


/***********************************
 * 즐겨찾기 바로가기
 **********************************/
function GoMINIHP(val) { // 셀렉트박스시 페이지 이동관련~
	if (val!="#"&&val!="") {
		window.open(val,'_blank'); //top.document.inner_main.location.href = val;
	}

}			
function one_view(num) { // 레이어 보이기 감추기
	if (num==2) {
		document.all.my_one.style.display = "";
		document.all.your_one.style.display = "none";
		document.all.one_img1.src="http://eond.com/mynote/img/1wav_m1_0.gif";
		document.all.one_img2.src="http://eond.com/mynote/img/1wav_m2_1.gif";
	} else {
		document.all.your_one.style.display = "";				
		document.all.my_one.style.display = "none";					
		document.all.one_img1.src="http://eond.com/mynote/img/1wav_m1_1.gif";
		document.all.one_img2.src="http://eond.com/mynote/img/1wav_m2_0.gif";					
	}
}


/***********************************
 * 자동으로 onfocus="blur()" 붙이기
 **********************************/
var blurInc; blurInc = 0; 
function tempautoBlur(){ 
event.returnValue=true; document.onfocusin=autoBlur; } 
function autoBlur(){
if(event.srcElement.tagName=="INPUT" || event.srcElement.tagName=="TEXTAREA" || event.srcElement.tagName=="SELECT" || event.srcElement.tagName=="OBJECT" ){
document.onfocusin = tempautoBlur; return ; }
if(event.srcElement.tagName=="EMBED")return ; if(event.srcElement.tagName!="BODY" && typeof(document.body)=='object') { document.body.focus(); event.returnValue=false; } } function OnLoad(){ document.onfocusin=autoBlur; } window.onload = OnLoad;
/***********************************
 * 코멘트 창 띄우기, 목록에서 코멘트 쓰고 지우기
 **********************************/
function comment_pop(id, parent) { 
        var url='/cgi/php/board/zboard/comment_pop.php?parent='+parent+'&id='+id; 
        var opt='width=600,height=400,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,left=100,top=100,copyhistory=yes'; 
        window.open(url, 'comments', opt); 
} 

