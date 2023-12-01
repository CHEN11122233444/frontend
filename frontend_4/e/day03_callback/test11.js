const fs = require("fs");
// 압축을 지원하는 모듈
const zlib = require("zlib");

const readStream = fs.createReadStream("./datas/lorem.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
  // 2byte
});
const writeStream = fs.createWriteStream("./datas/newData.txt");
readStream.pipe(writeStream);

const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(fs.createWriteStream("./datas/file01.gz"));

// zip : archiver 모듈
