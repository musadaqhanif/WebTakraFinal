// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage/Home';
import Cousre from './pages/HomePage/RecentCourses'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cousre" element={<Cousre />} />
        
      </Routes>
    </Router>
  );
}

export default App;
