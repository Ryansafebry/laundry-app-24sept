"use client";

import React from 'react';
// Menghapus impor Card dan CardContent
import { CalendarDays } from 'lucide-react';

const AccountInfoCard = () => {
  const expiryDate = "2024-12-31"; // Example expiry date

  return (
    <div className="p-4 shadow-sm rounded-lg border bg-card text-card-foreground"> {/* Mengganti Card dengan div dan menambahkan kelas styling */}
      <div className="flex items-center justify-between p-0"> {/* Mengganti CardContent dengan div */}
        <div>
          <p className="text-sm text-muted-foreground">Masa Aktif Akun</p>
          <p className="text-lg font-semibold">{expiryDate}</p>
        </div>
        <CalendarDays className="h-6 w-6 text-muted-foreground" />
      </div>
    </div>
  );
};

export default AccountInfoCard;