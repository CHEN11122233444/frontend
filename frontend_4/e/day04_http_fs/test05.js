const http = require("http");
const server = http.createServer(); //
const fs = require("fs");

// 동작은 별도 처리
server.on("request", (req, res) => {
  console.log(req.url, req.method); // 요청정보 확인

  // 분기 : 요청정보에 따른 처리
  // http://localhost:3000
  // http://127.0.0.1:3000
  if (req.url === "/") {
    const readData = fs.readFileSync("./views/index.html", "utf-8");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(readData);
  }

  // localhost:3000/about
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.readFile("./views/about.html", (err, aboutData) => {
      res.end(aboutData);
    });
  }
  // localhost:3000/contact
  else if (req.url === "/contact") {
    const contactData = fs.readFileSync("./views/contact.html");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(contactData);
  }

  //localhost:3000/image
  else if (req.url === "/image") {
    const imageData = fs.readFileSync("./pear-solid-24.png");
    res.writeHead(200, { "Content-type": "image/png" });
    res.end(imageData);
  }
});

server.listen(3000, () => {
  console.log("listining 3000");
});
