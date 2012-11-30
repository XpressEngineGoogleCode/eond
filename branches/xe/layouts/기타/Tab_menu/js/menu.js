/***********************************************************************************************

	Copyright (c) 2005 - Alf Magne Kalleland post@dhtmlgoodies.com

	Get this and other scripts at www.dhtmlgoodies.com

	You can use this script freely as long as this copyright message is kept intact.

	***********************************************************************************************/
	var menuAlignment = 'left';	// Align menu to the left or right?
	var topMenuSpacer = 0; // Horizontal space(pixels) between the main menu items
	var activateSubOnClick = false; // if true-> Show sub menu items on click, if false, show lnb items onmouseover
	var leftAlignSubItems = false; 	// left align sub items t

	var activeMenuItem = false;	// Don't change this option. It should initially be false
	var activeTabIndex = 0;	// Index of initial active tab	(0 = first tab) - If the value below is set to true, it will override this one.
	var rememberActiveTabByCookie = true;	// Set it to true if you want to be able to save active tab as cookie

	var MSIE = navigator.userAgent.indexOf('MSIE')>=0?true:false;
	var Opera = navigator.userAgent.indexOf('Opera')>=0?true:false;
	var navigatorVersion = navigator.appVersion.replace(/.*?MSIE ([0-9]\.[0-9]).*/g,'$1')/1;

	/*
	These cookie functions are downloaded from
	http://www.mach5.com/support/analyzer/manual/html/General/CookiesJavaScript.htm
	*/
	function Get_Cookie(name) {
	   var start = document.cookie.indexOf(name+"=");
	   var len = start+name.length+1;
	   if ((!start) && (name != document.cookie.substring(0,name.length))) return null;
	   if (start == -1) return null;
	   var end = document.cookie.indexOf(";",len);
	   if (end == -1) end = document.cookie.length;
	   return unescape(document.cookie.substring(len,end));
	}
	// This function has been slightly modified
	function Set_Cookie(name,value,expires,path,domain,secure) {
		expires = expires * 60*60*24*1000;
		var today = new Date();
		var expires_date = new Date( today.getTime() + (expires) );
	    var cookieString = name + "=" +escape(value) +
	       ( (expires) ? ";expires=" + expires_date.toGMTString() : "") +
	       ( (path) ? ";path=" + path : "") +
	       ( (domain) ? ";domain=" + domain : "") +
	       ( (secure) ? ";secure" : "");
	    document.cookie = cookieString;
	}

	function showHide()
	{
		if(activeMenuItem){
			activeMenuItem.className = 'inactiveMenuItem';
			var theId = activeMenuItem.id.replace(/[^0-9]/g,'');
			document.getElementById('lnb_'+theId).style.display='none';
			var img = activeMenuItem.getElementsByTagName('IMG');
			if(img.length>0)img[0].style.display='none';
		}

		var img = this.getElementsByTagName('IMG');
		if(img.length>0)img[0].style.display='inline';

		activeMenuItem = this;
		this.className = 'activeMenuItem';
		var theId = this.id.replace(/[^0-9]/g,'');
		document.getElementById('lnb_'+theId).style.display='block';



		if(rememberActiveTabByCookie){
			Set_Cookie('dhtmlgoodies_tab_menu_tabIndex','index: ' + (theId-1),100);
		}
	}

	function initMenu()
	{
		var gnbObj = document.getElementById('gnb');
		var menuItems = gnbObj.getElementsByTagName('A');
		if(document.all){
			gnbObj.style.visibility = 'hidden';
			document.getElementById('lnb').style.visibility='hidden';
		}
		if(rememberActiveTabByCookie){
			var cookieValue = Get_Cookie('dhtmlgoodies_tab_menu_tabIndex') + '';
			cookieValue = cookieValue.replace(/[^0-9]/g,'');
			if(cookieValue.length>0 && cookieValue<menuItems.length){
				activeTabIndex = cookieValue/1;
			}
		}

		var currentLeftPos = 15;
		for(var no=0;no<menuItems.length;no++){
			if(activateSubOnClick)menuItems[no].onclick = showHide; else menuItems[no].onmouseover = showHide;
			menuItems[no].id = 'gnbItem' + (no+1);
			if(menuAlignment=='left')
				menuItems[no].style.left = currentLeftPos + 'px';
			else
				menuItems[no].style.right = currentLeftPos + 'px';
			currentLeftPos = currentLeftPos + menuItems[no].offsetWidth + topMenuSpacer;

			var img = menuItems[no].getElementsByTagName('IMG');
			if(img.length>0){
				img[0].style.display='none';
				if(MSIE && !Opera && navigatorVersion<7){
					img[0].style.bottom = '-1px';
					img[0].style.right = '-1px';
				}
			}

			if(no==activeTabIndex){
				menuItems[no].className='activeMenuItem';
				activeMenuItem = menuItems[no];
				var img = activeMenuItem.getElementsByTagName('IMG');
				if(img.length>0)img[0].style.display='inline';

			}else menuItems[no].className='inactiveMenuItem';
			if(!document.all)menuItems[no].style.bottom = '-1px';
			if(MSIE && navigatorVersion < 6)menuItems[no].style.bottom = '-2px';


		}

		var gnbLinks = gnbObj.getElementsByTagName('A');

		var subCounter = 1;
		var parentWidth = gnbObj.offsetWidth;
		while(document.getElementById('lnb_' + subCounter)){
			var subItem = document.getElementById('lnb_' + subCounter);

			if(leftAlignSubItems){
				// No action
			}else{
				var leftPos = gnbLinks[subCounter-1].offsetLeft;
				document.getElementById('lnb_'+subCounter).style.paddingLeft =  leftPos + 'px';
				subItem.style.position ='absolute';
				if(subItem.offsetWidth > parentWidth){
					leftPos = leftPos - Math.max(0,subItem.offsetWidth-parentWidth);
				}
				subItem.style.paddingLeft =  leftPos + 'px';
				subItem.style.position ='static';


			}
			if(subCounter==(activeTabIndex+1)){
				subItem.style.display='block';
			}else{
				subItem.style.display='none';
			}

			subCounter++;
		}
		if(document.all){
			gnbObj.style.visibility = 'visible';
			document.getElementById('lnb').style.visibility='visible';
		}
		document.getElementById('lnb').style.display='block';
	}
	window.onload = initMenu;