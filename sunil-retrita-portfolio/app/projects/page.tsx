import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = { title: "Projects", description: "Software, AI and product projects by Sunil Mangtani Retrita." };

export default function ProjectsPage() {
  return <section className="section min-h-[70vh]">
    <div className="container">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={15}/> Back home</Link>
      <p className="section-label">Portfolio</p>
      <h1 className="section-title">Projects & <span className="gradient-text">experiments.</span></h1>
      <p className="section-copy">A work in progress. Each project page separates known information from details that still need confirmation.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div>
    </div>
  </section>;
}
