"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#focus", label: "Focus areas" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#07090f]/85 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-[.13em] text-white">
          SUNIL <span className="text-[#8b9eff]">RETRITA</span><span className="text-[#8b9eff]">.</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => <Link key={link.href} className="nav-link" href={link.href}>{link.label}</Link>)}
          <a className="btn-secondary !px-3 !py-2 text-xs" href="/Sunil-Retrita-CV.pdf">Download CV <ArrowUpRight size={14} /></a>
        </nav>
        <button aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 md:hidden">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && <nav className="container flex flex-col gap-4 border-t border-white/10 py-5 md:hidden">
        {links.map((link) => <Link key={link.href} onClick={() => setOpen(false)} className="nav-link py-1" href={link.href}>{link.label}</Link>)}
        <a className="btn-secondary w-fit" href="/Sunil-Retrita-CV.pdf">Download CV <ArrowUpRight size={14} /></a>
      </nav>}
    </header>
  );
}
