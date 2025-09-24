"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data ini hanya untuk demonstrasi. Di aplikasi nyata, data ini akan berasal dari state management atau API.
const allOrders = [
  {
    id: "ORD001",
@@ -31,6 +30,7 @@ const allOrders = [
    weight: 3,
    price: 15000,
    date: "2023-10-26",
    paymentMethod: "QRIS",
  },
  {
    id: "ORD002",
@@ -40,6 +40,7 @@ const allOrders = [
    weight: 5,
    price: 30000,
    date: "2023-10-25",
    paymentMethod: "Debit",
  },
  {
    id: "ORD003",
@@ -49,6 +50,7 @@ const allOrders = [
    weight: 2,
    price: 10000,
    date: "2023-10-26",
    paymentMethod: "Tunai",
  },
  {
    id: "ORD004",
@@ -58,6 +60,7 @@ const allOrders = [
    weight: 4,
    price: 20000,
    date: "2023-10-27",
    paymentMethod: "QRIS",
  },
  {
    id: "ORD005",
@@ -67,6 +70,7 @@ const allOrders = [
    weight: 6,
    price: 36000,
    date: "2023-10-24",
    paymentMethod: "Tunai",
  },
];

@@ -107,6 +111,7 @@ const HistoryPage = () => {
                    <TableHead>Pelanggan</TableHead>
                    <TableHead>Layanan</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pembayaran</TableHead>
                    <TableHead className="text-right">Berat (kg)</TableHead>
                    <TableHead className="text-right">Harga</TableHead>
                    <TableHead className="text-right">Tanggal</TableHead>
@@ -122,10 +127,9 @@ const HistoryPage = () => {
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.service}</TableCell>
                        <TableCell>
                          <Badge>
                            {order.status}
                          </Badge>
                          <Badge>{order.status}</Badge>
                        </TableCell>
                        <TableCell>{order.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          {order.weight}
                        </TableCell>
@@ -139,7 +143,7 @@ const HistoryPage = () => {
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center">
                      <TableCell colSpan={8} className="text-center">
                        Tidak ada pesanan yang selesai.
                      </TableCell>
                    </TableRow>
  9 changes: 7 additions & 2 deletions9  
src/pages/LaundryDashboard.tsx
Original file line number	Diff line number	Diff line change
@@ -28,9 +28,8 @@ import {
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