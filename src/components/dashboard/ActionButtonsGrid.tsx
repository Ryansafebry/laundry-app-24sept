"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search, UserPlus, Users } from "lucide-react";

type ActionButtonsGridProps = {
  onAddOrderClick: () => void;
};

const ActionButtonsGrid: React.FC<ActionButtonsGridProps> = ({ onAddOrderClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Button variant="outline" className="flex flex-col h-auto py-4 px-2 text-center" onClick={onAddOrderClick}>
        <Plus className="h-6 w-6 mb-1" />
        <span className="text-sm">Tambah Pesanan</span>
      </Button>
      <Button variant="outline" className="flex flex-col h-auto py-4 px-2 text-center">
        <Search className="h-6 w-6 mb-1" />
        <span className="text-sm">Cari Pesanan</span>
      </Button>
      <Button variant="outline" className="flex flex-col h-auto py-4 px-2 text-center">
        <UserPlus className="h-6 w-6 mb-1" />
        <span className="text-sm">Tambah Pelanggan</span>
      </Button>
      <Button variant="outline" className="flex flex-col h-auto py-4 px-2 text-center">
        <Users className="h-6 w-6 mb-1" />
        <span className="text-sm">Cari Pelanggan</span>
      </Button>
    </div>
  );
};

export default ActionButtonsGrid;