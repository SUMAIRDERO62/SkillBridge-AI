import { Icon } from "../ui/Icons";

const stats = [
  { value: "50+", label: "Skills mapped", icon: "layers" as const },
  { value: "100+", label: "Curated resources", icon: "briefcase" as const },
  { value: "20+", label: "Portfolio projects", icon: "rocket" as const },
  { value: "24/7", label: "AI guidance", icon: "sparkles" as const },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8" aria-label="SkillBridge AI by the numbers">
      <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] md:grid-cols-4 md:divide-y-0">
        {stats.map((stat) => (
          <div className="flex items-center gap-3 px-5 py-5 sm:px-7 sm:py-6" key={stat.label}>
            <span className="hidden h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-brand sm:flex"><Icon name={stat.icon} size={17} /></span>
            <div>
              <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{stat.value}</p>
              <p className="mt-0.5 text-[11px] text-muted sm:text-xs">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
