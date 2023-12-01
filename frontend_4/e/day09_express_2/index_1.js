const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const fs = require("fs");
const fsPromises = fs.promises;

// // body, header 데이터 전송된 데이터를 받기위한 설정
// // node14 : body-parser 모듈 필요했다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// water fall
// localhost:3000/
app.get("/", (req, res) => {
  console.log("get");
  res.sendFile(path.join(__dirname, "views", "method.html"));
});

// localhost:3000/method
app.get("/method", (req, res) => {
  console.log("get");
  res.send("hello express!!");
});

app.post("/method", (req, res) => {
  console.log("post");
  res.send("post data");
});

app.put("/method", (req, res) => {
  console.log("put");
  res.send("put data");
});

app.delete("/method", (req, res) => {
  console.log("delete");
  res.send("delete data");
});

// localhost:3000/regist
app.get("/regist", (req, res) => {
  console.log("get");

  const readData = fs.readFileSync(
    path.join(__dirname, "views", "registration.html"),
    "utf-8"
  );

  //   const readData = { test: "hello" };
  //   JSON.stringify(readData) 할 필요 없고
  //   const readData = "<h1>Hello Express!!</h1>"; // 태그도 그대로 출력
  //   const readData = require("./tag.js");  // 문자열 그대로 출력
  res.send(readData);

  //  res.sendFile(path.join(__dirname, "views", "registration.html"));
  // 직접 파일 띄우기
});

//const users = [];
app.post("/regist", async (req, res) => {
  console.log("post");

  /*
  // path.join() 가독성 높이기 위해서 생략하고 사용했는데 error
  if (!fs.existsSync(path.join(__dirname, "./data"))) {
    fs.mkdir(path.join(__dirname, "./data"), (err) => {
      console.log("err");
    });
  }
  */
  //const response = await fs.readFileSync(
  const response = await fsPromises.readFile(
    path.join(__dirname, "data", "users.json")
  );
  // error 미뤄두고 비어있지 않은 데이터를 만들어 두고 작업
  const users = await JSON.parse(response);
  // const users = await response.json();

  const { name, email, pwd } = req.body;
  // console.log(JSON.stringify({ name, email, pwd }));
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id, name, email, pwd };
  users.push(newUser);
  console.log(users);

  await fsPromises.writeFile(
    path.join(__dirname, "data", "users.json"),
    JSON.stringify(users, null, "  ")
  );
  //res.send(JSON.stringify({ name, email, pwd }));
  //정상처리여부 넘기기

  if (!!users) {
    res.send(JSON.stringify({ success: true, message: "정상등록되었습니다." }));
  } else {
    res.send(
      JSON.stringify({ success: false, message: "등록 할수 없습니다." })
    );
  }
});

async function usersReadReturn() {
  const response = await fsPromises.readFile(
    path.join(__dirname, "data", "users.json")
  );
  // error 미뤄두고 비어있지 않은 데이터를 만들어 두고 작업
  const users = await JSON.parse(response);
  return [...users]; // 진짜 배열이야
}

async function usersWrite(users) {
  await fsPromises.writeFile(
    path.join(__dirname, "data", "users.json"),
    JSON.stringify(users, null, "  ")
  );
}
// localhost:3000/regist/id=3/name=kim
// localhost:3000/regist/3/kim
// route : localhost:3000/regist/:id/:name/:pwd
// localhost:3000/regist/3/kim/12345%
// 여러개의 파라미터 사용시 순서를 잘 지켜서 사용해야함, 생략불가
// app.delete("/regist/:id/:name", (req, res) => {
// localhost:3000/regist/3

// json에 저장된 id는 숫자,
// params로 전달 받은 id는 문자
// app.delete("/regist/:id/:name/:pwd", (req, res) => {
app.delete("/regist/:id", async (req, res) => {
  console.log("delete");
  // 파라미터로 데이터를 넘겼음
  const { id } = req.params;
  // { id: '3' }
  // const {id, name} = req.params;
  console.log(id);
  // const users = usersReadReturn(); // read

  const response = await fsPromises.readFile(
    path.join(__dirname, "data", "users.json")
  );
  // error 미뤄두고 비어있지 않은 데이터를 만들어 두고 작업
  const users = await JSON.parse(response);

  console.log(users);
  const filterUsers = users?.filter((user) => user.id !== parseInt(id));
  // ?. : 오션널체인 : users 널이 아닐때 .이하를 처리
  // ? true : false

  usersWrite(filterUsers);
  res.send("delete data");
});

app.put("/regist", (req, res) => {
  console.log("put");
  res.send("put data");
});

// localhost:3000/login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.listen(PORT, () => {
  console.log("server on ", PORT);
});

// 다음 주에는 MVC 모델로 바꿀 것임
// data, 함수, controler를 분리는 것
