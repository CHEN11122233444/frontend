// es5, es6 모듈 사용법이 추가됨 => node14 버전
// node18 : type 추가 하지 않아도 es6 모듈을 사용할 수 있음

const hello = {
  nodejs: "hellow node modules",
  bye: "goodbye nodejs",
};

const name = "jemicom";
export { hello, name };

// module.exports = { hello, name };
