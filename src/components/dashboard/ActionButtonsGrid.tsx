"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus, History, Settings, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ActionButtonsGridProps = {
  onAddOrderClick: () => void;
};

const ActionButtonsGrid: React.FC<ActionButtonsGridProps> = ({ onAddOrderClick }) => {
  const navigate = useNavigate();

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
      <Button
        variant="default"
        className="flex flex-col h-auto py-4 px-2 text-center bg-green-600 hover:bg-green-700 text-white"
        onClick={() => console.log("Tombol Pesanan diklik!")}
      >
        <ClipboardList className="h-6 w-6 mb-1" />
        <span className="text-sm">Tombol Pesanan</span>
      </Button>
      <Button
        variant="outline"
        className="flex flex-col h-auto py-4 px-2 text-center"
        onClick={() => navigate("/history")}
      >
        <History className="h-6 w-6 mb-1" />
        <span className="text-sm">Riwayat</span>
      </Button>
      <Button
        variant="outline"
        className="flex flex-col h-auto py-4 px-2 text-center"
        onClick={() => navigate("/settings")} {/* Menambahkan fungsi navigasi */}
      >
        <Settings className="h-6 w-6 mb-1" />
        <span className="text-sm">Pengaturan</span>
      </Button>
    </div>
  );
};

export default ActionButtonsGrid;