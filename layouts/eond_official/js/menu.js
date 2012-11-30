function cssnavigationbarinitialize(){

	var isie=(/msie/i).test(navigator.userAgent);
	var isie7=(/msie 7/i).test(navigator.userAgent);
	var isie8=(/msie 8/i).test(navigator.userAgent);
	var isie9=(/msie 9/i).test(navigator.userAgent);
	if((/msie 9/i).test(navigator.userAgent)) isie=false;

	var menu=document.getElementById('menu');
	var li=menu.getElementsByTagName('li');
	var li_list=[];
	var icon=document.createElement((isie)? '<span class="i">' : 'span');
	if(!isie) icon.setAttribute('class','i');
	for(var i=0,ca,max=li.length; i<max; i++){
		if((/(major|aside)/).test(li[i].parentNode.parentNode.className)){
			li[i].parent=((/major/).test(li[i].parentNode.parentNode.className))? 'major' : 'aside';
			li[i].a=li[i].getElementsByTagName('a')[0];
			li[i].onmouseover=li[i].a.onfocus=show;
			li[i].onmouseout=li[i].a.onblur=hide;
			li[i].sub=li[i].getElementsByTagName('div')[0];
			if(li[i].sub){
				if(li[i].parent=='major') li[i].a.getElementsByTagName('span')[0].appendChild(icon.cloneNode(true));
				ca=li[i].sub.getElementsByTagName('a');
				for(var j=0,jmax=ca.length; j<jmax; j++){
					ca[j].onfocus=function(){
						clearTimeout(hidetimer);
					}
				}
			}
			li_list.push(li[i]);
		}
	}

	function show(){
		clearTimeout(hidetimer);
		var tg=((/a/i).test(this.nodeName))? this.parentNode : this;
		for(var i=0,max=li_list.length; i<max; i++){
			if(li_list[i]==tg){
				setclassname(li_list[i],true);
				if(li_list[i].sub) setwidth(li_list[i]);
				else if(isie8 && li_list[i].parent=='major') li_list[i].style.margin='0 -3px 0 -1px';
			}else{
				setclassname(li_list[i],false);
				if(isie8 && !li_list[i].sub && li_list[i].parent=='major') li_list[i].style.margin='0';
			}
		}
	}

	var hidetimer=null;
	function hide(){
		hidetimer=setTimeout(function(){hideaction()},200);
	}
	function hideaction(){
		for(var i=0,max=li_list.length; i<max; i++){
			setclassname(li_list[i],false);
		}
	}

	function setwidth(tg){
		var ul=tg.sub.getElementsByTagName('ul')[0];
		tg.sub.style.display='block';
		ul.style.width='auto';
		ul.style.width=Math.max(tg.offsetWidth-4,ul.offsetWidth-4)+'px';
		tg.sub.style.display='';
	}

	function setclassname(tg,isactive){
		if(isactive && !(/\bactive\b/).test(tg.className)) tg.className+=' active';
		else if(!isactive && (/\bactive\b/).test(tg.className)) tg.className=tg.className.replace(/ ?active/g,'');
	}


}
window.onload=cssnavigationbarinitialize;