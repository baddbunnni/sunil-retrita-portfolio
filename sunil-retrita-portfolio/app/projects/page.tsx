import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = { title: "Projects", description: "Software, AI, data and product projects by Sunil Mangtani Retrita." };

export default function ProjectsPage() {
  return <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
    <div className="container">
      <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft size={15} /> Back home</Link>
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Portfolio</p>
        <h1 className="section-title">Projects & <span className="gradient-text">experiments.</span></h1>
        <p className="section-copy mx-auto">A selection of software development, product design and collaborative project work. Concepts and development-stage projects are labelled clearly.</p>
      </div>
      <div className="mt-8 grid justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </div>
  </section>;
}
