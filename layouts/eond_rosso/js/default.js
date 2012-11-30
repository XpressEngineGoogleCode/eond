/*!
 * Alik
 * http://alik.info/
 *
 * Copyright (c) 2009 Alik
 *
 * Date: 2009-02-03
 */
//<![CDATA[
        var totalmenu = 3; //서브메뉴 총합
        function showmenu(no) {
            for(i=1;i<=totalmenu;i++) {
                if(i==no) {
                    document.getElementById('submenu_'+i).style.visibility = 'visible';
                } else {
                    document.getElementById('submenu_'+i).style.visibility = 'hidden';
                }
            }
        }

        function hidemenu() {
            for(i=1;i<=totalmenu;i++) {
                    document.getElementById('submenu_'+i).style.visibility = 'hidden';
            }
            initMenu();
        }
        
        function clickmenu(no) {
            createCookie('selectedmenu', no,100);
        }

        function checkMouse(e) {
            var openmenu = document.getElementById('menuarea');
            if (openmenu) {
                if (!e) var e = window.event;
                var tg = (window.event) ? e.srcElement : e.target;
                var obj = openmenu;
                while (tg && tg != obj && tg.nodeName != 'BODY') {
                    tg= tg.parentNode;
                }
                if (tg == obj) {
                    return;
                } else {
                    hidemenu();
                }
            }
        }

        function initMenu() {
            var cookieValue = readCookie('selectedmenu');
            if(cookieValue && cookieValue.length>0 && cookieValue<=totalmenu){
                showmenu(cookieValue);
            } else {
                showmenu(1);
            }
        }

        function createCookie(name,value,days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";
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

        addEvent(window,'load',initMenu);
        addEvent(document,'mousemove',checkMouse);

        function eraseCookie(name) {
    createCookie(name,"",-1);
}

    //]]>