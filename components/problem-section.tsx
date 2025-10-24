export function ProblemSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Setiap Hari, Ribuan Kilogram Bahan Makanan Terbuang.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Banyak restoran dan distributor kehilangan jutaan rupiah setiap
            bulan karena bahan cepat rusak, stok berlebih, dan kurangnya
            prediksi permintaan. Food loss bukan hanya soal makanan, tapi juga
            soal uang dan dampak lingkungan.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
              <span className="text-2xl">🗑️</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Bahan Cepat Rusak
            </h3>
            <p className="text-muted-foreground">
              Tanpa monitoring real-time, bahan segar mudah terlewatkan dan
              membusuk tanpa disadari.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Stok Berlebih
            </h3>
            <p className="text-muted-foreground">
              Sulit memprediksi permintaan, sehingga sering terjadi overstock
              atau understock.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Kerugian Ekonomi
            </h3>
            <p className="text-muted-foreground">
              Jutaan rupiah hilang setiap bulan akibat food loss yang tidak
              terkelola dengan baik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
