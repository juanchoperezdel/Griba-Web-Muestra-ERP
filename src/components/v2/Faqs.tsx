import { useState, type ReactNode } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

type FAQ = { q: string; a: ReactNode };

const FAQS: FAQ[] = [
  {
    q: "¿Cuánto sale?",
    a: "Depende del tamaño de tu operación y de cuánta gente lo use. En la demo te damos un rango realista según tu caso, sin sorpresas y sin que tengas que firmar nada.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Depende del tamaño de la operación, los usuarios, los datos a migrar y las integraciones necesarias. Entramos en paralelo a tu sistema actual, así que no frenás nada mientras tanto. En la demo te damos un plazo realista.",
  },
  {
    q: "¿Y si hoy trabajo todo en Excel?",
    a: "Sí, sirve. De hecho, muchas implementaciones empiezan ordenando justamente eso: clientes, productos, listas, saldos y ventas que hoy viven en planillas.",
  },
  {
    q: "¿Qué pasa con mis datos si un día me quiero ir?",
    a: "Te exportamos todo en formato estándar y te lo llevás. Sin ataduras: tus datos siempre son tuyos.",
  },
  {
    q: "¿Cuándo Griba NO es para mí?",
    a: "Si buscás un enlatado masivo que no querés que nadie toque, o si no tenés a nadie internamente que empuje el cambio, capaz no somos el mejor fit. Griba rinde cuando querés que el sistema se adapte a cómo trabajás, no al revés.",
  },
  {
    q: "¿Qué pasa después de la demo?",
    a: "Cero presión. Te llevás un diagnóstico de dónde estás perdiendo control, aunque no avances. Si seguimos, te damos un plan de migración con plazos y rango de inversión.",
  },
];

function FaqItem({ q, a, open, onToggle }: FAQ & { open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-brand-600 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-fg text-base sm:text-lg">{q}</span>
        <span
          className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-brand-500 text-white" : "bg-surface-2 text-fg-muted"
          }`}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-fg-muted leading-relaxed pr-12">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faqs() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title={
              <>
                Lo que preguntan
                <br />
                <span className="text-brand-600">antes de agendar</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl border border-border bg-bg px-6 sm:px-8 shadow-sm">
            {FAQS.map((faq, idx) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                open={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-fg-muted mb-4">¿Tenés otra pregunta?</p>
            <a
              href="#calendario"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fg hover:bg-brand-600 text-white font-semibold rounded-full transition-colors"
            >
              Hablar con un especialista
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
