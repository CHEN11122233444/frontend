var express = require("express");
var app = express();
const PORT = 3000;
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cookies", require("./routes/cookies.js"));
app.use("/employees", require("./routes/employees.js"));

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(" server start on ", PORT);
});
 