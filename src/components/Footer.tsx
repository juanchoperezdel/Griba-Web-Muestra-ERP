import gribaLogo from "../assets/griba-logo.png";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col items-start gap-3">
            <img
              src={gribaLogo}
              alt="Griba"
              className="h-8 w-auto brightness-0"
            />
            <p className="text-fg-muted text-sm max-w-md leading-relaxed">
              ERP para distribuidoras y mayoristas argentinas. Equipo in-house.
            </p>
          </div>
          <p className="text-xs text-fg-subtle">
            © {new Date().getFullYear()} Griba. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
