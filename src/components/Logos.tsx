export default function Logos() {
  return (
    <section className="py-12 border-b border-t border-slate-800 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold tracking-wider text-slate-400 mb-8 uppercase">
          Elegido por empresas argentinas que ya dejaron el caos atrás
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-2xl text-white">
            <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
            RetailCorp
          </div>
          <div className="flex items-center gap-2 font-bold text-2xl text-white">
            <div className="w-6 h-6 rounded-full border-4 border-blue-500"></div>
            Mayorista Sur
          </div>
          <div className="flex items-center gap-2 font-bold text-2xl text-white">
            <div className="w-6 h-6 bg-indigo-500 skew-x-12 rounded-sm"></div>
            Metalúrgica AR
          </div>
          <div className="flex items-center gap-2 font-black text-2xl text-white">
            <div className="tracking-tighter">DISTRIHUB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
