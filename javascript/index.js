const img5_A=[
    "img0.jpg", "img1.jpg", "img2.jpg", 
    "img3.jpg", "img4.jpg", 
];
const img4_A=[
    "img0.jpg", "img1.jpg", "img2.jpg", 
    "img3.jpg", "img4.jpg", 
];
let i;
window.onload=function() {
    // .box li에 배경그림으로 그림 넣기
    for(i=0; i<img5_A.length; i++) {
        $(".box li:eq(" + i + ")" ).css("background","url(img/"+img5_A[i]+")")
                                    .css("backgroundSize","100% 100%");
    }

    for(i=0; i<img4_A.length; i++) {
        $(".sec2 div:eq(" + i + ")").css("background","url(img/"+img4_A[i]+")")
                                .css("backgroundSize","100% 100%");
    }
    
}


let count=1;

$(function(){
$(".right").on("click",function(){
    if(count<4){
        count++;
        $(".sec2").animate({"left":"-=300px"}, 500);
        $(".page").text(count+"/4");
}})
})

$(function(){
        $(".left").on("click",function(){
            if(count>1){
                count--;
                $(".sec2").animate({"left":"+=300px"}, 500);
                $(".page").text(count+"/4");
        }})
})


$(function(){

        $(".box li").on("click",function(){
            $(".back").show();
            no=$(this).index();
            $(".back_pic").attr("src","/img"+"/img"+no+".jpg")
        })

        $(".back_close").on("click",function(){
            $(".back").hide()
            
        })

})

