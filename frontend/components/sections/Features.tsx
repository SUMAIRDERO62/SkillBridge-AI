import { Icon } from "../ui/Icons";

type ComparisonItem = {
  problem: string;
  solution: string;
  icon: "layers" | "brain" | "code" | "trending-up" | "compass";
};

const comparisons: ComparisonItem[] = [
  {
    problem: "Random Tutorials",
    solution: "Structured Career Paths",
    icon: "layers",
  },
  {
    problem: "Information Overload",
    solution: "Clear Learning Roadmaps",
    icon: "brain",
  },
  {
    problem: "No Portfolio Projects",
    solution: "Portfolio-Based Learning",
    icon: "code",
  },
  {
    problem: "No Progress Tracking",
    solution: "Progress Tracking",
    icon: "trending-up",
  },
  {
    problem: "No Career Plan",
    solution: "AI Career Guidance",
    icon: "compass",
  },
];

function ComparisonRow({
  item,
  index,
}: {
  item: ComparisonItem;
  index: number;
}) {
  return (
    <div className="group relative grid gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-0">
      <div className="relative overflow-hidden rounded-2xl border border-rose-300/10 bg-rose-300/[0.025] p-5 transition-all duration-300 group-hover:border-rose-300/25 group-hover:bg-rose-300/[0.05] md:rounded-r-none md:border-r-0">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-rose-300/15 bg-rose-300/[0.07] text-rose-300 transition-transform duration-300 group-hover:rotate-[-6deg]">
            <Icon name="x" size={14} />
          </span>
          <span className="text-sm font-medium text-slate-300">
            {item.problem}
          </span>
        </div>
        <span className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.18em] text-white/15">
          0{index + 1}
        </span>
      </div>

      <div className="relative hidden w-12 items-center justify-center md:flex">
        <span className="absolute h-px w-full bg-gradient-to-r from-rose-300/20 via-white/20 to-emerald-300/30" />
        <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-xs text-muted transition-all duration-300 group-hover:border-brand/40 group-hover:text-white">
          →
        </span>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-emerald-300/15 bg-gradient-to-br from-emerald-300/[0.08] to-brand/[0.06] p-5 transition-all duration-300 group-hover:border-emerald-300/35 group-hover:shadow-lg group-hover:shadow-emerald-500/[0.06] md:rounded-l-none md:border-l-0">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-300/20 bg-emerald-300/10 text-emerald-300 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
            <Icon name={item.icon} size={15} />
          </span>
          <span className="text-sm font-semibold text-white">
            {item.solution}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
      id="projects"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-[min(90%,800px)] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 top-1/2 -z-10 h-72 w-72 rounded-full bg-rose-500/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-72 w-72 rounded-full bg-emerald-400/[0.05] blur-[120px]" />

      <div className="mx-auto mb-14 max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-6 bg-brand" />
          Why SkillBridge AI exists
          <span className="h-px w-6 bg-brand" />
        </div>

        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl lg:text-[56px]">
          Stop Guessing.
          <span className="mt-2 block bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
            Start Building.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Most students don&apos;t fail because they can&apos;t learn.
          <br className="hidden sm:block" />
          They fail because they don&apos;t know what to learn next.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-0">
        <div className="rounded-t-2xl border border-rose-300/15 bg-slate-950/60 p-5 md:rounded-t-none md:rounded-tl-2xl md:rounded-bl-2xl md:border-r-0">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-300/20 bg-rose-300/10 text-rose-300">
              <Icon name="target" size={17} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-200">
                What Most Students Experience
              </p>
              <p className="mt-1 text-[11px] text-muted">
                The frustration of learning without direction
              </p>
            </div>
          </div>
        </div>

        <div className="hidden w-12 items-center justify-center border-y border-white/[0.08] bg-slate-950/60 md:flex">
          <span className="text-xs font-semibold tracking-[0.14em] text-slate-600">
            VS
          </span>
        </div>

        <div className="rounded-b-2xl border border-emerald-300/15 bg-gradient-to-br from-emerald-300/[0.08] to-brand/[0.06] p-5 md:rounded-b-none md:rounded-tr-2xl md:rounded-br-2xl md:border-l-0">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
              <Icon name="sparkles" size={17} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                How SkillBridge AI Helps
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                A clearer system for building your future
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        {comparisons.map((item, index) => (
          <ComparisonRow index={index} item={item} key={item.problem} />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 text-xs font-medium text-cyan-200">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
          From confusion to clarity
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
        </div>
        <p className="max-w-lg text-xs leading-5 text-muted">
          SkillBridge AI gives your effort somewhere to go — from the first
          career decision to the skills, projects, and guidance that make you
          job ready.
        </p>
      </div>
    </section>
  );
}
