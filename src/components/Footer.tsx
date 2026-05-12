export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="font-black tracking-tighter text-2xl text-white">
              GRIBA
            </div>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#problemas" className="hover:text-blue-400 transition-colors">¿Por qué cambiar?</a>
            <a href="#soluciones" className="hover:text-blue-400 transition-colors">Soluciones</a>
            <a href="#roi" className="hover:text-blue-400 transition-colors">Calculadora ROI</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Griba Software. Todos los derechos reservados.</p>
          <div className="mt-4 sm:mt-0 space-x-6">
            <a href="https://griba.com.ar" className="hover:text-blue-400 transition-colors" target="_blank" rel="noreferrer">Visitar sitio corporativo de Griba</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
