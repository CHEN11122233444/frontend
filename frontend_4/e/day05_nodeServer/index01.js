// get방식
// localhost:3000
// localhost:3000/about
// localhost:3000/contact
// https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=boxicons
// localhost:3000/user
// localhost:3000/username="kim"
// localhost:3000/search?name="kim"
// localhost:3000/search?id=3

const fs = require("fs");
const http = require("http");
const server = http.createServer();
const PORT = 3000;
const url = require("url");
// parse() : 문자열을 url 형식으로 변환
// format() :

const queryString = require("querystring");
// parse() :  문자열 url 형식을 객체타입으로 변환
// stringify()

server.on("request", (req, res) => {
  console.log(req.url); // 문자열

  const transUrl = url.parse(req.url);
  console.log(transUrl.query);

  const param = queryString.parse(transUrl.query); // { id: '3' }
  console.log(param);
  console.log("watch!!");
});

server.listen(PORT, () => {
  console.log("listning , ", PORT);
});
