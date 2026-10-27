import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, ChartNoAxesCombined, Database, Linkedin, Mail, MonitorSmartphone, Sparkles, WalletCards, Workflow } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

const focusAreas = [
  { icon: BrainCircuit, title: "Applied AI & Solutions", text: "Designing practical software and exploring how AI can improve workflows, products and business decisions.", tags: ["Applied AI", "Automation", "Generative AI"] },
  { icon: ChartNoAxesCombined, title: "Machine Learning & Data", text: "Building capability in Python, statistics, data analysis, data visualisation and machine learning through MSc study and hands-on projects.", tags: ["Python", "Data visualisation", "Machine learning"] },
  { icon: WalletCards, title: "FinTech", text: "Exploring how data and intelligent systems can support financial services, risk analysis and better business decisions.", tags: ["Financial analytics", "Risk", "Decision support"] }
];

const disciplines = [
  { icon: BriefcaseBusiness, title: "Business solutions" },
  { icon: MonitorSmartphone, title: "Software development" },
  { icon: Sparkles, title: "AI & data" },
  { icon: WalletCards, title: "Finance" }
];

const principles = [
  { title: "Build", text: "Software & prototypes", description: "Turn real needs into useful digital experiences." },
  { title: "Analyse", text: "Data & models", description: "Find patterns, test ideas and communicate insights." },
  { title: "Apply", text: "Business problems", description: "Connect technology with practical outcomes." }
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
              Sunil Mangtani <span className="gradient-text">Retrita</span>
            </h1>
            <h2 className="mt-6 max-w-xl text-xl font-medium leading-snug text-slate-200 sm:text-2xl">
              Building intelligent solutions for <span className="text-slate-400">real-world problems.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
              Business Solutions Technician and MSc Artificial Intelligence student, combining business experience with software, data, finance and emerging AI technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">Explore my work <ArrowRight size={16} /></Link>
              <a href="https://www.linkedin.com/in/sunil-mr-mba-cima/" target="_blank" rel="noreferrer" className="btn-secondary">Let’s connect <Linkedin size={16} /></a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
              {disciplines.map(({icon: Icon, title}) => <span key={title} className="inline-flex items-center gap-2"><Icon size={15} className="text-indigo-300" /> {title}</span>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-2xl" />
            <div className="panel relative overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-white/[.08] bg-[#0b1020]">
                <Image src="/sunil-profile.jpg" alt="Sunil Mangtani Retrita, wearing a dark blazer against a navy studio background" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover object-top" />
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[.15em] text-slate-500">Currently focused on</p>
                  <p className="mt-1 text-xs font-medium text-slate-200">AI · Software · Data · Finance · iOS</p>
                </div>
                <div className="absolute right-4 top-4 rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur-md">
                  <BrainCircuit size={19} className="text-indigo-200" />
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-4 text-xs text-slate-500">
                <span>Business-minded technologist</span><span className="text-indigo-300">Software · Data · Finance</span>
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
            <p className="section-copy">I work as a Business Solutions Technician while studying for an MSc in Artificial Intelligence at Birmingham City University. My background also includes business management and finance, with interests spanning applied AI, software development, machine learning, data visualisation and FinTech.</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">I enjoy translating business needs into practical digital solutions: understanding the workflow, choosing suitable technology, and building experiences that are useful, clear and easier to work with.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {principles.map(({title,text,description}) => <div key={title} className="panel principle-card p-6"><p className="text-2xl font-semibold tracking-tight text-white">{title}</p><p className="mt-2 text-sm font-medium text-indigo-200">{text}</p><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="section border-y border-white/[.06] bg-[#090c14]">
        <div className="container">
          <p className="section-label">Areas of focus</p>
          <h2 className="section-title max-w-2xl">Three directions. <span className="gradient-text">One evolving skill set.</span></h2>
          <p className="section-copy mb-10">I’m keeping my options open while building the technical depth and practical evidence to decide where I can make the strongest contribution.</p>
          <div className="grid gap-4 lg:grid-cols-3">
            {focusAreas.map(({icon: Icon, title, text, tags}) => <article key={title} className="panel card-hover focus-card flex flex-col items-center p-7 text-center sm:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-400/[.08] text-indigo-200"><Icon size={29}/></div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-400">{text}</p>
              <div className="mt-auto flex flex-wrap justify-center gap-2 pt-5">{tags.map(tag=><span key={tag} className="rounded-md bg-white/[.045] px-3 py-2 text-xs text-slate-300">{tag}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="section-label">Selected work</p><h2 className="section-title">Projects with a <span className="gradient-text">purpose.</span></h2><p className="section-copy">A selection of software, product and collaborative project work, with concepts clearly distinguished from deployed products.</p></div>
            <Link href="/projects" className="btn-secondary w-fit">All projects <ArrowUpRight size={15}/></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div>
        </div>
      </section>

      <section id="experience" className="section border-y border-white/[.06] bg-[#090c14]">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-label">Career & learning</p>
            <h2 className="section-title">Experience <span className="gradient-text">& education.</span></h2>
            <p className="section-copy mx-auto">A combination of business systems, finance experience and formal study in management and artificial intelligence.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Current role</p><h3 className="mt-2 text-lg font-semibold">Business Solutions Technician</h3><p className="mt-1 text-sm text-slate-400">Business systems · Process improvement · Software development</p></div><span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Jan 2025 – present</span></div><p className="mt-4 text-sm leading-7 text-slate-400">Support business operations through system and process improvements, with experience across cloud ERP workflows and internal tools. Rebuilt an existing iOS proof-of-delivery application using SwiftUI, modernising the user experience and adding functionality to support QR-based shipment identification, recipient acknowledgement and delivery-record submission.</p></div>
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Finance experience</p><h3 className="mt-2 text-lg font-semibold">Finance Intern</h3><p className="mt-1 text-sm text-slate-400">Southco Inc. · SAP environment</p></div></div><p className="mt-4 text-sm leading-7 text-slate-400">Gained experience supporting day-to-day finance operations in an SAP environment, with exposure to financial data handling, reporting support, transaction checks and period-end processes. The final wording should reflect the specific tasks personally performed.</p></div>
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Current study</p><h3 className="mt-2 text-lg font-semibold">MSc Artificial Intelligence</h3><p className="mt-1 text-sm text-slate-400">Birmingham City University</p></div><span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">2026 – expected 2027</span></div><p className="mt-4 text-sm leading-7 text-slate-400">Developing knowledge across AI, programming, data visualisation and machine learning, with an interest in applying AI to business and financial services.</p></div>
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Postgraduate education</p><h3 className="mt-2 text-lg font-semibold">Master of Business Administration (MBA)</h3><p className="mt-1 text-sm text-slate-400">University of Worcester</p></div><span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Awarded 2020</span></div><p className="mt-4 text-sm leading-7 text-slate-400">Relevant study included financial decision-making, global strategy, entrepreneurship and innovation, leadership and change management, operations and value-chain management, research methods and a research project on how streetwear brands position themselves as luxury.</p></div>
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Undergraduate education</p><h3 className="mt-2 text-lg font-semibold">BA (Hons) Business Management</h3><p className="mt-1 text-sm text-slate-400">Manchester Metropolitan University</p></div><span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Graduated 2018</span></div></div>
            <div className="panel p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.12em] text-indigo-300">Professional qualification</p><h3 className="mt-2 text-lg font-semibold">CIMA Certificate in Business Accounting</h3><p className="mt-1 text-sm text-slate-400">Finance and management accounting</p></div></div><p className="mt-4 text-sm leading-6 text-slate-400">Qualification wording should match the exact certificate held.</p></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="section-label">Toolkit</p><h2 className="section-title">Tools I use<br/>and <span className="gradient-text">am learning.</span></h2><p className="section-copy">A practical snapshot of technologies, methods and business domains I work with or am developing through study and projects.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[["Software development", "SwiftUI · iOS · TypeScript · Next.js"],["AI & data", "Python · Machine learning · Data analysis · Data visualisation"],["Data & backend", "SQL · Supabase · Existing API integrations"],["Developer workflow", "Git · GitHub · Version control"],["Cloud & deployment", "Azure learning · Vercel · Cloud ERP workflows"],["Business & finance", "SAP exposure · Acumatica · Process improvement · Financial decision-making"]].map(([title,items])=><div key={title} className="panel p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{items}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section pt-8">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-indigo-300/20 bg-gradient-to-br from-[#151c33] via-[#0e1220] to-[#17112b] p-8 sm:p-12">
            <div className="glow right-[-4%] top-[-40%] h-64 w-64 bg-violet-500 opacity-20"/>
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div><p className="section-label">Contact</p><h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Interested in building something useful?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">I’m interested in connecting with people working across software, AI, data, finance and FinTech.</p></div>
              <div className="flex flex-wrap gap-3"><a className="btn-primary" href="mailto:sunilretrita@gmail.com">Email me <Mail size={16}/></a><a className="btn-secondary" href="https://www.linkedin.com/in/sunil-mr-mba-cima/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16}/></a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
