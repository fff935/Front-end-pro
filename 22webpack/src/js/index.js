import '../styles/styles.scss';  // Импорт SCSS файла
import { greet } from './script';  // Импорт функции из другого JS файла

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Click Me!';
  button.onclick = greet;  // Привязка функции greet к событию click
  document.body.appendChild(button);
});