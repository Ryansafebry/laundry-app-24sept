"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, MessageCircle } from "lucide-react";

const HelpCard: React.FC = () => {
  return (
    <Card className="bg-green-100 border-green-200 text-green-800 shadow-sm cursor-pointer hover:bg-green-200 transition-colors">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5" />
          <div>
            <p className="font-semibold">Butuh bantuan?</p>
            <p className="text-sm text-green-700">Chat kami di whatsapp</p>
          </div>
        </div>
        <ChevronRight className="h-5 w-5" />
      </CardContent>
    </Card>
  );
};

export default HelpCard;