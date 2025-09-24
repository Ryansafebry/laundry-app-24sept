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
import { PlusCircle, History } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateOrderForm from "@/components/CreateOrderForm"; // Import the new form component
import CreateOrderForm from "@/components/CreateOrderForm";

// Contoh data pesanan awal
const initialOrders = [
  {
    id: "ORD001",
@@ -40,6 +39,7 @@ const initialOrders = [
    weight: 3,
    price: 15000,
    date: "2023-10-26",
    paymentMethod: "QRIS",
  },
  {
    id: "ORD002",
@@ -49,6 +49,7 @@ const initialOrders = [
    weight: 5,
    price: 30000,
    date: "2023-10-25",
    paymentMethod: "Debit",
  },
  {
    id: "ORD003",
@@ -58,6 +59,7 @@ const initialOrders = [
    weight: 2,
    price: 10000,
    date: "2023-10-26",
    paymentMethod: "Tunai",
  },
  {
    id: "ORD004",
@@ -67,6 +69,7 @@ const initialOrders = [
    weight: 4,
    price: 20000,
    date: "2023-10-27",
    paymentMethod: "QRIS",
  },
];

@@ -198,6 +201,7 @@ const LaundryDashboard = () => {
                      <TableHead>Pelanggan</TableHead>
                      <TableHead>Layanan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Pembayaran</TableHead>
                      <TableHead className="text-right">Berat (kg)</TableHead>
                      <TableHead className="text-right">Harga</TableHead>
                      <TableHead className="text-right">Tanggal</TableHead>
@@ -216,6 +220,7 @@ const LaundryDashboard = () => {
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          {order.weight}
                        </TableCell>
                        <TableCell className="text-right">
                          Rp{order.price.toLocaleString("id-ID")}
                        </TableCell>
                        <TableCell className="text-right">
                          {order.date}
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