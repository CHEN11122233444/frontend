const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const register = require("./routes/register");

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
// 자주 사용하는 폴더를 인식하도록 지정해둠
// scripts
// styles
// images

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date());
  next();
});

app.use("/login", require("./routes/login"));
app.use("/products", require("./routes/products"));
app.use("/register", require("./routes/register"));
// app.use("/register", register);

// app.use("/register", (req, res) => {
//   console.log("use register");
// });
// app.get("/register", (req, res)=>{...})
// app.post("/register", (req, res)=>{...})
// app.put("/register", (req, res)=>{...})
// app.delete("/register", (req, res)=>{...})

// app.get('/index.html', (req, res) => {
// GET /index.html
// app.get('/index', (req, res) => {
// GET /index
// app.get('/', (req, res) => {
// GET /
app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/caption(.html)?", (req, res) => {
  //   res.sendFile(path.join(__dirname, "views", "caption", "myshop.html"));
  res.sendFile(path.join(__dirname, "views", "myshop.html"));
});
app.get("/chainbag", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "chainbag", "chainbag.html"));
});

app.listen(PORT, () => {
  console.log("server start on ", PORT);
});
