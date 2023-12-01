/*
flag생략시는 첫번째 문자열만 찾기 
\w 한글은 특수문자 취급
/\w/ : 숫자든 문자든 1글자 찾기
/\w{2}/ : 숫자든 문자든 2글자 찾기
/\w{2,}/ : 숫자든 문자든 2글자이상 찾기
/\w{2,5}/ : 숫자든 문자든 2글자이상 5글자 이하 찾기

// g :global 문서전체에서 찾기
/\w/g : 숫자든 문자든 1글자 찾기
/\w{2}/g : 숫자든 문자든 2글자 찾기
/\w{2,}/g : 숫자든 문자든 2글자이상 찾기
/\w{2,5}/g : 숫자든 문자든 2글자이상 5글자 이하 찾기
 
/\d/g : 숫자든 문자든 1글자 찾기
/\d{2}/g : 숫자든 문자든 2글자 찾기
/\d{2,}/g : 숫자든 문자든 2글자이상 찾기
/\d{2,5}/g : 숫자든 문자든 2글자이상 5글자 이하 찾기

/./g 모든 문자열(한글은 제외)
/[ㄱ-힣]/g 한글 찾기
/[a-zA-z]/g 알파벳만 찾기
/[0-9]/g 숫자만찾기
/[0-9]{4}/g  숫자만 찾기

/hi/gmi   대문자 문자 구분없이 hi 찾기
/(반짝)/gmi  반짝 단어 찾기
/gr[ea]y/gmi  gray, grey 찾기
/gr[e|a]y/gmi  gray, grey 찾기
/gra+y/gmi    gray, graay, graaay : a 하나이상 존재
/gra?y/gmi    gry, gray, graay, graaay : a 없거나 있거나
/gra*y/gi     gry, gray, graay, graaay 없거나 많거나

/^ho/gmi     ho로 시작하는
/\bho/gmi     ho로 시작하는
/ho$/gmi     ho로 끝나는

/\d{2,3}[- .][0-9]{3,4}[- .]\d{4}/gmi
 
/\w{1,}@[a-zA-Z]+\.\w{2,}(\.?\w{2}?)/gmi
/\w{1,}@[a-zA-Z]+\.\w{2,}/gmi

/[\w\d._-]+@[a-zA-Z._-]+\.[\w\d._]+/gi
jemicom.coder.it@gmail.com 
hello@daum.net 
hello@daum.co.kr  

*/

/*
    match()
    exec()
    test()
    search()
*/

const tel = `018-5475-8562`;
//const regex1 = /\d{3}-\d\d\d\d-[0-9]{4}/gi;
const regex1 = /\d{2,3}[- .][0-9]{3,4}[- .]\d{4}/gim;
console.log(regex1.test(tel));
// test 정규표현식에 맞는 패턴인지 검사해서 결과를 true,false

const email = "hello@daum.net";
// const regex2 = /[\w\d_-.]+@[\w\d_-.]+.[\w\d_-.]/gim;
const regex2 = /[\w\d._-]+@[a-zA-Z._-]+\.[\w\d._]+/gi;
console.log(regex2.exec(email));
// 배열값을 리턴

const str = "hello hi javascript HI!!";
const regex3 = /hi/gi;
console.log(regex3.exec(str));
//[ 'hi', index: 6, input: 'hello hi javascript !!', groups: undefined ]
// exec() : 첫번째 데이터만 찾아서 배열로 리턴

console.log(str.match(regex3));
// regex와 문자열의 순서는 메서드마다 다를 수 있음
// [ 'hi', 'HI' ]
// global 모드일때 match되는 결과를 배열로 리턴
// global 아닐때 exec 처럼 첫번째 데이터 리턴

console.log(str.search(regex3));
// 첫번째 일치하는 항목 인덱스를 리턴

const url = `http://localhost:3000/users/id=153`;
const regex4 = /\/id=\d+/;
console.log(regex4.test(url));
console.log(regex4.exec(url));

const idstr = regex4.exec(url)[0]; //'/id=3'
console.log(idstr.substring(idstr.indexOf("=") + 1, idstr.length)); //숫자 추출

console.log(url.search(regex4));
console.log(url.substring(url.search(regex4), url.length));

const regex5 = /\d+/;
console.log(url.search(regex5)); // port번호 찾기
console.log(url.substring(url.search(regex5), url.length));

const regex6 = /(https?:\/\/)*\w+\.\w+(\.\w+)*\/-?\w+/gi;
const youtubUrl = "https://youtu.be/-uuxUe_Nbnmo";
console.log(youtubUrl.match(regex6));
console.log(regex6.test(youtubUrl));

// get : http://localhost:3000
const getUrl = `http://localhost:3000/`;
const regex7 = /localhost:3000\/?/;
console.log(regex7.test(getUrl));

const postUrl = "http://localhost:3000/index";
const regex8 = /localhost:3000(\/index)?/;
console.log(regex8.test(postUrl));

const testId = "jemico098";
const regex9 = /[\w+\d]{6,10}/gi; // /[\w+\d]{6,10}/gi  // {,}안에 띄어쓰기 사용하면 안됨
console.log(regex9.test(testId));

const testPw = "jemico!098";
const regex10 = /\w+[$!@]{9,12}/gi;
console.log(regex10.test(testPw));
