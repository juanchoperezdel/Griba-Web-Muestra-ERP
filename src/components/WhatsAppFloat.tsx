import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

// Número crudo de WhatsApp (resuelto desde wa.link/ergytd) — permite pre-cargar
// el primer mensaje según la respuesta del lead.
const WHATSAPP_PHONE = "5493814636568";

function waUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

// Pregunta-filtro: una sola, simple, diagnóstica. Cada opción es un <a href>
// directo a WhatsApp con su propio mensaje, para que el cliente sepa con quién
// habla antes de responder (combate el ghosting: el lead llega con su intención
// ya escrita). Usamos <a href> real (no window.open) porque buena parte del
// tráfico entra desde navegadores in-app de Instagram/Facebook, donde el JS
// puede bloquear la apertura.
const OPTIONS = [
  {
    label: "En Excel y planillas",
    message:
      "¡Hola! Hoy manejo mi operación en Excel y planillas. Quiero ver cómo Griba me la ordenaría.",
  },
  {
    label: "En WhatsApp y papel",
    message:
      "¡Hola! Hoy trabajo con WhatsApp y papel. Quiero ver cómo se vería todo en un solo sistema con Griba.",
  },
  {
    label: "Un sistema que se quedó corto",
    message:
      "¡Hola! Tengo un sistema que se me quedó corto. Quiero ver qué resuelve Griba que el mío no.",
  },
  {
    label: "Ya tengo algo, busco mejorar",
    message:
      "¡Hola! Ya tengo un sistema y busco mejorar mi operación. Quiero compararlo con Griba.",
  },
] as const;

// Logo oficial de WhatsApp (SVG inline) — evita agregar deps tipo react-icons.
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  // Cerrar con Escape mientras el panel está abierto.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Panel de calificación */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="wa-panel"
            role="dialog"
            aria-label="Calificación rápida antes de WhatsApp"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, type: "spring", stiffness: 280, damping: 26 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm origin-bottom-right"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/15">
              {/* Header */}
              <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3.5 text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="text-sm font-bold">Griba</p>
                  <p className="flex items-center gap-1.5 text-[11px] text-white/85">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                    Te respondemos en minutos
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body — pregunta + opciones (cada una es un link directo a WhatsApp) */}
              <div className="px-4 py-5 sm:px-5">
                <h3 className="font-display text-lg font-extrabold leading-snug text-fg">
                  ¿Dónde vive tu operación hoy?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                  Contanos en una línea y lo vemos en el diagnóstico, sin
                  compromiso.
                </p>

                <div className="mt-4 flex flex-col gap-2.5">
                  {OPTIONS.map((opt) => (
                    <a
                      key={opt.label}
                      href={waUrl(opt.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-semibold text-fg transition-all hover:border-brand-400 hover:bg-surface hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                    >
                      {opt.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante (launcher) */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Hablar por WhatsApp"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 280 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#1ebe5a] hover:shadow-xl sm:bottom-6 sm:right-6 sm:h-15 sm:w-15"
      >
        {/* Pulse animado de fondo (solo cuando está cerrado, no distrae) */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        )}
        <span className="relative flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="icon-close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={26} strokeWidth={2.5} />
              </motion.span>
            ) : (
              <motion.span
                key="icon-wa"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <WhatsAppIcon size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </span>

        {/* Tooltip al hover en desktop (solo cuando está cerrado) */}
        {!open && (
          <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-lg bg-fg px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 md:inline-block">
            ¿Charlamos por WhatsApp?
          </span>
        )}
      </motion.button>
    </>
  );
}
