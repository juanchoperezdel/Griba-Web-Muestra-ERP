import { AlertTriangle, CreditCard, Tag, MessageSquare, FileText, GitBranch } from "lucide-react";
import Reveal from "./ui/Reveal";
import CTA from "./ui/CTA";

const PAINS = [
  {
    icon: AlertTriangle,
    title: "Vendiste algo que no había.",
    body: "El vendedor tomó el pedido sin ver stock real, stock comprometido o faltantes de depósito.",
  },
  {
    icon: CreditCard,
    title: "El cliente estaba pasado de cuenta.",
    body: "El pedido avanzó igual porque nadie vio la deuda o el límite comercial a tiempo.",
  },
  {
    icon: Tag,
    title: "El precio estaba viejo.",
    body: "Listas por cliente, zona, volumen o canal circulando en planillas desactualizadas.",
  },
  {
    icon: MessageSquare,
    title: "Depósito prepara con WhatsApp abierto.",
    body: "Cambios, faltantes, reemplazos y urgencias se resuelven por chat, sin trazabilidad.",
  },
  {
    icon: FileText,
    title: "Facturás después de repartir.",
    body: "Administración corre atrás de remitos, facturas, cobranzas y pedidos ya entregados.",
  },
  {
    icon: GitBranch,
    title: "No sabés qué quedó pendiente.",
    body: "Pedidos tomados, preparados, facturados, entregados y cobrados viven en lugares distintos.",
  },
];

export default function PainStrip() {
  return (
    <section className="bg-fg text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center leading-tight max-w-2xl mx-auto">
            Si esto te pasa todas las semanas, el problema no es tu equipo.
            <span className="text-accent-400"> Es tu sistema.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAINS.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <Reveal key={pain.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors">
                  <Icon size={20} className="text-accent-400 mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-2 leading-snug">
                    "{pain.title}"
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">{pain.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-12 flex justify-center">
            <CTA variant="primary">
              Quiero salir de esto
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
