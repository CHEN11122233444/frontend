const ary = [1,2,3];
const [a, b, c, d = 4] = ary;
console.log(a, d);

// ...(spread operator)
const [x, ...y] = ary;
console.log(x, y);
