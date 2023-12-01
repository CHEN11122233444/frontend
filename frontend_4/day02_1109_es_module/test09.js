const fs = require("node:fs");
const path = require("path");
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("readcomplete", () => {
  console.log("read complate");
});
emitter.on("mkdir", () => {
  console.log("폴더 생성 완료");
});

fs.readFile("./datas/lorem.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.readFile("./datas/lorem.txt", (err, data) => {
  console.log(data);
  console.log(data.toString());
});

// 바이널리 처리 : 0 또는 1로 문자를 처리하는 방식
// 문자셋 : 문자 해당하는 바이널리 코드 모음
// stream 단위로 데이터를 처리

fs.readFile("./datas/user.json", "utf-8", (err, data) => {
  console.log(data);

  emitter.emit("readcomplete");
});

// js
// 싱글스레드 : 한번에 하나의 스레드(함수와 같은 작은단위의 프로그램) 처리
// 스택 구조 처리
// blocking : 특정 스레드가 처리시간이 길다면 다음 처리는 대기
// 비동기 시스템 : 작업 끝날때 까지 기다리지 않음
// 일을 시작하고 완료를 기다리지 않는다.

// fs.readFile("./datas/makeup.json", "utf-8", (err, data) => {
//   console.log(data);
//   const jsData = JSON.parse(data);
//   console.log(jsData[0]); // js 데이터로 변환, 즉 배열
//   console.log(JSON.stringify(jsData, null, "    "));
//   // json 데이터로 변환 , null : callback 없음, " " 계층을 주고 싶은 만큼 띄어쓰기
// });

const writePath = path.join(__dirname, "datas", "mydata.txt");
console.log(writePath);

// 파일이 없으면 만들어서 쓰고
// 있으면 덮어쓰고
fs.writeFile(writePath, "한글은 ", (error) => {
  if (error) throw error;
});

// 파일이 없으면 만들어서 쓰고
// 있으면 추가한다.
fs.appendFile(writePath, " 아름다운 글입니다.", (error) => {
  if (error) throw error;
});

fs.unlink(writePath, (error) => {
  if (error) throw error;
});
// 폴더 있는데 또 만들면 error
if (!fs.existsSync("jemicom")) {
  // 폴더가 없다면 만들고
  fs.mkdir("jemicom", (error) => {
    if (error) throw error;
  });

  emitter.emit("mkdir");
}

// 없는데 지우려는 시도도 error

setTimeout(() => {
  if (fs.existsSync("jemicom")) {
    // 폴더가 있다면 지우기
    fs.rmdir("jemicom", (error) => {
      if (error) throw error;
    });
  }
}, 4000);

process.on("uncaughtException", (error) => {
  console.error(`my Error ${error}`);
  process.exit(1);
});

// 순서를 보장할 수없는 프로그램임
