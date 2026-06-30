import { FileText, Users, Clock } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import CTA from "../ui/CTA";
import Reveal from "../ui/Reveal";

// Único dato confirmado por el cliente: 20.000 facturas en 3 meses sin sumar personal.
// El resto del caso (nombre, cita, % y horas) se suma cuando Leo lo confirme.
const HECHOS = [
  {
    icon: FileText,
    title: "20.000 facturas en 3 meses",
    body: "Todo el circuito de facturación procesado por el sistema, sin cuellos de botella.",
  },
  {
    icon: Users,
    title: "Sin sumar a nadie al equipo",
    body: "El mismo equipo absorbió el volumen porque dejó de cargar datos a mano.",
  },
  {
    icon: Clock,
    title: "Cierre administrativo más corto",
    body: "Lo que antes vivía repartido entre planillas quedó en un solo lugar, conciliado.",
  },
];

export default function CaseStudy() {
  return (
    <section id="caso" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Caso real"
            title={
              <>
                Una empresa procesó 20.000 facturas en 3 meses.
                <br />
                <span className="text-brand-600">Sin sumar a nadie al equipo.</span>
              </>
            }
            subtitle="No por contratar más gente, sino por dejar de cargar lo mismo dos veces."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {HECHOS.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-bg p-7 hover:border-brand-400 hover:shadow-md transition-all">
                  <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-fg leading-snug mb-2">
                    {h.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{h.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-14 flex justify-center">
            <CTA>Quiero un caso como este</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
