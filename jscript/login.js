let user_id="abc";
let user_pw="1004";
let id,pw,login, count=0;

window.onload=function(){

id=document.getElementById("id");
pw=document.getElementById("pw");
login=document.querySelector(".login");
msg=document.querySelector(".msg");

login.onclick=function(){
    // // id의 값(value) 같으면(==)
    // if(user_id==id.value)
    //     if(user_pw==pw.value)
    //         msg.innerHTML="환영합니다";
    //     else
    //         msg.innerHTML="비밀번호가 틀렸습니다";
    // else
    //     msg.innerHTML="아이디가 틀렸습니다.";

    
        count++;
        if(user_id==id.value&&user_pw==pw.value)
            msg.innerHTML="환영합니다.";
        else {
            (count>=3)
            msg.innerHTML=count+"회 틀렸습니다.";
            if(count>3){
            msg.innerHTML="로그인 중지입니다" ;
                login.style.display="none";
                    da
            }
        }
    }
}