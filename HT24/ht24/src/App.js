import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Search } from './search/Search'; 
import { Content } from './content/Content';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Content />
    </div>
  );
}

export default App;
