var express = require("express");
var app = express();
const PORT = 3000;
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cookies", require("./routes/cookies.js"));

app.get("/", function (req, res) {
  res.send("hello world");
});

// blocking               => non blocking
// javascript 1번 1씩 처리 => 1번 여러개 처리 보이는 것
// 순차처리                => 병렬처리 하는 것 처럼 보임
app.listen(PORT, () => {
  console.log(" server start on ", PORT);
});

// AI : chat gpt 비롯한 아류작... => 해주세요.
