import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../../components/ui/Icons";
import { careers, type Career } from "../../lib/careers";

export const metadata: Metadata = {
  title: "Choose Your Future | SkillBridge AI",
  description:
    "Choose a career direction and follow a focused path from learning to earning.",
};

const careerVisuals = {
  "ai-engineer": {
    icon: "brain",
    gradient: "from-violet-500/25 via-violet-500/[0.06] to-transparent",
    glow: "bg-violet-500/25",
    accent: "text-violet-300",
  },
  "data-scientist": {
    icon: "trending-up",
    gradient: "from-cyan-500/25 via-cyan-500/[0.06] to-transparent",
    glow: "bg-cyan-500/25",
    accent: "text-cyan-300",
  },
  "web-developer": {
    icon: "code",
    gradient: "from-amber-500/25 via-amber-500/[0.06] to-transparent",
    glow: "bg-amber-500/20",
    accent: "text-amber-300",
  },
  "cyber-security": {
    icon: "target",
    gradient: "from-emerald-500/25 via-emerald-500/[0.06] to-transparent",
    glow: "bg-emerald-500/20",
    accent: "text-emerald-300",
  },
  "devops-engineer": {
    icon: "layers",
    gradient: "from-rose-500/25 via-rose-500/[0.06] to-transparent",
    glow: "bg-rose-500/20",
    accent: "text-rose-300",
  },
  "mobile-developer": {
    icon: "rocket",
    gradient: "from-blue-500/25 via-blue-500/[0.06] to-transparent",
    glow: "bg-blue-500/20",
    accent: "text-blue-300",
  },
} as const;

const difficultyStyles: Record<Career["difficulty"], string> = {
  Beginner: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
  Intermediate: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
  Advanced: "border-violet-300/20 bg-violet-300/10 text-violet-200",
};

function CareerCard({ career, index }: { career: Career; index: number }) {
  const visual = careerVisuals[career.slug as keyof typeof careerVisuals];

  return (
    <Link
      href={`/roadmaps/${career.slug}`}
      className={`group relative isolate flex min-h-[462px] flex-col overflow-hidden rounded-[26px] border border-white/[0.1] bg-gradient-to-br ${visual.gradient} bg-surface/65 p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.24] hover:bg-surface/90 hover:shadow-2xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7`}
    >
      <div
        className={`pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full ${visual.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_22%,rgba(255,255,255,0.08)_45%,transparent_68%)] opacity-0 transition-all duration-700 group-hover:translate-x-1/2 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] ${visual.accent} shadow-inner transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
        >
          <Icon name={visual.icon} size={22} />
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/25">
          0{index + 1}
        </span>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-2xl font-semibold tracking-[-0.045em] text-white">
            {career.title}
          </h2>
          <span
            className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${difficultyStyles[career.difficulty]}`}
          >
            {career.difficulty}
          </span>
        </div>
        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
          {career.description}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-muted">
        <span className={`h-1.5 w-1.5 rounded-full bg-current ${visual.accent}`} />
        <span>Estimated journey</span>
        <span className="text-slate-600">/</span>
        <span className="font-medium text-slate-200">{career.duration}</span>
      </div>

      <div className="mt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Core skills
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {career.skills.map((skill) => (
            <span
              className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors group-hover:border-white/[0.16] group-hover:text-white"
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
          <p className="mt-1.5 text-sm font-semibold text-white">{career.projects}</p>
        </div>
        <div className="border-l border-white/[0.08] pl-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Future demand
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {career.futureDemand}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="text-[10px] text-slate-500">
          Salary potential: Placeholder
        </span>
        <span className={`flex items-center gap-1 text-xs font-semibold ${visual.accent}`}>
          Explore path
          <Icon
            name="arrow-up-right"
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.17),transparent_60%)]" />
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
          <span className="hidden items-center gap-2 text-xs text-muted sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Your next chapter starts here
          </span>
        </div>

        <header className="mx-auto max-w-3xl pb-16 pt-20 text-center sm:pt-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.08] px-3.5 py-2 text-xs font-medium text-violet-200">
            <Icon name="compass" size={14} className="text-brand" />
            A decision becomes a direction
          </div>
          <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.06em] text-white sm:text-6xl lg:text-[72px]">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Every successful career begins with a decision.
            <br className="hidden sm:block" /> Pick a direction and start moving
            with clarity.
          </p>
        </header>

        <section
          aria-label="Career destinations"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {careers.map((career, index) => (
            <CareerCard career={career} index={index} key={career.slug} />
          ))}
        </section>

        <div className="mx-auto mt-12 flex max-w-xl flex-col items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-2 text-xs font-medium text-muted">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand" />
            Your future is a direction, not a deadline.
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand" />
          </div>
          <p className="text-xs leading-5 text-slate-500">
            Choose the path that makes you curious. SkillBridge AI will help
            you turn that curiosity into momentum.
          </p>
        </div>
      </div>
    </main>
  );
}
