"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createBatch,
  InventoryItem,
} from "@/features/inventory/services/inventory";
import { toast } from "sonner";

export function useCreateBatch() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createBatch,
    onSuccess: (newBatch: any) => {
      qc.setQueryData<InventoryItem[]>(["inventory", "items"], (old) => {
        const prev = old ?? [];
        if (prev.some((i) => i.id === newBatch.id)) return prev;
        return [newBatch, ...prev];
      });
      console.log("New batch:", newBatch);
      qc.invalidateQueries({
        queryKey: ["inventory", "items"],
        refetchType: "inactive",
      });

      qc.invalidateQueries({ queryKey: ["notifications"] });
      qc.invalidateQueries({ queryKey: ["notifications", "summary"] });

      toast.success("Bahan berhasil ditambahkan ke inventaris.");
    },
    onError: () => {
      toast.error("Gagal menambahkan bahan ke inventaris. Silakan coba lagi.");
    },
  });
}
