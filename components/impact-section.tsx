export function ImpactSection() {
  return (
    <section
      id="dampak"
      className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Kurangi Food Loss, Perbesar Keuntungan.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Nutra membantu bisnis kuliner menurunkan food loss hingga 25% dan
            meningkatkan efisiensi stok bahan segar. Dengan manajemen yang
            presisi, Anda bisa berhemat jutaan rupiah setiap bulan.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 border border-border text-center">
            <p className="text-5xl font-bold text-primary mb-2">25%</p>
            <p className="text-foreground font-semibold">
              Pengurangan Food Loss
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Rata-rata penurunan pemborosan bahan
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-border text-center">
            <p className="text-5xl font-bold text-primary mb-2">Rp 5M+</p>
            <p className="text-foreground font-semibold">
              Penghematan Per Tahun
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Untuk bisnis kuliner menengah
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-border text-center">
            <p className="text-5xl font-bold text-primary mb-2">40%</p>
            <p className="text-foreground font-semibold">
              Efisiensi Operasional
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Waktu manajemen stok berkurang
            </p>
          </div>
        </div>

        {/* SDG Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              🌍
            </div>
            <div>
              <p className="font-semibold text-foreground">SDG 2</p>
              <p className="text-sm text-muted-foreground">Zero Hunger</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              ♻️
            </div>
            <div>
              <p className="font-semibold text-foreground">SDG 12</p>
              <p className="text-sm text-muted-foreground">
                Responsible Consumption
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
