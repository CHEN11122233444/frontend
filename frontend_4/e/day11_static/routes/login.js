const express = require("express");
const router = express.Router();

const login = require("../controller/login");
const { getLogin, postLogin } = require("../controller/login");

// router.get('/', login.getLogin);
router.get("/", getLogin);
router.post("/", postLogin);
router.post("/logout", postLogin);
// localhost:3000/login/logout

module.exports = router;

// 라우팅이 정상인 test
// getRegister("/register", null);
// postRegister("/register", null);
