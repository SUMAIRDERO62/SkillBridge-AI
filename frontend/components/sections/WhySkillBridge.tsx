import { Icon } from "../ui/Icons";

const reasons = [
  {
    title: "Structured learning",
    description: "No more endless tabs or half-finished courses. Every step has a reason and a next move.",
    icon: "target" as const,
  },
  {
    title: "Project-based growth",
    description: "Turn concepts into confidence by building work you can show, share, and talk about.",
    icon: "rocket" as const,
  },
  {
    title: "Career-focused momentum",
    description: "Build the skills employers need and the proof that helps you earn your first opportunity.",
    icon: "briefcase" as const,
  },
];

export default function WhySkillBridge() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" id="about">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">More than a roadmap</p>
          <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">Learn with intention. Build with purpose.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">SkillBridge AI connects the dots between what you learn today and the work you want tomorrow.</p>
          <a className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand" href="#get-started">See how it works <Icon name="arrow-up-right" size={16} className="text-brand" /></a>
        </div>
        <div className="space-y-3">
          {reasons.map((reason, index) => (
            <div className="group flex gap-4 rounded-2xl border border-white/[0.08] bg-surface/50 p-5 transition-colors hover:border-brand/25" key={reason.title}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand"><Icon name={reason.icon} size={19} /></span>
              <div className="flex flex-1 items-start justify-between gap-5">
                <div><h3 className="text-sm font-semibold text-white">{reason.title}</h3><p className="mt-1.5 max-w-lg text-sm leading-6 text-muted">{reason.description}</p></div>
                <span className="hidden text-xs font-medium text-slate-600 sm:block">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
