"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Plus } from "lucide-react";

const BranchSelector: React.FC = () => {
  return (
    <Card className="p-4 shadow-sm">
      <CardContent className="flex items-center justify-between p-0">
        <div className="flex items-center gap-2">
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
          <p className="text-base font-semibold">One Hundred Laundry</p>
        </div>
        <Plus className="h-5 w-5 text-muted-foreground cursor-pointer" />
      </CardContent>
    </Card>
  );
};

export default BranchSelector;