export function Impact() {
  return (
    <section id="dampak" className="border-b border-[#e8f5e9] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-balance text-2xl font-semibold md:text-3xl">
          Lebih dari Sekadar Manajemen Stok
        </h2>
        <p className="mt-3 max-w-3xl text-[#212121]/80">
          Pantara membantu menghemat hingga 20% bahan pangan segar, memperkuat
          ketahanan pangan, dan membuka peluang ekonomi lokal. Mendukung SDG 2:
          Zero Hunger & SDG 12: Responsible Consumption and Production.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#e8f5e9] bg-[#e8f5e9] p-5 shadow-sm">
            <p className="text-sm font-medium text-[#212121]">
              Penghematan Hingga
            </p>
            <p className="text-3xl font-semibold text-[#4caf50]">20%</p>
            <p className="mt-1 text-xs text-[#212121]/70">
              Bahan segar per bulan
            </p>
          </div>
          <div className="rounded-lg border border-[#e8f5e9] bg-[#e8f5e9] p-5 shadow-sm">
            <p className="text-sm font-medium text-[#212121]">Keberlanjutan</p>
            <p className="text-sm text-[#212121]/75">
              Mendukung SDG 2 & SDG 12
            </p>
          </div>
          <div className="rounded-lg border border-[#e8f5e9] bg-[#e8f5e9] p-5 shadow-sm">
            <p className="text-sm font-medium text-[#212121]">Dampak Sosial</p>
            <p className="text-sm text-[#212121]/75">
              Gizi penerima manfaat lebih terjaga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
