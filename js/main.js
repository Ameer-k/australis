let getallimg= document.querySelectorAll(".main-img img")
let index=0;
setInterval(() => {
    for(let i=0;i<getallimg.length;i++){
        getallimg[i].classList.replace('show','hide');
    }
    index++;``
    if(index>=getallimg.length){
        index=0;
    }
    getallimg[index].classList.replace('hide','show');
    
}, 3000);

// form js starts here
let getopen1=document.querySelector(".open1");
let getopen2=document.querySelector(".open2");
let getopen3=document.querySelector(".open3");
let getforms=document.querySelector(".form-wrapper");
let getcancel=document.querySelector(".cancel")

getopen1.addEventListener("click",()=>{
    getforms.classList.replace("hide-form","show-form");
});
getopen2.addEventListener("click",()=>{
    getforms.classList.replace("hide-form","show-form");
});
getopen3.addEventListener("click",()=>{
    getforms.classList.replace("hide-form","show-form");
});

getcancel.addEventListener("click",()=>{
    getforms.classList.replace("show-form","hide-form");
});

// on scroll starts here
 let getheader=document.querySelector("header");

 function scrollfunc(){
     if(document.body.scrollTop>30||document.documentElement.scrollTop>30){
         getheader.classList.add("fix")
     }
     else if(document.body.scrollTop==0){
        getheader.classList.remove("fix")
    }
 };
 window.onscroll=function () {
    scrollfunc(); 
 };
// preloader

let getmain=document.querySelector(".main-wrapper");
let getpreload= document.querySelector(".preloader")

window.onload=()=>{
  setInterval(() => {
    getmain.classList.remove("wrap-hide");
    getpreload.classList.add("wrap-hide");
  }, 1000);
}

// image gallery
let getimgg=document.querySelector('#imgg');
let getimgBlank=document.querySelector('.img-blank');
function calling(event) {
    var x= event.target;
    getimgBlank.classList.toggle('hide');
    getimgg.setAttribute('src',x.src);
}
let getclose=document.querySelector('.close-icon');
getclose.addEventListener('click',()=>{
    getimgBlank.classList.toggle('hide');
    getimgg.removeAttribute('src');
});


