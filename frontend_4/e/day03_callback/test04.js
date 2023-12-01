/*
fetch(url)
    .then(res => res.json()) // promise
    .then(res => console.log(res))
*/
// Promise
const promise = new Promise((resolve, reject) => {
  console.log("무조건 실행");

  setTimeout(() => {
    //resolve("jemicom");
    reject(new Error("not found"));
  }, 2000);
});

// chaining
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => console.log("무조건 처리"));

// callback에서 발생되는 resolve,reject 를 promise
// callback hell을 해결해주진 않는다.
