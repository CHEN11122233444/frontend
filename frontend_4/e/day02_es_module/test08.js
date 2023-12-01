const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("order", () => {
  console.log("주문완료");
});

// emitter.on("order", (size, length) => {
//   console.log("주문완료", size, length);
// });
const orderFunc = (size, length) => {
  console.log("주문완료", size, length);
};

emitter.on("order", orderFunc);
emitter.off("order", orderFunc);
// 이벤트 제거시 반드시 함수는 별도로 선언된 callback을 사용해야 한다.

emitter.emit("order", "100", "50mm"); //  click함
emitter.emit("order"); // click함

process.on("uncaughtException", (err) => {
  // 오류
});
