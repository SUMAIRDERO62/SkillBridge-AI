"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "../../components/ui/Icons";

type Skill = {
  name: string;
  category: string;
  duration: string;
  icon: "code" | "layers" | "trending-up" | "brain" | "target";
};

const skills: Skill[] = [
  {
    name: "Python",
    category: "Foundations",
    duration: "3 weeks",
    icon: "code",
  },
  {
    name: "NumPy",
    category: "Data foundations",
    duration: "1–2 weeks",
    icon: "layers",
  },
  {
    name: "Pandas",
    category: "Data foundations",
    duration: "2 weeks",
    icon: "trending-up",
  },
  {
    name: "Machine Learning",
    category: "Core AI",
    duration: "6 weeks",
    icon: "target",
  },
  {
    name: "Deep Learning",
    category: "Advanced AI",
    duration: "6–8 weeks",
    icon: "brain",
  },
];

export default function ProgressPage() {
  const [completedSkills, setCompletedSkills] = useState<string[]>([
    "Python",
    "NumPy",
  ]);

  const completedCount = completedSkills.length;
  const completionPercentage = Math.round(
    (completedCount / skills.length) * 100,
  );

  const remainingCount = skills.length - completedCount;
  const nextSkill = useMemo(
    () => skills.find((skill) => !completedSkills.includes(skill.name)),
    [completedSkills],
  );

  const toggleSkill = (skillName: string) => {
    setCompletedSkills((current) =>
      current.includes(skillName)
        ? current.filter((name) => name !== skillName)
        : [...current, skillName],
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-64 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />
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
            AI Engineer path
          </div>
        </div>

        <header className="flex flex-col gap-8 pb-12 pt-16 sm:pt-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.08] px-3.5 py-2 text-xs font-medium text-violet-200">
              <Icon name="trending-up" size={14} className="text-brand" />
              Your learning dashboard
            </div>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.06em] text-white sm:text-6xl">
              Keep your{" "}
              <span className="bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
                momentum.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              A clear view of what you&apos;ve learned, what&apos;s next, and how
              close you are to your next opportunity.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Icon name="brain" size={19} />
            </span>
            <span>
              <strong className="block font-semibold text-white">
                AI Engineer
              </strong>
              <span className="text-xs">Active roadmap</span>
            </span>
          </div>
        </header>

        <section
          aria-label="Progress overview"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="relative overflow-hidden rounded-2xl border border-brand/25 bg-gradient-to-br from-brand/[0.14] to-slate-900/70 p-5 shadow-xl shadow-brand/[0.06] backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative flex items-start justify-between">
              <p className="text-xs font-medium text-muted">
                Completion percentage
              </p>
              <Icon name="trending-up" size={17} className="text-brand" />
            </div>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              {completionPercentage}%
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-accent transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-surface/55 p-5 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <p className="text-xs font-medium text-muted">Skills completed</p>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                <Icon name="check" size={15} />
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              {completedCount}
              <span className="ml-1 text-base font-medium text-muted">
                / {skills.length}
              </span>
            </p>
            <p className="mt-2 text-xs text-muted">Milestones unlocked</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-surface/55 p-5 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <p className="text-xs font-medium text-muted">Skills remaining</p>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <Icon name="target" size={15} />
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              {remainingCount}
            </p>
            <p className="mt-2 text-xs text-muted">Clear next steps ahead</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-surface/55 p-5 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <p className="text-xs font-medium text-muted">Learning streak</p>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300">
                <Icon name="sparkles" size={15} />
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              3 <span className="text-base font-medium text-muted">days</span>
            </p>
            <p className="mt-2 text-xs text-muted">Keep the rhythm going</p>
          </div>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
          <section aria-labelledby="skills-heading">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Roadmap progress
                </p>
                <h2
                  id="skills-heading"
                  className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl"
                >
                  AI Engineer foundations
                </h2>
              </div>
              <span className="hidden text-xs text-muted sm:block">
                {skills.length} milestones
              </span>
            </div>

            <div className="space-y-3">
              {skills.map((skill, index) => {
                const isComplete = completedSkills.includes(skill.name);

                return (
                  <label
                    className={`group flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
                      isComplete
                        ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                        : "border-white/[0.08] bg-surface/50 hover:border-white/[0.16] hover:bg-surface/75"
                    }`}
                    key={skill.name}
                  >
                    <input
                      type="checkbox"
                      checked={isComplete}
                      onChange={() => toggleSkill(skill.name)}
                      className="peer sr-only"
                    />
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all ${
                        isComplete
                          ? "border-emerald-300/30 bg-emerald-400/15 text-emerald-300"
                          : "border-white/10 bg-white/[0.04] text-muted group-hover:border-brand/30 group-hover:text-brand"
                      }`}
                    >
                      {isComplete ? (
                        <Icon name="check" size={19} />
                      ) : (
                        <Icon name={skill.icon} size={19} />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-sm font-semibold transition-colors ${
                          isComplete
                            ? "text-emerald-100"
                            : "text-white group-hover:text-violet-100"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="mt-1 block text-xs text-muted">
                        {skill.category} <span className="text-slate-600">•</span>{" "}
                        {skill.duration}
                      </span>
                    </span>
                    <span className="hidden text-xs font-medium text-slate-500 sm:block">
                      {isComplete ? "Completed" : `Step ${index + 1}`}
                    </span>
                    <span
                      className={`h-5 w-5 rounded-full border transition-all ${
                        isComplete
                          ? "border-emerald-300 bg-emerald-300"
                          : "border-white/20 group-hover:border-brand"
                      }`}
                    >
                      {isComplete && (
                        <Icon
                          name="check"
                          size={13}
                          className="m-0.5 text-slate-950"
                        />
                      )}
                    </span>
                  </label>
                );
              })}
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/[0.14] to-cyan-400/[0.06] p-6 shadow-xl shadow-brand/[0.06] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
                <Icon name="sparkles" size={15} className="text-brand" />
                Recommended next step
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                {nextSkill ? `Start ${nextSkill.name}` : "Choose your next challenge"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {nextSkill
                  ? `Spend ${nextSkill.duration} building confidence in ${nextSkill.name.toLowerCase()}. Your progress compounds from here.`
                  : "You have completed this set of skills. Keep building with a new project."}
              </p>
              <button
                type="button"
                onClick={() => nextSkill && toggleSkill(nextSkill.name)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white"
              >
                {nextSkill ? "Mark as complete" : "Keep building"}
                <Icon name="arrow-up-right" size={15} />
              </button>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-surface/55 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted">Roadmap progress</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Keep showing up
                  </p>
                </div>
                <span className="text-2xl font-semibold text-brand">
                  {completionPercentage}%
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-accent transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">
                Consistency beats intensity. One completed skill is one step
                closer to your future role.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
