"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaundryDashboard from './pages/LaundryDashboard';
import HistoryPage from './pages/HistoryPage'; // Import HistoryPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaundryDashboard />} />
        <Route path="/history" element={<HistoryPage />} /> {/* Rute baru */}
      </Routes>
    </Router>
  );
}

export default App;