// Create a form with input fields and a submit button. Use Javascript to validate the form and display an error message if the input is invalid

var fname = document.querySelector("#name").value;
var age = document.querySelector("#age").value;
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;
var confirmPassword = document.querySelector("#confirmPassword").value;
var submit = document.querySelector("#btn-3");
var h3 = document.createElement("h3");
var body = document.querySelector("body");
h3.innerText = "error some fields are empty";
h3.style.color = "red";

submit.addEventListener("click", (deets) => {
  deets.preventDefault();
  if (
    age.trim() === "" ||
    fname.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    body.append(h3);
  }
});
