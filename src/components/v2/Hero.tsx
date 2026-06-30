import { motion } from "motion/react";
import { ArrowDown, Workflow } from "lucide-react";

// Cifras pendientes de confirmación final con Leo antes de paid.
const STATS = [
  { value: "+100", label: "empresas operando con Griba" },
  { value: "10 años", label: "en el mercado" },
  { value: "Todo el país", label: "con presencia" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-bg">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent-100 rounded-full blur-[120px] opacity-60 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-50 rounded-full blur-[120px] opacity-70 transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border text-xs font-semibold text-fg-muted shadow-sm">
            <Workflow size={14} className="text-brand-500" />
            De Excel y WhatsApp a un solo sistema
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-fg leading-[1.08] max-w-4xl mx-auto text-center"
        >
          Estás pagando sueldos para que tu equipo{" "}
          <span className="text-brand-600">cargue lo mismo dos veces.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-center text-lg sm:text-xl text-fg-muted leading-relaxed"
        >
          Creamos un sistema de gestión específico para tu forma de trabajar —tus precios, tus
          circuitos, tus clientes— y no al revés.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#calendario"
            className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-fg hover:bg-brand-600 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Agendar demo
          </a>
          <a
            href="#roi"
            className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-white text-fg hover:text-brand-600 border border-border hover:border-brand-500 font-semibold rounded-full transition-all"
          >
            Ver cuánto se te va al año
            <ArrowDown size={16} />
          </a>
        </motion.div>

        {/* Social proof: cifras */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              {i > 0 && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-border hidden sm:block"
                  aria-hidden="true"
                />
              )}
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-fg leading-none">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-fg-muted leading-snug max-w-[140px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
