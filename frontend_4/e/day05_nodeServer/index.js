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
const queryString = require("querystring");
const path = require("path");

server.on("request", (req, res) => {
  console.log(req.url, req.method);
  // content-type을 인식하는 middleware(express 함수)만들기
  // const filePath = `./views/index.html`;
  // const filePath = path.join(__dirname, 'views', 'index.html');
  const filePath = path.join(
    __dirname,
    "views",
    req.url === "/" ? "index.html" : req.url
  );

  let extname = path.extname(filePath);
  // 확장자 찾기
  let contentType = "text/html; charset=utf-8"; // 한글표시

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".gif":
      contentType = "image/gif";
      break;
  }

  const users = [
    {
      firstname: "jemicom",
      id: 1,
    },
    {
      firstname: "kim",
      id: 2,
    },
    {
      firstname: "park",
      id: 3,
    },
    // {
    //   firstname: "you",
    //   id: 4,
    // },
  ];

  try {
    res.writeHead(200, { "Content-Type": contentType });

    // localhost:3000/users
    if (req.url.includes("users") && req.method === "GET") {
      res.end(JSON.stringify(users));
    }

    // localhost:3000/users
    // post 방식이므로 thunder client
    else if (req.url.includes("users") && req.method === "POST") {
      const newuser = {
        firstname: "you",
        id: users[users.length - 1].id + 1,
      };

      users.push(newuser);
      console.log(users);
      res.end(JSON.stringify(newuser));
    }
  } catch (error) {
    console.log(error);
  }
});

server.listen(PORT, () => {
  console.log("listning , ", PORT);
});

// get
// url로 데이터를 전송하는 방식이 아니고
// head, body 데이터를 전송하는 방식으로 눈에 보이지 않으므로 test할 수 있는 도구 필요
// postman => thunder client
// post
// delete
// put
