// Get the modals
const openSignupButton = document.getElementById("openSignup");
const openLoginButton = document.getElementById("openLogin");
const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");
const closeSignup = document.getElementById("closeSignup");
const closeLogin = document.getElementById("closeLogin");

// Open and close modals
openSignupButton.onclick = () => signupModal.style.display = "block";
openLoginButton.onclick = () => loginModal.style.display = "block";
closeSignup.onclick = () => signupModal.style.display = "none";
closeLogin.onclick = () => loginModal.style.display = "none";
