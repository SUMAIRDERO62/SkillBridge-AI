import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../../components/ui/Icons";

const roadmapTitles: Record<string, string> = {
  "data-scientist": "Data Scientist",
  "web-developer": "Web Developer",
  "cyber-security": "Cyber Security",
  "devops-engineer": "DevOps Engineer",
  "mobile-developer": "Mobile Developer",
};

type RoadmapPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(roadmapTitles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RoadmapPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = roadmapTitles[slug];

  if (!title) {
    return {};
  }

  return {
    title: `${title} Roadmap | SkillBridge AI`,
    description: `Follow the ${title} career path with SkillBridge AI.`,
  };
}

export default async function RoadmapPage({ params }: RoadmapPageProps) {
  const { slug } = await params;
  const title = roadmapTitles[slug];

  if (!title) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16 lg:pb-32">
        <Link
          href="/careers"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-transform group-hover:-translate-x-0.5">
            <Icon name="chevron-right" size={15} className="rotate-180" />
          </span>
          Back to career paths
        </Link>

        <section className="mt-20 rounded-3xl border border-white/[0.09] bg-surface/55 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-12">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/25 bg-brand/10 text-brand">
            <Icon name="compass" size={22} />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Career roadmap
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {title} Roadmap
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
            This roadmap is being prepared for the SkillBridge AI Career
            Command Center.
          </p>
          <Link
            href="/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white"
          >
            Choose another path
            <Icon name="arrow-up-right" size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
