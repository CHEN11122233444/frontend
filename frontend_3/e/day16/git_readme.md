https://git-scm.com/
형상관리 : 프로젝트 관리 도구

1. 명령어로 처리 : TUI, CUI, git Bash
2. 마우스로 처리 : GUI, 소스트리

# 폴더 관리

## [폴더 이동 change directory : cd]

ITSC@DESKTOP-PMHM7D7 MINGW64 /d/frontend_3/day12_jQuery
$ cd c:

ITSC@DESKTOP-PMHM7D7 MINGW64 /c
$ cd d:

ITSC@DESKTOP-PMHM7D7 MINGW64 /d
$ cd frontend_2

ITSC@DESKTOP-PMHM7D7 MINGW64 /d/frontend_2
$ cd ..

ITSC@DESKTOP-PMHM7D7 MINGW64 /d
$ cd frontend_3

ITSC@DESKTOP-PMHM7D7 MINGW64 /d/frontend_3
$ cd day15

ITSC@DESKTOP-PMHM7D7 MINGW64 /d/frontend_3/day15
$

## [폴더 생성 : make directory]

$ mkdir day_git

## [폴더 삭제 : remove directory]

$ rmdir day_git

# github 회원가입은 google을 이용하세요.

https://github.com/ 이메일 인증하고 github 로그인

repository : 폴더

new, create repository

# terminal : ctrl + `

echo "# addScroll" >> README.md

git init

> 윈도우 자격증명
> git config --list ( ESC :wq)
> git config --global user.email "여러분이메일주소"
> git config --global user.name "여러분이름"

git add README.md
git commit -m "first commit"

git branch -M main
git remote add origin https://github.com/jemicom/addScroll.git
git push -u origin main
git push -u origin main
