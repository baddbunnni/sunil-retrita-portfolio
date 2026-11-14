"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Code2, LoaderCircle, Play } from "lucide-react";

type Block =
  | { type: "text"; value: string }
  | { type: "code"; title: string; value: string }
  | { type: "table"; title: string; html: string }
  | { type: "image"; alt: string; src: string };

type StepId = "load_dataset" | "inspect_data" | "process_data" | "split_data" | "train_models" | "find_regimes";
type StepState = { status: "idle" | "running" | "done" | "error"; blocks?: Block[]; error?: string; seconds?: number };

const MODELS = ["All models", "Linear Regression", "Decision Tree", "Random Forest", "Polynomial Regression", "Support Vector Regression"];

const STEPS: { id: StepId; title: string; button: string; description: string; needs?: StepId }[] = [
  { id: "load_dataset", title: "Load the dataset", button: "Load dataset", description: "Read the CSV with pandas and rename the columns to descriptive names." },
  { id: "inspect_data", title: "Inspect the data", button: "Investigate dataset", description: "Column types, summary statistics, missing values and duplicates.", needs: "load_dataset" },
  { id: "process_data", title: "Clean and engineer features", button: "Clean & process", description: "Convert dates, fill missing US rates, and add the UK–US rate differential and daily return.", needs: "load_dataset" },
  { id: "split_data", title: "Split by time", button: "Split train / test", description: "First 80% of days for training, last 20% for testing, so no model sees the future.", needs: "process_data" },
  { id: "train_models", title: "Train and compare models", button: "Train", description: "Every model is compared with a naive forecast that says tomorrow's rate equals today's.", needs: "split_data" },
  { id: "find_regimes", title: "Find interest-rate regimes with K-Means", button: "Find clusters", description: "Cluster days by UK rate, US rate and their differential, scored with the silhouette method.", needs: "process_data" }
];

function Output({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-5 space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "text") return <p key={i} className="rounded-xl border border-indigo-300/20 bg-indigo-400/[.06] px-4 py-3 text-sm leading-6 text-slate-200">{block.value}</p>;
        // Charts are generated in the browser as data URLs, so next/image has nothing to optimise
        // eslint-disable-next-line @next/next/no-img-element
        if (block.type === "image") return <img key={i} src={block.src} alt={block.alt} className="w-full rounded-xl border border-white/10" />;
        return (
          <div key={i}>
            <p className="mb-2 text-xs font-medium uppercase tracking-[.1em] text-slate-400">{block.title}</p>
            {block.type === "code"
              ? <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#05070d] p-4 text-xs leading-5 text-slate-300">{block.value}</pre>
              : <div className="demo-table-wrap" dangerouslySetInnerHTML={{ __html: block.html }} />}
          </div>
        );
      })}
    </div>
  );
}

export function GbpDemo() {
  const worker = useRef<Worker | null>(null);
  const pending = useRef(new Map<number, (message: { type: string; result?: { blocks: Block[] }; message?: string }) => void>());
  const nextId = useRef(0);
  const [boot, setBoot] = useState<{ message: string; value: number; ready: boolean; failed?: string }>({ message: "Starting Python", value: 0.03, ready: false });
  const [sources, setSources] = useState<Record<string, string>>({});
  const [steps, setSteps] = useState<Partial<Record<StepId, StepState>>>({});
  const [showCode, setShowCode] = useState<Partial<Record<StepId, boolean>>>({});
  const [dataset, setDataset] = useState("gbp_usd");
  const [model, setModel] = useState("All models");
  const [k, setK] = useState(3);

  useEffect(() => {
    const w = new Worker("/demo/pyodide-worker.js");
    worker.current = w;
    w.onmessage = ({ data }) => {
      if (data.type === "progress") setBoot({ message: data.message, value: data.value, ready: false });
      else if (data.type === "ready") { setSources(data.sources); setBoot({ message: `Python ready (Pyodide ${data.version})`, value: 1, ready: true }); }
      else if (data.type === "fatal") setBoot((b) => ({ ...b, failed: data.message }));
      else pending.current.get(data.id)?.(data);
    };
    return () => w.terminate();
  }, []);

  const run = useCallback((id: StepId, args: unknown[] = []) => {
    if (!worker.current) return;
    const requestId = nextId.current++;
    const started = performance.now();
    setSteps((s) => ({ ...s, [id]: { ...s[id], status: "running" } }));
    pending.current.set(requestId, (message) => {
      pending.current.delete(requestId);
      const seconds = (performance.now() - started) / 1000;
      setSteps((s) => {
        const next = { ...s };
        // Re-loading the data invalidates everything after it
        if (id === "load_dataset") STEPS.slice(1).forEach((step) => delete next[step.id]);
        if (id === "process_data") (["split_data", "train_models", "find_regimes"] as StepId[]).forEach((step) => delete next[step]);
        if (id === "split_data") delete next.train_models;
        next[id] = message.type === "result" ? { status: "done", blocks: message.result?.blocks, seconds } : { status: "error", error: message.message, seconds };
        return next;
      });
    });
    worker.current.postMessage({ id: requestId, step: id, args });
  }, []);

  const busy = Object.values(steps).some((s) => s?.status === "running");

  return (
    <div>
      <div className="panel sticky top-[84px] z-20 p-4 backdrop-blur-md sm:p-5">
        <div className="flex items-center gap-3 text-sm">
          {boot.ready ? <Check size={17} className="text-emerald-300" /> : <LoaderCircle size={17} className={`text-indigo-300 ${boot.failed ? "" : "animate-spin"}`} />}
          <span className={boot.failed ? "text-rose-300" : "text-slate-200"}>{boot.failed ? `Python failed to start: ${boot.failed}` : boot.message}</span>
        </div>
        {!boot.ready && !boot.failed && <>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#5378ff] to-[#8062e8] transition-all duration-700" style={{ width: `${boot.value * 100}%` }} /></div>
          <p className="mt-2 text-xs text-slate-500">The first visit downloads about 30 MB, so this can take 10–20 seconds. Later visits are faster.</p>
        </>}
      </div>

      <ol className="mt-6 space-y-5">
        {STEPS.map((step, index) => {
          const state = steps[step.id];
          const locked = !boot.ready || (step.needs && steps[step.needs]?.status !== "done");
          const args = step.id === "load_dataset" ? [dataset] : step.id === "train_models" ? [model] : step.id === "find_regimes" ? [k] : [];
          return (
            <li key={step.id} className={`panel p-5 transition sm:p-7 ${locked ? "opacity-55" : ""}`}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${state?.status === "done" ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-200" : "border-indigo-300/30 bg-indigo-300/10 text-indigo-200"}`}>{state?.status === "done" ? <Check size={16} /> : index + 1}</span>
                  <div>
                    <h2 className="text-lg font-semibold">{step.title}</h2>
                    <p className="mt-1 max-w-xl text-sm leading-6 text-slate-400">{step.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-13 lg:shrink-0 lg:pl-0">
                  {step.id === "load_dataset" && <label className="sr-only" htmlFor="dataset">Dataset</label>}
                  {step.id === "load_dataset" && <select id="dataset" value={dataset} onChange={(e) => setDataset(e.target.value)} disabled={locked} className="demo-select"><option value="gbp_usd">GBP/USD & interest rates, 2010–2025</option></select>}
                  {step.id === "train_models" && <><label className="sr-only" htmlFor="model">Model</label><select id="model" value={model} onChange={(e) => setModel(e.target.value)} disabled={locked} className="demo-select">{MODELS.map((m) => <option key={m}>{m}</option>)}</select></>}
                  {step.id === "find_regimes" && <><label className="sr-only" htmlFor="k">Number of clusters</label><select id="k" value={k} onChange={(e) => setK(Number(e.target.value))} disabled={locked} className="demo-select">{[2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>k = {n}</option>)}</select></>}
                  <button type="button" onClick={() => run(step.id, args)} disabled={Boolean(locked) || busy} className="btn-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0">
                    {state?.status === "running" ? <LoaderCircle size={15} className="animate-spin" /> : <Play size={15} />}
                    {state?.status === "running" ? "Running…" : state?.status === "done" ? "Run again" : step.button}
                  </button>
                </div>
              </div>

              {sources[step.id] && (
                <button type="button" onClick={() => setShowCode((s) => ({ ...s, [step.id]: !s[step.id] }))} aria-expanded={Boolean(showCode[step.id])} className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white">
                  <Code2 size={14} /> {showCode[step.id] ? "Hide" : "View"} the Python code <ChevronDown size={14} className={`transition ${showCode[step.id] ? "rotate-180" : ""}`} />
                </button>
              )}
              {showCode[step.id] && <pre className="mt-3 max-h-96 overflow-auto rounded-xl border border-white/10 bg-[#05070d] p-4 text-xs leading-5 text-slate-300">{sources[step.id]}</pre>}

              {state?.status === "error" && <p className="mt-5 rounded-xl border border-rose-300/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{state.error}</p>}
              {state?.status === "done" && state.blocks && <>
                <Output blocks={state.blocks} />
                <p className="mt-3 text-right text-xs text-slate-500">Ran in {state.seconds?.toFixed(1)}s in your browser</p>
              </>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
