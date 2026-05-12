import { Mail, Globe } from "lucide-react";

const NAV_LINKS = [
  { href: "#flujo", label: "Cómo funciona" },
  { href: "#modulos", label: "Módulos" },
  { href: "#roi", label: "Calculadora ROI" },
  { href: "#implementacion", label: "Implementación" },
  { href: "#faqs", label: "Preguntas" },
  { href: "#calendario", label: "Agendar demo" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand + claim */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="font-display font-extrabold tracking-tight text-2xl text-fg"
                style={{ letterSpacing: "-0.04em" }}
              >
                Griba
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            </div>
            <p className="text-fg-muted max-w-sm leading-relaxed">
              ERP para distribuidoras y mayoristas argentinas. Equipo in-house. Hecho para que tu
              operación deje de depender del WhatsApp y el Excel.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-fg-muted mb-4">
              Navegación
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-fg hover:text-brand-600 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-fg-muted mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-fg">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-fg-subtle" />
                <a
                  href="mailto:hola@griba.com.ar"
                  className="text-fg hover:text-brand-600 transition-colors"
                >
                  hola@griba.com.ar
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-fg-subtle" />
                <a
                  href="https://griba.com.ar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-600 hover:text-brand-700 underline-offset-4 hover:underline"
                >
                  griba.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-fg-subtle">
          <p>© {new Date().getFullYear()} Griba. Todos los derechos reservados.</p>
          <p>Argentina · Equipo in-house</p>
        </div>
      </div>
    </footer>
  );
}
