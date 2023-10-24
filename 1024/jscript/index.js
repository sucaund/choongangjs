window.onload=function(){
// /*
//     var a=10;   
//     var b,c;
//     b=20;
//     c=a+b;
//     document.write(c);
// }
// // 읽어주는 메소드
// window.onload
// */

// var a;
// a=10;
// a="홍길동";

// let b;
// b=10;
// b=200;
// b="김철수";

// const c=10;  //변경할수없는 상수//
// c=20;

//     let a,b,c;
//     let d=10 ,e=20; //값을 처음(새로)부터 지정하는"초기화"
//     c=d+e;
//     console.log(c);
//     document.write(c);
//     document.write(c);
//     document.write("<br>"+c);
//     document.write("<br>10+20=" + c +"입니다.");

// let kbs=10,sbs=20;
// kbs+=sbs //축약형
// document.write("<br>kbs값:" +kbs);

//누적
// let a=1;
// a+=1;
// document.write("<br>"+ a);
// a+=1;
// document.write("<br>"+ a);
// a+=1;
// document.write("<br>"+ a);
// a++; //증가 연산자
// document.write("<br>"+ a);
// document.write("<br>"+ a++);
// document.write("<br>"+ a);
// document.write("<br>"+ ++a);
// document.write("<br>"+ --a);

// avg.innerHTML= avg;
// ========================오류나서 곤란함=========================

// let k,e,m,sum,avg;
// k=50;
// e=60;
// m=90;
// sum=k+e+m;
// avg=sum/3;
// // document.write("국어:"+k+"<br> 영어:"+e+"<br>수학:"+m);
// // document.write("<br>평균은"+avg.toFixed(2)+"이다!")
// let kor,eng, mat, sum ,avg;
// kor=document.getElementById("kor"); // document내의 아이디"kor"읽어들이고
// eng=document.getElementById("eng"); 
// mat=document.getElementById("mat"); 
// sum=document.getElementById("sum"); 
// avg=document.getElementById("avg"); 
// kor.innerHTML= k;// 이것만 쓰면 후에 오류가 클수있다
// eng.innerHTML= e; //html내의 값을 js값으로 inner즉 집어넣어준다는뜻
// mat.innerHTML= m;
// sum.innerHTML= sum;

// 
    let kor,eng,mat,sum,avg,ok;
    kor=document.getElementById("kor");
    eng=document.getElementById("eng");
    mat=document.getElementById("mat");
    sum=document.getElementById("sum");
    avg=document.getElementById("avg");
    
    ok=document.getElementById("ok")
    
    ok.onclick=function(){
        // console.log("계산하기 클릭")
    k=parseInt(kor.value);
    e=parseInt(eng.value);
    m=parseInt(mat.value);
    s=k+e+m;
    a=parseInt(s/3)

    sum.innerHTML=s;
    avg.innerHTML=a;
    let box=document.querySelector(".box");
    box.style.display="block";
    }

    // 입력한거를 공백으로 다시 초기화
    let again=document.getElementById("again");
    again.onclick=function(){
        kor.value="";
        eng.value="";
        mat.value="";
        sum.innerHTML="";
        avg.innerHTML="";
        kor.focus();
        
    }

}