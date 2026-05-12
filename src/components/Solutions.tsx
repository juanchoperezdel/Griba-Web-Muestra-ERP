import { motion } from 'motion/react';
import { Activity, Code2, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    icon: Activity,
    title: "Diagnóstico & Planificación",
    description: "Analizamos la infraestructura actual, volumen transaccional y cuellos de botella para diseñar una arquitectura de migración sin pérdida de datos.",
  },
  {
    icon: Code2,
    title: "Migración en Paralelo",
    description: "Configuramos y desplegamos Griba operando en paralelo con el sistema heredado. Integridad de la operación continua garantizada.",
  },
  {
    icon: TrendingUp,
    title: "Orquestación Final",
    description: "Transición estructurada. Visibilidad en tiempo real activada y sincronización automática de sucursales a nivel cloud.",
  }
];

export default function Solutions() {
  return (
    <section id="proceso" className="py-24 bg-[#020817] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Modular por diseño. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Integrado por defecto.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            No rompemos tu operación para mejorarla. Nuestro proceso de implementación en paralelo asegura cero downtime y adopción inmediata.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-lg text-center md:text-left"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 mb-6 mx-auto md:mx-0">
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
        </div>
        
      </div>
    </section>
  );
}
