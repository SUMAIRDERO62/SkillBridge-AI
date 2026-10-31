import { Icon } from "../ui/Icons";

type ValueCard = {
  title: string;
  description: string;
  icon: "compass" | "layers" | "rocket" | "sparkles";
  accent: string;
  background: string;
  glow: string;
};

const valueCards: ValueCard[] = [
  {
    title: "Career Paths",
    description: "Choose a destination before starting the journey.",
    icon: "compass",
    accent: "text-violet-300",
    background: "bg-violet-400/10 ring-violet-300/20",
    glow: "bg-brand/15",
  },
  {
    title: "Learning Roadmaps",
    description: "Follow structured learning paths without confusion.",
    icon: "layers",
    accent: "text-cyan-300",
    background: "bg-cyan-400/10 ring-cyan-300/20",
    glow: "bg-accent/15",
  },
  {
    title: "Portfolio Projects",
    description: "Turn skills into proof through real projects.",
    icon: "rocket",
    accent: "text-amber-300",
    background: "bg-amber-400/10 ring-amber-300/20",
    glow: "bg-amber-400/10",
  },
  {
    title: "AI Guidance",
    description: "Get direction whenever you feel stuck.",
    icon: "sparkles",
    accent: "text-emerald-300",
    background: "bg-emerald-400/10 ring-emerald-300/20",
    glow: "bg-emerald-400/10",
  },
];

function ValueCard({ card, index }: { card: ValueCard; index: number }) {
  return (
    <article
      className="motion-card-in group relative isolate overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-950/60 p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-black/20 sm:p-7"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`pointer-events-none absolute -right-14 -top-14 -z-10 h-40 w-40 rounded-full ${card.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.06)_48%,transparent_70%)] opacity-0 transition-all duration-700 group-hover:translate-x-1/2 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 ${card.background} ${card.accent}`}
        >
          <Icon name={card.icon} size={20} />
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
          0{index + 1}
        </span>
      </div>

      <h3 className="relative mt-7 text-lg font-semibold tracking-[-0.025em] text-white">
        {card.title}
      </h3>
      <p className="relative mt-3 min-h-[48px] text-sm leading-6 text-muted">
        {card.description}
      </p>

      <div className="relative mt-7 h-px overflow-hidden bg-white/[0.08]">
        <div
          className={`motion-progress h-full w-1/4 bg-current transition-all duration-500 group-hover:w-3/4 ${card.accent}`}
        />
      </div>
    </article>
  );
}

export default function Stats() {
  return (
    <section
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
      aria-labelledby="value-section-title"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-[min(90%,760px)] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[120px]" />

      <div className="mx-auto mb-12 max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-6 bg-brand" />
          Your career command center
          <span className="h-px w-6 bg-brand" />
        </div>

        <h2
          id="value-section-title"
          className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[42px]"
        >
          Everything You Need To Move Forward
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          From career selection to job readiness, SkillBridge AI keeps
          everything in one place.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {valueCards.map((card, index) => (
          <ValueCard card={card} index={index} key={card.title} />
        ))}
      </div>
    </section>
  );
}
