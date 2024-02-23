// Build a countdown timer that starts when a button is clicked and updates the display in real time.
var input = document.querySelector("#timer-input");

var start = document.querySelector("#timer-btn-start");
var stop = document.querySelector("#timer-btn-stop");

var mainDiv = document.querySelector("#timer");

var int;
start.addEventListener("click", () => {
  var val = input.value;

  int = setInterval(() => {
    mainDiv.innerHTML = "<h1>" + val + "</h1>";

    if (val === 0) {
      clearInterval(int);
    }
    val--;
  }, 1000);
  input.value = "";
});

stop.addEventListener("click", () => {
  clearInterval(int);
});
