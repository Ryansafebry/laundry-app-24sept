"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  customerName: z.string().min(2, {
    message: "Nama pelanggan harus minimal 2 karakter.",
  }),
  serviceType: z.enum(["Cuci Kering", "Cuci Setrika", "Setrika Saja"], {
    required_error: "Pilih jenis layanan.",
  }),
  weight: z.coerce.number().min(0.1, {
    message: "Berat harus lebih dari 0 kg.",
  }),
  price: z.coerce.number().min(1000, {
    message: "Harga harus minimal Rp 1.000.",
  }),
});

type CreateOrderFormProps = {
  onOrderCreated: (newOrder: {
    id: string;
    customer: string;
    service: string;
    status: string;
    weight: number;
    price: number;
    date: string;
  }) => void;
  onClose: () => void;
};

const CreateOrderForm: React.FC<CreateOrderFormProps> = ({
  onOrderCreated,
  onClose,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: "",
      serviceType: "Cuci Kering", // Default value
      weight: 0,
      price: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newOrder = {
      id: `ORD${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(3, "0")}`, // Simple ID generation
      customer: values.customerName,
      service: values.serviceType,
      status: "Pending", // Default status for new orders
      weight: values.weight,
      price: values.price,
      date: new Date().toISOString().split("T")[0], // Current date
    };
    onOrderCreated(newOrder);
    toast.success("Pesanan baru berhasil ditambahkan!");
    onClose(); // Close the dialog after submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="customerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Pelanggan</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama pelanggan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Layanan</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis layanan" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Cuci Kering">Cuci Kering</SelectItem>
                  <SelectItem value="Cuci Setrika">Cuci Setrika</SelectItem>
                  <SelectItem value="Setrika Saja">Setrika Saja</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Berat (kg)</FormLabel>
              <FormControl>
                <Input type="number" step="0.1" placeholder="0.0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Harga (Rp)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Tambah Pesanan
        </Button>
      </form>
    </Form>
  );
};

export default CreateOrderForm;