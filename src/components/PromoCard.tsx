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
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Promo Spesial!</CardTitle>
        <Percent className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Diskon 15%</div>
        <CardDescription className="text-xs text-muted-foreground">
          Untuk semua layanan Cuci Setrika di bulan ini!
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PromoCard;