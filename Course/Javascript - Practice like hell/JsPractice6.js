// Create a tabbed interface where clickin on the the tab displays different content sections without page reload.
var allh1 = document.querySelectorAll(".nav-h1");
var allh3 = document.querySelectorAll(".content-h3");

function hideAllContent() {
  allh3.forEach((element) => {
    element.style.display = "none";
  });
}

function showContent(index) {
  allh3[index].style.display = "block";
}

allh1.forEach((tab, index) => {
  tab.addEventListener("mouseenter", () => {
    hideAllContent();
    showContent(index);
  });
});
