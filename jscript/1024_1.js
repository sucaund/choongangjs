window.onload=function(){
// html에서 불로오는 .su .ok
    let su=document.querySelector(".su");
    let ok=document.querySelector(".ok");
    // 총합가격 price 설정과 물건 단가 5000원
    let price; dan=5000;
    
    // 클릭 버튼생성(id=ok)및 
    ok.onclick=function(){
    // 총합가격 price *단가(dan)
        price=Number(su.value)*dan;
        // 결과출력
        alert("결제금액:" +price+"원 입니다.");
        // 나온결과를 콘솔로그에 f12에 등장
        console.log("ok");
    }
}