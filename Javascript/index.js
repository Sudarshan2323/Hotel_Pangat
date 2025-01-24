const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const close=document.querySelector('.close');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.style.display="none"
    close.style.display="block"
});
close.addEventListener("click",()=>{
    navLinks.classList.toggle('active');
    burger.style.display="block"
    close.style.display="none"
})