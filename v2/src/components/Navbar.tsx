import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#flujo", label: "Cómo funciona" },
  { href: "#modulos", label: "Módulos" },
  { href: "#roi", label: "Calculadora" },
  { href: "#faqs", label: "Preguntas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span
            className="font-display font-extrabold tracking-tight text-2xl text-fg"
            style={{ letterSpacing: "-0.04em" }}
          >
            Griba
          </span>
          <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-muted hover:text-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#calendario"
          className="hidden md:inline-flex bg-fg hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
        >
          Agendar demo
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-fg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-border py-4 px-4 flex flex-col gap-3 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-muted hover:text-fg py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#calendario"
            className="bg-fg text-white px-5 py-3 rounded-full text-sm font-semibold text-center mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agendar demo
          </a>
        </div>
      )}
    </header>
  );
}
