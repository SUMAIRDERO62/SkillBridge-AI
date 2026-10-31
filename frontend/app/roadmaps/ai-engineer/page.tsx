import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../../../components/ui/Icons";
import { getCareerBySlug } from "../../../lib/careers";
import {
  aiEngineerRoadmap,
  type RoadmapStep,
} from "../../../lib/roadmaps";

const career = getCareerBySlug("ai-engineer");

export const metadata: Metadata = {
  title: `${career?.title ?? "AI Engineer"} Roadmap | SkillBridge AI`,
  description:
    `A focused ${career?.title ?? "AI Engineer"} career path from Python foundations to internship readiness.`,
};

type Step = RoadmapStep & {
  status: "complete" | "current" | "upcoming";
};

const completedStepIds = new Set(["python", "numpy", "pandas"]);
const currentStepId = "machine-learning";

const steps: Step[] = aiEngineerRoadmap.map((step) => ({
  ...step,
  status: completedStepIds.has(step.id)
    ? "complete"
    : step.id === currentStepId
      ? "current"
      : "upcoming",
}));

const difficultyStyles: Record<RoadmapStep["difficulty"], string> = {
  Beginner: "border-emerald-300/20 bg-emerald-400/10 text-emerald-200",
  Intermediate: "border-cyan-300/20 bg-cyan-400/10 text-cyan-200",
  Advanced: "border-violet-300/20 bg-violet-400/10 text-violet-200",
};

function StepCard({ step, index }: { step: Step; index: number }) {
  const isComplete = step.status === "complete";
  const isCurrent = step.status === "current";

  return (
    <article
      className={`group relative grid grid-cols-[44px_1fr] gap-4 sm:grid-cols-[56px_1fr] sm:gap-6 ${
        isCurrent ? "scroll-mt-24" : ""
      }`}
      id={isCurrent ? "current-step" : undefined}
    >
      <div
        className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold shadow-xl transition-all duration-300 sm:h-14 sm:w-14 ${
          isComplete
            ? "border-emerald-300/30 bg-emerald-400/15 text-emerald-300 shadow-emerald-950/30"
            : isCurrent
              ? "border-brand/50 bg-brand/20 text-violet-200 shadow-brand/20 ring-4 ring-brand/10"
              : "border-white/10 bg-slate-900 text-slate-500"
        }`}
      >
        {isComplete ? <Icon name="check" size={19} /> : index + 1}
      </div>

      <div
        className={`relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 sm:p-6 ${
          isCurrent
            ? "border-brand/30 bg-gradient-to-br from-brand/[0.13] to-slate-900/80 shadow-xl shadow-brand/[0.08]"
            : "border-white/[0.08] bg-surface/50 group-hover:-translate-y-0.5 group-hover:border-white/[0.16] group-hover:bg-surface/75"
        }`}
      >
        {isCurrent && (
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/20 blur-3xl" />
        )}

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex items-start gap-4">
            <span
              className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border sm:flex ${
                isCurrent
                  ? "border-brand/20 bg-brand/10 text-brand"
                  : "border-white/[0.08] bg-white/[0.03] text-muted"
              }`}
            >
              <Icon name={step.icon} size={18} />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-semibold tracking-[-0.025em] text-white sm:text-xl">
                  {step.title}
                </h2>
                {isCurrent && (
                  <span className="rounded-full border border-brand/25 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-200">
                    Current focus
                  </span>
                )}
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                {step.description}
              </p>
              <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-300">
                <Icon name="check" size={14} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <strong className="font-semibold text-slate-200">You&apos;ll be able to:</strong>{" "}
                  {step.outcome}
                </span>
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
      </div>
    </article>
  );
}

export default function AIEngineerRoadmapPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.17),transparent_60%)]" />
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
            Career Command Center
          </span>
        </div>

        <header className="mx-auto max-w-3xl pb-12 pt-20 text-center sm:pt-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.08] px-3.5 py-2 text-xs font-medium text-violet-200">
            <Icon name="brain" size={14} className="text-brand" />
            Your path from learning to earning
          </div>
          <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.06em] text-white sm:text-6xl lg:text-[68px]">
            {career?.title ?? "AI Engineer"}{" "}
            <span className="bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Build the foundations, ship proof of work, and become ready for
            your first real AI opportunity.
          </p>
        </header>

        <section
          aria-label="Roadmap overview"
          className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"
        >
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
              <span>20% of your path</span>
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
                Complete Machine Learning
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Turn raw datasets into decisions. This is the bridge between
                Python foundations and your first machine learning model.
              </p>
              <Link
                href="#current-step"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-200"
              >
                Continue this step
                <Icon
                  name="arrow-up-right"
                  size={15}
                  className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="roadmap-timeline">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                The journey
              </p>
              <h2
                id="roadmap-timeline"
                className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl"
              >
                From foundations to opportunity
              </h2>
            </div>
            <span className="hidden text-xs text-muted sm:block">
              10 focused milestones
            </span>
          </div>

          <div className="relative space-y-4 sm:space-y-5">
            <div className="absolute bottom-8 left-[21px] top-8 w-px bg-gradient-to-b from-emerald-400/60 via-brand/60 to-white/10 sm:left-[27px]" />
            {steps.map((step, index) => (
              <StepCard index={index} key={step.title} step={step} />
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <Link
            href="/progress"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand/10"
          >
            Open progress tracker
            <Icon
              name="arrow-up-right"
              size={15}
              className="text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          <p className="flex items-center gap-2 text-xs text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Progress is built one focused step at a time.
          </p>
        </div>
      </div>
    </main>
  );
}
