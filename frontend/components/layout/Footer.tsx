import { Icon } from "../ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a className="flex items-center gap-2.5" href="#" aria-label="SkillBridge AI home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent text-white">
              <Icon name="sparkles" size={16} />
            </span>
            <span className="font-semibold text-white">SkillBridge <span className="text-brand">AI</span></span>
          </a>
          <p className="mt-2 text-sm text-muted">Helping students move from learning to earning.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          <a className="transition-colors hover:text-white" href="#roadmaps">Roadmaps</a>
          <a className="transition-colors hover:text-white" href="#projects">Projects</a>
          <a className="transition-colors hover:text-white" href="#resources">Resources</a>
          <a className="transition-colors hover:text-white" href="#about">About</a>
        </div>
        <p className="text-sm text-slate-600">© 2026 SkillBridge AI</p>
      </div>
    </footer>
  );
}