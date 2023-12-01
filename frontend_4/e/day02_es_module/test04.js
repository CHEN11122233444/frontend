// built-in(내장모듈)
const path = require("path");

// console.log(path.join("folder", "subfolder", "file.name"));
// // 입력된 문자열을 path(경로 ) 생성
// // 출력 folder\subfolder\file.name
// console.log(path.join(__dirname, "test04.js"));
// console.log(path.join(__dirname, "/////test04.js"));
// console.log(path.join(__dirname, "\\test04.js"));
// console.log(path.join("folder", "//subfolder", "../file.name"));

console.log(path.resolve("folder", "subfolder", "file.name"));
console.log(path.resolve(__dirname, "test04.js"));
console.log(path.resolve(__dirname, "/////test04.js"));
console.log(path.resolve(__dirname, "\\\\test04.js"));
console.log(path.resolve("folder", "//subfolder", "../file.name"));

// node18.js --watch  mode 추가됨
// nodemon : live server 같은 툴을 사용했으나
// node --watch 파일명
// vscode extension: code runner (단축키)
