// (function(){
//     emailjs.init("UGU5LVqLBenjyW1TG");
//  })();

let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move');
}
window.onscroll = ()=>{
    navbar.classList.remove('open-menu')
    menu.classList.remove('move');
}
function validate(){
let  name = document.querySelector(".name");
let  k = document.querySelector(".k");
let  msg = document.querySelector(".message");
let  sendBtn = document.querySelector(".send-btn");




sendBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(name.value == "" || k.value == "" || msg.value==""){
        emptyerror();
    }else{
        sendmail (name.value,k.value,msg.value);
        success();
    }
})
}
validate();

function sendmail(name,k,msg){
   emailjs.send("service_n8tyead","template_qi0hyas",{
        from_name: k,
        to_name: name,
        message: msg,
        });
}


function emptyerror(){
    swal({
        title: "Oh no...",
        text: "Fields cannot be empty!",
        icon:"error",
      });  
}

function success(){
    swal({
        title: "Email sent successfully",
        text: "i try to reply in 24 hours",
        icon:"success",
      });  
}


let header = document.querySelector("header");
window.addEventListener('scroll',()=>{
    header.classList.toggle('header-active',window.scrollY>0) 
})



let scrollTop = document.querySelector(".scroll-top");
window.addEventListener('scroll',()=>{
    scrollTop.classList.toggle('scroll-active',window.scrollY>=400) 
})

validate()