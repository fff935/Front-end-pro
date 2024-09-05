document.addEventListener("DOMContentLoaded", function () {
    let min = document.querySelector(".min");
    let sec = document.querySelector(".sec");
    
    let minValue;
    let secValue;
    let validMin = false;

    while (!validMin) {
      minValue = parseInt(prompt("Please enter minutes:", "0"));
      if (!isNaN(minValue) && minValue >= 0) {
        validMin = true;
      } else {
        alert("Please enter a valid non-negative number.");
      }
    }

    let validSec = false;
    while (!validSec) {
      secValue = parseInt(prompt("Please enter seconds:", "0"));
      if (!isNaN(secValue) && secValue >= 0 && secValue < 60) {
        validSec = true;
      } else {
        alert("Please enter a valid number of seconds (0-59).");
      }
    }

    min.textContent = minValue;
    sec.textContent = secValue;

    setInterval(function () {
      if (minValue === 0 && secValue === 0) {
        return;
      } else if (secValue === 0) {
        minValue -= 1;
        min.textContent = minValue;
        secValue = 59;
      } else {
        secValue -= 1;
      }
    1
      sec.textContent = secValue;
    }, 1000);
  });