import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../../../../components/ui/Icons";

export const metadata: Metadata = {
  title: "AI Engineer Roadmap | SkillBridge AI",
  description:
    "Follow a practical AI Engineer roadmap from Python fundamentals to internship preparation.",
};

type RoadmapStep = {
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  icon:
    | "code"
    | "layers"
    | "trending-up"
    | "brain"
    | "rocket"
    | "briefcase"
    | "target"
    | "sparkles";
  status: "complete" | "current" | "upcoming";
};

const steps: RoadmapStep[] = [
  {
    title: "Python Fundamentals",
    description:
      "Learn the language that powers modern AI: syntax, functions, data structures, OOP, and clean coding habits.",
    duration: "3 weeks",
    difficulty: "Beginner",
    icon: "code",
    status: "complete",
  },
  {
    title: "NumPy",
    description:
      "Work confidently with arrays, vectorized operations, linear algebra, and the numerical foundations of machine learning.",
    duration: "1–2 weeks",
    difficulty: "Beginner",
    icon: "layers",
    status: "complete",
  },
  {
    title: "Pandas",
    description:
      "Transform messy data into useful insight with DataFrames, joins, grouping, cleaning, and exploratory analysis.",
    duration: "2 weeks",
    difficulty: "Beginner",
    icon: "trending-up",
    status: "current",
  },
  {
    title: "Data Visualization",
    description:
      "Tell the story behind the data using clear charts, dashboards, and visual explanations that make patterns obvious.",
    duration: "1–2 weeks",
    difficulty: "Beginner",
    icon: "trending-up",
    status: "upcoming",
  },
  {
    title: "Machine Learning",
    description:
      "Build a strong model-building foundation with supervised learning, evaluation, feature engineering, and experimentation.",
    duration: "6 weeks",
    difficulty: "Intermediate",
    icon: "target",
    status: "upcoming",
  },
  {
    title: "Deep Learning",
    description:
      "Understand neural networks, optimization, computer vision, and sequence models through hands-on implementation.",
    duration: "6–8 weeks",
    difficulty: "Advanced",
    icon: "brain",
    status: "upcoming",
  },
  {
    title: "LLMs",
    description:
      "Learn how modern language models work and ship useful applications with prompting, embeddings, RAG, and evaluation.",
    duration: "4–6 weeks",
    difficulty: "Advanced",
    icon: "sparkles",
    status: "upcoming",
  },
  {
    title: "AI Projects",
    description:
      "Turn your knowledge into proof of work by building practical AI products that solve real problems.",
    duration: "4–6 weeks",
    difficulty: "Advanced",
    icon: "rocket",
    status: "upcoming",
  },
  {
    title: "Portfolio Building",
    description:
      "Package your strongest projects into a credible portfolio with clear case studies, demos, and technical decisions.",
    duration: "2–3 weeks",
    difficulty: "Intermediate",
    icon: "layers",
    status: "upcoming",
  },
  {
    title: "Internship Preparation",
    description:
      "Prepare for the next opportunity with interview practice, resume feedback, applications, and confident storytelling.",
    duration: "2–4 weeks",
    difficulty: "Intermediate",
    icon: "briefcase",
    status: "upcoming",
  },
];

const difficultyStyles: Record<RoadmapStep["difficulty"], string> = {
  Beginner: "text-emerald-300 bg-emerald-400/10 border-emerald-300/20",
  Intermediate: "text-cyan-300 bg-cyan-400/10 border-cyan-300/20",
  Advanced: "text-violet-300 bg-violet-400/10 border-violet-300/20",
};

function StepMarker({
  step,
  index,
}: {
  step: RoadmapStep;
  index: number;
}) {
  const isComplete = step.status === "complete";
  const isCurrent = step.status === "current";

  return (
    <div
      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border text-sm font-semibold shadow-xl transition-all duration-300 sm:h-14 sm:w-14 ${
        isComplete
          ? "border-emerald-300/30 bg-emerald-400/15 text-emerald-300 shadow-emerald-950/30"
          : isCurrent
            ? "border-brand/50 bg-brand/20 text-violet-200 shadow-brand/20 ring-4 ring-brand/10"
            : "border-white/10 bg-slate-900 text-slate-500"
      }`}
    >
      {isComplete ? <Icon name="check" size={19} /> : index + 1}
    </div>
  );
}

function RoadmapStepCard({
  step,
  index,
}: {
  step: RoadmapStep;
  index: number;
}) {
  const isCurrent = step.status === "current";

  return (
    <div className="group relative grid grid-cols-[44px_1fr] gap-4 sm:grid-cols-[56px_1fr] sm:gap-6">
      <StepMarker index={index} step={step} />

      <article
        className={`relative -mt-1 rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 sm:p-6 ${
          isCurrent
            ? "border-brand/30 bg-gradient-to-br from-brand/[0.12] to-slate-900/80 shadow-xl shadow-brand/[0.08]"
            : "border-white/[0.08] bg-surface/50 group-hover:-translate-y-0.5 group-hover:border-white/[0.16] group-hover:bg-surface/75"
        }`}
      >
        {isCurrent && (
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/20 blur-3xl" />
        )}

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="flex items-start gap-4">
            <span
              className={`mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border sm:flex ${
                isCurrent
                  ? "border-brand/20 bg-brand/10 text-brand"
                  : "border-white/[0.08] bg-white/[0.03] text-muted"
              }`}
            >
              <Icon name={step.icon} size={17} />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-semibold tracking-[-0.025em] text-white sm:text-xl">
                  {step.title}
                </h2>
                {isCurrent && (
                  <span className="rounded-full border border-brand/25 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-200">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                {step.description}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-xs">
            <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-slate-300">
              {step.duration}
            </span>
            <span
              className={`rounded-lg border px-2.5 py-1.5 ${difficultyStyles[step.difficulty]}`}
            >
              {step.difficulty}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function AIEngineerRoadmapPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-72 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[42rem] h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-8 sm:pt-10 lg:pb-32">
        <div className="flex items-center justify-between">
          <Link
            href="/careers"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-transform group-hover:-translate-x-0.5">
              <Icon name="chevron-right" size={15} className="rotate-180" />
            </span>
            Back to career paths
          </Link>

          <span className="hidden items-center gap-2 text-xs text-muted sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Your AI Engineer journey
          </span>
        </div>

        <header className="mx-auto max-w-3xl pb-12 pt-20 text-center sm:pt-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.08] px-3.5 py-2 text-xs font-medium text-violet-200">
            <Icon name="brain" size={14} className="text-brand" />
            Career roadmap
          </div>
          <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.06em] text-white sm:text-6xl lg:text-[68px]">
            AI Engineer{" "}
            <span className="bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            A practical path from Python fundamentals to building intelligent
            products people can use.
          </p>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]" aria-label="Roadmap progress">
          <div className="rounded-3xl border border-white/[0.09] bg-surface/60 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Current progress
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                  20%
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Icon name="trending-up" size={19} />
              </span>
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/[0.08]">
              <div className="h-full w-1/5 rounded-full bg-gradient-to-r from-brand to-accent shadow-[0_0_16px_rgba(139,92,246,0.6)]" />
            </div>
            <div className="mt-3 flex justify-between text-xs text-muted">
              <span>2 of 10 milestones complete</span>
              <span>Keep going</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/[0.14] to-cyan-400/[0.06] p-6 shadow-2xl shadow-brand/[0.06] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
                <Icon name="sparkles" size={15} className="text-brand" />
                Recommended next step
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">
                Complete Pandas
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Learn to turn raw datasets into decisions before moving into
                visualization.
              </p>
              <Link
                href="#pandas"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-200"
              >
                Continue learning
                <Icon name="arrow-up-right" size={15} className="text-accent" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="roadmap-timeline">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Your learning path
              </p>
              <h2
                id="roadmap-timeline"
                className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl"
              >
                From foundations to opportunity
              </h2>
            </div>
            <span className="hidden text-xs text-muted sm:block">
              10 milestones
            </span>
          </div>

          <div className="relative space-y-4 sm:space-y-5">
            <div className="absolute bottom-8 left-[21px] top-8 w-px bg-gradient-to-b from-emerald-400/60 via-brand/60 to-white/10 sm:left-[27px]" />
            {steps.map((step, index) => (
              <div id={step.title === "Pandas" ? "pandas" : undefined} key={step.title}>
                <RoadmapStepCard index={index} step={step} />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-muted">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Progress is built one focused step at a time.
        </div>
      </div>
    </main>
  );
}
