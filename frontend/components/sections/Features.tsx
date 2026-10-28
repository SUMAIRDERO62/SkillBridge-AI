import { Icon } from "../ui/Icons";

type Feature = {
  title: string;
  description: string;
  icon: "brain" | "trending-up" | "code" | "compass";
  label: string;
  accent: string;
  iconBackground: string;
  glow: string;
  visual: "roadmap" | "progress" | "projects" | "guidance";
};

const features: Feature[] = [
  {
    title: "AI Career Roadmaps",
    description:
      "Turn a big ambition into a clear, adaptive path with the next best step always in view.",
    icon: "brain",
    label: "Find your direction",
    accent: "text-violet-300",
    iconBackground: "bg-violet-400/10 ring-violet-300/15",
    glow: "bg-brand/15",
    visual: "roadmap",
  },
  {
    title: "Progress Tracking",
    description:
      "Build momentum with a simple view of your habits, milestones, streaks, and wins.",
    icon: "trending-up",
    label: "Make progress visible",
    accent: "text-cyan-300",
    iconBackground: "bg-cyan-400/10 ring-cyan-300/15",
    glow: "bg-accent/15",
    visual: "progress",
  },
  {
    title: "Project-Based Learning",
    description:
      "Replace passive learning with real projects that turn your skills into proof of work.",
    icon: "code",
    label: "Build your portfolio",
    accent: "text-amber-300",
    iconBackground: "bg-amber-400/10 ring-amber-300/15",
    glow: "bg-amber-400/10",
    visual: "projects",
  },
  {
    title: "Career Guidance",
    description:
      "Get thoughtful AI guidance, resources, and feedback tailored to where you are now.",
    icon: "compass",
    label: "Move with confidence",
    accent: "text-emerald-300",
    iconBackground: "bg-emerald-400/10 ring-emerald-300/15",
    glow: "bg-emerald-400/10",
    visual: "guidance",
  },
];

function FeatureVisual({ type }: { type: Feature["visual"] }) {
  if (type === "roadmap") {
    return (
      <div className="relative flex h-16 items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_14px_#8B5CF6]" />
        <span className="h-px w-8 bg-gradient-to-r from-brand to-violet-300" />
        <span className="h-3.5 w-3.5 rounded-full border-2 border-violet-300 bg-slate-900 shadow-[0_0_14px_rgba(196,181,253,0.6)]" />
        <span className="h-px w-8 bg-gradient-to-r from-violet-300 to-white/20" />
        <span className="h-2.5 w-2.5 rounded-full border border-white/30 bg-slate-800" />
        <span className="absolute left-1 top-9 text-[10px] font-medium text-violet-200">
          Your next best step
        </span>
      </div>
    );
  }

  if (type === "progress") {
    return (
      <div className="flex h-16 items-end gap-2">
        {[35, 48, 42, 68, 58, 82, 72].map((height, index) => (
          <span
            className={`w-2.5 rounded-full transition-all duration-500 group-hover:scale-y-110 ${
              index === 5
                ? "bg-gradient-to-t from-accent to-cyan-200 shadow-[0_0_14px_rgba(6,182,212,0.45)]"
                : "bg-cyan-400/20"
            }`}
            key={height}
            style={{ height: `${height}%` }}
          />
        ))}
        <span className="ml-2 mb-1 text-[10px] font-medium text-cyan-200">
          +24%
        </span>
      </div>
    );
  }

  if (type === "projects") {
    return (
      <div className="flex h-16 items-center gap-2">
        <span className="flex h-9 w-12 items-center justify-center rounded-lg border border-amber-300/30 bg-amber-300/10 text-xs text-amber-200">
          {"</>"}
        </span>
        <span className="h-px w-6 bg-gradient-to-r from-amber-300/60 to-white/20" />
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-emerald-300">
          <Icon name="check" size={15} />
        </span>
        <span className="ml-1 text-[10px] font-medium text-amber-200">
          Shipped
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-16 items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-emerald-200 shadow-[0_0_18px_rgba(16,185,129,0.15)]">
        <Icon name="sparkles" size={17} />
      </span>
      <div className="space-y-1.5">
        <span className="block h-1.5 w-28 rounded-full bg-white/15" />
        <span className="block h-1.5 w-20 rounded-full bg-emerald-300/30" />
        <span className="block text-[10px] font-medium text-emerald-200">
          Guidance, when you need it
        </span>
      </div>
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <article className="group relative isolate overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/55 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-surface/85 hover:shadow-2xl hover:shadow-black/20">
      <div
        className={`pointer-events-none absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full ${feature.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="flex items-start justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 ${feature.iconBackground} ${feature.accent}`}
        >
          <Icon name={feature.icon} size={21} />
        </span>
        <span className="font-mono text-[11px] text-white/20">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-7 text-[17px] font-semibold tracking-[-0.02em] text-white">
        {feature.title}
      </h3>
      <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">
        {feature.description}
      </p>

      <div className="mt-4 border-t border-white/[0.07] pt-4">
        <FeatureVisual type={feature.visual} />
      </div>

      <div
        className={`mt-2 flex items-center gap-1.5 text-xs font-medium ${feature.accent}`}
      >
        {feature.label}
        <Icon
          name="arrow-up-right"
          size={13}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
      id="projects"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-[min(90%,700px)] -translate-x-1/2 rounded-full bg-brand/[0.06] blur-[120px]" />

      <div className="mb-12 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-6 bg-brand" />
          Everything in one place
        </div>
        <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[42px]">
          Your career, with a little more{" "}
          <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
            clarity.
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          The tools you need to make consistent progress — not another tab to
          keep open.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} index={index} key={feature.title} />
        ))}
      </div>
    </section>
  );
}
