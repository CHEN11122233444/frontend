const fs = require('fs');
// 데이터를 읽을 때 buffer 대용량의 데이터를 실시간으로 처리하기 위함
// 메모지를 절약하고 싶을 때

// stream : 데이터들의 모임
const readStream = fs.createReadStream('./datas/lorem.txt',{
    encoding:'utf-8',
    highWaterMark: 2,
    // 2byte
})
const writeStream = fs.createWriteStream('./datas/newData.txt');

// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk); // chunk 모이면 쓴다.
// });

readStream.pipe(writeStream);