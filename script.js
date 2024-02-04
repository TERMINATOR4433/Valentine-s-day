const button = document.getElementById("move");

button.addEventListener("click", function () {
  button.style.top = Math.round(Math.random() * 250) - 100 + "px";
  button.style.left = Math.round(Math.random() * 250) - 200 + "px";
});