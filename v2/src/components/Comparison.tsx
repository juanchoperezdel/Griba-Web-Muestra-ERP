import { Check, X } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import CTA from "./ui/CTA";
import Reveal from "./ui/Reveal";

const ROWS = [
  {
    situacion: "El vendedor toma un pedido",
    sinGriba: "Consulta precios y stock a mano o por WhatsApp",
    conGriba: "Carga el pedido con precio y stock actualizado desde el celular",
  },
  {
    situacion: "El cliente tiene deuda",
    sinGriba: "Se detecta tarde o no se detecta",
    conGriba: "El sistema alerta antes de confirmar el pedido",
  },
  {
    situacion: "Hay faltantes en depósito",
    sinGriba: "Se resuelve por WhatsApp o llamada, sin registro",
    conGriba: "Queda registrado en el pedido con trazabilidad completa",
  },
  {
    situacion: "Cambia una lista de precios",
    sinGriba: "Alguien actualiza una planilla y la manda por email",
    conGriba: "Se aplica automáticamente por cliente, canal o condición",
  },
  {
    situacion: "Depósito prepara pedidos",
    sinGriba: "Trabaja con impresiones, chats o llamadas",
    conGriba: "Ve pedidos pendientes y estado de preparación en tiempo real",
  },
  {
    situacion: "Cierre del día",
    sinGriba: "Administración cruza datos manualmente de varias fuentes",
    conGriba: "Ventas, facturación y cobranzas quedan visibles en un solo lugar",
  },
];

export default function Comparison() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title={
              <>
                Tu vendedor promete, depósito corre
                <br />
                <span className="text-brand-600">
                  y administración arregla.
                </span>
              </>
            }
            subtitle="Griba ordena todo antes de que el pedido salga. Así se ve el mismo día de trabajo, con y sin sistema."
          />
        </Reveal>

        {/* Desktop: tabla 3 columnas */}
        <Reveal delay={0.1}>
          <div className="mt-14 hidden md:block rounded-2xl border border-border bg-surface overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border">
              <div className="px-5 py-4 bg-surface-2 text-xs font-semibold text-fg-muted uppercase tracking-wider">
                Situación del día
              </div>
              <div className="px-5 py-4 border-l border-border text-xs font-semibold text-fg-muted uppercase tracking-wider">
                Con Excel / WhatsApp
              </div>
              <div className="px-5 py-4 border-l border-border bg-brand-50 text-xs font-semibold text-brand-700 uppercase tracking-wider">
                Con Griba
              </div>
            </div>
            <div className="divide-y divide-border">
              {ROWS.map((row, i) => (
                <div
                  key={row.situacion}
                  className={`grid grid-cols-[1fr_1fr_1fr] hover:bg-surface-2/40 transition-colors ${
                    i % 2 !== 0 ? "bg-surface/50" : ""
                  }`}
                >
                  <div className="px-5 py-4 text-sm font-semibold text-fg leading-snug">
                    {row.situacion}
                  </div>
                  <div className="px-5 py-4 border-l border-border text-sm text-fg-muted leading-relaxed flex gap-2 items-start">
                    <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                    <span>{row.sinGriba}</span>
                  </div>
                  <div className="px-5 py-4 border-l border-brand-100 bg-brand-50/30 text-sm text-fg leading-relaxed flex gap-2 items-start">
                    <Check size={14} className="text-brand-500 shrink-0 mt-0.5" />
                    <span>{row.conGriba}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mobile: cards apiladas */}
        <div className="mt-10 md:hidden flex flex-col gap-4">
          {ROWS.map((row, i) => (
            <Reveal key={row.situacion} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                <div className="px-4 py-3 bg-surface-2 border-b border-border">
                  <p className="text-sm font-bold text-fg">{row.situacion}</p>
                </div>
                <div className="divide-y divide-border">
                  <div className="px-4 py-3 flex gap-2 items-start">
                    <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-semibold text-fg-subtle uppercase tracking-wider mb-0.5">
                        Con Excel / WhatsApp
                      </p>
                      <p className="text-sm text-fg-muted leading-relaxed">{row.sinGriba}</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex gap-2 items-start bg-brand-50/40">
                    <Check size={14} className="text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-semibold text-brand-700 uppercase tracking-wider mb-0.5">
                        Con Griba
                      </p>
                      <p className="text-sm text-fg leading-relaxed">{row.conGriba}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <CTA>Quiero operar así</CTA>
            <p className="text-sm text-fg-muted">
              Tus datos migrados a cargo nuestro.{" "}
              <span className="font-semibold text-fg">Sin lock-in.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
