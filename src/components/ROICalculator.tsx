import { useState } from 'react';
import { motion } from 'motion/react';

export default function ROICalculator() {
  const [hours, setHours] = useState<number>(20); 
  const [employees, setEmployees] = useState<number>(2);

  // Constants
  const WEEKS_PER_YEAR = 52;
  const AVG_HOUR_COST = 5000;
  
  const yearlyCost = hours * WEEKS_PER_YEAR * employees * AVG_HOUR_COST;
  const timeSavedWithGriba = Math.round(hours * 0.85); 
  const yearlySavings = timeSavedWithGriba * WEEKS_PER_YEAR * employees * AVG_HOUR_COST;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="roi" className="py-24 bg-[#020817] overflow-hidden relative">
      <div className="absolute inset-0 bg-blue-600 opacity-10 blur-[150px] rounded-full w-[50rem] h-[50rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
              Calculá el impacto de <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">automatizar tu gestión.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
              Operar sin una arquitectura unificada no solo retrasa procesos, incrementa la tasa de error humano y destruye márgenes operativos ocultando fugas de capital.
              <br/><br/>
              Empresas operando con nuestra plataforma reducen la carga administrativa en un 85% promedio y logran conciliación sin intervención manual.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/80 rounded-2xl border border-slate-800 shadow-xl p-8 sm:p-12 relative backdrop-blur-sm"
          >
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Hs Semanales / Intervención Manual</label>
                  <span className="font-bold text-xl text-white">{hours} hs</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Empleados afectados</label>
                  <span className="font-bold text-xl text-white">{employees}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={employees} 
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="pt-8 space-y-6">
                <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest text-center sm:text-left">Carga Salarial (Anual)</span>
                  <span className="text-white font-bold text-xl">{formatCurrency(yearlyCost)}</span>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/30 p-8 flex flex-col items-center justify-center text-center shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
                  <span className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-3">Pérdida EVITADA (Proyección Anual)</span>
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-400 drop-shadow-md">
                    {formatCurrency(yearlySavings)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
