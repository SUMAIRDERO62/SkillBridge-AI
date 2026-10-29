import { Icon } from "../ui/Icons";

type ComparisonItem = {
  problem: string;
  solution: string;
  problemDetail: string;
  solutionDetail: string;
  icon: "layers" | "brain" | "code" | "target" | "compass" | "trending-up";
};

const comparisons: ComparisonItem[] = [
  {
    problem: "Random Tutorials",
    solution: "Structured Roadmaps",
    problemDetail: "You keep starting over without knowing what matters next.",
    solutionDetail: "A focused path turns a big career goal into your next clear step.",
    icon: "layers",
  },
  {
    problem: "Information Overload",
    solution: "Focused Learning",
    problemDetail: "More tabs create more noise, not more confidence.",
    solutionDetail: "Learn the skills that belong to your destination, in the right order.",
    icon: "brain",
  },
  {
    problem: "No Projects",
    solution: "Portfolio Projects",
    problemDetail: "Knowing concepts is not the same as proving what you can build.",
    solutionDetail: "Turn learning into work you can show, explain, and share.",
    icon: "code",
  },
  {
    problem: "No Accountability",
    solution: "Progress Tracking",
    problemDetail: "Without visibility, small gaps quietly become stalled momentum.",
    solutionDetail: "See your milestones, celebrate progress, and keep moving consistently.",
    icon: "trending-up" as const,
  },
  {
    problem: "No Career Plan",
    solution: "Career Guidance",
    problemDetail: "It is hard to know if today’s effort leads somewhere meaningful.",
    solutionDetail: "AI guidance connects your skills and projects to job readiness.",
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
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 group-hover:border-rose-300/20 group-hover:bg-rose-300/[0.04] md:rounded-r-none md:border-r-0">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-rose-300/15 bg-rose-300/[0.07] text-rose-300">
            <Icon name="x" size={14} />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-200">{item.problem}</p>
            <p className="mt-1.5 text-xs leading-5 text-muted">
              {item.problemDetail}
            </p>
          </div>
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

      <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/[0.12] to-accent/[0.05] p-5 shadow-lg shadow-brand/[0.04] transition-all duration-300 group-hover:border-emerald-300/30 group-hover:shadow-emerald-500/[0.06] md:rounded-l-none md:border-l-0">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-300/20 bg-emerald-300/10 text-emerald-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon name={item.icon} size={15} />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{item.solution}</p>
            <p className="mt-1.5 text-xs leading-5 text-slate-300">
              {item.solutionDetail}
            </p>
          </div>
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
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-[min(90%,800px)] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-72 w-72 rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="mx-auto mb-14 max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-6 bg-brand" />
          A clearer way forward
          <span className="h-px w-6 bg-brand" />
        </div>
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl lg:text-[56px]">
          The Problem Isn&apos;t Motivation.
          <span className="mt-2 block bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
            It&apos;s Direction.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
          Most students do not need more content. They need a system that
          turns effort into a future they can see.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-0">
        <div className="rounded-t-2xl border border-white/[0.08] bg-slate-950/60 p-5 md:rounded-t-none md:rounded-tl-2xl md:rounded-bl-2xl md:border-r-0">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-300/20 bg-rose-300/10 text-rose-300">
              <Icon name="x" size={16} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-200">
                Why students fail
              </p>
              <p className="mt-1 text-[11px] text-muted">The loop that keeps them stuck</p>
            </div>
          </div>
        </div>
        <div className="hidden w-12 items-center justify-center border-y border-white/[0.08] bg-slate-950/60 md:flex">
          <span className="text-xs text-slate-600">VS</span>
        </div>
        <div className="rounded-b-2xl border border-brand/20 bg-gradient-to-br from-brand/[0.12] to-accent/[0.05] p-5 md:rounded-b-none md:rounded-tr-2xl md:rounded-br-2xl md:border-l-0">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
              <Icon name="sparkles" size={16} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                How SkillBridge AI solves it
              </p>
              <p className="mt-1 text-[11px] text-slate-300">A system built for momentum</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        {comparisons.map((item, index) => (
          <ComparisonRow index={index} item={item} key={item.problem} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center">
        <div className="flex items-center gap-2 text-xs font-medium text-cyan-200">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
          From confusion to clarity
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
        </div>
        <p className="text-xs leading-5 text-muted">
          SkillBridge AI turns the scattered parts of learning into one
          focused career journey.
        </p>
      </div>
    </section>
  );
}
