import { motion } from "motion/react";
import { ArrowDown, Truck } from "lucide-react";

function DashboardMockup() {
  const kpis = [
    { label: "Pedidos del día", value: "47", sub: "12 sin preparar" },
    { label: "Stock comprometido", value: "312 un.", sub: "1.284 disponibles" },
    { label: "En reparto", value: "9", sub: "3 por confirmar entrega" },
    { label: "Cobranza hoy", value: "$2.340.000", sub: "8 clientes con deuda vencida", alert: true },
  ];

  const pedidos = [
    { id: "#4821", cliente: "Superm. El Puente", estado: "Preparando", color: "amber", monto: "$184.300" },
    { id: "#4820", cliente: "Dist. Norte SRL", estado: "En reparto", color: "blue", monto: "$92.100" },
    { id: "#4819", cliente: "Almacén Central", estado: "Entregado", color: "green", monto: "$315.000" },
    { id: "#4818", cliente: "Mayorista Suárez", estado: "Facturado", color: "gray", monto: "$207.500" },
  ];

  return (
    <div className="relative rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-fg-subtle font-mono">app.griba.com.ar</span>
        <span className="ml-auto text-xs text-fg-subtle hidden sm:block">
          Distribuidora Ejemplo SA · Lunes 12 mayo
        </span>
      </div>

      {/* App shell */}
      <div className="flex min-h-[300px] sm:min-h-[340px]">
        {/* Sidebar */}
        <div className="hidden md:flex w-40 border-r border-border flex-col gap-0.5 p-2.5 bg-surface shrink-0">
          {[
            { label: "Dashboard", active: true },
            { label: "Pedidos", active: false },
            { label: "Stock", active: false },
            { label: "Clientes", active: false },
            { label: "Reparto", active: false },
            { label: "Cobranzas", active: false },
            { label: "Reportes", active: false },
          ].map(({ label, active }) => (
            <div
              key={label}
              className={`text-xs px-3 py-2 rounded-lg font-medium ${
                active ? "bg-brand-500 text-white" : "text-fg-muted"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 sm:p-4 space-y-3 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-fg">Dashboard operativo</span>
            <span className="text-xs text-fg-subtle hidden sm:block">Actualizado hace 2 min</span>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="bg-surface rounded-xl border border-border p-3 relative">
                {kpi.alert && (
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
                )}
                <p className="text-[10px] text-fg-subtle font-medium leading-tight">{kpi.label}</p>
                <p className="font-display text-base sm:text-lg font-bold text-fg mt-1 leading-none">
                  {kpi.value}
                </p>
                <p className="text-[10px] text-fg-subtle mt-1 leading-tight">{kpi.sub}</p>
              </div>
            ))}
          </div>

          {/* Orders table */}
          <div className="bg-surface rounded-xl border border-border overflow-hidden">
            <div className="px-3 py-2 border-b border-border flex items-center justify-between bg-surface-2">
              <span className="text-xs font-semibold text-fg">Pedidos del día</span>
              <span className="text-[10px] text-brand-600 font-semibold">Ver todos →</span>
            </div>
            <div className="divide-y divide-border">
              {pedidos.map((p) => (
                <div
                  key={p.id}
                  className="grid grid-cols-[auto_1fr_auto] gap-x-3 px-3 py-2 items-center"
                >
                  <span className="font-mono text-[10px] text-fg-subtle">{p.id}</span>
                  <span className="text-xs text-fg font-medium truncate">{p.cliente}</span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`hidden sm:inline text-[10px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${
                        p.color === "amber"
                          ? "bg-amber-100 text-amber-700"
                          : p.color === "blue"
                          ? "bg-blue-50 text-blue-700"
                          : p.color === "green"
                          ? "bg-green-50 text-green-700"
                          : "bg-surface-3 text-fg-muted"
                      }`}
                    >
                      {p.estado}
                    </span>
                    <span className="text-xs font-semibold text-fg whitespace-nowrap">{p.monto}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-bg">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent-100 rounded-full blur-[120px] opacity-60 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-50 rounded-full blur-[120px] opacity-70 transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border text-xs font-semibold text-fg-muted shadow-sm">
            <Truck size={14} className="text-brand-500" />
            No necesitás más Excel
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-fg leading-[1.08] max-w-4xl mx-auto text-center"
        >
          Tu distribuidora necesita saber{" "}
          <span className="text-brand-600">
            qué vendió, qué puede entregar y qué tiene que cobrar.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-center text-lg sm:text-xl text-fg-muted leading-relaxed"
        >
          Griba conecta vendedores, depósito, administración y reparto para que cada pedido avance
          sin reprocesos, sin precios viejos y sin stock fantasma.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#calendario"
            className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-fg hover:bg-brand-600 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Agendar demo para distribuidoras
          </a>
          <a
            href="#flujo"
            className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-white text-fg hover:text-brand-600 border border-border hover:border-brand-500 font-semibold rounded-full transition-all"
          >
            Ver cómo funciona
            <ArrowDown size={16} />
          </a>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-20 max-w-5xl mx-auto"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
