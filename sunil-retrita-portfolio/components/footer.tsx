import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[.08] py-8">
      <div className="container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold">Sunil Mangtani Retrita</p>
          <p className="mt-1 text-xs text-slate-500">Applied AI · Machine Learning & Data · Finance · FinTech</p>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <Link aria-label="LinkedIn profile" href="https://www.linkedin.com/in/sunil-mr-mba-cima/" target="_blank" rel="noreferrer"><Linkedin size={18} /></Link>
          <a href="mailto:sunilretrita@gmail.com" className="flex items-center gap-1 text-sm hover:text-white">Get in touch <ArrowUpRight size={14}/></a>
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Sunil Retrita</p>
      </div>
    </footer>
  );
}
