const imgContainer = document.querySelector(".container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let i = 1;

const img = document.createElement("img");

img.width = 300;
img.height = 500;

imgContainer.appendChild(img);

function updateImage() {
  if (i === 1) {
    img.src = "photos/nature1.jpg";
  } else if (i === 2) {
    img.src = "photos/nature2.jpg";
  } else if (i === 3) {
    img.src = "photos/nature3.jpg";
  } else if (i === 4) {
    img.src = "photos/nature4.jpg";
  } else {
    img.src = "photos/nature5.jpg";
  }

  if (i == 1) {
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }
  if (i == 5) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }
}

next.addEventListener("click", function () {
  if (i < 5) {
    i++;
    updateImage();
  }
});

prev.addEventListener("click", function () {
  if (i > 1) {
    i--;
    updateImage();
  }
});

updateImage();

const navCircles = document.querySelector(".circles");

const circle1 = document.createElement("div");
circle1.style.backgroundColor = "black";
circle1.style.width = "10px";
circle1.style.height = "10px";
circle1.style.borderRadius = "50%";
circle1.style.display = "inline-block";
circle1.style.marginLeft = "10px";
navCircles.appendChild(circle1);

const circle2 = document.createElement("div");
circle2.style.backgroundColor = "black";
circle2.style.width = "10px";
circle2.style.height = "10px";
circle2.style.borderRadius = "50%";
circle2.style.display = "inline-block";
circle2.style.marginLeft = "10px";
navCircles.appendChild(circle2);

const circle3 = document.createElement("div");
circle3.style.backgroundColor = "black";
circle3.style.width = "10px";
circle3.style.height = "10px";
circle3.style.borderRadius = "50%";
circle3.style.display = "inline-block";
circle3.style.marginLeft = "10px";
navCircles.appendChild(circle3);

const circle4 = document.createElement("div");
circle4.style.backgroundColor = "black";
circle4.style.width = "10px";
circle4.style.height = "10px";
circle4.style.borderRadius = "50%";
circle4.style.display = "inline-block";
circle4.style.marginLeft = "10px";
navCircles.appendChild(circle4);

const circle5 = document.createElement("div");
circle5.style.backgroundColor = "black";
circle5.style.width = "10px";
circle5.style.height = "10px";
circle5.style.borderRadius = "50%";
circle5.style.display = "inline-block";
circle5.style.marginLeft = "10px";
navCircles.appendChild(circle5);

circle1.addEventListener("click", function () {
  i = 1;
  updateImage();
});
circle2.addEventListener("click", function () {
  i = 2;
  updateImage();
});
circle3.addEventListener("click", function () {
  i = 3;
  updateImage();
});
circle4.addEventListener("click", function () {
  i = 4;
  updateImage();
});
circle5.addEventListener("click", function () {
  i = 5;
  updateImage();
});
