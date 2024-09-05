document.addEventListener("DOMContentLoaded", function () {
    let minInput = document.querySelector(".min-input");
    let secInput = document.querySelector(".sec-input");
    let startStopButton = document.getElementById("start-stop");
    let resetButton = document.getElementById("reset");
    let bar = document.querySelector(".bar");
  
    let minValue;
    let secValue;
    let intervalId;
    let isRunning = false;
    let initialTime; // Total initial time in seconds
    let step; // Step for bar width change
    let initialBarWidth = 250; // Initial width of the bar
  
    function formatNumber(number) {
      return number < 10 ? "0" + number : number;
    }
  
    // Function to start or stop the timer
    function toggleTimer() {
      if (isRunning) {
        clearInterval(intervalId);
        startStopButton.textContent = "Start";
      } else {
        minValue = parseInt(minInput.value);
        secValue = parseInt(secInput.value);
  
        if (isNaN(minValue) || isNaN(secValue) || minValue < 0 || secValue < 0 || secValue >= 60) {
          alert("Please enter valid time values.");
          return;
        }
  
        initialTime = minValue * 60 + secValue;
        step = initialBarWidth / initialTime;
  
        intervalId = setInterval(updateTimer, 1000);
        startStopButton.textContent = "Stop";
      }
      isRunning = !isRunning;
    }
  
    // Function to update the timer
    function updateTimer() {
      if (secValue === 0 && minValue === 0) {
        clearInterval(intervalId);
        isRunning = false;
        startStopButton.textContent = "Finished";
        startStopButton.style.backgroundColor = "#575757";
        startStopButton.disabled = true;
        return;
      }
  
      if (secValue === 0) {
        minValue -= 1;
        minInput.value = formatNumber(minValue);
        secValue = 59;
      } else {
        secValue -= 1;
      }
  
      secInput.value = formatNumber(secValue);
      updateBar();
    }
  
    // Function to reset the timer
    function resetTimer() {
      clearInterval(intervalId);
      minInput.value = "0";
      secInput.value = "0";
      bar.style.width = initialBarWidth + "px"; // Reset bar to initial width
      isRunning = false;
      startStopButton.textContent = "Start";
      startStopButton.style.backgroundColor = "#df8703";
      startStopButton.disabled = false;
    }
  
    // Function to update the progress bar
    function updateBar() {
      let currentWidth = parseFloat(bar.style.width) || initialBarWidth;
      currentWidth -= step;
      bar.style.width = currentWidth + "px";
    }
  
    startStopButton.addEventListener("click", toggleTimer);
    resetButton.addEventListener("click", resetTimer);
  });
  