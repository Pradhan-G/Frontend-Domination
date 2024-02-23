//  Create a page with two images and a button. When the button is clicked, swap the source attribute of the image

var btn = document.querySelector("#btn-2");

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.createElement("img");

var counter = 1;

btn.addEventListener("click", () => {
  counter++;
  if (counter % 2 === 0) {
    img3.src = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
  } else {
    img3.src = img2.src;
    img2.src = img1.src;
    img1.src = img3.src;
  }
});
