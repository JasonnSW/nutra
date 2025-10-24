"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Hero() {
  const [view, setView] = useState<"snapshot" | "manage">("snapshot");
  const isManage = view === "manage";
  const mainImageSrc = isManage
    ? "/ai-dashboard.jpg"
    : "/stacked-fresh-produce-crates-in-school-kitchen-sto.jpg";
  const mainImageAlt = isManage
    ? "Dashboard FIFO & stok Pantara"
    : "Tumpukan bahan segar di penyimpanan dapur sekolah";
  const mainLabel = isManage ? "Kelola Stok (FIFO)" : "Snapshot Dapur MBG";
  const bar = isManage
    ? { fresh: 54, warn: 30, spoil: 16 }
    : { fresh: 68, warn: 22, spoil: 10 };
  const mini1 = isManage ? "FIFO" : "Fresh Today";
  const mini2 = isManage ? "Prioritas Olah" : "Spoilage Alert";
  const mini3 = isManage ? "Redistribusi" : "Transfer Stok";

  const router = useRouter();

  return (
    <section
      id="home"
      className="relative border-b border-[#e8f5e9] bg-gradient-to-b from-white to-[#e8f5e9]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-[#212121] md:text-5xl">
            {"Kurangi Food Loss, Maksimalkan "}
            <span className="text-[#4caf50]">
              {"Dampak Gizi dengan Pantara"}
            </span>
          </h1>
          <p className="mt-4 text-pretty text-[#212121]/80 md:text-lg">
            Platform cerdas berbasis AI & IoT untuk memantau, memprediksi, dan
            mengelola stok bahan segar di Program Makan Bergizi Gratis (MBG).
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button
              onClick={() => router.push("/auth")}
              className="bg-[#4caf50] text-white hover:opacity-90 rounded-lg px-6 py-5 md:px-8"
            >
              Coba Gratis
            </Button>
            <Image
              src="/pantara-icon.png"
              alt="Ikon Pantara"
              width={36}
              height={36}
              className="hidden md:block"
            />
          </div>
        </div>

        <div className="rounded-xl border border-[#e8f5e9] bg-white shadow-sm overflow-hidden">
          <div className="relative">
            <Image
              src={mainImageSrc || "/placeholder.svg"}
              alt={mainImageAlt}
              width={560}
              height={220}
              className="h-[220px] w-full object-cover"
              priority
            />
            <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#212121] shadow">
              {mainLabel}
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm font-medium text-[#212121]">
              Status Stok Hari Ini
            </p>
            <div className="mt-2 flex h-2 w-full overflow-hidden rounded-full border border-[#e8f5e9]">
              <div
                className="h-full"
                style={{
                  width: `${bar.fresh}%`,
                  background:
                    "linear-gradient(90deg, #4caf50, 0%, #2e7d32 100%)",
                }}
                aria-label={`Stok segar ${bar.fresh}%`}
                title={`Segar ${bar.fresh}%`}
              />
              <div
                className="h-full"
                style={{
                  width: `${bar.warn}%`,
                  background:
                    "linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)",
                }}
                aria-label={`Perlu dipakai cepat ${bar.warn}%`}
                title={`Waspada ${bar.warn}%`}
              />
              <div
                className="h-full"
                style={{
                  width: `${bar.spoil}%`,
                  background:
                    "linear-gradient(90deg, #f87171 0%, #ef4444 100%)",
                }}
                aria-label={`Hampir busuk ${bar.spoil}%`}
                title={`Kritis ${bar.spoil}%`}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-[#212121]/70">
              <span>Segar</span>
              <span>Perlu dipakai cepat</span>
              <span>Hampir busuk</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="relative overflow-hidden rounded-lg border border-[#e8f5e9]">
                <Image
                  src="/fresh-vegetables-crates-ready-to-use.jpg"
                  alt={
                    isManage
                      ? "FIFO: urutkan bahan berdasarkan tanggal"
                      : "Fresh Today: sayur segar siap olah"
                  }
                  width={200}
                  height={120}
                  className="h-[120px] w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-[10px] font-medium text-(--color-foreground) shadow">
                  {mini1}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-[#e8f5e9]">
                <Image
                  src="/produce-spoilage-close-up-quality-check.jpg"
                  alt={
                    isManage
                      ? "Prioritas Olah: gunakan yang hampir busuk dulu"
                      : "Spoilage Alert: bahan hampir busuk perlu diprioritaskan"
                  }
                  width={200}
                  height={120}
                  className="h-[120px] w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-[10px] font-medium text-[#212121] shadow">
                  {mini2}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-[#e8f5e9]">
                <Image
                  src="/school-kitchen-trolley-stock-transfer.jpg"
                  alt={
                    isManage
                      ? "Redistribusi: pindahkan bahan antar dapur"
                      : "Transfer Stok: pindahkan bahan antar dapur"
                  }
                  width={200}
                  height={120}
                  className="h-[120px] w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-[10px] font-medium text-[#212121] shadow">
                  {mini3}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
