import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-b from-white to-[#e8f5e9]"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2
          id="cta-title"
          className="text-balance text-2xl font-semibold md:text-3xl"
        >
          Mulai Kurangi Food Loss Hari Ini!
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#212121]/80">
          Tanpa biaya. Tanpa komitmen. 100% untuk keberlanjutan pangan
          Indonesia.
        </p>
        <Button
          asChild
          className="mt-6 bg-[#4caf50] text-white hover:opacity-90 rounded-lg px-8 py-6"
        >
          <Link href="/auth">Coba Gratis Sekarang</Link>
        </Button>
      </div>
    </section>
  );
}
