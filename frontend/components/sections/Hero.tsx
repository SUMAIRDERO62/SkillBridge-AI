import { Icon } from "../ui/Icons";
import { getCareerBySlug } from "../../lib/careers";

const featuredCareer = getCareerBySlug("ai-engineer");

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-40 -z-10 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] top-72 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:pb-32 lg:pt-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-xs font-medium text-violet-100 shadow-lg shadow-brand/5 backdrop-blur-xl">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand">
              <Icon name="sparkles" size={12} />
            </span>
            <span>Built for your next chapter</span>
            <span className="ml-1 h-1 w-1 rounded-full bg-accent" />
            <span className="text-muted">Powered by AI</span>
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-6xl lg:text-[72px]">
            Stop Learning Randomly.
            <span className="mt-3 block bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
              Build Your Career With AI.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Get career roadmaps, projects, resources, progress tracking and AI guidance in one focused workspace.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(139,92,246,0.25)] transition-all hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-[0_16px_38px_rgba(139,92,246,0.35)]" href="#get-started">
              Start Your Journey
              <Icon name="arrow-up-right" size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]" href="#roadmaps">
              Explore Roadmaps
              <Icon name="chevron-right" size={17} className="text-muted" />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-muted">
            <div className="flex -space-x-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-violet-400 text-[10px] font-bold text-violet-950">JM</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-cyan-300 text-[10px] font-bold text-cyan-950">AK</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-amber-300 text-[10px] font-bold text-amber-950">SR</span>
            </div>
            <span><strong className="font-semibold text-slate-300">2,000+</strong> learners building in public</span>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="flex items-center gap-1.5"><Icon name="check" size={13} className="text-emerald-400" /> Built for momentum</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
          <div className="absolute -inset-8 rounded-[36px] bg-gradient-to-br from-brand/25 via-transparent to-accent/20 blur-3xl" />
          <div className="relative rounded-[22px] border border-white/10 bg-slate-950/75 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="overflow-hidden rounded-[16px] border border-white/[0.08] bg-slate-900/90">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand"><Icon name="compass" size={17} /></span>
                <div>
                  <p className="text-xs font-semibold text-white">Your command center</p>
                  <p className="text-[10px] text-muted">
                    {featuredCareer?.title} path
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> On track</span>
            </div>
            <div className="grid gap-3 p-4 sm:p-5">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-muted">Current focus</p>
                    <p className="mt-1 text-sm font-semibold text-white">Machine Learning Foundations</p>
                  </div>
                  <span className="text-sm font-bold text-brand">68%</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-700"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-brand to-accent" /></div>
                <div className="mt-2 flex justify-between text-[10px] text-muted"><span>12 of 18 lessons complete</span><span>3 day streak</span></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300"><Icon name="rocket" size={15} /></span>
                  <p className="mt-3 text-xl font-semibold text-white">04</p>
                  <p className="mt-0.5 text-[10px] text-muted">Projects shipped</p>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300"><Icon name="trending-up" size={15} /></span>
                  <p className="mt-3 text-xl font-semibold text-white">+24%</p>
                  <p className="mt-0.5 text-[10px] text-muted">Weekly progress</p>
                </div>
              </div>
              <div className="rounded-xl border border-brand/20 bg-gradient-to-r from-brand/[0.12] to-cyan-400/[0.06] p-4">
                <div className="flex gap-3">
                  <span className="mt-0.5 text-brand"><Icon name="sparkles" size={16} /></span>
                  <div><p className="text-[11px] font-semibold text-violet-100">Your AI mentor says</p><p className="mt-1 text-[11px] leading-5 text-muted">You&apos;re ready to turn your skills into a portfolio project.</p></div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-5 hidden rounded-xl border border-white/10 bg-surface/90 px-3.5 py-3 shadow-xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400/10 text-emerald-300"><Icon name="check" size={14} /></span><span className="text-[11px] font-medium text-slate-200">Lesson complete</span></div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-white/10 bg-surface/90 px-3.5 py-3 shadow-xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand/10 text-brand"><Icon name="rocket" size={14} /></span><span className="text-[11px] font-medium text-slate-200">4 projects shipped</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}