import { Quote } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const KPIS = [
  {
    value: "20.000",
    label: "facturas procesadas en 3 meses",
    note: "Caso confirmado · cliente real",
  },
  {
    value: "[X]%",
    label: "reducción de tiempo administrativo",
    note: "PLACEHOLDER · pedir a Leonardo",
  },
  {
    value: "[N] hrs",
    label: "liberadas por semana al equipo",
    note: "PLACEHOLDER · pedir a Leonardo",
  },
];

export default function CaseStudy() {
  return (
    <section id="caso" className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Caso real"
            title={
              <>
                <span className="font-mono text-2xl sm:text-3xl px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                  [NOMBRE_CLIENTE]
                </span>{" "}
                pasó de{" "}
                <span className="font-mono text-2xl sm:text-3xl px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                  [VOLUMEN_ANTES]
                </span>{" "}
                a procesar 20.000 facturas en 3 meses.
                <br />
                <span className="text-brand-600">Sin sumar nadie al equipo.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-10 items-start">
          {/* Quote */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl bg-surface border border-border p-8 lg:p-10 shadow-sm">
              <Quote className="text-accent-500 mb-4" size={32} />
              <p className="text-xl sm:text-2xl text-fg leading-relaxed font-medium">
                "<span className="font-mono text-base px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                  [TESTIMONIO_TEXTUAL_DEL_CLIENTE]
                </span>"
              </p>
              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-surface-3 flex items-center justify-center text-xs font-mono text-amber-700">
                  FOTO
                </div>
                <div>
                  <p className="font-semibold text-fg">[NOMBRE_PERSONA]</p>
                  <p className="text-sm text-fg-muted">[ROL] · [EMPRESA]</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* KPIs */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {KPIS.map((kpi, i) => (
              <Reveal key={kpi.label} delay={0.2 + i * 0.1}>
                <div className="rounded-2xl bg-surface border border-border p-6 hover:border-brand-400 transition-colors">
                  <p className="font-display text-4xl font-extrabold text-fg leading-none">
                    {kpi.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-fg-muted">{kpi.label}</p>
                  <p className="mt-1 text-[10px] font-mono text-amber-700">{kpi.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.5}>
          <div className="mt-14 text-center">
            <a
              href="#calendario"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-fg hover:bg-brand-600 text-white font-semibold rounded-full transition-all shadow-md"
            >
              Quiero un caso como este
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
