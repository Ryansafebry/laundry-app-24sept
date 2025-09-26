"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Search, History, Settings } from "lucide-react";

type ActionButtonsGridProps = {
  onAddOrderClick: () => void;
};

const ActionButtonsGrid: React.FC<ActionButtonsGridProps> = ({ onAddOrderClick }) => {
  return (
    <Card className="p-4 bg-white shadow-md rounded-xl">
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-24 flex flex-col items-center justify-center text-lg font-semibold bg-white border border-yellow-500 text-gray-800 hover:bg-yellow-50 hover:border-yellow-600">
          <Plus className="h-6 w-6 mb-1" />
          Tambah Pesanan
        </Button>
        <Button className="h-24 flex flex-col items-center justify-center text-lg font-semibold bg-white border border-yellow-500 text-gray-800 hover:bg-yellow-50 hover:border-yellow-600">
          <Search className="h-6 w-6 mb-1" />
          Cari Pesanan
        </Button>
        <Button className="h-24 flex flex-col items-center justify-center text-lg font-semibold bg-white border border-yellow-500 text-gray-800 hover:bg-yellow-50 hover:border-yellow-600">
          <History className="h-6 w-6 mb-1" />
          Riwayat
        </Button>
        <Button className="h-24 flex flex-col items-center justify-center text-lg font-semibold bg-white border border-yellow-500 text-gray-800 hover:bg-yellow-50 hover:border-yellow-600">
          <Settings className="h-6 w-6 mb-1" />
          Pengaturan
        </Button>
      </div>
    </Card>
  );
};

export default ActionButtonsGrid;