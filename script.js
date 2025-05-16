//your JS code here. If required.
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const input = searchBox.querySelector(".input");

searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  input.focus();
});
