// npm 모듈 사용법
// npm i date-fns 설치
// 편리한 도구가 만들어져 있음

const { format } = require("date-fns");
// 외부 모듈을 불러 들일때 현재폴더>상위>상위
const today = new Date();

console.log(today);
const day1 = format(today, "yy-MM-dd");
console.log(day1);
const day2 = format(today, "yy년 MM월 dd일");
console.log(day2);
const day3 = format(today, "hh:mm");
console.log(day3);

// node_module 배포하지 않음 ( 갖고 다니지 않음 )
