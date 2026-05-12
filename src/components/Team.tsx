import { HeartHandshake, Wrench, Target, TrendingUp } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import CTA from "./ui/CTA";
import Reveal from "./ui/Reveal";

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Soporte humano directo",
    body: "Sin tickets que rebotan tres veces antes de llegar a alguien que entiende. El que implementó tu sistema es el que te atiende cuando llamás.",
  },
  {
    icon: Wrench,
    title: "Implementación acompañada",
    body: "Tu sistema actual sigue funcionando hasta que vos digas que está listo el cambio. Sin downtime, sin pánico.",
  },
  {
    icon: Target,
    title: "Adaptado a procesos reales",
    body: "No sos vos quien se adapta al sistema. Griba se configura para tu operación: tus rutas, tus listas, tus condiciones comerciales.",
  },
  {
    icon: TrendingUp,
    title: "Preparado para crecer sin desorden",
    body: "Más vendedores, más clientes, más zonas. El sistema acompaña sin que tengas que cambiar de plataforma a mitad de camino.",
  },
];

export default function Team() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Quiénes somos"
            title={
              <>
                Hecho por un equipo argentino
                <br />
                <span className="text-brand-600">que entiende PyMEs operativas.</span>
              </>
            }
            subtitle="No somos una herramienta genérica para empresas ideales. Griba está pensado para empresas que venden todos los días, tienen urgencias, clientes que llaman, vendedores en la calle, depósito preparando pedidos y administración intentando cerrar el día."
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

        <Reveal delay={0.4}>
          <p className="mt-10 text-sm text-fg-subtle border-l-2 border-accent-500 pl-4 max-w-xl mx-auto">
            Si llamás un martes a las 11, te atiende el que implementó tu sistema. Siempre.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-8 flex justify-center">
            <CTA>Hablar con un especialista</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
