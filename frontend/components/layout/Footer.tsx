import { Icon } from "../ui/Icons";

const platformLinks = [
  { label: "Roadmaps", href: "#roadmaps" },
  { label: "Projects", href: "#projects" },
  { label: "Progress", href: "/progress" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#about" },
];

const resourceLinks = [
  { label: "Learning Resources", href: "#resources" },
  { label: "Career Paths", href: "/careers" },
];

const socialLinks = [
  {
    label: "Website",
    href: "https://sumair-ahmed-dero-ai-journey.vercel.app/",
    mark: "↗",
  },
  {
    label: "GitHub",
    href: "https://github.com/SUMAIRDERO62",
    mark: "GH",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumair-ahmed-dero-70ba852a0",
    mark: "in",
  },
  {
    label: "Achievements",
    href: "https://github.com/SUMAIRDERO62?tab=achievements",
    mark: "★",
  },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              href={link.href}
            >
              {link.label}
              <Icon
                name="arrow-up-right"
                size={12}
                className="text-brand opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-slate-950/60">
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent/[0.06] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] lg:gap-10">
          <div className="max-w-xs">
            <a
              className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              href="#"
              aria-label="SkillBridge AI home"
            >
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/20 transition-transform duration-300 group-hover:scale-105">
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Icon name="sparkles" size={18} />
              </span>
              <span className="text-lg font-semibold tracking-[-0.03em] text-white">
                SkillBridge <span className="text-brand">AI</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-6 text-muted">
              Helping Students Move From Learning To Earning.
            </p>

            <div className="mt-7 flex items-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-brand to-accent" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Build with direction
              </span>
            </div>
          </div>

          <FooterLinks title="Platform" links={platformLinks} />
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Resources" links={resourceLinks} />

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Connect
            </h2>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="flex h-7 min-w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-1.5 text-[10px] font-semibold text-slate-300 transition-all group-hover:border-brand/30 group-hover:bg-brand/10 group-hover:text-violet-200">
                      {link.mark}
                    </span>
                    {link.label}
                    <Icon
                      name="arrow-up-right"
                      size={12}
                      className="ml-auto text-brand opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SkillBridge AI. Built for the next chapter.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            From learning to earning
          </p>
        </div>
      </div>
    </footer>
  );
}
