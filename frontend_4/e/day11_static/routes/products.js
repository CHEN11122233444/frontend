const express = require("express");
const router = express.Router();

const product = require("../controller/products");

const {
  getProduct,
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controller/products");

router
  .route("/")
  .get(getProducts)
  .post(postProduct)
  .put(putProduct)
  .delete(deleteProduct);

module.exports = router;

// 라우팅이 정상인 test
// getRegister("/register", null);
// postRegister("/register", null);
