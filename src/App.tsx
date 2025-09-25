"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaundryDashboard from "./pages/LaundryDashboard";
import OrdersPage from "./pages/OrdersPage"; // Import OrdersPage
import "./globals.css"; // Mengubah impor dari index.css ke globals.css

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaundryDashboard />} />
        <Route path="/orders" element={<OrdersPage />} /> {/* Rute baru untuk halaman pesanan */}
        {/* Tambahkan rute lain di sini jika diperlukan */}
      </Routes>
    </Router>
  );
}

export default App;