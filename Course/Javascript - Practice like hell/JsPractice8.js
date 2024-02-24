// Create a search bar that displays live results as users type, updating the results without requiring a full page reload

var cnt = document.querySelector("#users");
var input = document.querySelector("#search");
var data;

async function getData() {
  var populate = "";
  data = await fetch("https://randomuser.me/api/?results=20")
    .then((raw) => raw.json())
    .then((result) => result.results);

  data.forEach((element) => {
    populate += `
  <div class="user">
  <div class="userImage">
    <img class="userimg" src="${element.picture.large}" alt="" />
  </div>

  <div class="userName">
    <h3>${element.name.title} ${element.name.first} ${element.name.last}</h3>
  </div>
</div>
  `;
  });
  cnt.innerHTML = populate;
  console.log(data);
}

getData();

input.addEventListener("input", () => {
  var newData = data.filter((e) => {
    return (
      e.name.title.startsWith(input.value) ||
      e.name.first.startsWith(input.value) ||
      e.name.last.startsWith(input.value)
    );
  });
  var newUsers = "";
  newData.forEach((element) => {
    newUsers += `
  <div class="user">
  <div class="userImage">
    <img class="userimg" src="${element.picture.large}" alt="" />
  </div>

  <div class="userName">
    <h3>${element.name.title} ${element.name.first} ${element.name.last}</h3>
  </div>
</div>
  `;
  });
  cnt.innerHTML = newUsers;
});
