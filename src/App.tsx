"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaundryDashboard from './pages/LaundryDashboard';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import NotFound from './pages/NotFound'; // Pastikan NotFound diimpor

// Import komponen pengaturan detail
import SettingsLayout from './components/settings/SettingsLayout';
import LocationSettings from './components/settings/LocationSettings';
import NotificationSettings from './components/settings/NotificationSettings';
import PickupDeliverySettings from './components/settings/PickupDeliverySettings';
import ServiceSettings from './components/settings/ServiceSettings';
import CustomerSettings from './components/settings/CustomerSettings';
import AboutUs from './components/settings/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaundryDashboard />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} /> {/* Rute utama pengaturan */}
        
        {/* Rute bersarang untuk halaman pengaturan detail */}
        <Route path="/settings/location" element={<SettingsLayout title="Pengaturan Lokasi"><LocationSettings /></SettingsLayout>} />
        <Route path="/settings/notifications" element={<SettingsLayout title="Pengaturan Notifikasi"><NotificationSettings /></SettingsLayout>} />
        <Route path="/settings/pickup-delivery" element={<SettingsLayout title="Pengaturan Antar-Jemput"><PickupDeliverySettings /></SettingsLayout>} />
        <Route path="/settings/services" element={<SettingsLayout title="Pengaturan Layanan"><ServiceSettings /></SettingsLayout>} />
        <Route path="/settings/customers" element={<SettingsLayout title="Pengaturan Pelanggan"><CustomerSettings /></SettingsLayout>} />
        <Route path="/settings/about" element={<SettingsLayout title="Tentang Kami"><AboutUs /></SettingsLayout>} />

        <Route path="*" element={<NotFound />} /> {/* Rute untuk halaman tidak ditemukan */}
      </Routes>
    </Router>
  );
}

export default App;