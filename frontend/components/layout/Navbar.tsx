import { Icon } from "../ui/Icons";

export default function Navbar() {
  return (
    <nav className="relative z-10 border-b border-white/[0.07]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a className="flex items-center gap-2.5" href="#" aria-label="SkillBridge AI home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/20">
            <Icon name="sparkles" size={19} />
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-white">
            SkillBridge <span className="text-brand">AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a className="transition-colors hover:text-white" href="#roadmaps">Roadmaps</a>
          <a className="transition-colors hover:text-white" href="#projects">Projects</a>
          <a className="transition-colors hover:text-white" href="#resources">Resources</a>
          <a className="transition-colors hover:text-white" href="#about">About</a>
        </div>

        <a
          className="group flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-brand hover:text-white"
          href="#get-started"
        >
          Get started
          <Icon className="transition-transform group-hover:translate-x-0.5" name="arrow-up-right" size={16} />
        </a>
      </div>
    </nav>
  );
}