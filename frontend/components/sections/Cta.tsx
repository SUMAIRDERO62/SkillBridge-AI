import { Icon } from "../ui/Icons";

const nextSteps = [
  "Choose a direction",
  "Build real skills",
  "Create meaningful projects",
];

export default function Cta() {
  return (
    <section
      className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-24 sm:px-8 lg:pb-32"
      id="get-started"
    >
      <div className="relative isolate overflow-hidden rounded-[28px] border border-white/[0.12] bg-slate-950/70 px-6 py-16 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-12 sm:py-20 lg:px-20">
        <div className="pointer-events-none absolute -left-24 -top-32 -z-10 h-80 w-80 rounded-full bg-brand/25 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.18),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            <Icon name="sparkles" size={21} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Your next chapter starts here
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl lg:text-[56px]">
            Your Future Won&apos;t Build Itself.
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            Choose a direction.
            <br />
            Build real skills.
            <br />
            Create meaningful projects.
            <br />
            Become job ready.
          </p>

          <div className="mx-auto mt-9 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-muted">
            {nextSteps.map((step, index) => (
              <span className="flex items-center gap-2" key={step}>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-[10px] font-semibold text-violet-200">
                  {index + 1}
                </span>
                {step}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="motion-cta-pulse group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-brand/10 transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-brand/30 sm:w-auto"
              href="#roadmaps"
            >
              Start Your Career Journey
              <Icon
                name="arrow-up-right"
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.09] sm:w-auto"
              href="#roadmaps"
            >
              Explore Career Paths
              <Icon
                name="chevron-right"
                size={17}
                className="text-muted transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            No perfect plan required. Just a first step.
          </p>
        </div>
      </div>
    </section>
  );
}
