import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [people, setPeople] = useState(3);
  const [monthlyPerPerson, setMonthlyPerPerson] = useState(700000);
  const [errorsPerWeek, setErrorsPerWeek] = useState(5);

  const hourlyRate = monthlyPerPerson / 160;
  const monthlyCost = Math.round(
    hoursPerWeek * 4.33 * people * hourlyRate +
      errorsPerWeek * 4.33 * hourlyRate * 2
  );

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section id="roi" className="py-24 lg:py-32 bg-fg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Calculá cuánto te cuesta
              <br />
              <span className="text-accent-400">operar con datos duplicados</span>
            </h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Pedidos cargados dos veces, precios desactualizados, errores en preparación, cobranzas
              que no cierran. Eso tiene un costo mensual real que casi nunca se calcula.
            </p>
            <p className="mt-6 text-sm text-white/50 border-l-2 border-accent-500 pl-4">
              Este número es estimativo. En la demo lo revisamos con tu operación real.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white text-fg rounded-2xl shadow-2xl p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-8 text-fg-muted">
                <Calculator size={18} />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Calculadora rápida
                </span>
              </div>

              <div className="space-y-7">
                {/* Hours */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-3">
                    <label className="text-sm font-semibold text-fg leading-tight">
                      Horas semanales cargando pedidos, facturas o cobranzas a mano
                    </label>
                    <span className="font-display font-bold text-xl text-fg tabular-nums shrink-0">
                      {hoursPerWeek}h
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={80}
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-surface-3 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>

                {/* People */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-3">
                    <label className="text-sm font-semibold text-fg">
                      Personas involucradas
                    </label>
                    <span className="font-display font-bold text-xl text-fg tabular-nums shrink-0">
                      {people}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={15}
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    className="w-full h-2 bg-surface-3 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>

                {/* Cost per person */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-3">
                    <label className="text-sm font-semibold text-fg leading-tight">
                      Costo mensual promedio por persona
                    </label>
                    <span className="font-display font-bold text-base text-fg tabular-nums shrink-0">
                      {formatCurrency(monthlyPerPerson)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={300000}
                    max={2000000}
                    step={50000}
                    value={monthlyPerPerson}
                    onChange={(e) => setMonthlyPerPerson(Number(e.target.value))}
                    className="w-full h-2 bg-surface-3 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>

                {/* Errors */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-3">
                    <label className="text-sm font-semibold text-fg">
                      Errores o reprocesos por semana
                    </label>
                    <span className="font-display font-bold text-xl text-fg tabular-nums shrink-0">
                      {errorsPerWeek}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={20}
                    value={errorsPerWeek}
                    onChange={(e) => setErrorsPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-surface-3 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-border">
                  <div className="rounded-xl bg-brand-500 text-white p-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-100 mb-2">
                      Costo estimado mensual de operar con procesos manuales
                    </p>
                    <p className="font-display text-4xl sm:text-5xl font-extrabold tabular-nums leading-none">
                      {formatCurrency(monthlyCost)}
                    </p>
                    <p className="text-xs text-brand-100 mt-3">por mes, estimado</p>
                  </div>
                </div>

                <a
                  href="#calendario"
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-fg hover:bg-brand-600 text-white font-semibold rounded-full transition-all"
                >
                  Validar este número en una demo
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
