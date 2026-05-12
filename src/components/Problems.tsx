import { motion } from 'motion/react';
import { Layers, Box, Webhook } from 'lucide-react';

const problems = [
  {
    icon: Webhook,
    title: "Infraestructura colapsada",
    description: "La escalabilidad está frenada. Abrir un nuevo canal de venta o sucursal implica desarrollos costosos y parches técnicos que comprometen el rendimiento actual."
  },
  {
    icon: Layers,
    title: "Falta de integridad de datos",
    description: "Procesos manuales y planillas dispersas. La dependencia de integraciones inestables y cruces manuales de información causa pérdida constante de ingresos no auditables."
  },
  {
    icon: Box,
    title: "Cero puntos ciegos",
    description: "Operativa a ciegas. Sucursales desconectadas sin sincronización de stock en la nube provocan rechazos de ventas, quiebres de inventario y cierres con inconsistencias."
  }
];

export default function Problems() {
  return (
    <section id="problemas" className="pt-24 pb-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Una plataforma unificada. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Cero puntos ciegos.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Todo lo que tu equipo operativo y contable necesita — visible, conectado, y en movimiento constante sin dependencias heredadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 mb-6">
                <problem.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
