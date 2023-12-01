// callback 의미
// 함수에서 파라미터로 전달되는 함수
// 동기식(배열.sort(), 배열.map(), 배열.find(), 배열.filter() => 즉시 실행)
// 비동기식(setTimeout, event => 언제 실행될지 확인할 수 없음)

// datatype
function printImmediately(print){
    // const print = ()=>console.log("hello callback")
    print();
}
printImmediately(()=>console.log("hello callback"));


// 비동기식 처리
function printDelay(print, timeout){
    // const print = ()=>console.log("hello callback")
    // setTimeout(() => {}, 1000);
    setTimeout(print, timeout);
}

printDelay(()=>console.log("async callback"),2000);


/*
// callback > callback > callback
// callback hell > Promuse, async ~ await
function callbackFn1(callbackFn2){
    callbackFn2(callbackFn3){
        callbackFn3(callbackFn4){
            //
        }
        //
    }
    //
}
*/