let i, str="", sum=0 , even=0 , odd=0;
window.onload=function(){
//     // document.write("<br>자동차-1");
//     // document.write("<br>자동차-2");


//     for(i=1;i<=5;i++){
//         document.write("<br>자동차-"+i)
//             document.write(": 점검 완료-");
// }}
//     for(i=0;i<5;i++){
//         str +="<br>자동차"+i+"점검 완료";
//     }
//     document.write( str );

    // for(i=0;i<=100;i++){
    //     sum+=i;
    // }
    // document.write("1~100까지의 합 = "+sum);
/*
    for(i=0;i<100;i++){
        if(i%2==0)
            even+=i;
        else
            odd+=i;

    }
    document.write("<br>1~100 까지 짝수의합 : "+ even);
    document.write("<br>1~100 까지 홀수의합 : "+ odd);
*/

  //3단 구구단을 출력하라.
    let box= document.querySelector(".box");
    let ok= document.querySelector(".ok");
    let ok2= document.querySelector(".ok2");
    let dan= document.querySelector(".dan");
    let str="";
    let str2="";
    
    
    
    
    ok.onclick=function(){
        str=""
        for(i=1;i<=9; i++){
            str+="<br> 5 * "+i+"=" +5*i;
        box.innerHTML=str;
        }
    }
    //원하는 구구단 출력하기

    let gu;
    ok2.onclick=function(){
        str2="" //다시 버튼을 누르면 공백으로 박스를 채워준다(초기화)
        gu= parseInt(dan.value); //html에 숫자를입력하는 dan을 js에서  숫자로 변환
            //이유는 <input type="text" class="dan"> 즉 인풋의 상태가 텍스트이므로
            // 인풋에만 사용
        
        
            if(gu>1&&gu<=9){
            
            for(i=1;i<9;i++){
                str2+="<br>"+ gu +" * "+ i + " = "+ gu*i;
            }
            box.innerHTML=str2;
}
}
}
