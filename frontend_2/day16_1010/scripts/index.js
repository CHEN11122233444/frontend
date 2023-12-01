let leftBtn =document.querySelector('.left');
let rightBtn =document.querySelector('.right');

// let imgWidth=document.querySelector('.banner_imgs>div').innerWidth;
// console.log(imgWidth);
let num=0;
// 외부 함수로 빼서 제어
const bannerImgs=document.querySelector('.banner_imgs');
leftBtn.addEventListener('click',()=>{
    let imgs=document.querySelector('.banner_imgs');
    console.log(imgs);
    let imgLength=document.querySelectorAll('.img').length;
    if(num<imgLength) num++;
    if(num===0) leftBtn.style.opacity=0;
    // imgs.style.transform="transformX('-1000px')";
    bannerImgs.style.transform=`transformX('-${num * 1000}px')`;
    });

rightBtn.addEventListener('click',()=>{
    let imgs=document.querySelector('.banner_imgs');
    console.log(imgs);
    let imgLength=document.querySelectorAll('.img').length;
    if(num>0) num--;
    if(num===imgLength - 1) rightBtn.style.opacity=0;
    // imgs.style.transform="transformX('-1000px')";
    imgs.style.transform=`transformX('-${num * 1000}px')`;
    indecatorHandle(num)
    });

/*
    css에서 기본 디자인을 초기화 해두지만
    js에서 초기화 할 수 있다.    
*/
function indecatorHandle(n){
    let indecators=document.querySelectorAll('.indecator>div');
    indecators[n].classList.add('active');
}
function init(){
    indecatorHandle(num);
    eventDef();
}

init(num);


// 이동이 없는 링크
// 이벤트처리 방지 or 여러 페이지가 있다면 여러 페이지 중 중복 이동하게 처리

function eventDef(){
    let btns=document.querySelectorAll('.lnb a');
    btns.forEach((btn)=>{
        btn.addEventListener('click',(event)=>{
            event.preventDefault();
        })
    })
}
