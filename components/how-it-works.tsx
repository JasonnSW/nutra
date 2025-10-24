import { UserPlus, Database, Bell } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Daftar & buat akun" },
  { icon: Database, title: "Masukkan data stok bahan segar" },
  { icon: Bell, title: "Nutra bantu prediksi & notifikasi otomatis" },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="border-b border-[#e8f5e9] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-balance text-2xl font-semibold md:text-3xl">
          Cara Kerja
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-lg border border-[#e8f5e9] bg-[#e8f5e9] p-6 shadow-sm"
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
