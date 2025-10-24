import { apiClient } from "@/lib/api-client";

export type InventoryItem = {
  id: string | number;
  ingredientName: string;
  weight: number;
  unit: string;
  category:
    | "KARBOHIDRAT"
    | "PROTEIN_HEWANI"
    | "PROTEIN_NABATI"
    | "SAYURAN"
    | "BUAH"
    | "BAHAN_BUMBU"
    | "BAHAN_LAIN"
    | "MINUMAN";
  pricePerKg: number;
  storageLocation: string;
  notes?: string;
  createdAt?: string;
};

export async function createBatch(payload: any): Promise<InventoryItem> {
  const res = await apiClient("/api/batches", "POST", {
    body: JSON.stringify(payload),
  });
  return res as InventoryItem;
}

export async function getAllInventoryItems(): Promise<InventoryItem[]> {
  const res = await apiClient("/api/batches", "GET", { cache: "no-store" });
  return res as InventoryItem[];
}
