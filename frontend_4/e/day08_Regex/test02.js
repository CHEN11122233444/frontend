const str = "010-4567-9874";
const filter1 = str.split("-");
console.log(filter1, filter1[0].length, filter1[1].length);

const email = "jemicom@naver.com";
console.log(email.indexOf("@") > 0 && email.indexOf(".") > 0);
console.log(email.includes("@"));

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
