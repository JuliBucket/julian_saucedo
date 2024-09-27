// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";

const inputNodes = document.querySelectorAll("form")
console.log(inputNodes);

const inputUsername = document.querySelector("#username")
console.log(inputUsername);
const inputPassword = document.querySelector("#password")
console.log(inputPassword);

const signUpBtn = document.querySelector("button")
console.log(signUpBtn);

signUpBtn.addEventListener("click", async (e) => {
  e.preventDefault()  
  fetch("http://localhost:4321/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inputUsername,
      password: inputPassword
    }),
  }).then((response) => {
    if (response.ok) {
      window.location("index.html")
    } else {
      alert("Algo salió mal!")
    }
  })
})