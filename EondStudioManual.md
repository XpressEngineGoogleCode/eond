# Introduction #

Add your content here.


# Details #

Add your content here.  Format your content with:
  * Text in **bold** or _italic_
  * Headings, paragraphs, and lists
  * Automatic links to other wiki pages

참고: http://blogs.open.collab.net/svn/2007/04/subversion_repo.html

trunk
기본적으로 개발을 시작할 때 사용하는 디렉토리
main, mainline, production의 의미로 사용됨

branches
release 버전과 유지보수 버전을 분리하고 싶을 때 사용
customizing이나 hot fix 목적으로 분리하여 수정함
수정이 계속해서 발생하다가 궁극적으로는 trunk에 merge 되는 것이 일반적임

tags
한번 만들면 수정하지 않음
releases, snapshots, baselines의 의미로 사용됨
[출처] [SVN](SVN.md) trunk, tags, branches의 용도|작성자 밤바


> SVN이란?

서브버전(Sebversion : SVN)은 자유 소프트웨어 버전 관리 시스템입니다.
소프트웨어의 버전을 관리하고, 팀이 같이 코드를 관리할 수 있게 해주는 등의 기능을 가진 시스템입니다.
명령행 인터페이스에서 사용하는 명령어를 따서 SVN이라고 줄여서 부르기도 합니다.
제한이 있던 CVS를 대체하기 위해서 만들어졌습니다.

CVS와의 비교
1. 원자적으로 쓰기를 지원하므로, 다른 사용자의 쓰기와 엉키지 않는다.
2. 이름을 바꾸거나, 복사하거나, 파일을 지워도 리비전 기록을 유지한다.
3. 이진 파일도 효율적으로 저장할 수 있다.
4. 디렉토리 버전 관리를 할 수 있다. 디렉토리 전체를 빠르게 옮기거나 복사할 수 있으며, 리비전 기록도 유지한다.
5. 소스 저장고의 크기에 상관없이 일정한 시간안에 가지치기(branching)나 태그 넣기(tagging)을 할 수 있다.
6. 소스 저장고로의 접근이 최적화 되어있으므로, 소스 저장고에서 필요없는 네트워크 트래픽을 줄일 수 있다.


> branch, tag, trunk


What do “branch”, “tag” and “trunk” really mean?


Trunk would be the main body of development, originating from the the start of the project until the present.

Branch will be a copy of code derived from a certain point in the trunk that is used for applying major changes to the code while preserving the integrity of the code in the trunk. If the major changes work according to plan, they are usually merged back into the trunk.

Tag will be a point in time on the trunk or a branch that you wish to preserve. The two main reasons for preservation would be that either this is a major release of the software, whether alpha, beta, RC or RTM, or this is the most stable point of the software before major revisions on the trunk were applied.


Trunk
> - 단어 자체의 뜻은 본체, 본문 등입니다.
> - 프로젝트에서 가장 중심이 되는 디렉토리입니다.
> - 모든 프로그램의 개발 작업은 trunk 디렉토리에서 이루어  집니다.
> - trunk 디렉토리 바로 아래에는 소스들의 파일과 디렉토리가 들어가게됩니다.

Branch
> - trunk에서 뻗어져 나온 나무가지를 뜻합니다.
> - 프로그램을 개발하다 보면 trunk 디렉토리에서 또 다른 작은 분류로 빼서 따로 개발해야 할 경우가 있습니다.
> > 프로젝트안의 작은 프로젝트라고 생각하면 됩니다.

> - branches 디렉토리 안에 또 다른 디렉토리를 두어 그 안에서 개발하게 됩니다.

Tag
> - tag는 꼬리표입니다.
> - 이 디렉토리는 프로그램을 개발하면서 정기적으로 릴리즈 할 때, 0.1 / 0.2 / 1.0 등 이런식의 버전 별로 소스 코드를
> > 따로 저장하는 공간입니다.

> - 버전별로 태그를 붙여서 tag 디렉토리 안에 보관한다고 생각하면 됩니다.


1. 다운로드


(1) 완성된 버전 다운로드

http://code.google.com/p/xe-hika/downloads/
Viewer


- 완성된 버전은 zip 압축파일로 해서 다운로드 페이지에 올립니다.

(2) SVN 사용


http://xe-hika.googlecode.com/svn/
Viewer


- 현재 개발중인 최신 코드를 다운받을 수 있습니다.
- trunk는 현재 XE 자료실에 배포된 버전, branches는 현재 개발하고 있는 버전입니다.
- 자세한 사용법은 검색을 통해 확인하세요.


2. 이슈등록


http://code.google.com/p/xe-hika/issues/list
Viewer


- 질문란에 올리는 것보다 이슈란에 올리시면 제가 오류 등을 관리하기가 쉬워집니다.


3. 변경된 사항 보기


http://code.google.com/p/xe-hika/source/checkout
Viewer

> (1) 활용법

- 제가 구글 프로젝트를 사용하려는 가장 큰 이유입니다. 커스텀 사용자는 버전이 업글될 때 마다 고민입니다. 업글하고 다시 수정했던 것을 새 버전에 집어 넣어야 하는데 어느 부분이 바꼈는지 알기가 쉽지 않기 때문에 업글이 두렵고 어렵습니다.
- 구글 프로젝트 사이트에서는 이러한 코드 변화를 알 수 있습니다.

(2) 대략의 사용법

- 위의 주소에서 상단의 메뉴 중 'broswer' 는 해당 파일 별로 확인할 수 있고, 'changes'는 변경된 부분을 확인할 수 있습니다.
- 해당 파일(브라우저에서 선택) 혹은 변경된 버전을(예. [r63](https://code.google.com/p/eond/source/detail?r=63) 같은 링크 버튼) 보면 우측 등에 'Diff' 라는 링크가 있습니다. 이를 눌러 확인하시면 변경된 부분이 색상 등으로 쉽게 구분되어 표시되어 있습니다. 이를 통해 쉽게 확인할 수 있습니다.

4. 위키(매뉴얼)


- 발로 만든 매뉴얼이 해당 링크에 있습니다.

http://code.google.com/p/xe-hika/wiki/
Viewer