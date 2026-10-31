import { Icon } from "../ui/Icons";
import { careers } from "../../lib/careers";

const featuredCareerNames = careers
  .slice(0, 4)
  .map((career) => career.title)
  .join(", ");

type JourneyStep = {
  step: string;
  title: string;
  description: string;
  icon: "target" | "layers" | "code" | "trending-up" | "briefcase";
  accent: string;
  iconBackground: string;
};

const journeySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Choose Your Career",
    description:
      `Select ${featuredCareerNames} or another career path.`,
    icon: "target",
    accent: "text-violet-300",
    iconBackground: "bg-violet-400/10 ring-violet-300/20",
  },
  {
    step: "02",
    title: "Follow A Roadmap",
    description:
      "Get a structured learning path instead of random tutorials.",
    icon: "layers",
    accent: "text-cyan-300",
    iconBackground: "bg-cyan-400/10 ring-cyan-300/20",
  },
  {
    step: "03",
    title: "Build Real Projects",
    description:
      "Turn knowledge into portfolio-ready projects.",
    icon: "code",
    accent: "text-amber-300",
    iconBackground: "bg-amber-400/10 ring-amber-300/20",
  },
  {
    step: "04",
    title: "Track Progress",
    description:
      "Measure consistency, progress and learning milestones.",
    icon: "trending-up",
    accent: "text-emerald-300",
    iconBackground: "bg-emerald-400/10 ring-emerald-300/20",
  },
  {
    step: "05",
    title: "Become Job Ready",
    description:
      "Build confidence, portfolio and industry-ready skills.",
    icon: "briefcase",
    accent: "text-violet-300",
    iconBackground: "bg-violet-400/10 ring-violet-300/20",
  },
];

function JourneyStepCard({
  step,
  index,
}: {
  step: JourneyStep;
  index: number;
}) {
  return (
    <div className="group relative grid grid-cols-[52px_1fr] gap-5 sm:grid-cols-[72px_1fr] sm:gap-8">
      <div className="relative flex justify-center">
        <div
          className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 ring-1 transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-lg sm:h-14 sm:w-14 ${step.iconBackground} ${step.accent}`}
        >
          <Icon name={step.icon} size={22} />
        </div>
      </div>

      <article className="relative -mt-1 rounded-2xl border border-white/[0.08] bg-surface/50 p-5 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/[0.16] group-hover:bg-surface/80 group-hover:shadow-2xl group-hover:shadow-black/20 sm:p-6">
        <div
          className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${step.iconBackground.split(" ")[0]}`}
        />
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div>
            <p className={`font-mono text-[10px] font-semibold tracking-[0.2em] ${step.accent}`}>
              STEP {step.step}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-white sm:text-xl">
              {step.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              {step.description}
            </p>
          </div>
          <span className="hidden text-4xl font-semibold tracking-[-0.08em] text-white/[0.06] sm:block">
            {step.step}
          </span>
        </div>
        <div className="relative mt-5 h-px w-full overflow-hidden bg-white/[0.06]">
          <div
            className={`h-full w-0 bg-gradient-to-r from-brand to-accent transition-all duration-700 group-hover:w-1/3 ${
              index === journeySteps.length - 1 ? "group-hover:w-2/3" : ""
            }`}
          />
        </div>
      </article>
    </div>
  );
}

export default function WhySkillBridge() {
  return (
    <section
      className="relative mx-auto max-w-4xl overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
      id="journey"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-[min(90%,620px)] -translate-x-1/2 rounded-full bg-brand/[0.08] blur-[120px]" />

      <div className="mx-auto mb-14 max-w-2xl text-center" id="about">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-6 bg-brand" />
          Your path forward
          <span className="h-px w-6 bg-brand" />
        </div>
        <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[44px]">
          Your Career Journey Starts Here
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
          SkillBridge AI guides students from confusion to clarity, from
          learning to earning.
        </p>
      </div>

      <div className="relative space-y-4 sm:space-y-5">
        <div className="absolute bottom-8 left-[25px] top-8 w-px bg-gradient-to-b from-brand via-accent/70 to-brand/10 sm:left-[35px]" />
        <div className="absolute bottom-8 left-[24px] top-8 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent blur-[2px] sm:left-[34px]" />
        {journeySteps.map((step, index) => (
          <JourneyStepCard index={index} key={step.step} step={step} />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        One focused workspace. A clearer future.
      </div>
    </section>
  );
}
