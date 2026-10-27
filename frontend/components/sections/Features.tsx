import { Icon } from "../ui/Icons";

const features = [
  {
    title: "AI Career Roadmaps",
    description: "A clear, adaptive path that turns your goal into the next right action.",
    icon: "brain" as const,
    accent: "text-violet-300 bg-violet-400/10",
  },
  {
    title: "Progress Tracking",
    description: "See your momentum, celebrate wins, and know exactly how far you have to go.",
    icon: "trending-up" as const,
    accent: "text-cyan-300 bg-cyan-400/10",
  },
  {
    title: "Project-Based Learning",
    description: "Build proof of skill with practical projects that make your portfolio stand out.",
    icon: "code" as const,
    accent: "text-amber-300 bg-amber-400/10",
  },
  {
    title: "Career Guidance",
    description: "Get unstuck with AI-powered feedback, resources, and decisions tailored to you.",
    icon: "compass" as const,
    accent: "text-emerald-300 bg-emerald-400/10",
  }
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" id="projects">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Everything in one place</p>
        <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">Your career, with a little more <span className="text-brand">clarity.</span></h2>
        <p className="mt-4 text-base leading-7 text-muted">The tools you need to make consistent progress — not another tab to keep open.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="group rounded-2xl border border-white/[0.08] bg-surface/65 p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:bg-surface">
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.accent}`}><Icon name={feature.icon} size={21} /></span>
            <h3 className="mt-6 text-base font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
            <span className="mt-7 flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors group-hover:text-brand">Learn more <Icon name="arrow-up-right" size={13} /></span>
          </div>
        ))}
      </div>
    </section>
  );
}