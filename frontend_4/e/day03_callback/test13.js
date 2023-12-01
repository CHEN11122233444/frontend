// fs
// data : json, txt,
// 로그파일 : winston,
const fs = require("fs");
const fsPromise = fs.promises;
const { format } = require("date-fns");

async function writeLog() {
  const today = new Date();
  const date = format(today, "\t yy-MM-dd \n");
  console.log(date);

  try {
    if (!fs.existsSync("./log")) {
      await fsPromise.mkdir("./log");
    }

    await fsPromise.appendFile("./log/eventLog.txt", date);
  } catch (err) {
    console.log(err);
  }
}

writeLog();
