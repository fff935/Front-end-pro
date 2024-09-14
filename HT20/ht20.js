document.addEventListener("DOMContentLoaded", function () {
    // Ініціалізація слайдера Glide.js
    new Glide(".glide", {
      type: "slider",
      startAt: 0,
      perView: 3,
      focusAt: 'center',
      autoplay: 2000,  // Автоперемотування кожні 2 секунди
      hoverpause: true, // Зупинка на паузі при наведенні курсору
    }).mount();
  
    // Ініціалізація карти OpenStreetMap через Leaflet.js
    var map = L.map('map').setView([50.45, 30.52], 10);  // Координати для Києва
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    // Додавання попапа на мапу
    var popup = L.popup()
      .setLatLng([50.45, 30.52]) // Координати попапа (Київ)
      .setContent('HT20')  // Контент попапа
      .openOn(map);
  });
  