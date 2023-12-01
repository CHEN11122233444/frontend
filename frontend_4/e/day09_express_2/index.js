const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const fs = require("fs");
const fsPromisess = fs.promises;
const logEvents = require("./logEvents/logEvents");
// // body, header 데이터 전송된 데이터를 받기위한 설정
// // node14 : body-parser 모듈 필요했다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//미들웨어
app.use((req, res, next) => {
  console.log(`req.method : ${req.method}, req.url :${req.url}`);
  console.log(message);
  logEvents(message);
  next();
});
// water fall
// localhost:3000/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "method.html"));
});

// localhost:3000/method
app.get("/method", (req, res) => {
  res.send("hello express!!");
});

app.post("/method", (req, res) => {
  res.send("post data");
});

app.put("/method", (req, res) => {
  res.send("put data");
});

app.delete("/method", (req, res) => {
  res.send("delete data");
});

// localhost:3000/regist
app.get("/regist", (req, res) => {
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
  // 파라미터로 데이터를 넘겼음
  const { id } = req.params;
  // { id: '3' }
  // const {id, name} = req.params;

  // const users = usersReadReturn(); // read

  const response = await fsPromises.readFile(
    path.join(__dirname, "data", "users.json")
  );
  // error 미뤄두고 비어있지 않은 데이터를 만들어 두고 작업
  const users = await JSON.parse(response);

  const filterUsers = users?.filter((user) => user.id !== parseInt(id));
  // ?. : 오션널체인 : users 널이 아닐때 .이하를 처리
  // ? true : false

  usersWrite(filterUsers);
  res.send("delete data");
});

// 수정버튼 클릭하면 다음처리
// http://localhost:3000/update
app.get("/update", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "update.html"));
});
app.put("/regist:id", async (req, res) => {
  const { name, pwd, email } = req.body;
  // console.log(name, pwd, email);

  const response = await fsPromises.readFile(
    path.join(__dirname, "data", "users.json")
  );
  // error 미뤄두고 비어있지 않은 데이터를 만들어 두고 작업
  const users = await JSON.parse(response);

  const findUser = users?.find((user) => user.email === email);
  findUser.name = name;
  findUser.pwd = pwd;

  const filterUsers = users?.filter((user) => user.email !== email);
  const updateUsers = [...filterUsers, findUser]; // 맨뒤에 넣기

  usersWrite(updateUsers);
  res.send("put data");
});

/// localhost:3000/3
app.put("/regist:id", async (req, res) => {
  const { id } = req.params;
  const { name, pwd } = req.body;
  // console.log(name, pwd);

  const response = await fsPromises.readFile(
    path.join(__dirname, "data", "users.json")
  );
  // error 미뤄두고 비어있지 않은 데이터를 만들어 두고 작업
  const users = await JSON.parse(response);

  const findUser = users?.find((user) => user.id === parseInt(id));
  findUser.name = name;
  findUser.pwd = pwd;

  const filterUsers = users?.filter((user) => user.id !== parseInt(id));
  // const updateUsers = [...filterUsers, findUser];
  filterUsers.push(findUser);

  const sortUsers = filterUsers.sort((prev, next) => prev.id - next.id); // 오름차순
  // 객체의  id  순으로 정렬
  usersWrite(updateUsers);
  res.send("put data");
});
// localhost:3000/login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

// 하단으로  url주소를 쭉 찾아다가
// 주소가 없다면 다음을 표시
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(PORT, () => {
  console.log("server on ", PORT);
});

// 다음 주에는 MVC 모델로 바꿀 것임
// data, 함수, controler를 분리는 것
// 데이터가 file로 존재, 서버에 배포된 데이터베이스 서버와 통신
