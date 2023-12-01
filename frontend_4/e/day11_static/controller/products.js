const getProduct = (req, res) => {
  console.log("get one Product");
  res.send("get one Product");
};
const getProducts = (req, res) => {
  console.log("get any Products");
  res.send("get any Products");
};
const postProduct = (req, res) => {
  console.log("post Product");
  res.send("post Product");
};
const putProduct = (req, res) => {
  console.log("put Product");
  res.send("put Product");
};
const deleteProduct = (req, res) => {
  console.log("delete Product");
  res.send("delete Product");
};

module.exports = {
  getProduct,
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
};
