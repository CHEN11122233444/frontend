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
const logEvents = require("./logEvents"); // logfile 쓰기

const server = http.createServer((req, res) => {
  console.log(`url : ${req.url}, method : ${req.method}`);
  logEvents(`url : ${req.url}, method : ${req.method}`);
});

const PORT = 3000;
const url = require("url");
const queryString = require("querystring");
const path = require("path");

// contentType 리턴하는 함수
const contentTypeFn = (extname) => {
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

  return contentType;
};

server.on("request", (req, res) => {
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
    res.writeHead(200, { "Content-Type": contentTypeFn(extname) });
    // contentTypeFn() 확장자를 가지로 contentType

    // localhost:3000/users
    if (req.url === "/" && req.method === "GET") {
      const content = fs.readFileSync(
        path.join(__dirname, "views", "index.html")
      );
      res.end(content);
    }

    /// get 요청이 들어온 이미지 처리
    else if (
      (req.url.includes(".png") ||
        req.url.includes("gif") ||
        req.url.includes("jpg")) &&
      req.method === "GET"
    ) {
      const content = fs.readFileSync(path.join(__dirname, "views", req.url));
      res.end(content);
    }

    ///`http://localhost:3000/users`
    else if (req.url.includes("users") && req.method === "GET") {
      res.end(JSON.stringify(users));
    }

    // localhost:3000/users
    // post 방식이므로 thunder client
    // html (fetch : get, post, delete, put, patch)
    // body( "데이터:데이터의 모양은 json"를 끼워넣어서 요청 )
    else if (req.url.includes("users") && req.method === "POST") {
      let body = "";

      // body를 통해서 전송된 데이터 읽어오기
      req.on("data", (chunck) => {
        body += chunck.toString();
        console.log(JSON.parse(body));
        // body 데이터는 모두 문자열
        const { firstname, id } = JSON.parse(body);

        // const newuser = {
        //   firstname: firstname,
        //   id: id,
        // };

        const newuser = { firstname, id };
        users.push(newuser);
        //console.log(users);

        fs.writeFileSync(
          path.join(__dirname, "datas", "users.json"),
          JSON.stringify(users, null, "  ")
        ); // 덮어쓰기

        res.end(JSON.stringify(users));
        // res.end(JSON.stringify(newuser));
      });
      /// callback end
    }
    // DELETE 2가지 방식
    // localhost:3000/users/id=3
    // localhost:3000/users/firstname=kim
    // localhost:3000/users/addr=합정
    // localhost:3000/users(지울 정보는 body에 첨부)
    else if (req.url.includes("users") && req.method === "DELETE") {
      const rowData = req.url.split("/");
      console.log(rowData); // [ '', 'users', 'id=3' ]
      const rowAry = rowData[2].split("=");
      console.log("id : ", rowAry[0], rowAry[1]); //id 3

      // 지우는 의미 : delete 아님
      // 제외한 데이터를 찾아서 다시 저장
      const jsonData = fs.readFileSync(
        path.join(__dirname, "datas", "users.json")
      ); // 문자열
      const transData = JSON.parse(jsonData); // JS
      // console.log(transData);

      const deleteAry = transData.filter((data) => {
        data.id !== rowAry[1];
        // console.log(data[`${rowAry[0]}`] === rowAry[1]);
      });
      // // data[`${rowAry[0]}`]  // data.rowAry[0]
      // // data['fristname']     // data.firstname
      // // data['id']            // data.id

      console.log(deleteAry);

      // fs.writeFileSync(
      //   path.join(__dirname, "datas", "users.json"),
      //   JSON.stringify(deleteAry, null, "  ")
      // );

      // res.end(
      //   JSON.stringify({ success: true, message: "정상삭제 되었습니다." })
      // );
    }

    /// update : put, patch === fetch
    // body, url 수정하는 법
    // 정규표현식 : 언어
    // localhost:3000/users
    else if (req.url.includes("users") && req.method === "PUT") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
        const transData = JSON.parse(body);
        const { firstname, id } = transData;
        console.log(" put request : ", firstname, id);

        const rowDatas = fs.readFileSync(
          path.join(__dirname, "datas", "users.json")
        ); // 문자열
        const rowTransDatas = JSON.parse(rowDatas); //  수정전 데이타들

        const findUser = rowTransDatas.find((data) => data.id === id);
        //console.log(findUser);
        findUser.firstname = firstname; // 수정

        const delData = rowTransDatas.filter((data) => data.id !== id);
        const addDatas = [...delData, findUser];
        // rowTransDatas.push(findUser);

        fs.writeFileSync(
          path.join(__dirname, "datas", "users.json"),
          JSON.stringify(addDatas, null, "  ")
        );

        res.end(JSON.stringify(findUser));
      }); // on end
    } // put end

    // restApi.html 열어 줄 라우트 추가
    // localhost:3000/restApi.html
    // localhost:3000/restApi
    // localhost:3000/views/restApi
    else if (req.url.includes("restApi") && req.method === "GET") {
      const restApiData = fs.readFileSync(
        path.join(__dirname, "./views/restApi.html")
      );

      res.end(restApiData);
    }

    // 한명 데이터 찾기
    // localhost:3000/user/id=1
    else if (req.url.includes("user") && req.method === "GET") {
      // 검색어 찾기
      const search = req.url.split("/");
      const searchId = search[2].split("=");

      const restApiData = fs.readFileSync(
        path.join(__dirname, "./datas/users.json")
      );
      const restJson = JSON.parse(restApiData);
      const findUser = restJson.find((item) => item.id === searchId[1]);
      // undefined === error === false
      // { "firstname" : "kim" , "id":"1"}

      if (findUser) {
        const resData = {
          success: true,
          data: findUser,
        };
        res.end(JSON.stringify(resData));
      } else {
        const resData = {
          success: false,
          data: "데이터를 찾을 수 없습니다.",
        };
        res.end(JSON.stringify(resData));
      }
    }

    /// 회원가입, 상품등록
    // localhost:3000/user/create
    // localhost:3000/product/create
    // localhost:3000/create
    else if (req.url.includes("create") && req.method === "GET") {
      const readData = fs.readFileSync(
        path.join(__dirname, "./views/createUser.html")
      );
      res.end(readData);
    }
    // else if (req.url.includes("create") && req.mthod === "POST") {
    // }
    else if (req.url.includes("create") && req.method === "POST") {
      let body = "";

      // body를 통해서 전송된 데이터 읽어오기
      req.on("data", (chunck) => {
        body += chunck.toString();
        console.log(JSON.parse(body));
        // body 데이터는 모두 문자열
        const { firstname, id } = JSON.parse(body);

        const newuser = { firstname, id };
        //users.push(newuser);
        //console.log(users);
        const restApiData = fs.readFileSync(
          path.join(__dirname, "./datas/users.json")
        );
        const restJson = JSON.parse(restApiData); // 읽어온 데이터
        restJson.push(newuser);

        fs.writeFileSync(
          path.join(__dirname, "datas", "users.json"),
          JSON.stringify(restJson, null, "  ")
        ); // 덮어쓰기

        res.end(JSON.stringify(restJson));
        // res.end(JSON.stringify(newuser));
      });
      /// callback end
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

// front 3개월 fetch : get
// https://jsonplaceholder.typicode.com/guide/ post, put, delete
// html, css, javascript  => React
