"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ClipboardList, Weight, Shirt, Ruler } from "lucide-react";

type DailySummaryCardProps = {
  totalRevenue: number;
  totalOrders: number;
  totalWeight: number;
  totalPcs: number;
  totalMeters: number;
};

const DailySummaryCard: React.FC<DailySummaryCardProps> = ({
  totalRevenue,
  totalOrders,
  totalWeight,
  totalPcs,
  totalMeters,
}) => {
  return (
    <Card className="bg-yellow-400 text-black shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4" />
          <p className="text-sm font-medium">Pesanan Hari Ini</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">Rp{totalRevenue.toLocaleString("id-ID")}</p>
          <p className="text-xs text-gray-700">{totalOrders} Pesanan</p>
        </div>
      </CardHeader>
      <CardContent className="pt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <Weight className="h-5 w-5 mx-auto mb-1" />
          <p className="text-xl font-bold">{totalWeight.toFixed(2)} kg</p>
          <p className="text-xs text-gray-700">Kiloan</p>
        </div>
        <div>
          <Shirt className="h-5 w-5 mx-auto mb-1" />
          <p className="text-xl font-bold">{totalPcs} pcs</p>
          <p className="text-xs text-gray-700">Satuan</p>
        </div>
        <div>
          <Ruler className="h-5 w-5 mx-auto mb-1" />
          <p className="text-xl font-bold">{totalMeters} m</p>
          <p className="text-xs text-gray-700">Meteran</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailySummaryCard;