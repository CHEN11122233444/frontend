const http = require("http");
const server = http.createServer(); //

// 동작은 별도 처리
server.on("request", (req, res) => {
  console.log(req.url, req.method); // 요청정보 확인

  // 분기 : 요청정보에 따른 처리
  // http://localhost:3000
  // http://127.0.0.1:3000
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("hello Root");
  }

  // http://127.0.0.1:3000/hello
  else if (req.url === "/hello") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<html>");
    res.write("<head><title>브랜드네임</title></head>");
    res.write("<body><h1>hello nodejs !!</h1></body>");
    res.write("</html>");
    res.end();
    // html을 하나씩 일일히 응답한다고?
  }

  // http://127.0.0.1:3000/data
  else if (req.url === "/data") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify({ firstName: "jemicom" }));
    res.end();
  }

  // http://127.0.0.1:3000/image
  else if (req.url === "/image") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write("<img src='./pear-solid-24.png'> "); //
    res.end();
  }
});

server.listen(3000, () => {
  console.log("listining 3000");
});