import { Boxes, Smartphone, CalendarCheck, ArrowRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import PlaceholderBox from "./ui/PlaceholderBox";
import Reveal from "./ui/Reveal";

type Feature = {
  icon: typeof Boxes;
  badge: string;
  title: string;
  body: string;
  visualLabel: string;
  visualHint: string;
};

const FEATURES: Feature[] = [
  {
    icon: Boxes,
    badge: "Stock multi-sucursal",
    title: "Todas tus sucursales viendo el mismo stock",
    body: "Un cliente entra a tu local, no encuentra el producto. En vez de perder la venta, el vendedor mira la pantalla y sabe que hay en otra sucursal. Lo reserva, lo factura desde donde está, y lo despacha desde donde haya stock. Sin llamadas entre locales, sin WhatsApp, sin Excel.",
    visualLabel: "SCREENSHOT_STOCK_MULTISUCURSAL",
    visualHint: "Vista con stock cruzado entre 3+ locales y botón de transferencia",
  },
  {
    icon: Smartphone,
    badge: "App preventista",
    title: "El preventista carga el pedido en el celular y ya está",
    body: "Tu vendedor está en la calle, frente al cliente. Mete el pedido en su celular, ve el saldo de cuenta corriente al instante, aplica la lista mayorista que corresponde, valida el stock y manda el pedido a depósito. Cuando vuelve a la oficina, no recarga nada.",
    visualLabel: "SCREENSHOT_APP_PREVENTISTA_MOBILE",
    visualHint: "Pantalla mobile del preventista con pedido + cuenta corriente del cliente",
  },
  {
    icon: CalendarCheck,
    badge: "Cierre de mes",
    title: "El mes cierra solo",
    body: "Facturación al día. Cobranzas conciliadas con banco automáticamente. AFIP/ARCA en regla. Reportes listos para tu contadora interna o tu estudio externo. El cierre de mes pasa de 5-7 días a 1.",
    visualLabel: "SCREENSHOT_DASHBOARD_CIERRE_MES",
    visualHint: "Dashboard con KPIs de cierre y semáforo verde en AFIP/ARCA",
  },
];

export default function Features() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Cómo se ve tu día con Griba"
            title={
              <>
                Lo que cambia en el día a día
                <br />
                <span className="text-brand-600">cuando entrás a Griba</span>
              </>
            }
            subtitle="No son features sueltos. Son escenas cotidianas que dejan de ser problema."
          />
        </Reveal>

        <div className="mt-20 flex flex-col gap-24">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const isReversed = i % 2 === 1;
            return (
              <Reveal key={f.title}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Text */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-semibold mb-5">
                      <Icon size={14} />
                      {f.badge}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-fg leading-tight mb-5">
                      {f.title}
                    </h3>
                    <p className="text-lg text-fg-muted leading-relaxed">{f.body}</p>
                    {i === 2 && (
                      <p className="mt-6 text-sm text-fg-subtle border-l-2 border-accent-500 pl-4">
                        Implementación en paralelo de 30 días: tu sistema actual sigue funcionando
                        hasta que vos digas que está listo el cambio.
                      </p>
                    )}
                  </div>

                  {/* Visual */}
                  <div className="rounded-2xl border border-border bg-surface-2 overflow-hidden shadow-md">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white border-b border-border">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <PlaceholderBox
                      label={f.visualLabel}
                      hint={f.visualHint}
                      aspect="video"
                      className="rounded-none border-0"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Caja de proof */}
        <Reveal>
          <div className="mt-20 rounded-2xl border border-border bg-brand-50 p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <p className="text-lg text-fg max-w-2xl">
              <span className="font-bold">
                [PLACEHOLDER_NOMBRE_CLIENTE]
              </span>{" "}
              procesó <span className="font-bold text-brand-600">20.000 facturas en 3 meses</span>{" "}
              sin sumar nadie al equipo.
            </p>
            <a
              href="#caso"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 whitespace-nowrap"
            >
              Ver caso completo
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
