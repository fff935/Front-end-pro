document.addEventListener("DOMContentLoaded", function () {
    const API_KEY = "8a02876a0ebffc1db9fa68037a35f23e";
    let city = prompt("Enter city:");
  
    if (city) {
      weatherGet(city);
    } else {
      alert("City not specified. Please refresh the page and enter a city.");
    }
  
    async function weatherGet(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`City not found: ${city}`);
        }
        const data = await response.json();
        displayWeather(data);
      } catch (error) {
        console.error("Error:", error.message);
        alert("Could not fetch weather data. Please try again.");
      }
    }
  
    function displayWeather(data) {
      const cityName = document.getElementById("city-name");
      const temperature = document.getElementById("temperature");
      const humidity = document.getElementById("humidity");
      const wind = document.getElementById("wind");
  
      cityName.textContent = `City: ${data.name}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    }
  
    const refreshButton = document.getElementById("refresh-button");
    refreshButton.addEventListener("click", function () {
        weatherGet(city);
    });
  });
  