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
