import { AlertTriangle, Leaf, Clock, PiggyBank } from "lucide-react";

const items = [
  { icon: Leaf, title: "Stok sayur & buah cepat rusak" },
  { icon: AlertTriangle, title: "Over/Understock karena data manual" },
  { icon: Clock, title: "Sulit memprediksi kebutuhan bahan mingguan" },
  { icon: PiggyBank, title: "Pemborosan & penurunan gizi penerima manfaat" },
];

export function Problem() {
  return (
    <section id="tantangan" className="border-b border-[#e8f5e9] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-balance text-2xl font-semibold md:text-3xl">
          Tantangan di Lapangan
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-lg border border-[#e8f5e9] bg-[#e8f5e9] p-4 shadow-sm"
            >
              <Icon className="text-[#4caf50]" size={24} aria-hidden="true" />
              <p className="mt-3 text-sm text-[#212121]">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
