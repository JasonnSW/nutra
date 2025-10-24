import {
  BarChart3,
  Zap,
  TrendingUp,
  AlertCircle,
  PieChart,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard",
    description:
      "Pantau status stok, suhu penyimpanan, tren penggunaan, dan potensi kerugian dalam satu layar visual yang interaktif.",
  },
  {
    icon: Zap,
    title: "Inventory",
    description:
      "Tambahkan bahan segar baru lengkap dengan harga dan lokasi penyimpanan. Sistem menampilkan total nilai bahan dan notifikasi otomatis.",
  },
  {
    icon: TrendingUp,
    title: "FIFO (First In, First Out)",
    description:
      "Pastikan bahan digunakan sesuai urutan masuk agar tidak ada yang terbuang. Nutra menandai batch yang sudah melewati tanggal aman.",
  },
  {
    icon: AlertCircle,
    title: "Prediction (AI Freshness Alert)",
    description:
      "Kecerdasan buatan Nutra memprediksi masa simpan bahan dan memberi peringatan sebelum rusak.",
  },
  {
    icon: PieChart,
    title: "Forecasting",
    description:
      "Analisis tren pemakaian bahan dan prediksi permintaan minggu depan agar tidak overstock atau understock.",
  },
  {
    icon: Users,
    title: "Kolaborasi Tim",
    description:
      "Bagikan akses dengan tim Anda dan kelola bahan segar bersama-sama dengan real-time updates.",
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Fitur Inti yang Bikin Operasional Lebih Efisien.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola bahan segar dengan cerdas
            dan efisien.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon
                    size={24}
                    className="text-primary group-hover:text-primary-foreground transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
