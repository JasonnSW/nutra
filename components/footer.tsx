import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">
                  N
                </span>
              </div>
              <span>Nutra</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Platform cerdas untuk mengelola bahan segar dan mengurangi food
              loss.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold">Produk</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="#fitur"
                  className="hover:text-primary-foreground transition"
                >
                  Fitur
                </Link>
              </li>
              <li>
                <Link
                  href="#dampak"
                  className="hover:text-primary-foreground transition"
                >
                  Dampak
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition"
                >
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold">Kontak</h4>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition">
              <Mail size={16} />
              <a href="mailto:hello@nutra.id">hello@nutra.id</a>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Gedag Gedig Team
              <br />
              Universitas Brawijaya
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>
              © 2025 Nutra by Gedag Gedig Team, Universitas Brawijaya. Made with
              ❤️ in Malang, Indonesia.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-primary-foreground transition"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-primary-foreground transition"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
