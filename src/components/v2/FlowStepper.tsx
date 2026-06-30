import { LayoutGrid, Boxes, Wallet, LineChart } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import CTA from "../ui/CTA";
import Reveal from "../ui/Reveal";

// "Cómo trabaja Griba" — estilo Smartway: tarjetas de resultado generales
// (no un flujo de venta paso a paso). Cada una arranca de un dolor concreto.
const CARDS = [
  {
    icon: LayoutGrid,
    title: "Un solo sistema, no cinco",
    body: "Ventas, stock, clientes, facturación y cobranzas en el mismo lugar. Dejás de cruzar planillas y de cargar lo mismo dos veces.",
  },
  {
    icon: Boxes,
    title: "Stock que siempre dice la verdad",
    body: "Lo disponible, lo comprometido y lo que falta, actualizado solo. Decidís sabiendo qué tenés, no adivinando.",
  },
  {
    icon: Wallet,
    title: "Cuentas claras, sin sorpresas",
    body: "Qué te debe cada cliente, qué límite tiene y qué está vencido. Lo ves antes de venderle, no cuando ya es tarde.",
  },
  {
    icon: LineChart,
    title: "Decisiones con datos en tiempo real",
    body: "Reportes al día de ventas, margen y cobranzas. Dejás de decidir a ciegas y de enterarte de los problemas una semana después.",
  },
];

export default function FlowStepper() {
  return (
    <section id="flujo" className="py-24 lg:py-32 bg-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Cómo trabaja Griba"
            title={
              <>
                Lo que cambia cuando tu operación
                <br />
                <span className="text-brand-600">vive en un solo lugar.</span>
              </>
            }
            subtitle="No son módulos sueltos: es que el dato entra una vez y todo lo demás se actualiza solo. Funciona igual para un comercio, una empresa de servicios o una distribuidora con reparto."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-7 hover:border-brand-400 hover:shadow-md transition-all group">
                  <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-lg text-fg mb-2 leading-snug">{card.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{card.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-14 flex justify-center">
            <CTA>Ver cómo quedaría mi operación</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
