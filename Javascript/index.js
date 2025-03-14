
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

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










//   const loginForm = document.getElementById('loginForm');
//         const signupForm = document.getElementById('signupForm');
//         const loginPopup = document.getElementById('loginPopup');
//         const createAccountLink = document.getElementById('createAccountLink');
//         const alreadyAccountLink = document.getElementById('alreadyAccountLink');

//         createAccountLink.addEventListener('click', function(event) {
//             event.preventDefault();
//             loginForm.classList.add('hidden');
//             signupForm.classList.remove('hidden');
//         });

//         alreadyAccountLink.addEventListener('click', function(event) {
//             event.preventDefault();
//             signupForm.classList.add('hidden');
//             loginForm.classList.remove('hidden');
//         });


//         loginPopup.addEventListener('click', function(event) {
//             if (event.target === loginPopup) {
//                 loginPopup.style.display = 'none';
//             }
//         });
//         const loginclose=document.getElementById('log-close');
// loginclose.addEventListener("click",()=>{
//     console.log("Hello");
// })