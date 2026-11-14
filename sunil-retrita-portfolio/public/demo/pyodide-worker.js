// Runs Python in a background thread so the page stays responsive while models train.
importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js");

const STEPS = ["load_dataset", "inspect_data", "process_data", "split_data", "train_models", "find_regimes"];
let pyodide;

async function init() {
  postMessage({ type: "progress", message: "Starting Python", value: 0.1 });
  pyodide = await loadPyodide();

  postMessage({ type: "progress", message: "Installing pandas, scikit-learn and matplotlib", value: 0.35 });
  await pyodide.loadPackage(["pandas", "scikit-learn", "matplotlib"]);

  postMessage({ type: "progress", message: "Fetching the dataset and analysis code", value: 0.85 });
  const [code, csv] = await Promise.all([
    fetch("/demo/gbp_demo.py").then((r) => r.text()),
    fetch("/demo/gbp_usd_interest_rates.csv").then((r) => r.text())
  ]);
  pyodide.FS.writeFile("/home/pyodide/gbp_demo.py", code);
  pyodide.FS.writeFile("/home/pyodide/gbp_usd_interest_rates.csv", csv);

  postMessage({ type: "progress", message: "Importing libraries", value: 0.95 });
  pyodide.runPython("import sys, json, inspect; sys.path.insert(0, '/home/pyodide'); import gbp_demo");
  pyodide.globals.set("step_names", STEPS);
  const sources = JSON.parse(pyodide.runPython("json.dumps({n: inspect.getsource(getattr(gbp_demo, n)) for n in step_names.to_py()})"));
  postMessage({ type: "ready", sources, version: pyodide.version });
}

const ready = init().catch((error) => postMessage({ type: "fatal", message: String(error) }));

self.onmessage = async ({ data }) => {
  await ready;
  const { id, step, args } = data;
  try {
    if (!STEPS.includes(step)) throw new Error(`Unknown step ${step}`);
    pyodide.globals.set("step_args", JSON.stringify(args ?? []));
    const result = pyodide.runPython(`json.dumps(gbp_demo.${step}(*json.loads(step_args)), default=str)`);
    postMessage({ type: "result", id, result: JSON.parse(result) });
  } catch (error) {
    const message = String(error.message ?? error).trim().split("\n").filter(Boolean).pop();
    postMessage({ type: "error", id, message });
  }
};
