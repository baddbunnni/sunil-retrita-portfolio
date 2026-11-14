import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GbpDemo } from "@/components/gbp-demo";

export const metadata: Metadata = {
  title: "GBP/USD Forecasting — Live Demo",
  description: "Run the GBP/USD forecasting analysis step by step in your browser with Python, pandas and scikit-learn."
};

export default function GbpUsdDemoPage() {
  return (
    <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="container max-w-5xl">
        <Link href="/projects/gbp-usd-forecasting" className="mb-5 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft size={15} /> Back to the project</Link>
        <header className="mb-6 max-w-3xl">
          <span className="eyebrow"><span className="eyebrow-dot" /> Live demo · Python in your browser</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">GBP/USD forecasting, <span className="gradient-text">step by step.</span></h1>
          <p className="mt-4 text-base leading-7 text-slate-300">Run the analysis yourself. Each step executes real Python with pandas and scikit-learn inside your browser using Pyodide, so nothing is sent to a server. Open “View the Python code” on any step to see exactly what runs.</p>
        </header>
        <GbpDemo />
      </div>
    </section>
  );
}
