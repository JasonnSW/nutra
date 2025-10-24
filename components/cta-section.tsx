"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="cta-section"
      className="relative py-20 bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">
          Mulai Kurangi Food Loss Hari Ini!
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-balance">
          Coba Nutra gratis dan lihat sendiri bagaimana AI membantu bisnis
          kuliner Anda lebih hemat dan berkelanjutan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/auth"
            className="px-8 py-4 rounded-full bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90 transition flex items-center justify-center gap-2 group text-lg"
          >
            Coba Gratis Sekarang
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </Link>
          <Link
            href="/auth"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-bold hover:bg-primary-foreground/10 transition flex items-center justify-center gap-2"
          >
            Hubungi Sales
            <ArrowRight size={20} />
          </Link>
        </div>

        <p className="text-sm text-primary-foreground/80">
          ✓ Gratis untuk 30 hari pertama • ✓ Tidak perlu kartu kredit • ✓ Setup
          dalam 5 menit
        </p>
      </div>
    </section>
  );
}
