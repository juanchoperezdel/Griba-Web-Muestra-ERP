import { useEffect } from "react";
import { motion } from "motion/react";
import { Clock, ShieldCheck } from "lucide-react";

const LEADCONNECTOR_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

const STEPS = [
  {
    n: 1,
    title: "Diagnóstico de tu operación actual",
    desc: "Te preguntamos qué sistema usás hoy, cuántos vendedores, depósito, zonas de reparto y dónde se traba el día a día.",
    duration: "10 min",
  },
  {
    n: 2,
    title: "Demo de Griba para distribuidoras",
    desc: "Te mostramos Griba con datos parecidos a los tuyos: preventistas, stock, cuenta corriente, reparto y administración.",
    duration: "15 min",
  },
  {
    n: 3,
    title: "Próximos pasos y pricing aproximado",
    desc: "Si avanzamos, te damos un plan de migración con plazos y un rango de inversión claro.",
    duration: "5 min",
  },
];

export default function CalendarSection() {
  useEffect(() => {
    // Carga el script de LeadConnector que hace autoresize del iframe.
    // Idempotente: si ya está en la página (por remount o navegación SPA),
    // no lo duplica.
    if (document.querySelector(`script[src="${LEADCONNECTOR_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = LEADCONNECTOR_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-3xl border border-border shadow-md p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Texto + pasos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-4">
                30 minutos · sin compromiso
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-fg">
                Demo enfocada en tu distribuidora.
                <br />
                <span className="text-brand-600">Sin PowerPoint genérico.</span>
              </h2>
              <p className="text-lg text-fg-muted mb-10 max-w-lg leading-relaxed">
                Te mostramos exactamente dónde estás perdiendo control hoy: pedidos, stock, cobranzas y reparto. 30 minutos, sin compromiso.
              </p>

              <div className="space-y-5">
                {STEPS.map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 font-display font-bold">
                      {step.n}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-semibold text-fg text-base">{step.title}</h4>
                        <span className="text-xs font-mono text-fg-subtle whitespace-nowrap">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-fg-muted text-sm mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-fg-muted">
                <span className="inline-flex items-center gap-2 bg-surface-2 rounded-full px-4 py-2 border border-border">
                  <Clock className="w-4 h-4 text-brand-500" />
                  30 minutos
                </span>
                <span className="inline-flex items-center gap-2 bg-surface-2 rounded-full px-4 py-2 border border-border">
                  <ShieldCheck className="w-4 h-4 text-brand-500" />
                  Sin compromiso
                </span>
              </div>

              <p className="mt-8 text-sm text-fg-subtle border-l-2 border-accent-500 pl-4">
                Sos vos quien decide cuándo y cuánto avanzar. La demo es solo conversación.
              </p>
            </motion.div>

            {/* LeadConnector booking widget */}
            <motion.div
              id="calendario"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white p-1 rounded-2xl border border-border shadow-lg scroll-mt-24"
            >
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/Vw3iw1NjrhV6fGuX7cAQ"
                id="Vw3iw1NjrhV6fGuX7cAQ_1779130578111"
                title="Agendar demo Griba"
                scrolling="no"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
