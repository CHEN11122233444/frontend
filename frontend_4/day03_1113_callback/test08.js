const fs = require('fs');
const { resolve } = require('path');

function readFile(filePath){
    const promise = new Promise((resolve, reject)=> {
        fs.readFile(filePath, "utf-8",(err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });

    return promise;
}

readFile('./datas/lorem.txt')
    .then((data)=>console.log('파일 내용: ', data))
    .catch((err)=>{
        console.log('파일 읽기 에러 : ', err);
    });


function writeFile(filePath, data){
    const promise = new Promise((resolve, reject)=> {
        fs.writeFile(filePath, data, "utf-8",(err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });

    return promise;
}

writeFile('./datas/newfile.txt', 'write file')
    .then(()=>console.log('파일 쓰기 완료'))
        .then(()=>{
            new Promise((resolve, reject)=>{
                fs.appendFile('./datas/newfile.txt', 'append string', (err, data) => {
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                });
            });
        })
        .then(()=>{
            new Promise((resolve, reject)=>{
                fs.rename('./datas/newfile.txt', './datas/rename.txt', (err, data) => {
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                });
            });
        })
    .catch((err)=>{
        console.log('파일 처리 에러 : ', err);
    });
    


