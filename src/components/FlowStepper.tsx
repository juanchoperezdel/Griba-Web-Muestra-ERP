import { Smartphone, CheckCircle2, Package, Receipt, Truck, DollarSign } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import CTA from "./ui/CTA";
import Reveal from "./ui/Reveal";

const STEPS = [
  {
    n: 1,
    icon: Smartphone,
    title: "Preventista carga el pedido",
    body: "Desde el celular, con cliente, lista de precios y condiciones comerciales.",
  },
  {
    n: 2,
    icon: CheckCircle2,
    title: "Griba valida stock, precio y cuenta corriente",
    body: "Antes de prometer algo que después no podés cumplir.",
  },
  {
    n: 3,
    icon: Package,
    title: "Depósito prepara",
    body: "Con pedidos ordenados, faltantes visibles y reemplazos registrados.",
  },
  {
    n: 4,
    icon: Receipt,
    title: "Administración factura",
    body: "Sin cargar dos veces la misma información.",
  },
  {
    n: 5,
    icon: Truck,
    title: "Reparto entrega",
    body: "Con seguimiento del estado de cada pedido.",
  },
  {
    n: 6,
    icon: DollarSign,
    title: "Cobranza registra el pago",
    body: "Cuenta corriente actualizada y visible para la próxima venta.",
  },
];

export default function FlowStepper() {
  return (
    <section id="flujo" className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title={
              <>
                Del vendedor al camión,
                <br />
                <span className="text-brand-600">sin perder el control.</span>
              </>
            }
            subtitle="Un pedido que nace mal genera reprocesos en cada paso siguiente. Griba lo valida desde el inicio para que lo que vendés sea lo que entregás y lo que cobrás."
          />
        </Reveal>

        {/* Desktop: horizontal stepper */}
        <div className="mt-16 hidden lg:grid grid-cols-6 relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-[8.33%] right-[8.33%] h-px bg-border z-0" />
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center px-3">
                  <div className="relative z-10 h-10 w-10 rounded-full border-2 border-brand-500 bg-bg flex items-center justify-center text-brand-600 mb-4 shadow-sm">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider mb-1">
                    Paso {step.n}
                  </span>
                  <h3 className="text-sm font-bold text-fg leading-tight mb-2">{step.title}</h3>
                  <p className="text-xs text-fg-muted leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile: vertical list */}
        <div className="mt-12 lg:hidden flex flex-col">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.n} delay={i * 0.07}>
                <div className="flex gap-4 relative">
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
                  )}
                  <div className="shrink-0 h-10 w-10 rounded-full border-2 border-brand-500 bg-bg flex items-center justify-center text-brand-600 z-10 shadow-sm">
                    <Icon size={16} />
                  </div>
                  <div className="pb-8 min-w-0">
                    <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">
                      Paso {step.n}
                    </span>
                    <h3 className="font-bold text-fg mt-0.5">{step.title}</h3>
                    <p className="text-sm text-fg-muted mt-1 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.6}>
          <div className="mt-14 flex justify-center">
            <CTA>Ver este flujo en mi distribuidora</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
