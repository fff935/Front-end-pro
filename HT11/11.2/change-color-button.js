const button = document.querySelector("button");
const text = document.querySelector("p");

const originalColor = getComputedStyle(text).color;
let changedColor = false;

button.addEventListener("click", function () {
  if (changedColor) {
    text.style.color = "";
  } else {
    text.style.color = "red";
  }
  changedColor = !changedColor;
});
