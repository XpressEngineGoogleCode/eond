
/* 입력박스 컬러링 */
jQuery(document).ready(function($){
    $("input.id, input.oid, input.password, input.inputTypeText").fadeTo("slow", 0.5);
    $("input.id, input.oid, input.password, input.inputTypeText").focus(function(){
    $(this).css({"background-color":"#eff5e1"}).fadeTo("slow", 1.0);
    });
});

jQuery(document).ready(function($){
    $("input.id, input.oid, input.password, input.inputTypeText").blur(function(){
    $(this).css({"background-color":"#ffffff"}).fadeTo("slow", 0.5);
    });
});