// http : client와 server간 데이터를 처리하는 방식 정해둔것 = 프로토콜
// client server model
// client : 컴퓨터, 휴대폰같이 인터넷에 연결된 장치 => 브라우저가 해석할 수 있는 소프트웨어
// server : client 요청 들어주고 데이터를 저장 컴퓨터
// http( HyperText Transfer Protocol)

const http = require("http");
const server = http.createServer((request, response) => {
  console.log(request.url, request.method);
});

//server.on()
server.listen(3000, () => {
  console.log("listining 3000");
});

// http://localhost:3000
// http://127.0.0.1:3000
// http://127.0.0.1:3000/hello
// http://127.0.0.1:3000/about
// 눈에 보이게 요청하는 방식은 GET
// 요청방식에 대한 규정 : REST API
// get, post, delete, put 또는 patch ........
// 읽고(read) 쓰고(write) 수정(update) 지우고(delete)
// CRUD
// CREATE(write : post)
// READ(read : get)
// UPDATE(update : put 또는 patch)
// DELETE(delete :  delete)
