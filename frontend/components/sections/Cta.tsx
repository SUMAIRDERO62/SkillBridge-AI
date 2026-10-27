import { Icon } from "../ui/Icons";

export default function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32" id="get-started">
      <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/20 via-slate-900 to-cyan-400/[0.08] px-6 py-16 text-center sm:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[90px]" />
        <div className="relative">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand"><Icon name="sparkles" size={20} /></span>
          <h2 className="mx-auto mt-6 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Ready to build your career?</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-300">Your future does not need another bookmark. It needs a first step.</p>
          <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-brand hover:text-white" href="#roadmaps">Start your journey today <Icon name="arrow-up-right" size={17} /></a>
        </div>
      </div>
    </section>
  );
}
