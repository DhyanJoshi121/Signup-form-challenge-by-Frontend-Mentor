"use strict";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submit");
const container = document.querySelector(".container");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
button.addEventListener("click", (e) => {
  e.preventDefault();
  !firstName.value
    ? document.querySelector(".containerFirstName").classList.remove("valid")
    : document.querySelector(".containerFirstName").classList.add("valid");

  !lastName.value
    ? document.querySelector(".containerLastName").classList.remove("valid")
    : document.querySelector(".containerLastName").classList.add("valid");

  !email.value.match(pattern)
    ? document.querySelector(".containerEmail").classList.remove("valid")
    : document.querySelector(".containerEmail").classList.add("valid");

  !password.value
    ? document.querySelector(".containerPassword").classList.remove("valid")
    : document.querySelector(".containerPassword").classList.add("valid");
});
