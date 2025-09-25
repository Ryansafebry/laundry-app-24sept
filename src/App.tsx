"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaundryDashboard from "./pages/LaundryDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import OrderHistory from "./pages/OrderHistory";
import SettingsPage from "./pages/SettingsPage"; // Import komponen SettingsPage
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaundryDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/history" element={<OrderHistory />} />
        <Route path="/settings" element={<SettingsPage />} /> {/* Tambahkan rute baru untuk SettingsPage */}
      </Routes>
    </Router>
  );
}

export default App;