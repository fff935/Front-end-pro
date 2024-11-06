// src/components/ThemeToggle.jsx
import { useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return <button onClick={toggleTheme}>Перемкнути тему</button>;
}

export default ThemeToggle;
