	//<![CDATA[
		var subMPrefix = 'sub';
		var openLayer = null;

		function mouseOut(e, mainObj, subObjNo){
			subObj = document.getElementById(subMPrefix + subObjNo);
			if (!e) var e = window.event;
			var coord = getObjCoordinates(mainObj);
			var mouse = getMouseXY(e);
			if(mouse.x < coord.x || mouse.x > coord.x + coord.w || mouse.y < coord.y|| mouse.y > coord.y + coord.h) {
				hideLayer(subObj);
			}
		}

		function getObjCoordinates(obj) {
			var result = new Object();
			result.x = getOffsetLeft(obj);
			result.y = getOffsetTop(obj);
			result.w = obj.offsetWidth;
			result.h = obj.offsetHeight;
			return result;
		}

		function getMouseXY(e) {
			if (!e) var e = window.event;
			var result = new Object();
			result.x = document.all ? event.clientX + (document.body.scrollLeft == 0 ? document.documentElement.scrollLeft : document.body.scrollLeft) : e.pageX;
			result.y = document.all ? event.clientY + (document.body.scrollTop == 0? document.documentElement.scrollTop : document.body.scrollTop) : e.pageY;
			return result;
		}

		function checkMouse(e) {
			if (openLayer != null) {
				if (!e) var e = window.event;
				var tg = (window.event) ? e.srcElement : e.target;
				var obj = openLayer.parentNode;
				while (tg && tg != obj && tg.nodeName != 'BODY') {
					tg= tg.parentNode;
				}
				if (tg == obj) {
					return;
				} else {
					hideLayer(openLayer);
					openLayer = null;
				}
			}
		}

		function getOffsetLeft (el) {
			var ol = el.offsetLeft;
			while ((el = el.offsetParent) != null) { ol += el.offsetLeft; }
			return ol;
		}

		function getOffsetTop (el) {
			var ot = el.offsetTop;
			while((el = el.offsetParent) != null) { ot += el.offsetTop; }
			return ot;
		}

		function showLayer(objNo) {
			obj = document.getElementById(subMPrefix + objNo);
			obj.style.display = 'block';
			openLayer = obj;
		}

		function hideLayer(obj) {
			obj.style.display = 'none';
		}

		//
		function addEvent( obj, type, fn ) {
			if (obj.addEventListener) {
				obj.addEventListener( type, fn, false );
				EventCache.add(obj, type, fn);
			}
			else if (obj.attachEvent) {
				obj["e"+type+fn] = fn;
				obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
				obj.attachEvent( "on"+type, obj[type+fn] );
				EventCache.add(obj, type, fn);
			}
			else {
				obj["on"+type] = obj["e"+type+fn];
			}
		}

		var EventCache = function(){
			var listEvents = [];
			return {
				listEvents : listEvents,
				add : function(node, sEventName, fHandler){
					listEvents.push(arguments);
				},
				flush : function(){
					var i, item;
					for(i = listEvents.length - 1; i >= 0; i = i - 1){
						item = listEvents[i];
						if(item[0].removeEventListener){
							item[0].removeEventListener(item[1], item[2], item[3]);
						};
						if(item[1].substring(0, 2) != "on"){
							item[1] = "on" + item[1];
						};
						if(item[0].detachEvent){
							item[0].detachEvent(item[1], item[2]);
						};
						item[0][item[1]] = null;
					};
				}
			};
		}();
		addEvent(window,'unload',EventCache.flush);
		//

		addEvent(document,'mousemove',checkMouse);
	//]]>