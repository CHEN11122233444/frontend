// const { EventEmitter } = require("stream");
// const EventEmitter = new EventEmitter();

// 전역변수 : __dirname, __filename
// 전역객체 : process

// $('button').on('click', callback)
// document.querySelector('button').addEventListner('click', callback)
process.on("exit", () => {
  console.log("프로그램 종료");
});
// process.addListener();
const ary = [];
for (let a = 1; a < 100; a++) {
  ary.push(a);
}

setTimeout(() => {
  console.log(ary.length);
}, 3000);

// process.emit('exit')
