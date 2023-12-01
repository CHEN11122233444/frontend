// 모듈 만들어 두고 계속 사용하기

const fs = require('fs');
const fspromise = fs.promises;
const {format} = require('date-fns');
const { v4 : uuidv4 } = require('uuid');
const { log } = require('console');


const logEvents = async(message) => {
    const today = new Date();
    const date = format(today, 'yy-MM-dd\tHH:mm:ss');
    const log = `\n ${date} \t ${uuidv4()} \t ${message} `;


    try {
        if(!fs.existsSync('./log')){
            await fspromise.mkdir('./log');
        }

        await fspromise.appendFile('./log/eventLog.txt', log);
    } catch (err) {
        console.log(err);
    }
};

// logEvents("전달되는 메시지");
// 전달되는 메시지가 동일하면 구분하기 힘듬

// for(let a = 0; a < 10; a++){
//     const num = Math.random(); // 구분인자
//     logEvents(num);
// }

module.exports = logEvents;

