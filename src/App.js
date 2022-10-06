import React from 'react';
import { Routes, Route } from "react-router-dom";
import Weather from './components/Weather';
import News from './components/News';
import About from './components/About';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
