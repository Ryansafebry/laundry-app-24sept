"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
  Settings,
  History,
  PlusCircle,
  ArrowRight, // Import ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import OrderTable from "@/components/OrderTable";
import { toast } from "sonner";
import PromoCarousel from "@/components/PromoCarousel"; // Import PromoCarousel

// Definisi tipe untuk pesanan (konsisten dengan OrderTable)
type Order = {
  id: string;
  customer: string;
  service: string;
  status: "Pending" | "In Progress" | "Completed";
  weight: number;
  price: number;
  date: string;
  paymentMethod: string;
  orderType: "Pickup" | "Delivery";
  location?: string;
  clothingType?: string;
};

// Contoh data pesanan awal
const initialOrders: Order[] = [
  {
    id: "ORD001",
    customer: "Budi Santoso",
    service: "Cuci Kering",
    status: "Pending",
    weight: 3,
    price: 15000,
    date: "2023-10-26",
    paymentMethod: "QRIS",
    orderType: "Pickup",
    location: "Jl. Merdeka No. 10",
    clothingType: undefined,
  },
  {
    id: "ORD002",
    customer: "Siti Aminah",
    service: "Cuci Setrika",
    status: "In Progress",
    weight: 5,
    price: 30000,
    date: "2023-10-25",
    paymentMethod: "Debit",
    orderType: "Delivery",
    location: undefined,
    clothingType: undefined,
  },
  {
    id: "ORD003",
    customer: "Joko Susilo",
    service: "Setrika Saja",
    status: "Pending",
    weight: 2,
    price: 10000,
    date: "2023-10-26",
    paymentMethod: "Tunai",
    orderType: "Pickup",
    location: "Perumahan Indah Blok C-5",
    clothingType: undefined,
  },
  {
    id: "ORD004",
    customer: "Dewi Lestari",
    service: "Cuci Kering",
    status: "Completed",
    weight: 4,
    price: 20000,
    date: "2023-10-27",
    paymentMethod: "QRIS",
    orderType: "Delivery",
    location: undefined,
    clothingType: undefined,
  },
  {
    id: "ORD005",
    customer: "Andi Pratama",
    service: "Cuci Setrika",
    status: "Completed",
    weight: 6,
    price: 35000,
    date: "2023-10-24",
    paymentMethod: "Tunai",
    orderType: "Delivery",
    location: undefined,
    clothingType: undefined,
  },
  {
    id: "ORD006",
    customer: "Rina Wijaya",
    service: "Cuci Kering",
    status: "Completed",
    weight: 2.5,
    price: 12500,
    date: "2023-10-23",
    paymentMethod: "QRIS",
    orderType: "Pickup",
    location: "Apartemen Sejahtera Blok B",
    clothingType: undefined,
  },
  {
    id: "ORD007",
    customer: "Fajar Nugraha",
    service: "Cuci Satuan",
    status: "Pending",
    weight: 0.5,
    price: 25000,
    date: "2023-10-28",
    paymentMethod: "Tunai",
    orderType: "Pickup",
    location: "Jl. Mawar No. 5",
    clothingType: "Gaun Pesta",
  },
];

const LaundryDashboard = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleUpdateOrderStatus = (
    orderId: string,
    newStatus: Order["status"],
  ) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order,
      ),
    );
    toast.success(
      `Status pesanan ${orderId} berhasil diperbarui menjadi ${newStatus}.`,
    );
  };

  // Calculate summary data
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (order) => order.status === "Pending",
  ).length;
  const inProgressOrders = orders.filter(
    (order) => order.status === "In Progress",
  ).length;
  const completedOrders = orders.filter(
    (order) => order.status === "Completed",
  ).length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Laundry App</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                to="/history"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <History className="h-4 w-4" />
                Riwayat Pesanan
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Settings className="h-4 w-4" />
                Pengaturan
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Package2 className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Laundry App</span>
                </Link>
                <Link
                  to="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="/history"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <History className="h-5 w-5" />
                  Riwayat Pesanan
                </Link>
                <Link
                  to="/settings"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  Pengaturan
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-8 gap-1" asChild>
              <Link to="/settings">
                <Settings className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Pengaturan
                </span>
              </Link>
            </Button>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Pesanan
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalOrders}</div>
                <p className="text-xs text-muted-foreground">
                  Jumlah semua pesanan
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pesanan Pending
                </CardTitle>
                <PlusCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingOrders}</div>
                <p className="text-xs text-muted-foreground">
                  Pesanan menunggu diproses
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Sedang Diproses
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{inProgressOrders}</div>
                <p className="text-xs text-muted-foreground">
                  Pesanan dalam pengerjaan
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pendapatan Total
                </CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  Rp{totalRevenue.toLocaleString("id-ID")}
                </div>
                <p className="text-xs text-muted-foreground">
                  Dari semua pesanan selesai
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Pesanan Terbaru</CardTitle>
                  <CardDescription>
                    Pesanan terbaru dari pelanggan Anda.
                  </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link to="/history">
                    Lihat Semua
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <OrderTable
                  orders={orders.slice(0, 5)} // Tampilkan 5 pesanan terbaru
                  onUpdateOrderStatus={handleUpdateOrderStatus}
                />
              </CardContent>
            </Card>
            <PromoCarousel /> {/* Mengganti AccountInfoCard dengan PromoCarousel */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LaundryDashboard;