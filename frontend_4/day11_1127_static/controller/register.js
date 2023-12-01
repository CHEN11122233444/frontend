const fs = require("fs");
const path = require("path");

const getRegisters = (req, res) => {
  // res.send("get register");
  const users = require("../model/users.json");
  res.json(users);
};

const getRegister = (req, res) => {
  const { id } = req.params;
  const users = require("../model/users.json");

  const findUser = users.find((user) => user.id === parseInt(id));
  res.json(findUser);
};

/*
  {
    "id": 3,
    "username": "오길동",
    "useremail": "ooooo@naver.com",
    "usepwd": "hello$"
  }
*/
const postRegister = async (req, res) => {
  const { username, useremail, userpwd } = req.body;

  let resData;
  // html 에서 fetch 이전에 처리
  // if (!(username === undefined) || !useremail || !userpwd) {
  //   resData = { success: false, message: "데이터를 찾을 수 없습니다." };
  //   res.send(resData);
  // }
  const users = require("../model/users.json");
  const id = users[users.length - 1].id + 1;
  const newUser = { id, username, useremail, userpwd };
  users.push(newUser);

  await fs.writeFileSync(
    path.join(__dirname, "../model/users.json"),
    JSON.stringify(users, null, "  ")
  );

  resData = { success: true, message: "등록 완료하였습니다.", data: newUser };
  // res.send("post register");
  res.send(resData);
};

const putRegister = (req, res) => {
  const users = require("../model/users.json");

  const { username, useremail, userpwd } = req.body;
  const findUser = users.find(
    (user) => user.username === username && user.useremail === useremail
  );

  console.log(findUser);

  const newUser = {
    id: findUser.id,
    username: findUser.username,
    useremail: findUser.useremail,
    userpwd,
  };

  const filterUsers = users.filter(
    (user) => user.username !== username && user.useremail !== useremail
  );
  filterUsers.push(newUser);

  fs.writeFileSync(
    path.join(__dirname, "../model/users.json"),
    JSON.stringify(filterUsers, null, "  ")
  );

  const resData = {
    success: true,
    message: "수정되었습니다.",
  };

  res.send(resData);
};

// {
//   "id":1
// }
const deleteRegister = (req, res) => {
  const { id } = req.body;
  const users = require("../model/users.json");
  const filterUsers = users.filter((user) => user.id !== parseInt(id));

  fs.writeFileSync(
    path.join(__dirname, "../model/users.json"),
    JSON.stringify(filterUsers, null, "  ")
  );

  const resData = {
    success: true,
    message: "삭제되었습니다.",
  };

  res.send(resData);
};

module.exports = {
  getRegisters,
  getRegister,
  postRegister,
  putRegister,
  deleteRegister,
};
