"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Settings as SettingsIcon, // Icon untuk judul halaman
  Bell, // Untuk Notifikasi
  MapPin, // Untuk Lokasi
  Package, // Untuk Pengaturan Layanan
  Truck, // Untuk Pengaturan Antar-Jemput
  Users, // Untuk Pengaturan Pelanggan
  Info, // Untuk Tentang Kami
  Settings // Untuk Umum
} from "lucide-react";
import { Card, CardTitle, CardContent } from "@/components/ui/card"; // Menambahkan CardContent kembali untuk Card navigasi
import { cn } from "@/lib/utils";

// Import komponen pengaturan baru
import NotificationSettings from "@/components/settings/NotificationSettings";
import LocationSettings from "@/components/settings/LocationSettings";
import ServiceSettings from "@/components/settings/ServiceSettings";
import PickupDeliverySettings from "@/components/settings/PickupDeliverySettings";
import CustomerSettings from "@/components/settings/CustomerSettings";
import AboutUs from "@/components/settings/AboutUs";

type SettingOption =
  | "general"
  | "notifications"
  | "location"
  | "services"
  | "pickup-delivery"
  | "customers"
  | "about-us";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [activeSetting, setActiveSetting] = useState<SettingOption>("general");

  const renderSettingComponent = () => {
    switch (activeSetting) {
      case "general":
        return (
          <Card className="p-6">
            <CardTitle className="mb-2">Pengaturan Umum</CardTitle>
            <p className="text-muted-foreground">
              Pilih opsi dari menu samping untuk mengelola pengaturan spesifik.
            </p>
          </Card>
        );
      case "notifications":
        return <NotificationSettings />;
      case "location":
        return <LocationSettings />;
      case "services":
        return <ServiceSettings />;
      case "pickup-delivery":
        return <PickupDeliverySettings />;
      case "customers":
        return <CustomerSettings />;
      case "about-us":
        return <AboutUs />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Kembali</span>
          </Button>
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <SettingsIcon className="h-6 w-6 text-gray-500" />
            Pengaturan Aplikasi
          </h1>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-[240px_1fr]">
          <Card className="h-fit"> {/* Membungkus nav dalam Card */}
            <CardContent className="p-4 grid gap-2"> {/* Padding dan gap untuk item navigasi */}
              <Button
                variant={activeSetting === "general" ? "secondary" : "ghost"}
                className="justify-start w-full text-base"
                onClick={() => setActiveSetting("general")}
              >
                <Settings className="mr-2 h-4 w-4" />
                Umum
              </Button>
              <Button
                variant={activeSetting === "notifications" ? "secondary" : "ghost"}
                className="justify-start w-full text-base"
                onClick={() => setActiveSetting("notifications")}
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifikasi
              </Button>
              <Button
                variant={activeSetting === "location" ? "secondary" : "ghost"}
                className="justify-start w-full text-base"
                onClick={() => setActiveSetting("location")}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Lokasi
              </Button>
              <Button
                variant={activeSetting === "services" ? "secondary" : "ghost"}
                className="justify-start w-full text-base"
                onClick={() => setActiveSetting("services")}
              >
                <Package className="mr-2 h-4 w-4" />
                Pengaturan Layanan
              </Button>
              <Button
                variant={activeSetting === "pickup-delivery" ? "secondary" : "ghost"}
                className="justify-start w-full text-base"
                onClick={() => setActiveSetting("pickup-delivery")}
              >
                <Truck className="mr-2 h-4 w-4" />
                Pengaturan Antar-Jemput
              </Button>
              <Button
                variant={activeSetting === "customers" ? "secondary" : "ghost"}
                className="justify-start w-full text-base"
                onClick={() => setActiveSetting("customers")}
              >
                <Users className="mr-2 h-4 w-4" />
                Pengaturan Pelanggan
              </Button>
              <Button
                variant={activeSetting === "about-us" ? "secondary" : "ghost"}
                className="justify-start w-full text-base"
                onClick={() => setActiveSetting("about-us")}
              >
                <Info className="mr-2 h-4 w-4" />
                Tentang Kami
              </Button>
            </CardContent>
          </Card>
          <div className="grid gap-6">{renderSettingComponent()}</div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;