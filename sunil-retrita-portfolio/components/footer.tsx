import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[.08] py-8">
      <div className="container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold">Sunil Mangtani Retrita</p>
          <p className="mt-1 text-xs text-slate-500">Applied AI · Machine Learning & Data · FinTech</p>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <Link aria-label="GitHub profile — add your URL" href="https://github.com/" target="_blank"><Github size={18} /></Link>
          <Link aria-label="LinkedIn profile — add your URL" href="https://www.linkedin.com/" target="_blank"><Linkedin size={18} /></Link>
          <a href="mailto:hello@example.com" className="flex items-center gap-1 text-sm hover:text-white">Get in touch <ArrowUpRight size={14}/></a>
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Sunil Retrita</p>
      </div>
    </footer>
  );
}
