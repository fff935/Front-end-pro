// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/about">Про мене</Link>
      </nav>
    </header>
  );
}

export default Header;
