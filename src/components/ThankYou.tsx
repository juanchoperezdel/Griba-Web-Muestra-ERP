import { motion } from "motion/react";
import { CheckCircle2, Mail, Calendar, MessageSquare } from "lucide-react";
import gribaLogo from "../assets/griba-logo.png";

const EXPECTATIONS = [
  {
    icon: Mail,
    title: "Te llega un mail con los detalles",
    body: "Día, hora y un link de la reunión (Google Meet o Zoom). Confirmá que llegó bien a tu bandeja.",
  },
  {
    icon: Calendar,
    title: "Recordatorio antes de la demo",
    body: "Te avisamos el día previo. Si surge un imprevisto, podés cambiar la hora desde el mismo mail de confirmación.",
  },
  {
    icon: MessageSquare,
    title: "Si tenés algo urgente, escribinos",
    body: "Cualquier cambio, duda o tema operativo: hola@griba.com.ar. Te contestamos el mismo día.",
  },
];

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Minimal navbar */}
      <header className="w-full py-5 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="/" className="flex items-center" aria-label="Griba">
            <img
              src={gribaLogo}
              alt="Griba"
              className="h-7 sm:h-8 w-auto brightness-0"
            />
          </a>
          <a
            href="/"
            className="text-sm font-medium text-fg-muted hover:text-fg transition-colors"
          >
            Volver al inicio
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-600 mb-8"
          >
            <CheckCircle2 size={36} strokeWidth={2.2} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-4"
          >
            Reunión confirmada
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-fg leading-[1.1]"
          >
            Listo.
            <br />
            <span className="text-brand-600">Tu demo está agendada.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-fg-muted leading-relaxed max-w-xl mx-auto"
          >
            Nuestro equipo te va a contactar si surge algún inconveniente. Mientras tanto,
            te dejamos lo que podés esperar de acá hasta la reunión.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 grid sm:grid-cols-3 gap-4 text-left"
          >
            {EXPECTATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface p-6 hover:border-brand-400 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-fg mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-12"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fg hover:bg-brand-600 text-white font-semibold rounded-full transition-colors"
            >
              Volver al inicio
            </a>
          </motion.div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-fg-subtle">
          © {new Date().getFullYear()} Griba. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
