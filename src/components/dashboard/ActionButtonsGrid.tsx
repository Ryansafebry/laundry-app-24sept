"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus, History, Settings } from "lucide-react";

type ActionButtonsGridProps = {
  onAddOrderClick: () => void;
};

const ActionButtonsGrid: React.FC<ActionButtonsGridProps> = ({ onAddOrderClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Button
        variant="default"
        className="flex flex-col h-auto py-4 px-2 text-center bg-blue-600 hover:bg-blue-700 text-white"
        onClick={onAddOrderClick}
      >
        <PlusCircle className="h-6 w-6 mb-1" />
        <span className="text-sm">Tambah Pesanan</span>
      </Button>
      <Button variant="outline" className="flex flex-col h-auto py-4 px-2 text-center">
        <UserPlus className="h-6 w-6 mb-1" />
        <span className="text-sm">Tombol Pesanan</span>
      </Button>
      <Button variant="outline" className="flex flex-col h-auto py-4 px-2 text-center">
        <History className="h-6 w-6 mb-1" />
        <span className="text-sm">Riwayat</span>
      </Button>
      <Button variant="outline" className="flex flex-col h-auto py-4 px-2 text-center">
        <Settings className="h-6 w-6 mb-1" />
        <span className="text-sm">Pengaturan</span>
      </Button>
    </div>
  );
};

export default ActionButtonsGrid;