# node 버전 확인

```
node --version
```

# npm 버전확인

```
npm --version
```

# repl 모드

```
terminal : ctrl  + `(숫자 1번 왼쪽에 있는 backtic)
window.console에서 js 실행하는 것과 같이 직접 js 실행할 수 환경

node
> js 코드
```

# browser & nodejs 차이점

1. window 객체 - Object (DOM : html,css 처리하지 않는다.)
   window.console.log()
   Object.console.log()
2. fetch - file system(text, json, database)

# CUI 명령어 복사

방향키 위아래

# js 파일 실행

```
.js > .mjs  > .jsx
```

# 폴더 이동

# 목록 확인

ls
ls -a : 숨김 파일 표시

# 디스트럭쳐링

> 구조분해할당
> 배열, 객체 : 여러 타입의 다양한 값의 모임
> 데이터 모음을 파괴해서 개별적으로 할당

## test03.js

```test03.js
let ary = [1, 2, 3];
// let num1 = ary[0];
// let num2 = ary[1];
// let num3 = ary[2];
// let num4 = ary[3]; //undefined

let [num1, num2, num3, num4] = ary;
console.log(num1, num2, num3, num4);
// 순서대로 할당한다.

let num; // undefined
// let [num1, num2, num3, num4];  // error
[num] = ary;
// 변수를 먼저 만들어 두고 나중에 할당 가능
console.log("num : ", num);

const [a, , c, d] = ary;
console.log(a, c, d);
// b변수는 생략할 수도 있고 생략하지 않을 수도 있고
```

## test04.js

```test04.js
const ary = [1, 2, 3];
const [a, b, c, d = 4] = ary;
console.log(a, d);

// ... (spread operator)
const [x, ...y] = ary;
console.log(x, y);
```

## test05.js

```test05.js
const user = {
  firstname: "jemicom",
  lastname: "kim",
};

// let firstname = user.firstname;
// let lastname = user.lastname;
// let fn = firstname;

/*
const { firstname, lastname } = user;
console.log(firstname, lastname);
// 배열 순서있음, 변수명을 아무렇게나 사용
// 객체 속성에 순서 없음, 변수명은 속성을 사용

const { num } = user;
console.log(num);
*/

const { lastname } = user;
// 순서에 무관하게 속성명만 맞추면 됨
console.log(lastname);
// const { firstname }; // 불가
// const { firstname } = null; // 불가
// typeof(null) : object {}

```

## test06.js

```test06.js

const user = {
  firstname: "jemicom",
  lastname: "kim",
};

let firstname = "코리아it아카데미";
const { firstname: fn } = user;
// let fn = firstname;
// 변수명이 중복된다면 :연산로 변수명을 변경해서 사용
console.log(fn, firstname, user.firstname);

const { firstname: first, lastname: ln, num = "20" } = user;
// 속성이 지정되지 않은 경우 값을 초기화 할 수 있음
console.log("num : ", 20);

```
