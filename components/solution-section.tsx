"use client";

import { useEffect, useState } from "react";

export function SolutionSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      step: "Terima Bahan",
      icon: "📦",
      description: "Input bahan segar ke sistem",
    },
    {
      step: "Pantau di Nutra",
      icon: "👁️",
      description: "Tracking real-time kondisi",
    },
    {
      step: "Dapatkan Prediksi",
      icon: "🤖",
      description: "AI memprediksi masa simpan",
    },
    {
      step: "Cegah Food Loss",
      icon: "✅",
      description: "Optimalkan penggunaan bahan",
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance animate-fade-in">
                Nutra Mengubah Cara Anda{" "}
                <span className="text-primary">Mengelola Bahan Segar</span>.
              </h2>
              <p className="text-lg text-muted-foreground text-balance animate-fade-in animation-delay-100">
                Dengan Nutra, Anda bisa tahu kapan bahan hampir rusak, berapa
                nilai ekonominya, dan bagaimana memprediksi kebutuhan
                berikutnya—semua otomatis dan berbasis data.
              </p>
            </div>

            {/* Flow Steps with Animation */}
            <div className="space-y-4">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 transition-all duration-500 transform ${
                    activeStep === idx ? "scale-105 translate-x-2" : "scale-100"
                  } animate-fade-in`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 flex-shrink-0 ${
                      activeStep === idx
                        ? "bg-primary text-primary-foreground shadow-lg scale-110"
                        : "bg-primary/30 text-primary"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-semibold transition-colors duration-300 ${
                        activeStep === idx ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.step}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Enhanced with Animation */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background gradient circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
                </div>

                {/* Main visualization container */}
                <div className="relative z-10 w-full max-w-sm">
                  {/* Top card - Bahan Masuk */}
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-40 bg-white rounded-xl shadow-lg p-4 transition-all duration-500 ${
                      activeStep === 0
                        ? "scale-110 shadow-2xl"
                        : "scale-100 opacity-70"
                    }`}
                  >
                    <div className="text-3xl mb-2">📦</div>
                    <p className="text-sm font-semibold text-foreground">
                      Bahan Masuk
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Terima & Catat
                    </p>
                  </div>

                  {/* Left card - Monitoring */}
                  <div
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-40 bg-white rounded-xl shadow-lg p-4 transition-all duration-500 ${
                      activeStep === 1
                        ? "scale-110 shadow-2xl"
                        : "scale-100 opacity-70"
                    }`}
                  >
                    <div className="text-3xl mb-2">👁️</div>
                    <p className="text-sm font-semibold text-foreground">
                      Monitoring
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Real-time Tracking
                    </p>
                  </div>

                  {/* Right card - Prediksi */}
                  <div
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-40 bg-white rounded-xl shadow-lg p-4 transition-all duration-500 ${
                      activeStep === 2
                        ? "scale-110 shadow-2xl"
                        : "scale-100 opacity-70"
                    }`}
                  >
                    <div className="text-3xl mb-2">🤖</div>
                    <p className="text-sm font-semibold text-foreground">
                      Prediksi AI
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Smart Analysis
                    </p>
                  </div>

                  {/* Bottom card - Hasil */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 bg-white rounded-xl shadow-lg p-4 transition-all duration-500 ${
                      activeStep === 3
                        ? "scale-110 shadow-2xl"
                        : "scale-100 opacity-70"
                    }`}
                  >
                    <div className="text-3xl mb-2">✅</div>
                    <p className="text-sm font-semibold text-foreground">
                      Hasil Optimal
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Zero Food Loss
                    </p>
                  </div>

                  {/* Connecting lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: "none" }}
                  >
                    <line
                      x1="50%"
                      y1="20%"
                      x2="50%"
                      y2="35%"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="50%"
                      y1="35%"
                      x2="20%"
                      y2="50%"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="50%"
                      y1="35%"
                      x2="80%"
                      y2="50%"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="20%"
                      y1="50%"
                      x2="50%"
                      y2="65%"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="80%"
                      y1="50%"
                      x2="50%"
                      y2="65%"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="50%"
                      y1="65%"
                      x2="50%"
                      y2="80%"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgb(76, 175, 80)"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor="rgb(255, 193, 7)"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
