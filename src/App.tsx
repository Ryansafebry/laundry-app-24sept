"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaundryDashboard from "./pages/LaundryDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import OrderHistory from "./pages/OrderHistory"; // Import komponen OrderHistory
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaundryDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/history" element={<OrderHistory />} /> {/* Tambahkan rute baru */}
      </Routes>
    </Router>
  );
}

export default App;