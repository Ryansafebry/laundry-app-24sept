"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronRight, User } from "lucide-react";

const AccountInfoCard = () => {
  return (
    <Card className="flex items-center p-4 bg-white shadow-md rounded-xl"> {/* Menghapus border border-black */}
      <Avatar className="h-12 w-12 mr-4">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>
          <User className="h-6 w-6" />
        </AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <CardTitle className="text-lg font-semibold">Halo, John Doe!</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Cabang: Pusat | Role: Admin
        </CardDescription>
      </div>
      <Button variant="ghost" size="icon" className="ml-auto">
        <ChevronRight className="h-5 w-5" />
      </Button>
    </Card>
  );
};

export default AccountInfoCard;