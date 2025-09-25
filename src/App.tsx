"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaundryDashboard from "./pages/LaundryDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import OrderHistory from "./pages/OrderHistory";
import SettingsPage from "./pages/SettingsPage";
import WalletPage from "./pages/WalletPage"; // Import komponen WalletPage
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaundryDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/history" element={<OrderHistory />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/wallet" element={<WalletPage />} /> {/* Tambahkan rute baru untuk WalletPage */}
      </Routes>
    </Router>
  );
}

export default App;