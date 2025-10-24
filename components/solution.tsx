import {
  ArrowRight,
  PackageCheck,
  ThermometerSun,
  RefreshCw,
  LineChart,
} from "lucide-react";

export function Solution() {
  return (
    <section id="solusi" className="border-b border-[#e8f5e9] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-balance text-2xl font-semibold md:text-3xl">
          Solusi Cerdas Berbasis Data
        </h2>
        <p className="mt-3 max-w-3xl text-[#212121]/80">
          Nutra membantu staf mengelola stok bahan segar secara otomatis dan
          prediktif—mulai dari penerimaan, pemakaian, hingga redistribusi.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-lg border border-[#e8f5e9] bg-[#e8f5e9] p-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#212121]">
            <PackageCheck size={18} /> Terima bahan
          </span>
          <ArrowRight className="text-[#4caf50]" size={18} />
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#212121]">
            <ThermometerSun size={18} /> Deteksi kesegaran
          </span>
          <ArrowRight className="text-[#4caf50]" size={18} />
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#212121]">
            <LineChart size={18} /> Prediksi kebutuhan
          </span>
          <ArrowRight className="text-[#4caf50]" size={18} />
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#212121]">
            <RefreshCw size={18} /> Redistribusi otomatis
          </span>
        </div>
      </div>
    </section>
  );
}
