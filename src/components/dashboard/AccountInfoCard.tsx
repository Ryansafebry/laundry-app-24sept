"use client";

import React from 'react';
import { CalendarDays } from 'lucide-react';

const AccountInfoCard = () => {
  const expiryDate = "2024-12-31"; // Example expiry date

  return (
    <div className="flex items-center justify-between p-0">
      <div>
        {/* Teks 'Masa Aktif Akun' telah dihapus */}
      </div>
      <CalendarDays className="h-6 w-6 text-muted-foreground" />
    </div>
  );
};

export default AccountInfoCard;