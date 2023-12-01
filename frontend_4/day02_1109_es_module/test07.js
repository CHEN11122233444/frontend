const {EventEmitter} = require('events');
const emitter = new EventEmitter();
// 모든 이벤트 처리해주는 이벤트 객체
//
//
emitter.addListener('event1',()=>{
    console.log('event1 처리');
});
emitter.addListener('event2',()=>{
    console.log('event2 처리');
});

emitter.addListener('event2',()=>{
    console.log('event2 삭제');
});

setTimeout(()=>{
    emitter.emit('event1'); // 클릭
    console.log('이벤트 발생')
},3000);
setTimeout(()=>{
    emitter.emit('event1'); // 클릭
    console.log('이벤트 발생')
},6000);
setTimeout(()=>{
    emitter.emit('event2'); // 클릭
    console.log('이벤트 발생')
},5000);