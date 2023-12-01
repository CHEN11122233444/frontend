const express = require("express");
const router = express.Router();

const register = require("../controller/register");
// .js 확장자는 생략가능
// register = { getRegister, postRegister,  putRegister, deleteRegister}
// register.getRegister
const {
  getRegisters,
  getRegister,
  postRegister,
  putRegister,
  deleteRegister,
} = require("../controller/register");

// localhost:3000/register/register
// router.route("/register")
// localhost:3000/register

// router
//   .route("/")
//   .get(getRegister)
//   .post(postRegister)
//   .put(putRegister)
//   .delete(deleteRegister);

router.get("/", getRegisters);
router.post("/", postRegister);
router.put("/", putRegister);
router.delete("/", deleteRegister);
router.get("/:id", getRegister);
// localhost:3000/register/3
// localhost:3000/register/1

module.exports = router;

//
