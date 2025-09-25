"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const promos = [
  {
    title: "Diskon 20% untuk Pelanggan Baru!",
    description: "Dapatkan potongan harga spesial untuk pesanan pertama Anda.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    title: "Gratis Antar-Jemput!",
    description: "Nikmati layanan antar-jemput gratis untuk minimal 5kg.",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    title: "Promo Cuci Setrika Kilat!",
    description: "Selesai dalam 1 hari kerja, harga tetap hemat.",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    title: "Loyalty Program: Kumpulkan Poin!",
    description: "Setiap transaksi akan mendapatkan poin yang bisa ditukar hadiah.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  },
];

const PromoCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {promos.map((promo, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className={`${promo.bgColor} ${promo.textColor}`}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{promo.title}</h3>
                    <p className="text-sm">{promo.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PromoCarousel;