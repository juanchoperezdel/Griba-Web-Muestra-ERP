import { Smartphone, Boxes, CreditCard, Package, Truck, FileText } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import CTA from "./ui/CTA";
import Reveal from "./ui/Reveal";

const MODULES = [
  {
    icon: Smartphone,
    area: "Preventa",
    desc: "Pedidos desde el celular, listas por cliente, descuentos, bonificaciones y validación comercial.",
  },
  {
    icon: Boxes,
    area: "Stock",
    desc: "Stock disponible, stock comprometido, movimientos por depósito y faltantes visibles.",
  },
  {
    icon: CreditCard,
    area: "Cuenta corriente",
    desc: "Saldos, límites, deuda vencida, pagos pendientes y alertas antes de confirmar pedidos.",
  },
  {
    icon: Package,
    area: "Depósito",
    desc: "Preparación de pedidos, control de salida, faltantes, reemplazos y trazabilidad.",
  },
  {
    icon: Truck,
    area: "Reparto",
    desc: "Pedidos por zona, estado de entrega, pendientes y seguimiento operativo.",
  },
  {
    icon: FileText,
    area: "Administración",
    desc: "Facturación, remitos, cobranzas, reportes diarios y cierre más ordenado.",
  },
];

export default function GribaOrdena() {
  return (
    <section id="modulos" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Lo que Griba ordena"
            title={
              <>
                Todo lo que hoy está repartido entre Excel,
                <br />
                <span className="text-brand-600">WhatsApp y memoria del equipo.</span>
              </>
            }
            subtitle="En un solo sistema. Conectado. Con trazabilidad de punta a punta."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <Reveal key={mod.area} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-bg p-7 hover:border-brand-400 hover:shadow-md transition-all group">
                  <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-lg text-fg mb-2">{mod.area}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{mod.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.5}>
          <div className="mt-14 flex justify-center">
            <CTA>Ver los módulos en acción</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
