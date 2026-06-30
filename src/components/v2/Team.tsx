import { HeartHandshake, Wrench, Target, TrendingUp, CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import CTA from "../ui/CTA";
import Reveal from "../ui/Reveal";

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Soporte humano directo",
    body: "Sin tickets que rebotan tres veces antes de llegar a alguien que entiende. El que implementó tu sistema es el que te atiende cuando llamás.",
  },
  {
    icon: Wrench,
    title: "Implementación acompañada, sin frenar",
    body: "Tu sistema actual sigue funcionando hasta que vos digas que está listo el cambio. Sin downtime, sin pánico.",
  },
  {
    icon: Target,
    title: "Adaptado a procesos reales",
    body: "No sos vos quien se adapta al sistema. Griba se configura para tu operación: tus listas, tus condiciones, tu forma de trabajar.",
  },
  {
    icon: TrendingUp,
    title: "Crece sin desorden",
    body: "Más usuarios, más clientes, más sucursales: el sistema acompaña sin que tengas que cambiar de plataforma a mitad de camino.",
  },
];

const IMPLEMENTACION = [
  "Relevamiento de procesos actuales",
  "Migración de clientes, productos, listas y saldos",
  "Configuración de permisos y roles",
  "Capacitación a tu equipo",
  "Puesta en marcha gradual",
  "Soporte directo post implementación",
];

export default function Team() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title={
              <>
                No comprás un sistema.
                <br />
                <span className="text-brand-600">Entrás en un acompañamiento.</span>
              </>
            }
            subtitle="Lo que más vas a notar no es una función puntual: es que del otro lado hay gente que conoce tu operación y te resuelve, no un soporte que rebota tickets."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-7 hover:border-brand-400 hover:shadow-md transition-all">
                  <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-fg mb-2">{p.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Implementación absorbida (ex-Implementacion) */}
        <Reveal delay={0.3}>
          <div className="mt-12 rounded-2xl border border-border bg-surface p-7 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
              Así entramos, sin frenar tu operación:
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {IMPLEMENTACION.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-fg font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-10 text-sm text-fg-subtle border-l-2 border-accent-500 pl-4 max-w-xl mx-auto">
            Si llamás un martes a las 11, te atiende el que implementó tu sistema. Siempre.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-8 flex justify-center">
            <CTA>Hablar con el equipo</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
