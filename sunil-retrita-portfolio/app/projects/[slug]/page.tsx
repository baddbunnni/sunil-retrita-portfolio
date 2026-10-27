import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CircleHelp, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((item) => item.slug === slug);
    return { title: project?.title ?? "Project", description: project?.summary };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="container max-w-5xl">
        <Link href="/projects" className="mb-5 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft size={15} /> All projects</Link>

        <header className={`panel relative overflow-hidden px-6 py-8 text-center sm:px-12 sm:py-10 ${project.art}`}>
          <div className="grid-bg absolute inset-0 opacity-45" />
          <div className="relative mx-auto max-w-3xl">
            <span className="eyebrow">{project.category}</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">{project.summary}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-100/[.05] px-4 py-2 text-sm text-amber-100"><CircleHelp size={15} />{project.status}</p>
              {project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">{project.externalLabel ?? "View project"}<ExternalLink size={15} /></a>}
            </div>
          </div>
        </header>

        <div className="mt-7 grid gap-6 md:grid-cols-[1.25fr_.75fr] md:gap-8">
          <div className="panel p-6 sm:p-7">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">{project.detail}</p>
            {project.attribution && <p className="mt-5 rounded-xl border border-white/10 bg-white/[.025] p-4 text-xs leading-6 text-slate-400">{project.attribution}</p>}
            <h2 className="mt-7 text-xl font-semibold">Key details</h2>
            <ul className="mt-3 space-y-3">{project.highlights.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />{item}</li>)}</ul>
          </div>
          <aside className="space-y-4">
            <div className="panel p-5"><h3 className="font-semibold">Technology & methods</h3><div className="mt-3 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[.03] px-2.5 py-1.5 text-xs text-slate-300">{item}</span>)}</div></div>
            <div className="panel p-5"><h3 className="font-semibold">Project context</h3><p className="mt-2 text-xs leading-6 text-slate-400">This page distinguishes completed contributions from planned product features. Business-sensitive details and third-party systems are described at a high level.</p></div>
          </aside>
        </div>
        <div className="mt-7 flex justify-center border-t border-white/10 pt-6"><Link href="/projects" className="inline-flex items-center gap-2 text-sm text-indigo-200 transition hover:text-white">Explore other projects <ArrowUpRight size={15} /></Link></div>
      </div>
    </section>
  );
}
