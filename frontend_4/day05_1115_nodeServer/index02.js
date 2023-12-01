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

  // localhost:3000/about

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
  ];
  try {
    res.writeHead(200, { "Content-Type": contentType });
    if (req.url.includes("about") && req.method === "GET") {
      let content = fs.readFileSync(
        path.join(__dirname, "views", "about.html")
      );
      res.end(content);
    }

    // html 페이지 에서 fetch(url)
    // localhost:3000/search?username=kim
    else if (req.url.includes("username") && req.method === "GET") {
      const transUrl = url.parse(req.url);
      const param = queryString.parse(transUrl.query);
      console.log(param);
      // 전달 받은 param에서 찾을 단어를 추출

      const findUser = users.find((user) => user.firstname === param.username);
      // js배열에서 데이터 검색
      res.end(JSON.stringify(findUser));
    }

    // localhost:3000/search/id=3/name=kim/age=30
    // localhost:3000/search?id=3&name=kim
    else if (req.url.includes("id") && req.method === "GET") {
      const datas = req.url.split("/"); // indexOf(), includes() 문자열을 분리하여 배열로 리턴
      console.log(datas); // [ '', 'search?id=3' ]
      const id = datas[2].split("=");
      console.log(id);
      // const datas = req.url.split("=");
      console.log(id[1]); // 문자열

      // 환경에 따라 다르지만 === 사용하세요
      // const findUser = users.find((user) => user.id == datas[1]);
      // const findUser = users.find((user) => user.id.toString() === datas[1]);
      const findUser = users.find((user) => user.id === parseInt(datas[1]));
      // js배열에서 데이터 검색
      res.end(JSON.stringify(findUser));
    }

    // localhost:3000/user/id=3/name=kim/age=30
    // localhost:3000/user?id=3
    else if (req.url.includes("user") && req.method === "GET") {
      const rowData = require("./datas/users.json");

      const datas = req.url.split("="); // 확인
      console.log(datas[1]);

      const findUser = rowData.find((user) => user.id === parseInt(datas[1]));
      // js배열에서 데이터 검색
      res.end(JSON.stringify(findUser));
    }
  } catch (error) {
    console.log(error);
  }
});

server.listen(PORT, () => {
  console.log("listening , ", PORT);
});

// get
// url로 데이터를 전송하는 방식이 아니고
// head, body 데이터를 전송하는 방식으로 눈에 보이지 않으므로 test할 수 있는 도구 필요
// postman => thunder client
// post
// delete
// put
