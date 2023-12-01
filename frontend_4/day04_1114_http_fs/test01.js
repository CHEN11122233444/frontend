const logEvents = require('./logEvents');
const EventEmitter = require('events');
const emitter = new EventEmitter();

// setInterval(()=>{
//     logEvents(' log event ');
// }, 2000)

emitter.on('log', (message)=> logEvents(message));
setInterval(()=>{
    emitter.emit('log', 'log event Emittered!!');
}, 2000);


// 파일시스템, 이벤트 => logEvent
// 