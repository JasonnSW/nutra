"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              <span className="text-foreground">
                Kelola Bahan Segar Lebih Cerdas
              </span>
              <span className="text-primary">
                , Kurangi Food Loss Lebih Cepat.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Nutra membantu restoran, retail market, dan distributor bahan
              segar di Indonesia memantau kesegaran stok, memprediksi
              pembusukan, dan mengurangi kerugian ekonomi—semua dari satu
              dashboard pintar.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToCTA}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group"
            >
              Coba Gratis Sekarang
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
            <Link
              href="/register"
              className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition flex items-center justify-center gap-2"
            >
              Coba Sekarang
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-3">
              Dipercaya oleh bisnis kuliner di Indonesia
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                ✓
              </div>
              <span className="text-sm text-foreground">
                Gratis untuk 30 hari pertama
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-96 md:h-full flex items-center justify-center z-10">
          <div className="relative w-full max-w-md">
            {/* Dashboard Card Mock */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-border transform hover:scale-105 transition duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-foreground">
                    Inventory Status
                  </h3>
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Tomat Segar
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-primary/20 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-primary">
                        75%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Bawang Putih
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-accent/20 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-accent rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-accent">
                        50%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Cabai Merah
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-red-200 rounded-full overflow-hidden">
                        <div className="w-1/4 h-full bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-red-500">
                        25%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Total Nilai Stok
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    Rp 2.450.000
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Alert Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-border max-w-xs animate-bounce">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">!</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Peringatan Kesegaran
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Cabai batch #123 hanya tersisa 2 hari
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
