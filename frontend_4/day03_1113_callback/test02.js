// callback 의미
// 함수에서 파라미터로 전달되는 함수
// 동기식(배열.sort(), 배열.map(), 배열.find(), 배열.filter() => 즉시 실행)
// 비동기식(setTimeout, event => 언제 실행될지 확인할 수 없음)

//
console.log("1");
setTimeout(()=>{
    console.log("2");
},2000);
console.log("3");