document.addEventListener("DOMContentLoaded", function () {
    let min = document.querySelector(".min");
    let sec = document.querySelector(".sec");
    let startStopButton = document.getElementById("start-stop");
    let resetButton = document.getElementById("reset");
    let bar = document.querySelector(".bar");
  
    let minValue;
    let secValue;
    let intervalId;
    let isRunning = false;
    let initialTime; // Загальний початковий час у секундах
    let step; // Крок для зміни ширини бару
    let initialBarWidth = 250; // Початкова ширина бару
  
    function formatNumber(number) {
      return number < 10 ? "0" + number : number;
    }
  
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
  
    min.textContent = formatNumber(minValue);
    sec.textContent = formatNumber(secValue);
  
    // Розрахунок загального часу та кроку для бару
    initialTime = minValue * 60 + secValue;
    step = initialBarWidth / initialTime;
  
    function updateTimer() {
      if (secValue === 0 && minValue === 0) {
        clearInterval(intervalId);
        isRunning = false;
        startStopButton.textContent = "Finished";
        startStopButton.style.backgroundColor = "#575757"
        startStopButton.disabled = true;
        return;
      }
  
      if (secValue === 0) {
        minValue -= 1;
        min.textContent = formatNumber(minValue);
        secValue = 59;
      } else {
        secValue -= 1;
      }
  
      sec.textContent = formatNumber(secValue);
      updateBar();
    }
  
    startStopButton.addEventListener("click", function () {
      if (isRunning) {
        clearInterval(intervalId);
        startStopButton.textContent = "Start";
      } else {
        intervalId = setInterval(updateTimer, 1000);
        startStopButton.textContent = "Stop";
      }
      isRunning = !isRunning;
    });
  
    resetButton.addEventListener("click", function () {
      clearInterval(intervalId);
      minValue = parseInt(prompt("Please enter minutes:", "0"));
      secValue = parseInt(prompt("Please enter seconds:", "0"));
      min.textContent = formatNumber(minValue);
      sec.textContent = formatNumber(secValue);
      bar.style.width = initialBarWidth + "px"; // Повернути бар до початкової ширини
      isRunning = false;
  
      // Перерахунок загального часу та кроку
      initialTime = minValue * 60 + secValue;
      step = initialBarWidth / initialTime;
    });
  
    // Функція для оновлення прогрес-бара
    function updateBar() {
      let currentWidth = parseFloat(bar.style.width) || initialBarWidth;
  
      currentWidth -= step; // Зменшення ширини бару рівномірно на кожному кроці
  
      bar.style.width = currentWidth + "px";
    }
  });
  