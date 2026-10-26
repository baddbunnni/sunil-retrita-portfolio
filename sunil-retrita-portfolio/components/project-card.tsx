import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel card-hover group overflow-hidden">
      <div className={`relative flex h-44 items-center justify-center overflow-hidden border-b border-white/[.07] ${project.art}`}>
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-black/25 shadow-2xl backdrop-blur-sm">
          <Code2 size={34} strokeWidth={1.35} />
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[10px] uppercase tracking-[.15em] text-slate-200">{project.category}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <ArrowUpRight size={18} className="mt-1 shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => <span key={item} className="rounded-md border border-white/[.08] bg-white/[.03] px-2 py-1 text-[11px] text-slate-300">{item}</span>)}
        </div>
        <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#a5b4ff] hover:text-white">
          Explore project <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
