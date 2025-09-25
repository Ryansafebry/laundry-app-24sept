"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const AccountInfoCard: React.FC = () => {
  return (
    <Card className="p-4 shadow-sm">
      <CardContent className="flex items-center justify-between p-0">
        <div>
          <p className="text-sm text-muted-foreground">Masa Aktif Akun</p>
          <p className="text-base font-semibold">01/01/2100</p>
        </div>
        <Button variant="default" className="bg-yellow-400 hover:bg-yellow-500 text-black h-8 px-3">
          <Clock className="h-4 w-4 mr-2" />
          Perpanjang
        </Button>
      </CardContent>
    </Card>
  );
};

export default AccountInfoCard;