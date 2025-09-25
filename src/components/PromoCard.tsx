"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "lucide-react";

const PromoCard = () => {
  return (
    <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md rounded-xl"> {/* Menghapus border border-black */}
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Tag className="h-6 w-6" />
          <div>
            <p className="text-sm font-medium">Promo Tersedia</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
        {/* Anda bisa menambahkan tombol atau ikon di sini jika diperlukan */}
      </CardContent>
    </Card>
  );
};

export default PromoCard;