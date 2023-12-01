const fs = require("node:fs");

// 파일 읽기
const data = fs.readFile("./datas/lorem.txt", "utf-8",(err)=>{});
console.log('1. 파일읽기', data); // undefinded
console.log('2. 파일읽기 완료');

fs.writeFile('./datas/myData.txt', "한글은 ", (error) => {
  if (error) throw error;
});
console.log('3. 파일 쓰기');

fs.appendFile('./datas/myData.txt', " 아름다운 글입니다.", (error) => {
  if (error) throw error;
});
console.log('4. 파일 추가');

fs.rename('./datas/myData.txt', '.datas/newfile.txt',(error) => {
  if (error) throw error;
});
console.log('5. 파일명 수정');

fs.unlink('./datas/myData.txt', (error) => {
  if (error) throw error;
});
console.log('6. 파일 삭제');

process.on("uncaughtException", (error) => {
  console.error(`my Error ${error}`);
  process.exit(1);
});
console.log('7. 비동기처리 완료');

// 순서를 보장할 수없는 프로그램임
