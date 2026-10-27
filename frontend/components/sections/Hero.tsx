import { Icon } from "../ui/Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-290px] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-130px] top-40 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32 lg:pt-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.08] px-3.5 py-2 text-xs font-medium text-violet-200">
            <Icon name="sparkles" size={14} className="text-brand" />
            <span>Built for your next chapter</span>
            <span className="ml-1 h-1 w-1 rounded-full bg-brand" />
            <span className="text-muted">Powered by AI</span>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-6xl lg:text-[70px]">
            Stop learning randomly.
            <span className="mt-2 block bg-gradient-to-r from-violet-300 via-brand to-cyan-300 bg-clip-text text-transparent">
              Build your career with AI.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Get career roadmaps, real-world projects, and AI guidance in one focused workspace designed to move you from learning to earning.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/20 transition-all hover:bg-violet-500 hover:shadow-brand/30" href="#get-started">
              Start your journey
              <Icon name="arrow-up-right" size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/[0.07]" href="#roadmaps">
              Explore roadmaps
              <Icon name="chevron-right" size={17} className="text-muted" />
            </a>
          </div>
          <div className="mt-9 flex items-center gap-3 text-xs text-muted">
            <div className="flex -space-x-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-violet-400 text-[10px] font-bold text-violet-950">JM</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-cyan-300 text-[10px] font-bold text-cyan-950">AK</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-amber-300 text-[10px] font-bold text-amber-950">SR</span>
            </div>
            <span><strong className="font-semibold text-slate-300">2,000+</strong> learners building in public</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[30px] bg-gradient-to-br from-brand/20 to-accent/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand"><Icon name="compass" size={17} /></span>
                <div>
                  <p className="text-xs font-semibold text-white">Your command center</p>
                  <p className="text-[10px] text-muted">AI Engineer path</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> On track</span>
            </div>
            <div className="grid gap-3 p-5">
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
          <div className="absolute -right-4 -top-5 hidden rounded-xl border border-white/10 bg-surface px-3.5 py-3 shadow-xl sm:block">
            <div className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400/10 text-emerald-300"><Icon name="check" size={14} /></span><span className="text-[11px] font-medium text-slate-200">Lesson complete</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}