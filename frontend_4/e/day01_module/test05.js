const user = {
  firstname: "jemicom",
  lastname: "kim",
};

// let firstname = user.firstname;
// let lastname = user.lastname;
// let fn = firstname;

/*
const { firstname, lastname } = user;
console.log(firstname, lastname);
// 배열 순서있음, 변수명을 아무렇게나 사용
// 객체 속성에 순서 없음, 변수명은 속성을 사용

const { num } = user;
console.log(num);
*/

const { lastname } = user;
// 순서에 무관하게 속성명만 맞추면 됨
console.log(lastname);
// const { firstname }; // 불가
// const { firstname } = null; // 불가
// typeof(null) : object {}
