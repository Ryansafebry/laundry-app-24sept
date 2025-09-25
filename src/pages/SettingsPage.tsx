"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Settings as SettingsIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card"; // Menghapus CardHeader dan CardDescription dari import jika tidak digunakan di sini
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
          <Card>
            {/* CardHeader dan CardDescription dihapus */}
            <CardContent className="p-6">
              <CardTitle className="mb-2">Pengaturan Umum</CardTitle>
              <p className="text-muted-foreground">
                Pilih opsi dari menu samping untuk mengelola pengaturan spesifik.
              </p>
            </CardContent>
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
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <a
              href="#"
              className={cn(
                "font-semibold",
                activeSetting === "general" && "text-primary"
              )}
              onClick={() => setActiveSetting("general")}
            >
              Umum
            </a>
            <a
              href="#"
              className={cn(
                activeSetting === "notifications" && "text-primary"
              )}
              onClick={() => setActiveSetting("notifications")}
            >
              Notifikasi
            </a>
            <a
              href="#"
              className={cn(activeSetting === "location" && "text-primary")}
              onClick={() => setActiveSetting("location")}
            >
              Lokasi
            </a>
            <a
              href="#"
              className={cn(activeSetting === "services" && "text-primary")}
              onClick={() => setActiveSetting("services")}
            >
              Pengaturan Layanan
            </a>
            <a
              href="#"
              className={cn(
                activeSetting === "pickup-delivery" && "text-primary"
              )}
              onClick={() => setActiveSetting("pickup-delivery")}
            >
              Pengaturan Antar-Jemput
            </a>
            <a
              href="#"
              className={cn(activeSetting === "customers" && "text-primary")}
              onClick={() => setActiveSetting("customers")}
            >
              Pengaturan Pelanggan
            </a>
            <a
              href="#"
              className={cn(activeSetting === "about-us" && "text-primary")}
              onClick={() => setActiveSetting("about-us")}
            >
              Tentang Kami
            </a>
          </nav>
          <div className="grid gap-6">{renderSettingComponent()}</div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;