const fs = require("node:fs"); /// node18
// callback 처리

// 파일 읽기
fs.readFile("./datas/lorem.txt", "utf-8", (err, data) => {
  console.log("1 : ", data);

  fs.writeFile("./datas/myData.txt", "한글은 ", (error) => {
    if (error) throw error;
  });
  console.log("3. 파일 쓰기");

  fs.appendFile("./datas/myData.txt", " 아름다운 글입니다.", (error) => {
    if (error) throw error;
  });
  console.log("4. 파일 추가");

  fs.rename("./datas/myData.txt", "./datas/newfile.txt", (error) => {
    if (error) throw error;
  });
  console.log("5. 파일명 수정");
});
console.log("2. 파일읽기 완료");

fs.unlink("./datas/newfile.txt", (error) => {
  if (error) throw error;
});
console.log("6. 파일 삭제");

process.on("uncaughtException", (error) => {
  console.error(`my Error ${error}`);
  process.exit(1);
});
console.log("7. 비동기처리 완료");

// 순서를 보장할 수없는 프로그램임
// js => jQuery
// nodejs => express
