import Reveal from "./ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-fg text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Ordená tu distribuidora
            <br />
            <span className="text-accent-400">antes de que crecer sea el problema.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Agendá una demo y veamos cómo se vería tu operación con pedidos, stock, reparto,
            facturación y cobranzas conectados.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <a
              href="#calendario"
              className="inline-flex justify-center items-center gap-2 px-9 py-4 bg-white text-fg hover:bg-accent-50 font-bold text-lg rounded-full transition-all shadow-xl"
            >
              Agendar demo para distribuidoras
            </a>
            <p className="mt-4 text-sm text-white/40">
              30 minutos. Sin compromiso. Con foco en tu operación real.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
