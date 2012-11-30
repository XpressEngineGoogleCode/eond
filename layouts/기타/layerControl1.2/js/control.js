var layerclosetimer=null;
function layerclose(layerid){
    layerclosetimer=setTimeout("layer('"+layerid+"')",50);
}
function layerwaitforclose(layerid){
    clearTimeout(layerclosetimer);
}
function layer(layerid,target,xpos,ypos,isoverevent){
 
    // 위치 제어가 가능한 레이어 컨트롤.
    // http://www.psyonline.kr
 
    try{clearTimeout(layerclosetimer)}catch(error){}
    var obj=document.getElementById(layerid);
    if(!obj.style.display || obj.style.display=='none'){
        var targetinfo=[target.offsetWidth,target.offsetHeight,0,0];
        for(var i=0; i<1; i++){
            targetinfo[2]+=target.offsetLeft;
            targetinfo[3]+=target.offsetTop;
            target=target.offsetParent;
            if(target.tagName.toLowerCase()!='body' && target.tagName.toLowerCase()!='html') i--;
        }
        obj.style.display='block';
        var objinfo=[obj.offsetWidth,obj.offsetHeight];
        obj.style.display='none';
        if(xpos || ypos){
            if(xpos){
                if(!isNaN(xpos)) setleft(xpos);
                else{
                    var xpospm;
                    if(xpospm=xpos.match(/([a-z-]+)(\-|\+)([0-9]+)/)) xpos=xpospm[1];
                    if(xpos=='left') setleft(targetinfo[2]-objinfo[0]);
                    else if(xpos=='justify-left') setleft(targetinfo[2]);
                    else if(xpos=='right') setleft(targetinfo[2]+targetinfo[0]);
                    else if(xpos=='justify-right') setleft((targetinfo[2]+targetinfo[0])-objinfo[0]);
                    else if(xpos=='center') setleft((targetinfo[2]+(targetinfo[0]/2))-(objinfo[0]/2));
                }
            }
            if(ypos){
                if(!isNaN(ypos)) settop(ypos);
                else{
                    var ypospm;
                    if(ypospm=ypos.match(/([a-z-]+)(\-|\+)([0-9]+)/)) ypos=ypospm[1];
                    if(ypos=='top') settop(targetinfo[3]-objinfo[1]);
                    else if(ypos=='justify-top') settop(targetinfo[3]);
                    else if(ypos=='bottom') settop(targetinfo[3]+targetinfo[1]);
                    else if(ypos=='justify-bottom') settop((targetinfo[3]+targetinfo[1])-objinfo[1]);
                    else if(ypos=='middle') settop((targetinfo[3]+(targetinfo[1]/2))-(objinfo[1]/2));
                }
            }
        }else{
            if(xpos===0) setleft(xpos);
            if(ypos===0) settop(ypos);
        }
        obj.style.display='block';
    }else{
        if(!isoverevent) obj.style.display='none';
    }
 
    function setleft(value){
        if(xpospm) value=eval('value'+xpospm[2]+xpospm[3]);
        obj.style.left=value+'px';
    }
 
    function settop(value){
        if(ypospm) value=eval('value'+ypospm[2]+ypospm[3]);
        obj.style.top=value+'px';
    }
 
}