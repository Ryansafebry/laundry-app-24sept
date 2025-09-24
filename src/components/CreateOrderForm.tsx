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
  paymentMethod: z.enum(["QRIS", "Debit", "Tunai"], {
    required_error: "Pilih metode pembayaran.",
  }),
});

type CreateOrderFormProps = {
@@ -47,6 +50,7 @@ type CreateOrderFormProps = {
    weight: number;
    price: number;
    date: string;
    paymentMethod: string;
  }) => void;
  onClose: () => void;
};
@@ -59,27 +63,29 @@ const CreateOrderForm: React.FC<CreateOrderFormProps> = ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: "",
      serviceType: "Cuci Kering", // Default value
      serviceType: "Cuci Kering",
      weight: 0,
      price: 0,
      paymentMethod: "Tunai",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newOrder = {
      id: `ORD${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(3, "0")}`, // Simple ID generation
        .padStart(3, "0")}`,
      customer: values.customerName,
      service: values.serviceType,
      status: "Pending", // Default status for new orders
      status: "Pending",
      weight: values.weight,
      price: values.price,
      date: new Date().toISOString().split("T")[0], // Current date
      date: new Date().toISOString().split("T")[0],
      paymentMethod: values.paymentMethod,
    };
    onOrderCreated(newOrder);
    toast.success("Pesanan baru berhasil ditambahkan!");
    onClose(); // Close the dialog after submission
    onClose();
  };

  return (
@@ -146,6 +152,28 @@ const CreateOrderForm: React.FC<CreateOrderFormProps> = ({
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Metode Pembayaran</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih metode pembayaran" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="QRIS">QRIS</SelectItem>
                  <SelectItem value="Debit">Debit</SelectItem>
                  <SelectItem value="Tunai">Tunai</SelectItem>
                </SelectContent>
              </Select>
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