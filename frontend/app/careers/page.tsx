import Link from "next/link";
import { Icon } from "../../components/ui/Icons";

type Career = {
  slug: string;
  title: string;
  eyebrow: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  skills: string[];
  projects: string;
  demand: string;
  icon: "brain" | "trending-up" | "code" | "target" | "layers" | "rocket";
  gradient: string;
  glow: string;
};

const careers: Career[] = [
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    eyebrow: "Build what comes next",
    difficulty: "Advanced",
    duration: "6–9 months",
    skills: ["Python", "Machine Learning", "Deep Learning", "LLMs"],
    projects: "12+",
    demand: "Very high",
    icon: "brain",
    gradient: "from-violet-500/20 via-violet-500/[0.05] to-transparent",
    glow: "bg-violet-500/20",
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    eyebrow: "Find signal in noise",
    difficulty: "Intermediate",
    duration: "5–8 months",
    skills: ["Python", "SQL", "Statistics", "Visualization"],
    projects: "10+",
    demand: "Very high",
    icon: "trending-up",
    gradient: "from-cyan-500/20 via-cyan-500/[0.05] to-transparent",
    glow: "bg-cyan-500/20",
  },
  {
    slug: "web-developer",
    title: "Web Developer",
    eyebrow: "Shape the digital world",
    difficulty: "Beginner",
    duration: "4–6 months",
    skills: ["React", "Next.js", "TypeScript", "APIs"],
    projects: "8+",
    demand: "High",
    icon: "code",
    gradient: "from-amber-500/20 via-amber-500/[0.05] to-transparent",
    glow: "bg-amber-500/20",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    eyebrow: "Protect what matters",
    difficulty: "Intermediate",
    duration: "5–8 months",
    skills: ["Networks", "Linux", "Ethical Hacking", "SOC"],
    projects: "9+",
    demand: "Very high",
    icon: "target",
    gradient: "from-emerald-500/20 via-emerald-500/[0.05] to-transparent",
    glow: "bg-emerald-500/20",
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    eyebrow: "Keep ideas moving",
    difficulty: "Advanced",
    duration: "6–10 months",
    skills: ["Cloud", "Docker", "Kubernetes", "CI/CD"],
    projects: "11+",
    demand: "Very high",
    icon: "layers",
    gradient: "from-rose-500/20 via-rose-500/[0.05] to-transparent",
    glow: "bg-rose-500/20",
  },
  {
    slug: "mobile-developer",
    title: "Mobile Developer",
    eyebrow: "Create experiences everywhere",
    difficulty: "Intermediate",
    duration: "4–7 months",
    skills: ["React Native", "Mobile UX", "TypeScript", "APIs"],
    projects: "8+",
    demand: "High",
    icon: "rocket",
    gradient: "from-blue-500/20 via-blue-500/[0.05] to-transparent",
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
    <Link
      href={`/roadmaps/${career.slug}`}
      className={`group relative isolate flex min-h-[430px] flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br ${career.gradient} bg-surface/65 p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.2] hover:bg-surface/90 hover:shadow-2xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7`}
    >
      <div
        className={`pointer-events-none absolute -right-24 -top-24 -z-10 h-56 w-56 rounded-full ${career.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.07)_45%,transparent_65%)] opacity-0 transition-all duration-700 group-hover:translate-x-1/2 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-white shadow-inner transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
          <Icon name={career.icon} size={22} />
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${difficultyStyles[career.difficulty]}`}
        >
          {career.difficulty}
        </span>
      </div>

      <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {career.eyebrow}
      </p>
      <div className="mt-2 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
          {career.title}
        </h2>
        <Icon
          name="arrow-up-right"
          size={19}
          className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
        />
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        <span>Typical journey</span>
        <span className="text-slate-600">/</span>
        <span className="font-medium text-slate-300">{career.duration}</span>
      </div>

      <div className="mt-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Key skills
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {career.skills.map((skill) => (
            <span
              className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors group-hover:border-white/[0.15] group-hover:text-slate-100"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Portfolio projects
          </p>
          <p className="mt-1.5 text-lg font-semibold text-white">{career.projects}</p>
        </div>
        <div className="border-l border-white/[0.08] pl-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Future demand
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {career.demand}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-56 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[35rem] h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pt-10 lg:pb-32">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-transform group-hover:-translate-x-0.5">
              <Icon name="chevron-right" size={15} className="rotate-180" />
            </span>
            Back to home
          </Link>

          <div className="hidden items-center gap-2 text-xs text-muted sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Your next chapter starts here
          </div>
        </div>

        <header className="mx-auto max-w-3xl pb-16 pt-20 text-center sm:pt-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.08] px-3.5 py-2 text-xs font-medium text-violet-200">
            <Icon name="sparkles" size={14} className="text-brand" />
            Choose with clarity
          </div>
          <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.06em] text-white sm:text-6xl lg:text-[72px]">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Every successful career begins with a decision.
          </p>
        </header>

        <section aria-label="Career paths" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <CareerCard career={career} key={career.slug} />
          ))}
        </section>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-muted">
          <Icon name="sparkles" size={14} className="text-brand" />
          Not sure where to start? Begin with the path that makes you curious.
        </p>
      </div>
    </main>
  );
}
