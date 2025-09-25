"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Percent } from "lucide-react"; // Menggunakan ikon Percent untuk promo

const PromoCard: React.FC = () => {
  return (
    <Card className="w-full bg-yellow-100 border-yellow-200 shadow-md relative overflow-hidden">
      {/* Ornamen Confetti sebagai latar belakang */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/confetti-light.png')",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      ></div>

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-yellow-800">Promo Spesial!</CardTitle>
        <Percent className="h-4 w-4 text-red-400" />
      </CardHeader>
      <CardContent className="flex items-center justify-center relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="text-6xl font-bold text-red-600 animate-blink">Diskon 15%</div> {/* Memperbesar font menjadi text-6xl */}
          <CardDescription className="text-sm text-yellow-700 mt-2">
            Untuk semua layanan Cuci Setrika di bulan ini!
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromoCard;