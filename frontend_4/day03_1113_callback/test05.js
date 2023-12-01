function fetchUser1(){
    const promise = new Promise((resolv, reject)=>{
        console.log("무조건 실행");
            resolv("jemicom");
    });
    return promise;
}

const user1 = fetchUser1();
user1.then(console.log);
console.log(user1);

async function fetchUser2(){
    // 순차처리, 병렬처리
    return "kim";
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);
