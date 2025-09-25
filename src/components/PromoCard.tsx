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
    <Card className="w-full bg-yellow-100 border-yellow-200 shadow-md"> {/* Latar belakang kuning pastel */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-yellow-800">Promo Spesial!</CardTitle> {/* Teks judul kuning gelap */}
        <Percent className="h-4 w-4 text-red-400" /> {/* Ikon merah pastel */}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-blue-500 animate-blink">Diskon 15%</div> {/* Teks diskon biru dengan animasi berkedip */}
        <CardDescription className="text-xs text-yellow-700"> {/* Deskripsi kuning lebih gelap */}
          Untuk semua layanan Cuci Setrika di bulan ini!
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PromoCard;