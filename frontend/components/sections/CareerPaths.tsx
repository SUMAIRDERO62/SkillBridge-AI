import { Icon } from "../ui/Icons";

const careers = [
  { title: "AI Engineer", skills: "Python · ML · LLMs", difficulty: "Advanced", duration: "6–9 months", color: "from-violet-500/20 to-violet-500/0", icon: "brain" as const },
  { title: "Data Scientist", skills: "SQL · Python · Stats", difficulty: "Intermediate", duration: "5–8 months", color: "from-cyan-500/20 to-cyan-500/0", icon: "trending-up" as const },
  { title: "Web Developer", skills: "React · Next.js · APIs", difficulty: "Beginner", duration: "4–6 months", color: "from-amber-500/20 to-amber-500/0", icon: "code" as const },
  { title: "Cyber Security", skills: "Networks · Linux · SOC", difficulty: "Intermediate", duration: "5–8 months", color: "from-emerald-500/20 to-emerald-500/0", icon: "target" as const },
  { title: "DevOps Engineer", skills: "Cloud · Docker · CI/CD", difficulty: "Advanced", duration: "6–10 months", color: "from-rose-500/20 to-rose-500/0", icon: "layers" as const },
  { title: "Mobile Developer", skills: "React Native · UX · APIs", difficulty: "Intermediate", duration: "4–7 months", color: "from-blue-500/20 to-blue-500/0", icon: "rocket" as const },
];

export default function CareerPaths() {
  return (
    <section className="border-y border-white/[0.06] bg-slate-900/30" id="roadmaps">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Choose your direction</p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">A path for where you want to go.</h2>
            <p className="mt-4 text-base leading-7 text-muted">Start with a destination. We&apos;ll help you map the skills, projects, and steps to get there.</p>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white" href="#get-started">View all paths <Icon name="arrow-up-right" size={16} className="text-brand" /></a>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {careers.map((career) => (
          <div
            key={career.title}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${career.color} bg-surface p-6 transition-all hover:-translate-y-1 hover:border-white/20`}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white"><Icon name={career.icon} size={19} /></span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted">{career.difficulty}</span>
            </div>
            <h3 className="mt-7 text-lg font-semibold text-white">{career.title}</h3>
            <p className="mt-2 text-xs text-muted">{career.skills}</p>
            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs">
              <span className="text-slate-500">Typical duration</span>
              <span className="font-medium text-slate-300">{career.duration}</span>
            </div>
            <span className="absolute bottom-5 right-5 text-slate-600 transition-colors group-hover:text-white"><Icon name="arrow-up-right" size={17} /></span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}