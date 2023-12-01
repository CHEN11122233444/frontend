let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");

// let imgWidth = document.querySelector(".banner_imgs>div");
// console.log(imgWidth);
let num = 0;
let currentNum = num;
// 외부 함수로 빼서 제어
const bannerImgs = document.querySelector(".banner_imgs");
// 선택자는 유일하게 존재하도록 만들어 준다.
const innerWindowWidth = window.innerWidth;
console.log(innerWindowWidth);
let imgLength = document.querySelectorAll(".img").length;

function sliderBtnHandle() {
  if (currentNum === imgLength - 1) rightBtn.style.opacity = 0;
  else rightBtn.style.opacity = 1;

  if (currentNum === 0) leftBtn.style.opacity = 0;
  else leftBtn.style.opacity = 1;
  console.log(imgLength, currentNum);
  //   imgs.style.transform = "translateX('-1000px')";
  //         transform  : translateX(-1323px);
  bannerImgs.style.transform = `translateX(-${num * innerWindowWidth}px)`;

  indecatorHandle(num);
}
leftBtn.addEventListener("click", () => {
  if (num < imgLength) num++;
  sliderBtnHandle();
});
rightBtn.addEventListener("click", () => {
  if (num < imgLength) num--;
  sliderBtnHandle();
});

// 초기화 하는 함수
// css에서 기본 디자인을 초기화 해두지만
// js에서 초기화 할 수 있음
function indecatorHandle(n) {
  let indecators = document.querySelectorAll(".indecator>div");
  if (currentNum >= 0) indecators[currentNum].classList.remove("active");
  // 0 은 이미 false이므로

  indecators[n].classList.add("active");
  currentNum = num;
}

function init() {
  indecatorHandle(num);
  eventDef();
}

init(num);

// 이동이 없는 링크
// 이벤트처리 방지 거나  여러개페이지가 있다면 여러개 페이지중 중복 이동하게 처리

function eventDef() {
  let btns = document.querySelectorAll(".lnb a");
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
}

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  console.log(scrollTop);
  let header = document.querySelector("header");
  // 변수 : scope 살아있는 시간

  if (scrollTop >= 700) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// scroll spy 추가
