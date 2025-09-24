"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the laundry dashboard immediately
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Loading Laundry Dashboard...</h1>
        <p className="text-xl text-gray-600">
          Anda akan segera diarahkan.
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;