// Get DOM Elements
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const closeSignupBtn = document.getElementById('closeSignup');
const closeLoginBtn = document.getElementById('closeLogin');
const gotoLoginLink = document.getElementById('gotoLogin');
const gotoSignupLink = document.getElementById('gotoSignup');

// Open Signup Form from Login Form
gotoSignupLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.classList.remove('active');
  signupModal.classList.add('active');
});

// Open Login Form from Signup Form
gotoLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  signupModal.classList.remove('active');
  loginModal.classList.add('active');
});

// Close Signup Form
closeSignupBtn.addEventListener('click', () => {
  signupModal.classList.remove('active');
});

// Close Login Form
closeLoginBtn.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

// Close on Outside Click
window.addEventListener('click', (e) => {
  if (e.target === signupModal) {
    signupModal.classList.remove('active');
  }
  if (e.target === loginModal) {
    loginModal.classList.remove('active');
  }
});
