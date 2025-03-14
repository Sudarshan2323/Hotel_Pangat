const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginPopup = document.getElementById('loginPopup');
const createAccountLink = document.getElementById('createAccountLink');
const alreadyAccountLink = document.getElementById('alreadyAccountLink');

createAccountLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

alreadyAccountLink.addEventListener('click', function(event) {
    event.preventDefault();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

const loginclose=document.getElementById('log-close');
loginclose.addEventListener("click",()=>{
    console.log("Hello");
})


loginPopup.addEventListener('click', function(event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});
