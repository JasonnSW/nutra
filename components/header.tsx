"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">N</span>
          </div>
          <span className="text-foreground">Nutra</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#tentang"
            className="text-foreground hover:text-primary transition"
          >
            Tentang
          </Link>
          <Link
            href="#fitur"
            className="text-foreground hover:text-primary transition"
          >
            Fitur
          </Link>
          <Link
            href="#dampak"
            className="text-foreground hover:text-primary transition"
          >
            Dampak
          </Link>
          <Link
            href="#kontak"
            className="text-foreground hover:text-primary transition"
          >
            Kontak
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            Coba Sekarang
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#tentang"
              className="block text-foreground hover:text-primary"
            >
              Tentang
            </Link>
            <Link
              href="#fitur"
              className="block text-foreground hover:text-primary"
            >
              Fitur
            </Link>
            <Link
              href="#dampak"
              className="block text-foreground hover:text-primary"
            >
              Dampak
            </Link>
            <Link
              href="#kontak"
              className="block text-foreground hover:text-primary"
            >
              Kontak
            </Link>
            <div className="flex gap-3 pt-4">
              <Link
                href="/login"
                className="flex-1 px-4 py-2 rounded-full border border-primary text-primary text-center hover:bg-primary hover:text-primary-foreground transition"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="flex-1 px-4 py-2 rounded-full bg-primary text-primary-foreground text-center hover:bg-primary/90 transition"
              >
                Coba Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
