이온디 공식 레이아웃의 정식 배포에 따라 본 매뉴얼을 작성합니다.

### 기본 정보 ###
  * 한글명 : 이온디 공식 레이아웃 (eond official layout)
  * 최신버전 : ver.1.4
  * 제작자 : 이온디 (http://eond.com)

  1. 소개
    * 이온디 공식 레이아웃은 여타 포털형 디자인을 참조하여 일반적으로 개인이 사용하기에 불편함이 없도록 만드는데 주안점을 둔 레이아웃입니다.
    1. 메뉴
      * 메뉴는 3단까지 지원하며 기본 메뉴는 상단에 배열되며, 2차 메뉴는 왼쪽 사이드바에 표시됩니다. 3차 메뉴는 숨길 수 있으며 2차 메뉴 아래에 표시됩니다.
      * 메뉴는 3개까지 지원합니다. 기본메뉴와 사이트네비게이션 메뉴, 패밀리사이트 메뉴를 지원합니다.
      * 사이트네비게이션 메뉴는 레이아웃 하단에 고정되어 있으며 선택하지 않을 경우 기본 저작권 표시가 출력됩니다. 패밀리사이트 메뉴는 선택하지 않으면 표시되지 않습니다.
    1. 위젯
      * 현재 위치 출력 기능을 포함하고 있으며 출력/미출력 여부를 선택할 수 있습니다.
      * 오른쪽 위젯의 슬라이드 이동 기능이 있습니다. 마찬가지 켜고 끌 수 있습니다.
      * 위젯은 왼쪽에 1개, 오른쪽에 3개까지 레이아웃 설정 화면에서 바로 수정 가능합니다.
      * 간단한 위젯의 경우 레이아웃 설정에서 추가 수정 가능합니다.



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

### 설치 방법 ###

  1. 이온디 마이노트 레이아웃 스킨을 설치합니다.
  1. 이온디 마이노트 카운터 위젯 스킨을 설치합니다.
    * 설치하지 않을 경우 아래와 같은 오류 메세지가 출력됩니다.
```
Err : './widgets/counter_status/skins/mynote/counter_status' template file does not exists.
```
  1. 이온디 마이노트 로그인 위젯 스킨을 설치합니다.
    * 설치하지 않을 경우 아래와 같은 오류 메세지가 출력됩니다.
```
Err : './widgets/login_info/skins/eond_mynote/login_form' template file does not exists.
```
  1. 최근 댓글 위젯을 설치합니다. 최근댓글위젯은 XE Core 버전에 포함되어있지 않기 때문에 따로 설치를 해야 합니다.
  1. 이온디 마이노트 최근댓글 위젯 스킨을 설치합니다.
    * 4번만 설치하고 위젯 스킨을 설치하지 않을 경우 아래와 같은 오류 메세지가 출력됩니다.
```
Err : './widgets/newest_comment/skins/mynote/list' template file does not exists.
```

### 다운로드 ###

아래 파일을 모두 다운받아 사용하세요.

  * 이온디 마이노트 레이아웃 스킨 ver.1.3.2
> http://code.google.com/p/eond/downloads/detail?name=eond_mynote.1.3.2.zip&can=2&q=label%3Alayouts#makechanges
```
설치경로 : layouts\eond_mynote
```
  * 이온디 마이노트 카운터위젯 스킨
> http://code.google.com/p/eond/downloads/detail?name=counter_mynote.0.2.zip&can=2&q=#makechanges
```
설치경로 : widgets\counter_status\skins\mynote
```
  * 이온디 마이노트 로그인위젯 스킨
> http://code.google.com/p/eond/downloads/detail?name=login_eond_mynote.0.7.zip&can=2&q=#makechanges
```
설치경로 : widgets\login_info\skins\eond_mynote
```
  * 최근 댓글 위젯
> http://www.xpressengine.com/index.php?&mid=download&category_srl=18322927&search_keyword=%EB%8C%93%EA%B8%80&package_srl=18324343
```
설치경로 : widgets\newest_comment
```
  * 이온디 마이노트 최근댓글위젯 스킨
> http://code.google.com/p/eond/downloads/detail?name=newest_comment_mynote.zip&can=2&q=label%3Amynote#makechanges
```
설치경로 : widgets\newest_comment\skins\mynote
```


### 수정계획 ###
  * 현재 마이노트는 모바일 레이아웃이 없습니다. 모바일 레이아웃을 제작 하여 배포할 계획을 가지고 있습니다.

### 바뀐 점 ###
  * 로그인 방식이 이메일 방식으로 변경됨.
  * 메뉴 폰트에 tahoma 추가됨.

### 배포 ###
이온디 마이노트 레이아웃은 XE 공식사이트 자료실과 구글 프로젝트 이 외에서의 배포를 금지합니다.

### 기타 ###
Q. 프로필 부분 음악 듣기 주소 수정하는 방법?
> A. 프로필 부분 음악 듣기는 로그인 위젯 스킨의 일부분입니다. 로그인 위젯 스킨에서 해당 부분을 주석 처리 또는 지우면 됩니다.
.\widgets\login\_info\skins\eond\_mynote\login\_info.html
```
<a href="#" onClick="window.open('http://eond.com/?mid=mp3','new','toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no, width=410, height=311')"><span id="music"><span class=bgp></span>음악듣기</span></a>
```

Q. 카테고리는 어떻게 설정하죠?
> A. 2차 메뉴가 카테고리로 표현되는데, 다음 버전에서는 2차 메뉴가 없을 경우 카테고리 메뉴명이 출력되지 않도록 수정하도록 하겠습니다.