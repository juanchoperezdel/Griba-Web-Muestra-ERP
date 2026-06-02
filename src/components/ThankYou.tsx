import { motion } from "motion/react";
import { CheckCircle2, Mail, Calendar, MessageSquare, MessageCircle } from "lucide-react";
import gribaLogo from "../assets/griba-logo.png";

const WHATSAPP_CONFIRM_URL = "https://wa.link/en2aaz";

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
            Te llega un mail con los detalles. Pero antes de cerrar esta página,
            necesitamos un último paso para asegurar tu lugar.
          </motion.p>

          {/* Paso obligatorio: confirmar por WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 max-w-xl mx-auto"
          >
            <div className="relative rounded-2xl border-2 border-[#25D366] bg-white shadow-lg p-6 sm:p-7 text-left">
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] text-white text-[11px] font-bold uppercase tracking-wider">
                Último paso
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-fg leading-snug mb-2">
                Confirmá tu reunión por WhatsApp
              </h2>
              <p className="text-sm text-fg-muted leading-relaxed mb-5">
                Mandanos un mensaje rápido para confirmar que vas a asistir. Así te
                guardamos el espacio del especialista y te recordamos el día previo
                por el mismo chat.
              </p>
              <a
                href={WHATSAPP_CONFIRM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircle size={18} strokeWidth={2.5} />
                Confirmar ahora por WhatsApp
              </a>
              <p className="mt-3 text-xs text-fg-subtle text-center">
                Te lleva 10 segundos. Sin esto, podemos liberar el horario.
              </p>
            </div>
          </motion.div>

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
              className="inline-flex items-center gap-2 px-6 py-3 text-fg-muted hover:text-fg font-medium transition-colors"
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
