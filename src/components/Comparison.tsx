import { motion } from 'motion/react';
import { Check, X, Minus } from 'lucide-react';

const features = [
  { name: "Automatización Financiera & Conciliación", griba: true, legacy: "Manual", excel: "Inviable" },
  { name: "Control Multi-Sucursal en tiempo real", griba: true, legacy: "Cierra a fin de día", excel: false },
  { name: "Costos ocultos por usuarios o módulos", griba: false, legacy: true, excel: false },
  { name: "Soporte humano directo y regional", griba: true, legacy: false, excel: false },
  { name: "Integraciones Nativas (MercadoLibre, AFIP)", griba: true, legacy: "Con consultoría", excel: false },
  { name: "Migración de datos a cargo nuestro", griba: true, legacy: false, excel: false },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-[#020817] relative">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-600 opacity-10 blur-[150px] pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            La diferencia entre operar <br className="hidden md:block" />y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">escalar sin fricción.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Los ERPs heredados cobran licencias por un software que tu equipo debe aprender a configurar solo. Nuestra infraestructura incluye soporte operativo y adopción desde el día cero.
          </p>
        </div>

        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
          <div className="grid grid-cols-4 bg-slate-800/50 border-b border-slate-700/50 p-6 text-white items-center">
            <div className="text-left font-semibold text-sm text-slate-300">Feature</div>
            <div className="text-blue-400 font-bold text-center">GRIBA</div>
            <div className="text-slate-400 font-semibold text-center text-sm">ERP Tradicional</div>
            <div className="text-slate-400 font-semibold text-center text-sm">Excel</div>
          </div>
          
          <div className="divide-y divide-slate-800/50">
            {features.map((feature, idx) => (
              <div key={idx} className="grid grid-cols-4 p-5 sm:p-6 text-center items-center hover:bg-slate-800/30 transition-colors">
                <div className="text-left text-slate-300 font-medium text-sm md:text-base">{feature.name}</div>
                
                <div className="flex justify-center font-bold text-blue-400">
                  {typeof feature.griba === 'boolean' 
                    ? feature.griba ? <Check className="w-5 h-5 text-blue-500" /> : <X className="w-5 h-5 text-slate-600" />
                    : feature.griba}
                </div>
                
                <div className="flex justify-center text-slate-400 text-sm">
                  {typeof feature.legacy === 'boolean' 
                    ? feature.legacy ? <Check className="w-5 h-5 text-slate-600" /> : <Minus className="w-5 h-5 text-slate-600" />
                    : feature.legacy}
                </div>
                
                <div className="flex justify-center text-slate-400 text-sm">
                  {typeof feature.excel === 'boolean' 
                    ? feature.excel ? <Check className="w-5 h-5 text-slate-600" /> : <X className="w-5 h-5 text-slate-600" />
                    : feature.excel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
