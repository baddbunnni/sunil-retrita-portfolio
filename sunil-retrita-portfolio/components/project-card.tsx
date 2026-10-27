import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const projectHref = `/projects/${project.slug}`;

  return (
    <article className="panel card-hover group flex h-full w-full max-w-[430px] flex-col overflow-hidden">
      <Link
        href={projectHref}
        aria-label={`View ${project.title} project details`}
        className={`relative block h-52 shrink-0 overflow-hidden border-b border-white/[.07] ${project.art} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-indigo-300`}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} concept artwork`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="relative flex h-full items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-black/25 shadow-2xl backdrop-blur-sm"><Code2 size={34} strokeWidth={1.35} /></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/65 via-transparent to-black/10 transition group-hover:from-[#070b14]/45" />
        {project.logo && (
          <div className="absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-[#080b12]/90 p-2 shadow-xl backdrop-blur-md">
            <Image src={project.logo} alt={`${project.title} logo`} width={56} height={56} className="h-full w-full object-contain" />
          </div>
        )}
        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-[.15em] text-slate-100 backdrop-blur-md">{project.category}</span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 group-focus-within:opacity-100">View project <ArrowUpRight size={13} /></span>
      </Link>
      <div className="flex flex-1 flex-col items-center p-5 text-center">
        <Link href={projectHref} className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white hover:text-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300">
          {project.title}<ArrowUpRight size={17} className="shrink-0 text-slate-500 transition group-hover:text-indigo-200" />
        </Link>
        <p className="mt-2 text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {project.stack.slice(0, 4).map((item) => <span key={item} className="rounded-md border border-white/[.08] bg-white/[.03] px-2 py-1 text-[11px] text-slate-300">{item}</span>)}
        </div>
        <div className="mt-auto pt-5">
          <Link href={projectHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-300/40 px-5 py-2.5 text-sm font-medium text-indigo-200 transition hover:border-indigo-200 hover:bg-indigo-300/10 hover:text-white">
            Explore project <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
