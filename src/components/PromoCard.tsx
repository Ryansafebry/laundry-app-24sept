"use client";

import React from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Percent, Truck, Wallet } from "lucide-react"; // Import ikon baru
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // Import plugin Autoplay
import { cn } from "@/lib/utils"; // Import cn untuk menggabungkan kelas Tailwind

// Definisi data promo
const promos = [
  {
    id: "promo1",
    title: "Promo Spesial!",
    discountText: "Diskon 15%",
    description: "Untuk semua layanan Cuci Setrika di bulan ini!",
    icon: Percent,
    cardClasses: "bg-yellow-100 border-yellow-200",
    titleClasses: "text-yellow-800",
    discountClasses: "text-red-600",
    descriptionClasses: "text-yellow-700",
  },
  {
    id: "promo2",
    title: "Gratis Antar Jemput!",
    discountText: "Free Delivery",
    description: "Untuk pesanan minimal 5kg di area tertentu!",
    icon: Truck,
    cardClasses: "bg-blue-100 border-blue-200",
    titleClasses: "text-blue-800",
    discountClasses: "text-green-600",
    descriptionClasses: "text-blue-700",
  },
  {
    id: "promo3",
    title: "Cashback Menarik!",
    discountText: "Cashback 10%",
    description: "Pembayaran via QRIS untuk pelanggan baru!",
    icon: Wallet,
    cardClasses: "bg-purple-100 border-purple-200",
    titleClasses: "text-purple-800",
    discountClasses: "text-purple-600",
    descriptionClasses: "text-purple-700",
  },
];

const PromoCard: React.FC = () => {
  const autoplayOptions = {
    delay: 3000, // Setiap slide akan ditampilkan selama 3 detik
    stopOnInteraction: false, // Tidak berhenti saat interaksi pengguna
    stopOnMouseEnter: true, // Berhenti saat kursor mouse di atas carousel
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div className="w-full shadow-md relative overflow-hidden rounded-lg border">
      {/* Ornamen Confetti sebagai latar belakang */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/confetti-light.png')",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      ></div>

      <div className="embla relative z-10">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {promos.map((promo) => {
              const IconComponent = promo.icon;
              return (
                <div
                  className={cn(
                    "embla__slide flex-[0_0_100%] min-w-0", // Kelas Embla untuk slide
                    "rounded-lg border", // Styling dasar kartu
                    promo.cardClasses // Styling spesifik promo
                  )}
                  key={promo.id}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className={cn("text-sm font-medium", promo.titleClasses)}>{promo.title}</CardTitle>
                    <IconComponent className={cn("h-4 w-4", promo.discountClasses)} />
                  </CardHeader>
                  <CardContent className="flex items-center justify-center py-6">
                    <div className="flex flex-col items-center text-center">
                      <div className={cn("text-6xl font-bold animate-blink", promo.discountClasses)}>{promo.discountText}</div>
                      <CardDescription className={cn("text-sm mt-2", promo.descriptionClasses)}>
                        {promo.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;