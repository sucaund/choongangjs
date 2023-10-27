
let ok,type,result,i
let str1=""


window.onload=function(){

    ok=document.querySelector(".ok")
    type=document.querySelector(".type")
    result=document.querySelector(".result")
    ok.addEventListener("click",func);

}


    function func(js) {
        if(js==2) 
            dan2_func();
        else if (js==3)
            dan3_func();
        else if (js==4)
            dan4_func();
        else if (js==5)
            dan5_func();
    }
    
    function dan2_func(){
        str1="";
        for(i=1;i<=9;i++){
        str1+="<br>"+i+"*"+str+"="+2*i;
        }
    result.innerHTML=str1;
    }
    function dan3_func(){
        str1="";
        for(i=1;i<=9;i++){
        str1+="<br>"+i+"*"+str+"="+3*i;
        }
    result.innerHTML=str1;
    }
    function dan4_func(){
        str1="";
        for(i=1;i<=9;i++){
        str1+="<br>"+i+"*"+str+"="+4*i;
        }
    result.innerHTML=str1;
    }
    function dan5_func(){
        str1="";
        for(i=1;i<=9;i++){
        str1+="<br>"+i+"*"+str+"="+5*i;
        }
    result.innerHTML=str1;
    }
    
    function func_comm(js) {
        str1="";
        for(i=1;i<=9;i++){
        str1+="<br>"+i+"*"+str+"="+2*i;}
        
        result.innerHTML=str1;
    }

let all=document.getElementById("all");
all.addEventListener("click",all_func);

function  all_func() {
    str1="";
    for(i=1;i<=9;i++)
        for(k=2;k<10;k++){
        str1+= k+"*"+i+"="+k*i
        }
        result.innerHTML=str1;
}

let count=0;
while (count<10){
    실행문;
    count++;
}