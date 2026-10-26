import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Database, Github, Linkedin, Mail, Sparkles, TerminalSquare, Workflow } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

const focusAreas = [
  { icon: BrainCircuit, number: "01", title: "Applied AI & Solutions", text: "Building practical software and exploring how AI can improve workflows, products and business decisions.", tags: ["Applied AI", "Automation", "GenAI"] },
  { icon: Database, number: "02", title: "Machine Learning & Data", text: "Developing capability in Python, data analysis, visualisation and machine learning through study and projects.", tags: ["Python", "Machine Learning", "Data"] },
  { icon: Workflow, number: "03", title: "FinTech", text: "Exploring the intersection of intelligent systems, financial services, analytics and responsible automation.", tags: ["Financial data", "Risk", "Decision support"] }
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
        <div className="glow right-[-8%] top-10 h-80 w-80 bg-blue-600" />
        <div className="glow right-[20%] top-36 h-56 w-56 bg-violet-600 opacity-15" />
        <div className="grid-bg absolute inset-0 -z-10 opacity-70" />
        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div className="animate-rise">
            <span className="eyebrow"><span className="eyebrow-dot" /> MSc Artificial Intelligence · Birmingham City University</span>
            <p className="mt-8 text-sm font-medium text-slate-400">Hello, I’m</p>
            <h1 className="mt-2 max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-.055em] sm:text-6xl xl:text-7xl">
              Sunil Mangtani <span className="gradient-text">Retrita.</span>
            </h1>
            <h2 className="mt-6 max-w-xl text-xl font-medium leading-snug text-slate-200 sm:text-2xl">
              Building intelligent solutions for <span className="text-slate-400">real-world problems.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
              Business Solutions Technician and MSc Artificial Intelligence student, exploring the space where software, data and business meet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">Explore my work <ArrowRight size={16} /></Link>
              <a href="#contact" className="btn-secondary">Let’s connect <Mail size={16} /></a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={15} className="text-indigo-300" /> Business solutions</span>
              <span className="inline-flex items-center gap-2"><TerminalSquare size={15} className="text-indigo-300" /> Software development</span>
              <span className="inline-flex items-center gap-2"><Sparkles size={15} className="text-indigo-300" /> AI & data</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-2xl" />
            <div className="panel relative overflow-hidden p-3">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[14px] border border-white/[.08] bg-gradient-to-br from-[#17233e] via-[#111827] to-[#241943]">
                <div className="grid-bg absolute inset-0 opacity-80" />
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/15" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20" />
                <div className="relative z-10 flex max-w-[260px] flex-col items-center px-6 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-blue-200/30 bg-blue-300/10 text-3xl font-semibold text-blue-100 shadow-[0_0_70px_rgba(99,135,255,.18)]">SR</div>
                  <p className="mt-5 text-sm font-semibold text-slate-100">Your photo goes here</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">Replace this placeholder with a professional portrait for the final version.</p>
                </div>
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[.15em] text-slate-500">Currently focused on</p>
                  <p className="mt-1 text-xs font-medium text-slate-200">AI · Software · Data</p>
                </div>
                <div className="absolute right-4 top-4 rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur-md">
                  <BrainCircuit size={19} className="text-indigo-200" />
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-4 text-xs text-slate-500">
                <span>Business-minded technologist</span><span className="text-indigo-300">01 / 04</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#about" className="container mt-12 flex items-center gap-2 text-xs text-slate-500 hover:text-white"><ArrowDown size={14} /> Scroll to explore</a>
      </section>

      <section id="about" className="section border-t border-white/[.06]">
        <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="section-label">About me</p><h2 className="section-title">Business context.<br/><span className="gradient-text">Technical curiosity.</span></h2></div>
          <div>
            <p className="section-copy">I work as a Business Solutions Technician while studying for an MSc in Artificial Intelligence at Birmingham City University. My interests span software development, applied AI, machine learning, data visualisation and FinTech.</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">I’m building a portfolio around practical problem-solving: understanding a need, exploring the right technology, and developing solutions that can be tested and improved. This site will grow alongside my work and studies.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[["01","Build","Software & prototypes"],["02","Analyse","Data & models"],["03","Apply","Business problems"]].map(([n,t,d]) => <div key={n} className="panel p-4"><span className="text-xs text-indigo-300">{n}</span><p className="mt-3 font-semibold">{t}</p><p className="mt-1 text-xs text-slate-500">{d}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="section border-y border-white/[.06] bg-[#090c14]">
        <div className="container">
          <p className="section-label">Areas of focus</p>
          <h2 className="section-title max-w-2xl">Three directions. <span className="gradient-text">One evolving skill set.</span></h2>
          <p className="section-copy mb-10">I’m keeping my options open while building the technical depth and evidence to decide where I can make the strongest contribution.</p>
          <div className="grid gap-4 lg:grid-cols-3">
            {focusAreas.map(({icon: Icon, number, title, text, tags}) => <article key={number} className="panel card-hover p-6">
              <div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-300/15 bg-indigo-400/[.08] text-indigo-200"><Icon size={21}/></div><span className="text-xs text-slate-600">{number}</span></div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 min-h-[88px] text-sm leading-6 text-slate-400">{text}</p>
              <div className="mt-5 flex flex-wrap gap-2">{tags.map(tag=><span key={tag} className="rounded-md bg-white/[.045] px-2.5 py-1.5 text-[11px] text-slate-300">{tag}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="section-label">Selected work</p><h2 className="section-title">Projects with a <span className="gradient-text">purpose.</span></h2><p className="section-copy">A growing collection of software, product and AI-related work. Project details marked for confirmation are drafts, not claims of completed functionality.</p></div>
            <Link href="/projects" className="btn-secondary w-fit">All projects <ArrowUpRight size={15}/></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div>
        </div>
      </section>

      <section id="experience" className="section border-y border-white/[.06] bg-[#090c14]">
        <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="section-label">Experience & education</p><h2 className="section-title">Learning by <span className="gradient-text">building.</span></h2><p className="section-copy">A combination of business experience, ongoing study and practical technical projects.</p></div>
          <div className="space-y-4">
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Current role</p><h3 className="mt-2 text-lg font-semibold">Business Solutions Technician</h3><p className="mt-1 text-sm text-slate-400">Software, business systems and technical solutions</p></div><span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Jan 2025 – present</span></div><p className="mt-4 text-sm leading-6 text-slate-500">Role title and start date based on information provided. Specific responsibilities and measurable outcomes should be added and checked before publication.</p></div>
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Current study</p><h3 className="mt-2 text-lg font-semibold">MSc Artificial Intelligence</h3><p className="mt-1 text-sm text-slate-400">Birmingham City University</p></div><span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">2026 – 2027 · confirm dates</span></div><p className="mt-4 text-sm leading-6 text-slate-500">Current study. Areas of interest include machine learning, data visualisation, GenAI and AI for FinTech.</p></div>
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Previous education</p><h3 className="mt-2 text-lg font-semibold">MBA</h3><p className="mt-1 text-sm text-slate-400">Business and management</p></div><span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Dates & institution to confirm</span></div><p className="mt-4 text-sm leading-6 text-slate-500">Qualification mentioned by Sunil; confirm the awarding institution, dates and exact qualification wording.</p></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="section-label">Toolkit</p><h2 className="section-title">Tools I use<br/>and <span className="gradient-text">am learning.</span></h2><p className="section-copy">This is an initial skills map, not a proficiency ranking. Keep only technologies you can comfortably discuss in an interview.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[["Software development", "SwiftUI · iOS · APIs (specific stack to confirm)"],["AI & data", "Python · Machine learning · Data visualisation"],["Data & backend", "SQL · Supabase · Stripe integrations (project status to confirm)"],["Developer workflow", "Git · GitHub · TypeScript · Next.js"],["Cloud & deployment", "Azure learning · Vercel"],["Business domain", "Process improvement · Business systems · FinTech interests"]].map(([title,items])=><div key={title} className="panel p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{items}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section pt-8">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-indigo-300/20 bg-gradient-to-br from-[#151c33] via-[#0e1220] to-[#17112b] p-8 sm:p-12">
            <div className="glow right-[-4%] top-[-40%] h-64 w-64 bg-violet-500 opacity-20"/>
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div><p className="section-label">Contact</p><h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Interested in building something useful?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">I’m interested in connecting with people working across software, AI, data and FinTech.</p></div>
              <div className="flex flex-wrap gap-3"><a className="btn-primary" href="mailto:hello@example.com">Email me <Mail size={16}/></a><a className="btn-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16}/></a><a className="btn-secondary" href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Github size={16}/></a></div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-600">Contact links are placeholders and must be replaced before launch.</p>
        </div>
      </section>
    </>
  );
}
