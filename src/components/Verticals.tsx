import { useState } from "react";
import { Store, Truck, ArrowRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

type Vertical = {
  id: string;
  icon: typeof Store;
  title: string;
  painStatement: string;
  hook: string;
  body: string;
  subRubros: string[];
  cta: string;
};

const VERTICALS: Vertical[] = [
  {
    id: "retail",
    icon: Store,
    title: "Retail multi-sucursal",
    painStatement: "El sistema dice que hay. La góndola dice que no.",
    hook: "Vos abrís sucursales. Griba las une.",
    body: "Stock cruzado entre locales en tiempo real. Listas de precios por canal. Cierre de caja por sucursal sin esperar fin de mes. Sincronización con e-commerce y Mercado Libre.",
    subRubros: ["indumentaria", "ferretería", "juguetería", "deportes", "óptica", "librería"],
    cta: "Ver demo retail",
  },
  {
    id: "distribuidora",
    icon: Truck,
    title: "Distribuidora / Mayorista",
    painStatement: "Vendiste lo que no tenés.",
    hook: "Tu camión sale a las 6. Tu sistema tiene que estar listo a las 5.",
    body: "Preventistas con app móvil cargando pedidos desde la calle. Rutas optimizadas. Listas mayoristas con escalonado por volumen. Cuenta corriente por cliente. Comisiones de vendedores liquidadas automáticas.",
    subRubros: ["alimentos", "bebidas", "limpieza", "ferretería mayorista"],
    cta: "Ver demo distribuidora",
  },
];

export default function Verticals() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="verticales" className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Hecho para tu industria"
            title={
              <>
                Los rubros donde no hay
                <br />
                <span className="text-brand-600">segundas oportunidades</span>
              </>
            }
            subtitle="Cada industria tiene su lógica. Si tu sistema no la entiende, vos terminás adaptándote al sistema. En Griba es al revés."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {VERTICALS.map((v, i) => {
            const Icon = v.icon;
            const isActive = active === v.id;
            return (
              <Reveal key={v.id} delay={i * 0.08}>
                <article
                  className={`group h-full rounded-2xl border bg-surface p-7 transition-all duration-300 cursor-default ${
                    isActive
                      ? "border-brand-500 shadow-xl -translate-y-1"
                      : "border-border hover:border-brand-400 hover:shadow-lg hover:-translate-y-1"
                  }`}
                  onMouseEnter={() => setActive(v.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div
                    className={`inline-flex items-center justify-center h-11 w-11 rounded-xl mb-5 transition-colors ${
                      isActive
                        ? "bg-brand-500 text-white"
                        : "bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle mb-2">
                    {v.title}
                  </p>

                  <h3 className="font-display text-2xl lg:text-[1.6rem] font-extrabold text-fg leading-[1.15] mb-4">
                    "{v.painStatement}"
                  </h3>

                  <p className="text-sm font-semibold text-brand-700 leading-snug mb-4">
                    {v.hook}
                  </p>

                  <p className="text-sm text-fg-muted leading-relaxed mb-5">{v.body}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {v.subRubros.map((sr) => (
                      <span
                        key={sr}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-surface-2 text-fg-muted"
                      >
                        {sr}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#calendario"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    {v.cta}
                    <ArrowRight size={14} />
                  </a>

                  <p className="mt-5 pt-4 border-t border-border text-xs text-fg-subtle">
                    Demo enfocada en tu rubro. No tenés que tener nada preparado.
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
