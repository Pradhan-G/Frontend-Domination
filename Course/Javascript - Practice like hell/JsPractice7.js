// Display a progress bar that updates in real time, showing the progress of a task, download, or form submission

var button = document.querySelector("#download");
var showText = document.querySelector("download-complete");
var progress = document.querySelector("#progress");
var counter2 = 1;
button.addEventListener("click", async (details) => {
  if (counter2 === 1) {
    counter2++;
    var counter = 0;
    await new Promise((resolve) => {
      var i = setInterval(() => {
        counter++;
        if (counter === 100) {
          clearInterval(i);
          resolve();
        }
        progress.style.width = counter + "%";
        button.innerText = "Downloading ...";
        button.style.width = "140px";
      }, 50);
    }).then(() => {
      button.innerText = "Download Completed";
      button.style.width = "180px";
    });
  }
});
