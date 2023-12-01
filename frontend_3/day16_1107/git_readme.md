https://git-scm.com/
형상관리 : 프로젝트 관리 도구
1. 명령어로 처리 : TUI, GUI
2. 마우스로 처리 : GIT, 소스트리

~

cd

mkdir

rmdir

# terminal : ctrl + `


echo "# addScroll" >> README.md
git init

> 윈도우 자격증명
> git config --list ( ESC :wq )
>

git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/CHEN11122233444/addScroll.git
git push -u origin master


설정 후 반복
git add README.md
git commit -m "first commit"
git push -u origin master