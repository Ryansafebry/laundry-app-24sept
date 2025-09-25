"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, ListOrdered, Settings, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface ActionButtonsGridProps {
  onAddOrderClick: () => void;
}

const ActionButtonsGrid: React.FC<ActionButtonsGridProps> = ({ onAddOrderClick }) => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button className="h-24 flex flex-col items-center justify-center text-lg" onClick={onAddOrderClick}>
        <Plus className="h-8 w-8 mb-2" />
        Tambah Pesanan
      </Button>
      <Button
        className="h-24 flex flex-col items-center justify-center text-lg"
        variant="outline"
        onClick={() => navigate('/orders')} // Navigasi ke halaman /orders
      >
        <ListOrdered className="h-8 w-8 mb-2" />
        Lihat Pesanan
      </Button>
      <Button className="h-24 flex flex-col items-center justify-center text-lg" variant="outline">
        <Settings className="h-8 w-8 mb-2" />
        Pengaturan
      </Button>
      <Button className="h-24 flex flex-col items-center justify-center text-lg" variant="outline">
        <HelpCircle className="h-8 w-8 mb-2" />
        Bantuan
      </Button>
    </div>
  );
};

export default ActionButtonsGrid;