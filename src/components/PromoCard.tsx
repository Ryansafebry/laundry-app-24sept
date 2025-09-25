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
    <Card className="w-full bg-yellow-100 border-yellow-200 shadow-md relative overflow-hidden"> {/* Menambahkan relative dan overflow-hidden untuk confetti */}
      {/* Ornamen Confetti sebagai latar belakang */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/confetti-light.png')", // Gambar pola confetti
          backgroundSize: "cover",
          zIndex: 0, // Memastikan confetti di belakang konten
        }}
      ></div>

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10"> {/* Menambahkan relative z-10 */}
        <CardTitle className="text-sm font-medium text-yellow-800">Promo Spesial!</CardTitle> {/* Teks judul kuning gelap */}
        <Percent className="h-4 w-4 text-red-400" /> {/* Ikon merah pastel */}
      </CardHeader>
      <CardContent className="flex items-center justify-between relative z-10"> {/* Menambahkan relative z-10 dan flex untuk tata letak */}
        <div className="flex flex-col">
          <div className="text-3xl font-bold text-red-600 animate-blink">Diskon 15%</div> {/* Teks diskon merah dengan animasi berkedip */}
          <CardDescription className="text-xs text-yellow-700"> {/* Deskripsi kuning lebih gelap */}
            Untuk semua layanan Cuci Setrika di bulan ini!
          </CardDescription>
        </div>
        {/* Gambar orang bersemangat dengan diskon */}
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Contoh gambar orang bersemangat
          alt="Orang bersemangat dengan diskon"
          className="h-20 w-20 object-cover rounded-full ml-4 border-2 border-red-500" // Styling untuk gambar
        />
      </CardContent>
    </Card>
  );
};

export default PromoCard;