"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // Import Card
import { Plus, Search, History, Settings } from "lucide-react";

type ActionButtonsGridProps = {
  onAddOrderClick: () => void;
};

const ActionButtonsGrid: React.FC<ActionButtonsGridProps> = ({ onAddOrderClick }) => {
  return (
    <Card className="p-4 bg-white shadow-md border border-black rounded-xl"> {/* Bungkus dengan Card */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-24 flex flex-col items-center justify-center text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white">
          <Plus className="h-6 w-6 mb-1" />
          Tambah Pesanan
        </Button>
        <Button className="h-24 flex flex-col items-center justify-center text-lg font-semibold bg-green-500 hover:bg-green-600 text-white">
          <Search className="h-6 w-6 mb-1" />
          Cari Pesanan
        </Button>
        <Button className="h-24 flex flex-col items-center justify-center text-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white">
          <History className="h-6 w-6 mb-1" />
          Riwayat
        </Button>
        <Button className="h-24 flex flex-col items-center justify-center text-lg font-semibold bg-gray-500 hover:bg-gray-600 text-white">
          <Settings className="h-6 w-6 mb-1" />
          Pengaturan
        </Button>
      </div>
    </Card>
  );
};

export default ActionButtonsGrid;