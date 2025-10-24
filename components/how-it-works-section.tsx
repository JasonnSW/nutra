"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Daftar dan Buat Akun Bisnis",
      description:
        "Buat akun Nutra dalam hitungan menit dengan data bisnis Anda.",
      icon: "📝",
      details:
        "Proses registrasi yang cepat dan mudah tanpa perlu verifikasi rumit.",
    },
    {
      number: "2",
      title: "Masukkan Data Bahan dan Harga",
      description:
        "Input semua bahan segar dengan harga, lokasi penyimpanan, dan tanggal masuk.",
      icon: "📦",
      details:
        "Sistem kami mendukung import data dari Excel untuk kemudahan maksimal.",
    },
    {
      number: "3",
      title: "Nutra Memantau Kondisi Bahan",
      description:
        "Sistem otomatis mengirimkan notifikasi ketika bahan mendekati kadaluarsa.",
      icon: "🔔",
      details:
        "Dapatkan alert real-time melalui WhatsApp, Email, atau dashboard.",
    },
    {
      number: "4",
      title: "Lihat Laporan dan Prediksi",
      description:
        "Akses dashboard dengan laporan kerugian dan prediksi permintaan minggu depan.",
      icon: "📊",
      details:
        "Analitik mendalam untuk optimasi inventory dan perencanaan pembelian.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Cara Kerja Nutra
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empat langkah sederhana untuk mulai mengelola bahan segar dengan
            cerdas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Step List with Animations */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-primary/10 border-primary shadow-lg scale-105"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {/* Animated background */}
                {activeStep === idx && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-transparent animate-pulse"></div>
                )}

                <div className="relative flex items-start gap-4">
                  {/* Step Number Circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-all duration-300 ${
                      activeStep === idx
                        ? "bg-primary text-primary-foreground scale-110"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Expanded Details */}
                    {activeStep === idx && (
                      <div className="mt-4 pt-4 border-t border-primary/20 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex items-start gap-2">
                          <CheckCircle2
                            size={18}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          <p className="text-sm text-foreground">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Arrow Indicator */}
                  {activeStep === idx && (
                    <ArrowRight
                      size={20}
                      className="text-primary flex-shrink-0 animate-pulse"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual Representation */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Step Content Display */}
            <div className="relative text-center space-y-6 px-8">
              <div
                className="text-7xl animate-bounce"
                style={{ animationDelay: `${activeStep * 0.1}s` }}
              >
                {steps[activeStep].icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {steps[activeStep].title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center gap-2 pt-4">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeStep
                        ? "w-8 bg-primary"
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
