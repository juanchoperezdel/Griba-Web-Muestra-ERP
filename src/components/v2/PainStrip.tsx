import { FileSpreadsheet, Clock, AlertCircle } from "lucide-react";
import Reveal from "../ui/Reveal";
import CTA from "../ui/CTA";

const PAINS = [
  {
    icon: FileSpreadsheet,
    title: "Horas tiradas en tareas que no facturan",
    body: "Pasar planillas al sistema, copiar pedidos del WhatsApp al stock, cargar la misma venta dos veces. Tu equipo cobra para resolver clientes, no para mover datos.",
  },
  {
    icon: Clock,
    title: "Sistemas que no se hablan entre ellos",
    body: "Uno para ventas, otro para stock, planillas para todo lo que falta. Cada vez que algo falla, alguien tiene que cruzar los datos —y cada cruce manual es un error esperando.",
  },
  {
    icon: AlertCircle,
    title: "Plata atrapada en procesos que no podés ver",
    body: "Sin reportes en tiempo real no sabés cuánto stock tenés realmente, qué cliente te debe, ni dónde estás perdiendo margen. Decidís a ciegas.",
  },
];

export default function PainStrip() {
  return (
    <section className="bg-fg text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center leading-tight max-w-2xl mx-auto">
            Tu equipo no es lento.
            <span className="text-accent-400"> Tu sistema sí.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-center text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Si todavía mandás Excels por WhatsApp y cargás datos a mano de un sistema a otro, no es
            un problema de gente. Es un problema de operación.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAINS.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <Reveal key={pain.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-accent-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 leading-snug">
                    {pain.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">{pain.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-12 text-center text-lg font-semibold text-white max-w-2xl mx-auto leading-snug">
            Dejá de pagar sueldos para mover datos. Empezá a pagarlos para vender.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-8 flex justify-center">
            <CTA variant="primary">Quiero salir de esto</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
