import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Project01 from './pages/Project01';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full bg-white selection:bg-black selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/1" element={<Project01 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
