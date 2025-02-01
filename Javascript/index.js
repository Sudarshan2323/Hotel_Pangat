const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const close=document.querySelector('.close');
const back=document.getElementById('back');


burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.style.display="none"
    close.style.display="block"
    back.style.zIndex="-66"
});
close.addEventListener("click",()=>{
    navLinks.classList.toggle('active');
    burger.style.display="block"
    close.style.display="none"
    back.style.zIndex="0"   
})
 

function showDetails(button) {
    var cardDetails = document.getElementById("cardDetails");
    var productCard = button.parentElement;
  
    var productImage = productCard.querySelector("img").src;
    var productName = productCard.querySelector("h3").textContent;
    var productDescription = productCard.querySelector("p").textContent;
    var price = productCard.querySelector("h4").textContent;

  
    document.getElementById("productImage").src = productImage;
    document.getElementById("productName").textContent = productName;
    document.getElementById("desc").textContent = productDescription;
    document.getElementById("price").textContent = price;
 
    cardDetails.style.display = "block";
  }
  
  function closeDetails() {
    document.getElementById("cardDetails").style.display = "none";
  }