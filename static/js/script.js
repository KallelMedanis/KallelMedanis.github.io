


let JCArrowlong=document.getElementsByClassName("JCArrowlong")
let JCArrowdown=document.getElementsByClassName("JCArrowdown")
let ConfArrowdown=document.getElementsByClassName("ConfArrowdown")
let ConfArrowlong=document.getElementsByClassName("ConfArrowlong")
let pythonScript=document.getElementsByClassName("pythonScript")
let picLin=document.getElementsByClassName("picLin")
let rapidapiLink=document.getElementsByClassName("rapidapiLink")
ConfArrowlong[0].addEventListener("click",()=>{
    if(ConfArrowdown[0].style.opacity=="0" || ConfArrowdown[0].style.opacity==""){
    ConfArrowlong[0].style.opacity="0";
    ConfArrowdown[0].style.opacity="1";
    picLin[0].style.opacity="1";
    rapidapiLink[0].style.opacity="0";
    }
    else{
            ConfArrowlong[0].style.opacity="1";
            ConfArrowdown[0].style.opacity="0";
            picLin[0].style.opacity="0";
            rapidapiLink[0].style.opacity="1";
    }
})
JCArrowlong[0].addEventListener("click",()=>{
    if(JCArrowdown[0].style.opacity=="0" || JCArrowdown[0].style.opacity=="" ){
    JCArrowlong[0].style.opacity="0";
    JCArrowdown[0].style.opacity="1";
    pythonScript[0].style.opacity="1";
    rapidapiLink[0].style.opacity="0";}
    else{
        JCArrowlong[0].style.opacity="1";
        JCArrowdown[0].style.opacity="0";
        pythonScript[0].style.opacity="0";
        rapidapiLink[0].style.opacity="1";       
    }
})