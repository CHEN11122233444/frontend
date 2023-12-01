const fs = require("fs");
// 압축을 지원하는 모듈
const archiver = require("archiver");

const readStream = fs.createReadStream("./datas/lorem.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
  // 2byte
});

const output = fs.createWriteStream("./datas/file02.zip");
const archive = archiver("zip", {
  zlib: { level: 9 },
  // 압축 레벨 높을수록 속도가 빠름
});

// const output = fs.createWriteStream(__dirname + "/example.zip");
// const archive = archiver("zip", {
//   zlib: { level: 9 }, // Sets the compression level.
// });

archive.pipe(output);
// zip : archiver 모듈

output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log("압축 파일이 생성되었습니다.");
});

archive.finalize();
// 압축 실행하라
