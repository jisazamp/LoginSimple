const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.uname.value;
  const password = loginForm.psw.value;

  if (username === "upbvirtual" && password === "admin") {
    alert("Inicio de sesión correcto.");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
