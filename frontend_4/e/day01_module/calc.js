function add(a = 3, b = 5) {
  // a, b 전달되지 않았을 때 default 값으로 사용
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };
// export :  외부에서 사용할 수 있도록 만드는 방법
