import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CircleHelp } from "lucide-react";
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

  return <section className="section min-h-[70vh]">
    <div className="container max-w-4xl">
      <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={15}/> All projects</Link>
      <div className={`panel relative overflow-hidden p-7 sm:p-12 ${project.art}`}>
        <div className="grid-bg absolute inset-0 opacity-60"/>
        <div className="relative">
          <span className="eyebrow">{project.category}</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{project.summary}</p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-100/[.05] px-3 py-1.5 text-xs text-amber-100"><CircleHelp size={14}/>{project.status}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div><h2 className="text-xl font-semibold">Overview</h2><p className="mt-4 text-sm leading-7 text-slate-400">{project.detail}</p><h2 className="mt-8 text-xl font-semibold">Current summary</h2><ul className="mt-4 space-y-3">{project.highlights.map((item)=><li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300"/>{item}</li>)}</ul></div>
        <aside className="space-y-5">
          <div className="panel p-5"><h3 className="font-semibold">Technology</h3><div className="mt-4 flex flex-wrap gap-2">{project.stack.map((item)=><span key={item} className="rounded-md border border-white/10 bg-white/[.03] px-2.5 py-1.5 text-xs text-slate-300">{item}</span>)}</div></div>
          <div className="panel p-5"><h3 className="font-semibold">Before publishing</h3><p className="mt-2 text-xs leading-5 text-slate-500">Confirm these points and replace this editorial checklist with evidence, screenshots and outcomes.</p><ul className="mt-4 space-y-3">{project.confirmation.map((item)=><li key={item} className="flex gap-2 text-xs leading-5 text-slate-400"><span className="text-amber-200">•</span>{item}</li>)}</ul></div>
        </aside>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6"><Link href="/projects" className="inline-flex items-center gap-2 text-sm text-indigo-200 hover:text-white">Explore other projects <ArrowUpRight size={15}/></Link></div>
    </div>
  </section>;
}
