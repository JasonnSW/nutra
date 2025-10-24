import { z } from "zod";

export const inventorySchema = z.object({
  ingredientName: z.string().min(1, "Nama bahan wajib diisi."),
  weight: z
    .string()
    .min(1, "Berat bahan wajib diisi.")
    .refine((val) => !isNaN(Number(val)), {
      message: "Berat harus berupa angka.",
    }),
  unit: z.string().min(1, "Pilih satuan."),
  category: z.string().min(1, "Pilih kategori bahan."),
  pricePerKg: z
    .string()
    .min(1, "Masukkan harga bahan.")
    .refine((val) => !isNaN(Number(val)), {
      message: "Harga harus berupa angka.",
    }),
  storageLocation: z.string().min(1, "Pilih lokasi penyimpanan."),
  notes: z.string().optional(),
});
