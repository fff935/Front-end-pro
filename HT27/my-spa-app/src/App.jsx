// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <ThemeToggle />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          {/* Додайте цей маршрут для всіх невірних посилань */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
