// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";

const inputNodes = document.querySelectorAll("form")
console.log(inputNodes);

const inputUsername = document.querySelector("#username")

const inputEmail = document.querySelector("#email")

const inputPassword = document.querySelector("#password")


const signUpBtn = document.querySelector("button")


signUpBtn.addEventListener("click", async (e) => {
  e.preventDefault()  
  console.log(inputPassword.value, inputUsername.value, inputEmail.value);
  fetch("http://localhost:4321/auth/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inputUsername,
      email: inputEmail,
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