import { Icon } from "../ui/Icons";

type Career = {
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  skills: string[];
  projects: string;
  growth: string;
  icon: "brain" | "trending-up" | "code" | "target" | "layers" | "rocket";
  color: string;
  glow: string;
};

const careers: Career[] = [
  {
    title: "AI Engineer",
    difficulty: "Advanced",
    duration: "6–9 Months",
    skills: ["Python", "Machine Learning", "Deep Learning", "LLMs"],
    projects: "12+",
    growth: "High Demand",
    icon: "brain",
    color: "from-violet-500/20 via-violet-500/[0.04] to-transparent",
    glow: "bg-violet-500/20",
  },
  {
    title: "Data Scientist",
    difficulty: "Intermediate",
    duration: "5–8 Months",
    skills: ["Python", "SQL", "Statistics", "Visualization"],
    projects: "10+",
    growth: "High Demand",
    icon: "trending-up",
    color: "from-cyan-500/20 via-cyan-500/[0.04] to-transparent",
    glow: "bg-cyan-500/20",
  },
  {
    title: "Web Developer",
    difficulty: "Beginner",
    duration: "4–6 Months",
    skills: ["React", "Next.js", "TypeScript", "APIs"],
    projects: "8+",
    growth: "Strong Growth",
    icon: "code",
    color: "from-amber-500/20 via-amber-500/[0.04] to-transparent",
    glow: "bg-amber-500/20",
  },
  {
    title: "Cyber Security",
    difficulty: "Intermediate",
    duration: "5–8 Months",
    skills: ["Networks", "Linux", "Ethical Hacking", "SOC"],
    projects: "9+",
    growth: "High Demand",
    icon: "target",
    color: "from-emerald-500/20 via-emerald-500/[0.04] to-transparent",
    glow: "bg-emerald-500/20",
  },
  {
    title: "DevOps Engineer",
    difficulty: "Advanced",
    duration: "6–10 Months",
    skills: ["Cloud", "Docker", "Kubernetes", "CI/CD"],
    projects: "11+",
    growth: "Very High Demand",
    icon: "layers",
    color: "from-rose-500/20 via-rose-500/[0.04] to-transparent",
    glow: "bg-rose-500/20",
  },
  {
    title: "Mobile Developer",
    difficulty: "Intermediate",
    duration: "4–7 Months",
    skills: ["React Native", "Mobile UX", "TypeScript", "APIs"],
    projects: "8+",
    growth: "Strong Growth",
    icon: "rocket",
    color: "from-blue-500/20 via-blue-500/[0.04] to-transparent",
    glow: "bg-blue-500/20",
  },
];

const difficultyStyles: Record<Career["difficulty"], string> = {
  Beginner: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
  Intermediate: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
  Advanced: "border-violet-300/20 bg-violet-300/10 text-violet-200",
};

function CareerCard({ career }: { career: Career }) {
  return (
    <article
      className={`group relative isolate overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${career.color} bg-surface/75 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.2] hover:shadow-2xl hover:shadow-black/30 sm:p-6`}
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 -z-10 h-48 w-48 rounded-full ${career.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.06)_45%,transparent_65%)] opacity-0 transition-all duration-700 group-hover:translate-x-1/2 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
          <Icon name={career.icon} size={20} />
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${difficultyStyles[career.difficulty]}`}
        >
          {career.difficulty}
        </span>
      </div>

      <div className="mt-7 flex items-end justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
          {career.title}
        </h3>
        <Icon
          name="arrow-up-right"
          size={18}
          className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span>Typical path</span>
        <span className="text-slate-600">/</span>
        <span className="font-medium text-slate-300">{career.duration}</span>
      </div>

      <div className="mt-5 flex min-h-[76px] flex-wrap content-start gap-1.5">
        {career.skills.map((skill) => (
          <span
            className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[10px] font-medium text-slate-300 transition-colors group-hover:border-white/[0.14] group-hover:text-slate-200"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
            Portfolio projects
          </p>
          <p className="mt-1 text-sm font-semibold text-white">{career.projects}</p>
        </div>
        <div className="border-l border-white/[0.08] pl-3">
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
            Future growth
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {career.growth}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CareerPaths() {
  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/[0.06] bg-slate-900/30"
      id="roadmaps"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[min(90%,900px)] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent" />
            Choose your direction
            <span className="h-px w-6 bg-accent" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[44px]">
            Choose Your Destination
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
            Every roadmap starts with a decision. Pick a career path and start
            moving with clarity.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <CareerCard career={career} key={career.title} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted">
          <Icon name="sparkles" size={14} className="text-brand" />
          Not sure yet? Start with a guided career match.
        </div>
      </div>
    </section>
  );
}
