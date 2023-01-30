let burger=document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let navlist=document.querySelector('.nav-list');
let rightnav=document.querySelector('.right-nav');



burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})