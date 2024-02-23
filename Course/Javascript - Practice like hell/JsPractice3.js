// Create a form with input fields and a submit button. Use Javascript to validate the form and display an error message if the input is invalid

var name = document.querySelector("#name").value;
var age = document.querySelector("#age").value;
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;
var confirmPassword = document.querySelector("#confirmPassword").value;
var submit = document.querySelector("#btn-3");

submit.addEventListener("click", (deets) => {
  deets.preventDefault();
});
