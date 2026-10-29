import { Icon } from "../ui/Icons";

const valueMetrics = [
  {
    value: "06",
    label: "Career Paths",
    description: "Choose a future that fits your ambition.",
    icon: "compass" as const,
    accent: "text-violet-300",
    iconBackground: "bg-violet-400/10 ring-violet-300/20",
    glow: "bg-brand/15",
  },
  {
    value: "01",
    label: "Learning Roadmap",
    description: "One clear path, without the noise.",
    icon: "layers" as const,
    accent: "text-cyan-300",
    iconBackground: "bg-cyan-400/10 ring-cyan-300/20",
    glow: "bg-accent/15",
  },
  {
    value: "∞",
    label: "Portfolio Projects",
    description: "Turn every skill into proof of work.",
    icon: "rocket" as const,
    accent: "text-amber-300",
    iconBackground: "bg-amber-400/10 ring-amber-300/20",
    glow: "bg-amber-400/10",
  },
  {
    value: "24/7",
    label: "AI Guidance",
    description: "Get unstuck and keep moving forward.",
    icon: "sparkles" as const,
    accent: "text-emerald-300",
    iconBackground: "bg-emerald-400/10 ring-emerald-300/20",
    glow: "bg-emerald-400/10",
  },
];

export default function Stats() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-5 sm:px-8"
      aria-label="What SkillBridge AI helps you do"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-48 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.06] blur-[100px]" />

      <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-slate-950/60 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_15%,rgba(139,92,246,0.07),transparent_45%,rgba(6,182,212,0.05),transparent_80%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:52px_52px]" />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4">
          {valueMetrics.map((metric, index) => (
            <div
              className={`group relative p-6 transition-colors duration-300 hover:bg-white/[0.035] sm:p-7 lg:p-8 ${
                index < valueMetrics.length - 1
                  ? "border-b border-white/[0.08] lg:border-b-0 lg:border-r"
                  : ""
              } ${index === 0 || index === 2 ? "sm:border-r sm:border-white/[0.08] lg:border-r" : ""}`}
              key={metric.label}
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${metric.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 ${metric.iconBackground} ${metric.accent}`}
                >
                  <Icon name={metric.icon} size={18} />
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
                  0{index + 1}
                </span>
              </div>

              <p className="relative mt-7 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                {metric.value}
              </p>
              <h2 className={`relative mt-2 text-sm font-semibold ${metric.accent}`}>
                {metric.label}
              </h2>
              <p className="relative mt-2 max-w-[190px] text-xs leading-5 text-muted">
                {metric.description}
              </p>

              <div className="relative mt-6 h-px overflow-hidden bg-white/[0.08]">
                <div
                  className={`h-full w-1/4 bg-current transition-all duration-500 group-hover:w-3/4 ${metric.accent}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
