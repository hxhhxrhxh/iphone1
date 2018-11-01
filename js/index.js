window.onload=function () {
    

    let meau=document.querySelector(".meau");
    let meaubox=document.querySelector(".meaubox");
    let cuohao=document.querySelector(".cuohao");
    
    let body=document.querySelector("body");
 
    meau.onclick=function () {
        meaubox.style.height="100%";
        body.style.overflow="hidden";
    }
    cuohao.onclick=function () {
        meaubox.style.height="0";
    }
   

      $(".min_nav .navlist").each(function(index,d){
        $(".min_nav .navlist").eq(index).click(function(event) {
            $(".xiala").eq(index).toggle("normal");
        });
    })
}