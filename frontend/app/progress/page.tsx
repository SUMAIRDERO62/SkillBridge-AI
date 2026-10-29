import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../../components/ui/Icons";

export const metadata: Metadata = {
  title: "Learning Progress | SkillBridge AI",
  description:
    "Track your skills, projects, milestones, and momentum in the SkillBridge AI command center.",
};

type RoadmapItem = {
  title: string;
  status: "complete" | "current" | "locked";
  icon: "code" | "layers" | "trending-up" | "target" | "brain" | "sparkles";
};

const roadmapItems: RoadmapItem[] = [
  { title: "Python", status: "complete", icon: "code" },
  { title: "NumPy", status: "complete", icon: "layers" },
  { title: "Pandas", status: "complete", icon: "trending-up" },
  { title: "Machine Learning", status: "current", icon: "target" },
  { title: "Deep Learning", status: "locked", icon: "brain" },
  { title: "LLMs", status: "locked", icon: "sparkles" },
];

const achievements = [
  {
    title: "First Project Completed",
    detail: "You shipped your first proof of work.",
    icon: "rocket" as const,
    accent: "text-amber-300",
    background: "bg-amber-400/10",
  },
  {
    title: "Python Mastered",
    detail: "A strong foundation is now in place.",
    icon: "code" as const,
    accent: "text-violet-300",
    background: "bg-violet-400/10",
  },
  {
    title: "Learning Streak",
    detail: "3 consecutive days of focused progress.",
    icon: "trending-up" as const,
    accent: "text-emerald-300",
    background: "bg-emerald-400/10",
  },
];

const overviewCards = [
  {
    label: "Overall progress",
    value: "50%",
    detail: "3 of 6 roadmap milestones",
    icon: "trending-up" as const,
    accent: "text-brand",
    background: "bg-brand/10",
  },
  {
    label: "Current career path",
    value: "AI Engineer",
    detail: "Foundations → production AI",
    icon: "brain" as const,
    accent: "text-violet-300",
    background: "bg-violet-400/10",
  },
  {
    label: "Learning streak",
    value: "3 days",
    detail: "Keep your momentum alive",
    icon: "sparkles" as const,
    accent: "text-cyan-300",
    background: "bg-cyan-400/10",
  },
  {
    label: "Projects completed",
    value: "01",
    detail: "1 portfolio proof of work",
    icon: "rocket" as const,
    accent: "text-amber-300",
    background: "bg-amber-400/10",
  },
];

function StatusIndicator({ status }: { status: RoadmapItem["status"] }) {
  if (status === "complete") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/15 text-emerald-300">
        <Icon name="check" size={15} />
      </span>
    );
  }

  if (status === "current") {
    return (
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-brand/40 bg-brand/15 text-brand ring-4 ring-brand/10">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand" />
      </span>
    );
  }

  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-600">
      <span className="h-2 w-2 rounded-full bg-slate-600" />
    </span>
  );
}

export default function ProgressPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-64 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[38rem] h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />
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
            Career Command Center
          </span>
        </div>

        <header className="flex flex-col gap-8 pb-12 pt-16 sm:pt-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.08] px-3.5 py-2 text-xs font-medium text-violet-200">
              <Icon name="trending-up" size={14} className="text-brand" />
              Your progress, in context
            </div>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.06em] text-white sm:text-6xl">
              Learning{" "}
              <span className="bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
                Progress
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Stay consistent. Track skills, projects and milestones.
            </p>
          </div>

          <Link
            href="/roadmaps/ai-engineer"
            className="group inline-flex items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand/10 lg:self-end"
          >
            View full roadmap
            <Icon
              name="arrow-up-right"
              size={15}
              className="text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </header>

        <section
          aria-label="Progress overview"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {overviewCards.map((card) => (
            <div
              className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-surface/55 p-5 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-surface/80"
              key={card.label}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-4">
                <p className="text-xs font-medium text-muted">{card.label}</p>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${card.background} ${card.accent}`}
                >
                  <Icon name={card.icon} size={16} />
                </span>
              </div>
              <p className="relative mt-5 truncate text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.value}
              </p>
              <p className="relative mt-2 text-xs text-muted">{card.detail}</p>
            </div>
          ))}
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section
            aria-labelledby="roadmap-progress-title"
            className="rounded-3xl border border-white/[0.09] bg-surface/55 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Roadmap progress
                </p>
                <h2
                  id="roadmap-progress-title"
                  className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl"
                >
                  AI Engineer foundations
                </h2>
              </div>
              <span className="text-xs font-medium text-muted">50% complete</span>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/[0.08]">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-brand to-accent shadow-[0_0_16px_rgba(139,92,246,0.55)]" />
            </div>

            <div className="mt-7 space-y-3">
              {roadmapItems.map((item, index) => (
                <div
                  className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all ${
                    item.status === "current"
                      ? "border-brand/25 bg-brand/[0.08]"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                  }`}
                  key={item.title}
                >
                  <StatusIndicator status={item.status} />
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      item.status === "locked"
                        ? "bg-white/[0.03] text-slate-600"
                        : item.status === "current"
                          ? "bg-brand/10 text-brand"
                          : "bg-emerald-400/10 text-emerald-300"
                    }`}
                  >
                    <Icon name={item.icon} size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-sm font-semibold ${
                        item.status === "locked" ? "text-slate-500" : "text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {item.status === "complete"
                        ? "Completed"
                        : item.status === "current"
                          ? "Current focus"
                          : `Up next · Step ${index + 1}`}
                    </span>
                  </span>
                  {item.status === "current" && (
                    <span className="hidden rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 text-[10px] font-semibold text-violet-200 sm:block">
                      In progress
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-4">
            <section
              aria-labelledby="current-focus-title"
              className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/[0.15] to-cyan-400/[0.06] p-6 shadow-2xl shadow-brand/[0.07] backdrop-blur-xl sm:p-8"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
                  <Icon name="target" size={15} className="text-brand" />
                  Current focus
                </div>
                <h2
                  id="current-focus-title"
                  className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white"
                >
                  Machine Learning Foundations
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Build the core intuition behind models, data, and evaluation.
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/[0.1] pt-5">
                  <span className="text-xs text-muted">Next step</span>
                  <span className="text-sm font-semibold text-cyan-200">
                    Deep Learning Basics
                  </span>
                </div>
                <Link
                  href="/roadmaps/ai-engineer#current-step"
                  className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                >
                  Continue learning
                  <Icon
                    name="arrow-up-right"
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </section>

            <section
              aria-labelledby="achievements-title"
              className="rounded-3xl border border-white/[0.09] bg-surface/55 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Recent achievements
                  </p>
                  <h2
                    id="achievements-title"
                    className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white"
                  >
                    Momentum worth noticing
                  </h2>
                </div>
                <Icon name="sparkles" size={20} className="text-brand" />
              </div>
              <div className="mt-5 space-y-3">
                {achievements.map((achievement) => (
                  <div
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                    key={achievement.title}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${achievement.background} ${achievement.accent}`}
                    >
                      <Icon name={achievement.icon} size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold text-white">
                        {achievement.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-muted">
                        {achievement.detail}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section
          aria-label="Motivation"
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/[0.1] bg-slate-950/60 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-12"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[90px]" />
          <div className="relative">
            <Icon name="sparkles" size={22} className="mx-auto text-brand" />
            <p className="mx-auto mt-5 max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              &ldquo;You are closer than you think.&rdquo;
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted">
              Every completed skill is evidence that you can learn, build, and
              become ready for what comes next.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
