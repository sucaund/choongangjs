let i, img5 ,img5_text,box,count,ok;
const img5_textA=["자동차","5성침대","고기","따듯한고기","해외도피"]
window.onload=function(){
    // html
    //img5 정렬안에 속한 태그 "li"를 img5 로 초기화▼
    img5=document.querySelector(".img5").getElementsByTagName("li");
    img5[0].innerHTML="홍길동"
    img5[1].innerHTML="이동수"
    //img5_text 정렬안에 속한 태그 "li"를 img5_text 로 초기화▼
    img5_text=document.querySelector(".img5_text").getElementsByTagName("li");
    for(i=0;i<img5_text.length;i++){
        img5[i].style.background="url(img/img"+ i +".jfif)";
        img5[i].style.backgroundSize="100% 100%";
        img5_text[i].innerHTML=img5_textA[i];
    
    }

box=document.querySelector(".box");
// ;i<5;를 해당 배열의 갯수로 임의 지정하는 부분▼
// for(i=0;i<img5_text.length;i++){
//     box.innerHTML+=img_textA[i]+"<br>";
// }

count=0;
ok=document.querySelector(".ok");
ok.onclick=function(){
    while(count<img5_textA.length){
        box.innerHTML += img5_textA[count]+"<br>";
        count++;
    }
}




}