import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function CalendarSection() {
  return (
    <section id="calendario" className="py-24 bg-[#020817] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 shadow-xl p-8 md:p-12 lg:p-16 relative backdrop-blur-sm">
          
          <div className="absolute top-0 right-0 w-full h-full bg-blue-600 opacity-5 blur-[150px] pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Agendá una sesión <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">estratégica.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
                Agenda una sesión estratégica de 30 minutos. Auditaremos la topología de tu operación actual y trazaremos el proceso de integración hacia Griba ERP.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start pb-6 border-b border-slate-800/50">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl text-blue-400 flex items-center justify-center shrink-0 mt-1 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Diagnóstico Inicial</h4>
                     <p className="text-slate-400 text-sm mt-1">Mapeamos tus cuellos de botella y las limitantes de tu operativa actual.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start pb-6 border-b border-slate-800/50">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl text-blue-400 flex items-center justify-center shrink-0 mt-1 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Demostración</h4>
                     <p className="text-slate-400 text-sm mt-1">Demo de Griba procesando un entorno transaccional similar al tuyo.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl text-blue-400 flex items-center justify-center shrink-0 mt-1 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Plan de implementación</h4>
                     <p className="text-slate-400 text-sm mt-1">Proyección de plazos y requerimientos de la migración en paralelo.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4 text-sm font-semibold text-slate-400">
                <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700/50">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Duración: 30 minutos</span>
                </div>
              </div>
            </motion.div>


            {/* Calendly iframe placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-2 rounded-2xl border border-slate-700 shadow-2xl h-[600px]"
            >
              <iframe 
                src="https://calendly.com/calendly-demo" 
                width="100%" 
                height="100%" 
                style={{ border: 0, backgroundColor: '#ffffff', borderRadius: '12px' }} 
                title="Agendar Demo Griba"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
