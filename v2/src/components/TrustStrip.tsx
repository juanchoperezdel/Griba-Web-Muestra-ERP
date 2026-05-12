import Reveal from "./ui/Reveal";
import CTA from "./ui/CTA";

const STATS = [
  { value: "+10", label: "años acompañando distribuidoras y PyMEs argentinas" },
  { value: "+100", label: "empresas operando con Griba hoy" },
  { value: "30 días", label: "tiempo promedio de implementación en paralelo" },
];

export default function TrustStrip() {
  return (
    <section className="py-16 lg:py-20 border-y border-border bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-5xl font-extrabold text-fg leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-fg-muted max-w-[200px] mx-auto leading-snug">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div className="mt-10 flex justify-center">
            <CTA>Hablar con el equipo</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
