// 서버를 구현한 후 cookies.html을 띄어주세요.
// get : localhost:3000/
// get : localhost:3000/cookies
// get : localhost:3000/cookies/get,post,delete,put
// get : localhost:3000/register

var express = require("express");
var app = express();
const PORT = 3000;
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  let id = "nodejs";
  res.cookie("NID_use", {
    id,
    name: "kim",
    Expires: `${new Date() + 1}`,
    authorized: true,
  });
  next();
});

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/cookies", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/cookies.html"));
});

app.get("/showCookie", (req, res) => {
  console.log("showCookie : ", req.cookies);
  // res.send(req.cookies);
  res.sendFile(path.join(__dirname, "views", "cookies.html"));
});

app.get("/setCookie", (req, res) => {
  let id = "react";
  res.cookie("NID_ID", {
    id,
    name: "kim",
    Expires: `${new Date() + 1}`,
    authorized: true,
  });

  // res.cookie("NID_ID", "foo");

  // res.cookie("NID_ID", "foo", {
  //   Expires: `${new Date() + 1}`,
  //   domain: "example.com",
  // });
  res.redirect("/showCookie");
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("NID_ID");
  res.redirect("/showCookie");
});

app.post("/clearCookie", (req, res) => {
  const { cookie_id } = req.body;

  res.clearCookie(cookie_id);
  res.send({ success: true, message: "쿠키 삭제" });
});

// blocking               => non blocking
// javascript 1번 1씩 처리 => 1번 여러개 처리 보이는 것
// 순차처리                => 병렬처리 하는 것 처럼 보임
app.listen(PORT, () => {
  console.log(" server start on ", PORT);
});

// AI : chat gpt 비롯한 아류작... => 해주세요.
