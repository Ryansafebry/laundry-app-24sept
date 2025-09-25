"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

const PromoCard = () => {
  return (
    <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md border border-black rounded-xl">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Tag className="h-6 w-6" />
          <div>
            <h3 className="text-lg font-semibold">Promo Spesial!</h3>
            <p className="text-sm">Dapatkan diskon 10% untuk cuci kering.</p>
          </div>
        </div>
        <Button variant="secondary" className="text-yellow-700">Lihat Detail</Button>
      </CardContent>
    </Card>
  );
};

export default PromoCard;