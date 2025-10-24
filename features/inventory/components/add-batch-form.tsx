"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { inventorySchema } from "../schemas/inventory";
import { useCreateBatch } from "../mutations/use-create-batch";
import { INGREDIENT_GROUPS } from "../data/invetory";

export function AddBatchForm() {
  const { mutate: createBatch, isPending } = useCreateBatch();

  const form = useForm<z.infer<typeof inventorySchema>>({
    resolver: zodResolver(inventorySchema),
    defaultValues: {
      ingredientName: "",
      weight: "",
      unit: "",
      category: "",
      pricePerKg: "",
      storageLocation: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof inventorySchema>) {
    createBatch(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="ingredientName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Bahan</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih bahan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {INGREDIENT_GROUPS.map((group) => (
                      <div key={group.label}>
                        <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                          {group.label}
                        </div>
                        {group.items.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label ?? item.value}
                          </SelectItem>
                        ))}
                        <div className="my-1 border-t border-muted/20" />
                      </div>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategori</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="KARBOHIDRAT">Karbohidrat</SelectItem>
                    <SelectItem value="PROTEIN_HEWANI">
                      Protein Hewani
                    </SelectItem>
                    <SelectItem value="PROTEIN_NABATI">
                      Protein Nabati
                    </SelectItem>
                    <SelectItem value="SAYURAN">Sayuran</SelectItem>
                    <SelectItem value="BUAH">Buah</SelectItem>
                    <SelectItem value="BAHAN_BUMBU">Bahan Bumbu</SelectItem>
                    <SelectItem value="BAHAN_LAIN">Bahan Lain</SelectItem>
                    <SelectItem value="MINUMAN">Minuman</SelectItem>
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
                <FormLabel>Berat/Jumlah</FormLabel>
                <FormControl>
                  <Input placeholder="10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Satuan</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih satuan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="kg">Kilogram (kg)</SelectItem>
                    <SelectItem value="g">Gram (g)</SelectItem>
                    <SelectItem value="butir">Butir</SelectItem>
                    <SelectItem value="ikat">Ikat</SelectItem>
                    <SelectItem value="buah">Buah</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pricePerKg"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Harga</FormLabel>
                <FormControl>
                  <Input placeholder="29.000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storageLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lokasi Penyimpanan</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih lokasi" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="kulkas">Kulkas</SelectItem>
                    <SelectItem value="freezer">Freezer</SelectItem>
                    <SelectItem value="gudang">Gudang Kering</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Memproses..." : "Tambah Batch"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
