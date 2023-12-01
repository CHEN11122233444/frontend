// 내장 모듈
const os = require('os');
console.log(os.type());
console.log(os.version());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.totalmem());

// 전역 변수 : __filename : 파일명과 관련한 정보
// 전역 변수 : __dirname : directory와 관련한 정보

const path = require('path');
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));



