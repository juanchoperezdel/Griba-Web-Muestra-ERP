import { CheckCircle2 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const BULLETS = [
  "Relevamiento de procesos actuales",
  "Migración de clientes, productos, listas y saldos",
  "Configuración de permisos y roles",
  "Capacitación a vendedores, depósito y administración",
  "Puesta en marcha gradual",
  "Soporte directo post implementación",
];

export default function Implementacion() {
  return (
    <section id="implementacion" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Implementación"
            title={
              <>
                No cambiás de sistema de un día para el otro.
                <br />
                <span className="text-brand-600">Migrás con un equipo que te acompaña.</span>
              </>
            }
            subtitle="Griba se implementa en paralelo con tu operación actual para que puedas ordenar datos, capacitar usuarios y migrar sin frenar ventas, reparto ni facturación."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-12 grid sm:grid-cols-2 gap-3">
            {BULLETS.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-bg"
              >
                <CheckCircle2 size={18} className="text-brand-500 shrink-0 mt-0.5" />
                <span className="text-sm text-fg font-medium">{bullet}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 text-center">
            <a
              href="#calendario"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-fg hover:bg-brand-600 text-white font-semibold rounded-full transition-all shadow-md"
            >
              Consultar cómo sería mi implementación
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
