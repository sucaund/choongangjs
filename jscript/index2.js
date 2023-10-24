let count=0;
let pic,prev,next,disp;
window.onload=function(){
    //     // 카운트 (count) 변수설정
    //     let count=0;
    //     // ok,disp,sub html의 것을 js로 가져온다
//     let ok=document.querySelector(".ok");
//     let disp=document.querySelector(".disp");
//     let sub=document.querySelector(".sub");
//     let pic=document.getElementById("pic");

// // oneclick버튼 제작및 전위연산자 설정 후 나온 count값을 disp로보냄
//     ok.onclick=function(){
    //         count++;
    //         disp.innerHTML=count;
    //         pic.src="img/img"+count+".jfif";
    //     }
    //     sub.onclick=function(){
        //         count--;
        //         disp.innerHTML=count;
        //     }
        
        let prev=document.querySelector(".prev");
        let next=document.querySelector(".next");
        let disp=document.querySelector(".disp");
        let pic=document.getElementById("pic");

    next.onclick=function(){
        if(count<5){
        count++;
        disp.innerHTML=count+"/5";
        pic.src="img/img"+count+".jfif";
                }
    }
    
    prev.onclick=function(){
        if(count>1){
        count--;
        disp.innerHTML=count+"/5";
        pic.src="img/img"+count+".jfif";
                }
    }
    
}