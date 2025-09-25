"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react"; // Import ikon dompet

const WalletCard = () => {
  // Contoh saldo dompet, bisa diganti dengan data dinamis
  const walletBalance = 500000; // Misalnya Rp 500.000

  return (
    <Card className="p-4 shadow-sm">
      <CardContent className="flex items-center justify-between p-0">
        <div>
          <p className="text-sm text-muted-foreground">Saldo Dompet</p>
          <h3 className="text-2xl font-bold">
            Rp{walletBalance.toLocaleString("id-ID")}
          </h3>
        </div>
        <Wallet className="h-8 w-8 text-muted-foreground" /> {/* Ikon dompet */}
      </CardContent>
    </Card>
  );
};

export default WalletCard;