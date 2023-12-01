const { add, sub } = require("./calc");
// 확장자 생략 가능
const math = require("./calc");
// const math = { add : add, sub : sub }
// const math = { add, sub } // 속성과 value가 같으면 value 생략 가능

const num = require("./variable");
console.log("variable num ", num); // variable num  333

const sum = add(5, 10);
console.log("sum : ", sum); // sum :  15
const sum1 = add();
console.log("sum1 : ", sum1); // sum1 :  8
const sum2 = add(555); // 첫번째 값만 전달
console.log("sum2 : ", sum2); // sum2 :  560

const num1 = sub(10, 5);
console.log("sub : ", num1); // sub :  5

const sum3 = math.add(100, 100);
console.log(sum3);
// node는 dom 을 사용할 수 없음
// alert( sum3 ) // error
