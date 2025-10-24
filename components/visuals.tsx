import Image from "next/image";

const items = [
  {
    src: "/fresh-vegetables.jpg",
    alt: "Bahan segar: sayuran hijau berkualitas",
    title: "Bahan Segar",
    desc: "Kualitas terjaga dari hulu ke hilir",
  },
  {
    src: "/spoilage-detection.jpg",
    alt: "Contoh bahan mulai membusuk",
    title: "Deteksi Pembusukan",
    desc: "AI menandai bahan berisiko agar cepat ditindak",
  },
  {
    src: "/cold-chain.jpg",
    alt: "Rantai dingin penyimpanan bahan",
    title: "Rantai Dingin",
    desc: "Suhu stabil untuk memperpanjang umur simpan",
  },
  {
    src: "/temperature-sensor.jpg",
    alt: "Sensor suhu di gudang",
    title: "Sensor Suhu",
    desc: "Peringatan real-time ketika ambang dilampaui",
  },
  {
    src: "/ai-dashboard.jpg",
    alt: "Dashboard AI forecasting",
    title: "Visualisasi Stok",
    desc: "Grafik dan metrik untuk keputusan cepat",
  },
  {
    src: "/redistribution.jpg",
    alt: "Redistribusi bahan antar lokasi",
    title: "Redistribusi",
    desc: "Minimalkan waste dengan alokasi adaptif",
  },
];

export function Visuals() {
  return (
    <section id="galeri" className="border-b border-[#e8f5e9] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">
            Visual yang Berbicara
          </h2>
          <p className="hidden text-sm text-[#212121]/70 md:block">
            Sorotan bahan segar, deteksi pembusukan, dan visualisasi fitur
            Pantara.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <figure
              key={it.title}
              className="group overflow-hidden rounded-lg border border-[#e8f5e9] bg-[#e8f5e9]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={it.src || "/placeholder.svg"}
                  alt={it.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="p-4">
                <div className="text-sm font-semibold text-[#212121]">
                  {it.title}
                </div>
                <div className="text-xs text-[#212121]/75">{it.desc}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
