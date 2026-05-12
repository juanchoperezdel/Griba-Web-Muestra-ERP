import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-black tracking-tighter text-2xl text-white flex items-center">
            <span className="text-white">GRI</span><span className="text-white">BA</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Inicio</a>
          <a href="#soluciones" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Soluciones Empresariales</a>
          <a href="#soluciones-auto" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Soluciones Automotrices</a>
          <a href="#servicios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Servicios</a>
        </nav>
        
        <a href="#calendario" className="hidden md:inline-flex bg-white hover:bg-slate-200 text-black px-6 py-2 rounded-full text-sm font-bold transition-all">
          Contacto
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 py-4 px-4 flex flex-col gap-4">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
          <a href="#soluciones" className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Soluciones Empresariales</a>
          <a href="#soluciones-auto" className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Soluciones Automotrices</a>
          <a href="#servicios" className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#calendario" className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
