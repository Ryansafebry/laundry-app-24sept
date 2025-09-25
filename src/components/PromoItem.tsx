"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

interface PromoItemProps {
  title: string;
  description: string;
  bgColor: string;
  buttonText: string;
  buttonColor: string;
}

const PromoItem: React.FC<PromoItemProps> = ({
  title,
  description,
  bgColor,
  buttonText,
  buttonColor,
}) => {
  return (
    <Card className={`h-full ${bgColor} text-white shadow-md border border-black rounded-xl`}>
      <CardContent className="flex flex-col items-start justify-between p-6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <Tag className="h-8 w-8" />
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-base">{description}</p>
          </div>
        </div>
        <Button variant="secondary" className={`mt-auto ${buttonColor}`}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PromoItem;