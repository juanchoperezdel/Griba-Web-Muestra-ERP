import { Check, X } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import CTA from "../ui/CTA";
import Reveal from "../ui/Reveal";

const ENLATADO = [
  "Te adaptás vos a cómo viene el sistema.",
  "Pedís un cambio y esperás una versión que capaz nunca llega.",
  "Soporte por tickets que rebotan entre áreas.",
  "Pagás módulos que no usás para llegar al que sí.",
  "“Así viene de fábrica” como respuesta a todo.",
];

const GRIBA = [
  "Lo configuramos a tus precios, tus circuitos, tus condiciones.",
  "Pedís algo y lo resolvemos con vos, no en seis meses.",
  "Te atiende directo el que conoce tu implementación.",
  "Crece con tu operación sin que cambies de plataforma.",
  "Tu forma de trabajar manda; el sistema se acomoda.",
];

export default function Comparison() {
  return (
    <section id="porque" className="py-24 lg:py-32 bg-bg scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Por qué Griba"
            title={
              <>
                Cuando le pedís algo a un sistema enlatado,
                <br />
                <span className="text-brand-600">te dicen “esperá la próxima versión”.</span>
              </>
            }
            subtitle="Un Odoo, un Finnegan: son potentes, pero vienen cerrados. Si tu operación no entra en su molde, te adaptás vos. Griba es al revés: lo configuramos a tu forma de trabajar, y cuando necesitás algo, lo resolvemos nosotros —no una hoja de ruta de producto en otro país."
          />
        </Reveal>

        {/* Dos columnas enfrentadas */}
        <div className="mt-14 grid md:grid-cols-2 gap-5 lg:gap-6">
          {/* Enlatado rígido */}
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-surface p-7 lg:p-8">
              <div className="flex items-center gap-3 pb-5 border-b border-border">
                <span className="h-9 w-9 rounded-xl bg-surface-3 text-fg-muted flex items-center justify-center shrink-0">
                  <X size={18} />
                </span>
                <div>
                  <p className="font-bold text-fg leading-tight">Un sistema enlatado rígido</p>
                  <p className="text-xs text-fg-subtle">Potente, pero cerrado.</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4">
                {ENLATADO.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-fg-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Griba */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border-2 border-brand-500 bg-brand-50/40 p-7 lg:p-8 shadow-sm relative">
              <span className="absolute -top-3 left-7 inline-flex items-center px-3 py-1 rounded-full bg-brand-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                La que se adapta a vos
              </span>
              <div className="flex items-center gap-3 pb-5 border-b border-brand-100">
                <span className="h-9 w-9 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0">
                  <Check size={18} />
                </span>
                <div>
                  <p className="font-bold text-fg leading-tight">Griba</p>
                  <p className="text-xs text-brand-700">Se moldea a tu operación.</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4">
                {GRIBA.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <Check size={16} className="text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-fg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <CTA>Quiero un sistema que se adapte a mí</CTA>
            <p className="text-sm text-fg-muted">
              Tus datos migrados a cargo nuestro.{" "}
              <span className="font-semibold text-fg">Y son tuyos: te los llevás cuando quieras.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
