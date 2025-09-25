"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const HistoryPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-muted/40 p-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">Riwayat Pesanan</h1>
        <p className="text-lg text-gray-600">
          Di sini Anda dapat melihat semua riwayat pesanan laundry Anda.
          Fitur ini akan segera dikembangkan lebih lanjut!
        </p>
        <Button asChild className="mt-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HistoryPage;