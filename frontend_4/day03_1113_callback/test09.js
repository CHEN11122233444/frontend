const fs = require('fs');
const fsPromises = fs.promises;

async function fileRoad(){
    try{
        const data = await fsPromises.readFile('./datas/lorem.txt','utf-8');
        /// 대기시간이 길어지더라도 완료를 보장
        console.log('3.',data);

        fsPromises.writeFile('./datas/newData.txt',data);
        console.log('4. 쓰기완료')

        fsPromises.appendFile('./datas/newData.txt', 'append string');
        console.log('5. 추가완료');

        fsPromises.rename('./datas/newData.txt', './datas/asyncAwait.txt');
        console.log('6. 이름변경 완료');

        const newData = await fsPromises.readFile('./datas/asyncAwait.txt', 'utf-8')
        console.log('7, ',newData);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('무조건 실행')
        // database들을 close 작업

    }
}

console.log('1.');
fileRoad();
console.log('2.');