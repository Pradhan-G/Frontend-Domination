// Create an unordered list. Allow users to add and remove list items dynamically using buttons
var list = document.querySelector("#mainList");
list.style.padding = "20px";

var input = document.querySelector("#addData");

var submitButton = document.querySelector("#sbmt");

submitButton.addEventListener("click", (deets) => {
  deets.preventDefault();
  var listItem = document.createElement("li");
  var delButton = document.createElement("button");
  delButton.innerText = "Delete";
  listItem.innerText = input.value;
  listItem.appendChild(delButton);

  list.appendChild(listItem);

  input.value = "";
  delButton.addEventListener("click", function () {
    list.removeChild(listItem);
  });
});
