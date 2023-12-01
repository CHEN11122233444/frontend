const fs = require("fs");
const path = require("path");

const getLogin = (req, res) => {
  // email && pwd 같으면 로그인 이름 전달
  res.sendFile(path.join(__dirname, "..", "views", "login.html"));
};

const postLogin = (req, res) => {
  const { useremail, userpwd } = req.body;
  const users = require("../model/users.json");
  const findUser = users.find(
    (user) => user.useremail === useremail && user.userpwd === userpwd
  );

  if (findUser) {
    res.send({ success: true, message: "로그인완료", name: findUser.username });
  } else {
    res.send({ success: false, message: "데이터를 확인하세요." });
  }
};

module.exports = {
  getLogin,
  postLogin,
};
