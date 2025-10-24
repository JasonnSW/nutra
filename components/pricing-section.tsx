"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "14 Hari Trial",
      description: "Mulai gratis tanpa perlu kartu kredit",
      features: [
        "Kelola hingga 50 item bahan",
        "Tracking inventory dasar",
        "Notifikasi kedaluwarsa sederhana",
        "Dashboard basic",
        "Support email",
      ],
      cta: "Mulai Gratis",
      highlighted: false,
    },
    {
      name: "Standard",
      price: "399.000",
      period: "per bulan",
      description: "Sempurna untuk restoran dan kafe kecil",
      features: [
        "Kelola unlimited item bahan",
        "AI-powered inventory prediction",
        "Notifikasi real-time otomatis",
        "Multi-user access (hingga 5 user)",
        "Laporan analytics mendalam",
        "Integrasi POS dasar",
        "Priority support",
      ],
      cta: "Pilih Standard",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "3.500.000",
      period: "per tahun",
      description: "Solusi enterprise untuk bisnis besar",
      features: [
        "Semua fitur Standard",
        "Advanced AI forecasting & optimization",
        "Multi-location management",
        "Unlimited user access",
        "Custom integrations & API",
        "Dedicated account manager",
        "Advanced security & compliance",
        "24/7 priority support",
        "Custom training & onboarding",
      ],
      cta: "Hubungi Sales",
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Harga yang <span className="text-primary">Transparan</span> &
            Terjangkau
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Upgrade atau
            downgrade kapan saja tanpa komitmen jangka panjang.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-2xl"
                  : "bg-card border border-border hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {/* Premium Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      {plan.price === "0" ? "Gratis" : `Rp${plan.price}`}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 font-semibold ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground mb-4">
                    Fitur Termasuk:
                  </p>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Semua paket dilengkapi dengan 14 hari trial gratis. Tidak perlu
            kartu kredit.
          </p>
          <p className="text-sm text-muted-foreground">
            Pertanyaan?{" "}
            <span className="text-primary font-semibold cursor-pointer hover:underline">
              Hubungi tim kami
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
