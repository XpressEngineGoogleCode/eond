/**
 * 김무건 || Elkha (elkha1914@hotmail.com)
 * http://elkha.kr
 * 2011-02-20
 **/

(function($){

	//$("#loginLayer").css({height:document.body.scrollHeight});

	$(document).ready(function(){

		// #loginLayer .close || ie6 높이 교정
		if($.browser.msie == true && parseInt($.browser.version) == 6) {
			$("#loginLayer").css("height",document.body.scrollHeight);
		}

		$("#header .login a").attr("href", "#loginLayer");
		$("#header .login a, #loginLayer .close button").click(function(){
			if( $("#loginLayer").hasClass("show") ) {
				$("#loginLayer").removeClass("show");
//				ieSelectFunc("visible");
			} else {
				$("#loginLayer").addClass("show");
				$("#uid").focus();
//				ieSelectFunc("hidden");
			}
			return false;
		});

		// #loginLayer .inputText | 텍스트 창 포커스
		$('#loginLayer .inputText').focus(function(){
			$(this).parent().addClass('focus');
		}).blur(function(){
			$(this).parent().removeClass('focus');
		});

		// #keepA | 로그인 유지
		$('#keepA').click(function(){
			if(this.checked) {
				if(!$.browser.msie) {
					$('#loginLayer form fieldset .keepCaution').animate({
						opacity:'show',
						'left':'+=20px'
					}, 'fast');
				} else {
					$('#loginLayer form fieldset .keepCaution').css("display","block");
				}
			} else {
				if(!$.browser.msie) {
					$('#loginLayer form fieldset .keepCaution').animate({
						opacity:'hide',
						'left':'-=20px'
					}, 'fast');
				} else {
					$('#loginLayer form fieldset .keepCaution').css("display","none");
				}
			}
		});


	});
})(jQuery);