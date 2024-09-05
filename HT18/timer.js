document.addEventListener("DOMContentLoaded", function () {
    let min = document.querySelector(".min");
    let sec = document.querySelector(".sec");
    let startStopButton = document.getElementById("start-stop");
    let resetButton = document.getElementById("reset");

    let minValue;
    let secValue;
    let intervalId;
    let isRunning = false;

    // Функція для форматування чисел
    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    // Запитати хвилини
    let validMin = false;
    while (!validMin) {
        minValue = parseInt(prompt("Please enter minutes:", "0"));
        if (!isNaN(minValue) && minValue >= 0) {
            validMin = true;
        } else {
            alert("Please enter a valid non-negative number.");
        }
    }

    // Запитати секунди
    let validSec = false;
    while (!validSec) {
        secValue = parseInt(prompt("Please enter seconds:", "0"));
        if (!isNaN(secValue) && secValue >= 0 && secValue < 60) {
            validSec = true;
        } else {
            alert("Please enter a valid number of seconds (0-59).");
        }
    }

    // Відображення початкових значень
    min.textContent = formatNumber(minValue);
    sec.textContent = formatNumber(secValue);

    // Функція для оновлення таймера
    function updateTimer() {
        if (secValue === 0 && minValue === 0) {
            clearInterval(intervalId);
            isRunning = false;
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
    }

    // Обробник події для кнопки старт/стоп
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

    // Обробник події для кнопки скидання
    resetButton.addEventListener("click", function () {
        clearInterval(intervalId);
        minValue = parseInt(prompt("Please enter minutes:", "0"));
        secValue = parseInt(prompt("Please enter seconds:", "0"));
        min.textContent = formatNumber(minValue);
        sec.textContent = formatNumber(secValue);
        isRunning = false;
    });
});
