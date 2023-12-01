const http = require("http");
const server = http.createServer(); //

// 동작은 별도 처리
server.on("request", (req, res) => {
  console.log(req.url, req.method); // 요청정보 확인

  // 응답
  // Request URL: http://localhost:3000/hello
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.writeHead(200, { "Content-Type": "text/html" });
  // Status Code: 200 OK
  res.write("<h1>hello node</h1>");
  res.write("<img src='./pear-solid-24.png' />");
  // 브라우저에 응답
  res.end();
  // 응답 종료
});

server.listen(3000, () => {
  console.log("listining 3000");
});
