const enterLinkBtn = document.querySelector(".enter");
const goBtn = document.querySelector(".go");
let link = "";

enterLinkBtn.addEventListener("click", function () {
  link = prompt("Enter your link: ");
});

goBtn.addEventListener("click", function () {
  window.location.href = link;
});
