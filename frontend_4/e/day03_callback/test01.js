// callback 의미
// 함수에서 파라미터로 전달되는 함수 function add(()=>{})
// 동기식(배열.sort(), 배열.map(), 배열.find(), 배열.filter() => 즉시 실행),
// 비동기식(setTimeout, event => 언제 실행될지 확인할 수 없음)

// 동기식 실행은 순차 처리됨
const ary = [1, 2, 3, 4];
ary.map((a) => console.log(a)); // 즉시 실행
// ary.find( (a)=>{ return a >=3 })
const num = ary.find((a) => a >= 3); //즉시 실행, 찾은 첫번째 값만 리턴
console.log(num);
const numAry = ary.filter((a) => a >= 3); // 3이상인 값을 배열로 리턴
console.log(numAry);
