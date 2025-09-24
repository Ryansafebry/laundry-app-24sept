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
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreateOrderForm from "@/components/CreateOrderForm";
import { toast } from "sonner";

// Definisi tipe untuk pesanan
type Order = {
  id: string;
  customer: string;
  service: string;
  status: "Pending" | "In Progress" | "Completed";
  weight: number;
  price: number;
  date: string;
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
  },
  {
    id: "ORD002",
    customer: "Siti Aminah",
    service: "Cuci Setrika",
    status: "Completed",
    weight: 5,
    price: 30000,
    date: "2023-10-25",
  },
  {
    id: "ORD003",
    customer: "Joko Susilo",
    service: "Setrika Saja",
    status: "In Progress",
    weight: 2,
    price: 10000,
    date: "2023-10-26",
  },
  {
    id: "ORD004",
    customer: "Dewi Lestari",
    service: "Cuci Kering",
    status: "Pending",
    weight: 4,
    price: 20000,
    date: "2023-10-27",
  },
];

const LaundryDashboard = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOrderCreated = (newOrder: Order) => {
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  const handleUpdateOrderStatus = (
    orderId: string,
    newStatus: "Pending" | "In Progress" | "Completed",
  ) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order,
      ),
    );
    toast.info(`Status pesanan ${orderId} diperbarui menjadi ${newStatus}.`);
  };

  const handleDeleteOrder = (orderId: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    toast.success(`Pesanan ${orderId} berhasil dihapus.`);
  };

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (order) => order.status === "Pending",
  ).length;
  const completedOrders = orders.filter(
    (order) => order.status === "Completed",
  ).length;

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Pending":
        return "destructive";
      case "In Progress":
        return "secondary";
      case "Completed":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 className="text-2xl font-semibold">Dashboard Laundry</h1>
          <div className="ml-auto flex items-center gap-2">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Buat Pesanan Baru
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Buat Pesanan Baru</DialogTitle>
                  <DialogDescription>
                    Isi detail pesanan laundry baru di sini.
                  </DialogDescription>
                </DialogHeader>
                <CreateOrderForm
                  onOrderCreated={handleOrderCreated}
                  onClose={() => setIsDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Pesanan
                  </CardTitle>
                  <span className="h-4 w-4 text-muted-foreground">🧺</span>
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
                    Pesanan Tertunda
                  </CardTitle>
                  <span className="h-4 w-4 text-muted-foreground">⏳</span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pendingOrders}</div>
                  <p className="text-xs text-muted-foreground">
                    Pesanan yang belum diproses
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pesanan Selesai
                  </CardTitle>
                  <span className="h-4 w-4 text-muted-foreground">✅</span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{completedOrders}</div>
                  <p className="text-xs text-muted-foreground">
                    Pesanan yang sudah diambil
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader className="px-7">
                <CardTitle>Pesanan Terbaru</CardTitle>
                <CardDescription>
                  Daftar pesanan laundry yang baru masuk.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID Pesanan</TableHead>
                      <TableHead>Pelanggan</TableHead>
                      <TableHead>Layanan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Berat (kg)</TableHead>
                      <TableHead className="text-right">Harga</TableHead>
                      <TableHead className="text-right">Tanggal</TableHead>
                      <TableHead className="text-right">Aksi</TableHead> {/* New Action column */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.id}
                        </TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.service}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusVariant(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          {order.weight}
                        </TableCell>
                        <TableCell className="text-right">
                          Rp{order.price.toLocaleString("id-ID")}
                        </TableCell>
                        <TableCell className="text-right">
                          {order.date}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleUpdateOrderStatus(order.id, "Pending")
                                }
                              >
                                Set Pending
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleUpdateOrderStatus(
                                    order.id,
                                    "In Progress",
                                  )
                                }
                              >
                                Set In Progress
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleUpdateOrderStatus(
                                    order.id,
                                    "Completed",
                                  )
                                }
                              >
                                Set Completed
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => handleDeleteOrder(order.id)}
                                className="text-red-600"
                              >
                                Hapus
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LaundryDashboard;