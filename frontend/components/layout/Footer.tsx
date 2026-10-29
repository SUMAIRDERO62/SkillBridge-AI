import { Icon } from "../ui/Icons";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const linkGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Roadmaps", href: "#roadmaps" },
      { label: "Progress", href: "/progress" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Learning Hub", href: "#resources" },
      { label: "Projects", href: "#projects" },
      { label: "Documentation", href: "#resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Vision", href: "#about" },
      { label: "About", href: "#about" },
    ],
  },
];

const founderLinks: FooterLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/SUMAIRDERO62",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumair-ahmed-dero-70ba852a0",
    external: true,
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  return (
    <li>
      <a
        className="group inline-flex items-center gap-1.5 rounded-md text-sm text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noreferrer" : undefined}
      >
        {link.label}
        <Icon
          name="arrow-up-right"
          size={12}
          className="text-brand opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-slate-950/70">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-10">
          <div className="max-w-xs">
            <a
              className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              href="#"
              aria-label="SkillBridge AI home"
            >
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand via-violet-500 to-accent text-white shadow-lg shadow-brand/20 transition-transform duration-300 group-hover:scale-105">
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Icon name="sparkles" size={18} />
              </span>
              <span className="text-lg font-semibold tracking-[-0.03em] text-white">
                SkillBridge <span className="text-brand">AI</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-6 text-muted">
              Career Command Center for Students
            </p>

            <div className="mt-8 flex items-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-brand to-accent" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Choose. Build. Become.
              </span>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <FooterLinkItem key={link.label} link={link} />
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Founder
            </h2>
            <ul className="mt-5 space-y-3">
              {founderLinks.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/[0.08] pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                The mission
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
                Helping Students Move From Learning To Earning
              </p>
            </div>

            <p className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              Built for the next chapter
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 SkillBridge AI. All rights reserved.</p>
            <p>From confusion to clarity.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
