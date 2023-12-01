// 디스트럭쳐링 : 구조분해할당
/*
    배열, 객체 : 여러 타입의 다양한 값의 모임
    데이터 모음을 파괴해서 개별적으로 할당
*/

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