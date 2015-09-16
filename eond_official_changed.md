# 이온디 공식 레이아웃 매뉴얼 #
이온디 공식 레이아웃의 정식 배포에 따라 본 매뉴얼을 작성합니다.

## 기본정보 ##
  * 한글명 : 이온디 공식 레이아웃 (eond official layout)
  * 최신버전 : ver.1.4
  * 제작자 : 이온디 (http://eond.com)

## 1. 사용 방법 ##

### 1.1. 설치 경로 ###
```
./layouts/eond_officiail/
```

### 1.2. 설정 방법 ###
이온디 공식 레이아웃을 레이아웃 경로에 업로드 한 뒤 설정을 마친 다음, 꼭 관리자 페이지에서 '캐시파일 재생성' 메뉴를 클릭하여 캐시를 초기화하여 사용해주십시오.
버전에 따라 파일명이 상이한 경우가 있으므로 해주는 것이 좋습니다.

#### 1.2.1. 레이아웃 ####

##### 컬러셋 #####
  * 스카이블루
  * 홍씨
그 외는 지원 예정 중입니다.
##### 검색박스 컬러 #####
검색박스의 색상을 지정할 수 있습니다.

예) #000000
##### 검색박스 테두리 굵기 #####
검색박스의 보더값을 지정할 수 있습니다.
##### 메뉴바 배경이미지 지정 #####

## 2. 이온디 공식 레이아웃의 버전별 차이점 ##

버전에 따라 변경된 점을 소스코드 공개와 함께 차이점을 작성합니다.

### 계획 중 ###
  * 본문 컨텐츠 영역 테두리 추가
  * 색상 스킨의 추가

### 버전 1.4.1 ###
  * 검색이 안되는 점 수정함.
_header.html
```
	<div id="logo">
		<h1><!--@if(!$layout_info->logo_image)--><a href="http://eond.com"><img src="./images/{$layout_info->colorset}/logo.png" alt="이온디" <!--@else--><a href="{$layout_info->index_url}"><img src="{$layout_info->logo_image}" alt="{$layout_info->logo_alt}" border="0" <!--@end-->class="iePngFix" /></a>
		</h1>
		<fieldset id="isSearch">
		<legend>검색창</legend>
		<form action="{getUrl()}" method="post">
		<!--@if($vid)-->
		<input type="hidden" name="vid" value="{$vid}" cond="$vid" />
		<!--@end-->
		<input type="hidden" name="mid" value="{$mid}" />
		<input type="hidden" name="act" value="IS" />
		<input type="hidden" name="search_target" value="title_content" />
		<input name="is_keyword" value="{$is_keyword}" type="text" class="inputText" title="검색어 입력" />
		<input type="image" src="./images/{$layout_info->colorset}/buttonSearch.gif" alt="{$lang->cmd_search}" class="submit" />
		</form>
		</fieldset>
		<p id="search_se"><a href="http://eond.com/is"><img src="./images/{$layout_info->colorset}/icon_zoom.gif" alt="검색창" /></a></p>
	</div>
<div id="notice"></div>
```_

### 버전 1.4 ###
  * 색상 스타일이 추가됨

### 버전 1.3 ###
  * 버전 1.0으로 판 올림함.
  * 이전 버전과 달리 메뉴 방식이 달라짐. 2차 메뉴가 아래에 고정되던 것을 마우스 오버시 떨어지게 구성함.

### ver.0.8.4.에서 달라진 점 ###
  * 로그인 방식이 ID에서 email 체크로 변경됨
    * 변경전
```
<script type="text/javascript">
    var keep_signed_msg = "{$lang->about_keep_signed}";
    xAddEventListener(window, "load", function(){ doFocusUserId("fo_login_widget"); });
</script>

<fieldset id="login" class="login_{$colorset}">
<legend>{$lang->cmd_login}</legend>
<form action="./" method="post" onsubmit="return procFilter(this, widget_login)" id="fo_login_widget">




    <div class="idpwWrap">
        <div class="idpw">
            <input name="user_id" type="text" title="user id" />
            <input name="password" type="password" title="password" />
        </div>
	</div>
    <!--@if($member_config->enable_ssl=='Y')-->
    <p class="securitySignIn <!--@if($ssl_mode)-->SSL<!--@else-->noneSSL<!--@end-->">
        <a href="#" onclick="toggleSecuritySignIn(); return false;">{$lang->security_sign_in}</a>
    </p>
    <!--@end-->
    <p class="save">
        <input type="checkbox" name="keep_signed" id="keepid" value="Y" onclick="if(this.checked) return confirm(keep_signed_msg);" />
        <label for="keepid">{$lang->keep_signed}</label>
	</p>
<div style="margin:10px auto 0;width:180px;padding:0;">
<ul style="display:inline-block;list-style:none;margin:0;padding:0;">
<li style="float:left"><input type="image" src="./images/login/btn_login.gif" alt="login" class="btn_login" /></li>
<li style="float:left"><a href="{getUrl('act','dispMemberSignUpForm')}"><span class="btn_join"></span></a></li>
</ul>
</div>

        <!--@if($member_config->enable_openid=='Y')-->
        <br />
        <input name="use_open_id" id="use_open_id" type="checkbox" value="Y" onclick="toggleLoginForm(this); return false;" />
        <label for="use_open_id">Open ID</label>
        <!--@end-->
    



    <ul class="help">
        <li class="first-child"><a href="{getUrl('act','dispMemberFindAccount')}">{$lang->cmd_find_member_account}</a></li>
        <li><a href="{getUrl('act','dispMemberResendAuthMail')}">{$lang->cmd_resend_auth_mail}</a></li>
    </ul>
</form> 
</fieldset>

<!-- OpenID -->
<!--@if($member_config->enable_openid=='Y')-->
<fieldset id="openid_login" class="openid_login_{$colorset}" style="display:none;">
<legend>{$lang->cmd_login}</legend>
  <form action="{getUrl('module','member','act','procMemberOpenIDLogin')}" method="post" onsubmit="return procFilter(this, openid_login)" >
      <div class="idpwWrap">
        <div class="idpw">
          <p>{$lang->openid}</p>
          <input type="text" name="openid" class="openid_user_id" />
        </div>
        <input type="image" src="./images/{$colorset}/buttonLogin.gif" alt="login" class="login" />
      </div>
      <p class="save">
          <input name="use_open_id" id="use_open_id_2" type="checkbox" value="Y" onclick="toggleLoginForm(this); return false;"/>
          <label for="use_open_id_2">Open ID</label>
      </p>
  </form>
</fieldset>
```
    * 변경후
```

<div cond="$XE_VALIDATOR_MESSAGE" class="message {$XE_VALIDATOR_MESSAGE_TYPE}">
	<p>{$XE_VALIDATOR_MESSAGE}</p>
</div>
<fieldset id="login" class="login_{$colorset}">
<legend>{$lang->cmd_login}</legend>
<form id="fo_login_widget" action="./" method="post"  ruleset="@login">
		<input type="hidden" name="act" value="procMemberLogin" />
		<input type="hidden" name="success_return_url" value="{getRequestUriByServerEnviroment()}" />
    <div class="idpwWrap">
        <div class="idpw">
            <input name="user_id" type="text" title="user id" />
            <input name="password" type="password" title="password" />
        </div>
	</div>
    <!--@if($member_config->enable_ssl=='Y')-->
    <p class="securitySignIn <!--@if($ssl_mode)-->SSL<!--@else-->noneSSL<!--@end-->">
        <a href="#" onclick="toggleSecuritySignIn(); return false;">{$lang->security_sign_in}</a>
    </p>
    <!--@end-->
    <p class="save">
        <input type="checkbox" name="keep_signed" id="keep_signed" value="Y" / style="margin:-4px 0 0 0; vertical-align:bottom; ">
        <label for="keep_signed" style="font-family:dotum;font-size:8pt;color:#555;">{$lang->keep_signed}</label>
	</p>
<div style="margin:10px auto 0;width:180px;padding:0;">
<ul style="display:inline-block;list-style:none;margin:0;padding:0;">
<li style="float:left"><input type="image" src="./images/login/btn_login.gif" alt="login" class="btn_login" /></li>
<li style="float:left"><a href="{getUrl('act','dispMemberSignUpForm')}"><span class="btn_join"></span></a></li>
</ul>
</div>
<p class="keep_msg" style="font-family:dotum; font-size:8pt; color:#555555;line-height:140%;background:#FFF;padding:4px;border:1px solid #E3E3E3;margin-top:4px;">{$lang->about_keep_warning}</p>

        <!--@if($member_config->enable_openid=='Y')-->
        <br />
        <input name="use_open_id" id="use_open_id" type="checkbox" value="Y" onclick="toggleLoginForm(this); return false;" />
        <label for="use_open_id">Open ID</label>
        <!--@end-->
    



    <ul class="help" style="font-family:dotum; font-size:8pt; color:#555;">
        <li><a href="{getUrl('act','dispMemberFindAccount')}">{$lang->cmd_find_member_account}</a></li>
        <li><a href="{getUrl('act','dispMemberResendAuthMail')}">{$lang->cmd_resend_auth_mail}</a></li>
    </ul>
</form> 
</fieldset>
```
  * 로그인 유지 체크할 경우 onclick 경고 창에서 레이어 방식으로 변경됨
    * 0.8.3의 방식
```
    <p class="save">
        <input type="checkbox" name="keep_signed" id="keepid" value="Y" onclick="if(this.checked) return confirm(keep_signed_msg);" />
        <label for="keepid">{$lang->keep_signed}</label>
	</p>
```
    * 0.8.4에서의 로그인 방식
```
    <p class="save">
        <input type="checkbox" name="keep_signed" id="keepid" value="Y" />
        <label for="keepid">{$lang->keep_signed}</label>
	</p>
	<p class="keep_msg">{$lang->about_keep_warning}</p>
```
    * onclick 이벤트가 발생하는 코드
```
<input type="checkbox" name="keep_signed" id="keepid" value="Y" onclick="if(this.checked) return confirm(keep_signed_msg);" />
```
  * 로그인유지 div의 ID 변경
    * 변경 전
```
<input type="checkbox" name="keep_signed" id="keepid" value="Y" />
        <label for="keepid">{$lang->keep_signed}</label>
```
    * 변경 후
```
<input type="checkbox" name="keep_signed" id="keep_signed" value="Y" />
        <label for="keep_signed">{$lang->keep_signed}</label>
```
Add your content here.  Format your content with:
  * Text in **bold** or _italic_
  * Headings, paragraphs, and lists
  * Automatic links to other wiki pages