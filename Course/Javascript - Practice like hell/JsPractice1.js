// Create an HTML Page with a button. When the button is clicked, change the text of the pargraph.

var newText = document.querySelector(".text-change");

var btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  newText.innerHTML = "This is the changed Text";
});
