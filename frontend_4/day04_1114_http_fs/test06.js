const http = require('http');
const server = http.createServer();
const fs = require('fs');
let contentType = {"content-type" : "html" };

server.on('request',(req, res)=>{
    // localhost:3000
    if(req.url.includes('html')){
        res.writeHead(200, contentType)
        const data = fs.readFileSync('./views/index.html')
        res.end(data);
    } else if (req.url.includes('png')){
        // content-type을 일일이 확인후 바꾸기
        contentType = {"content-type" : "image/png"};
        res.writeHead(200, contentType);
        const imageData = fs.readFileSync("./pear-solid-24.png");
        res.end(imageData);
    }
});

server.listen(3000, ()=>{
    console.log('listening 3000');
})

// node로 서버를 만들고 파일 읽기를 하면 코드가 복잡하고 분기 처리가 쉽지않음
// module => url 
// express(url 처리 모듈을 내부에 포함하고 있으므로)

