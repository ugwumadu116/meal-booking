const signup = document.querySelector(".signup");
signup.addEventListener("click", callSignupForm);
const closeForm = document.querySelector(".fa-times");

const register = document.getElementById("register");

closeForm.addEventListener("click", closeSignup);

const signupCaller = document.querySelector(".signupCaller");
signupCaller.addEventListener("click", callSignupForm);

const login = document.querySelector(".login");
login.addEventListener("click", callLoginForm);

const closeLogin = document.querySelector("#cancel");
closeLogin.addEventListener("click", closeLoginForm);

const signinForm = document.getElementById("signinForm");

const loginCaller = document.querySelector(".loginCaller");
loginCaller.addEventListener("click", callLoginForm);

function callLoginForm() {
  register.style.display = "none";
  signinForm.style.display = "block";
}

function closeLoginForm(e) {
  signinForm.style.display = "none";
}

function callSignupForm() {
  signinForm.style.display = "none";
  register.style.display = "block";
}

function closeSignup(e) {
  register.style.display = "none";
}
