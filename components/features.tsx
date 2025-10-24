import Image from "next/image";
import { Eye, LineChart, Share2, Thermometer, LayoutGrid } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Spoilage Alert AI",
    desc: "Deteksi dini bahan yang hampir busuk",
    img: "/spoilage-detection.jpg",
    imgAlt: "Contoh deteksi pembusukan bahan",
  },
  {
    icon: LineChart,
    title: "Forecasting",
    desc: "Prediksi kebutuhan stok mingguan",
    img: "/ai-dashboard.jpg",
    imgAlt: "Dashboard proyeksi kebutuhan stok",
  },
  {
    icon: Share2,
    title: "Redistribusi Otomatis",
    desc: "Transfer bahan antar tempat",
    img: "/redistribution.jpg",
    imgAlt: "Ilustrasi redistribusi bahan antar lokasi",
  },
  {
    icon: Thermometer,
    title: "IoT Monitoring",
    desc: "Sensor suhu & notifikasi real-time",
    img: "/temperature-sensor.jpg",
    imgAlt: "Sensor suhu pada penyimpanan bahan segar",
  },
  {
    icon: LayoutGrid,
    title: "Dashboard Real-Time",
    desc: "Pantau stok dalam satu layar",
    img: "/cold-chain.jpg",
    imgAlt: "Rantai dingin dengan pantauan terpusat",
  },
];

export function Features() {
  return (
    <section id="fitur" className="border-b border-[#e8f5e9] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-balance text-2xl font-semibold md:text-3xl">
          Fitur Unggulan Nutra
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc, img, imgAlt }) => (
            <div
              key={title}
              className="overflow-hidden rounded-lg border border-[#e8f5e9] bg-[#e8f5e9] shadow-sm"
            >
              {/* Visual utama per fitur */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={imgAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Icon
                    className="text-[#4caf50]"
                    size={20}
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-semibold text-[#212121]">
                    {title}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-[#212121]/75">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
