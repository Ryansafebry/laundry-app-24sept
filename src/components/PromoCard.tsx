"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import PromoItem from "./PromoItem";
import Autoplay from "embla-carousel-autoplay";

const promos = [
  {
    title: "Promo Spesial!",
    description: "Dapatkan diskon 10% untuk cuci kering.",
    bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-500",
    buttonText: "Lihat Detail",
    buttonColor: "text-yellow-700",
  },
  {
    title: "Gratis Antar Jemput!",
    description: "Untuk pesanan di atas Rp 50.000.",
    bgColor: "bg-gradient-to-r from-green-400 to-green-500",
    buttonText: "Pesan Sekarang",
    buttonColor: "text-green-700",
  },
  {
    title: "Member Baru Diskon 15%",
    description: "Daftar sekarang dan nikmati keuntungannya!",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
    buttonText: "Gabung Sekarang",
    buttonColor: "text-blue-700",
  },
];

const PromoCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {promos.map((promo, index) => (
          <CarouselItem key={index}>
            <PromoItem {...promo} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
};

export default PromoCarousel;