"""GBP/USD forecasting demo, run in the browser with Pyodide.

Each step function returns a dict the page renders:
  {"blocks": [{"type": "text" | "table" | "image", ...}]}
State is kept in module globals between steps, like a notebook.
"""
import base64
import io

import numpy as np
import pandas as pd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score, silhouette_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
from sklearn.svm import SVR
from sklearn.tree import DecisionTreeRegressor

DATASETS = {"gbp_usd": "/home/pyodide/gbp_usd_interest_rates.csv"}
FEATURES = ["gbp_usd_exchange_rate", "us_effr", "uk_bank_rate", "uk_us_rate_differential", "gbp_usd_return"]
TARGET = "target_next_gbp_usd_rate"
MODELS = ["Linear Regression", "Decision Tree", "Random Forest", "Polynomial Regression", "Support Vector Regression"]

# Chart styling to match the site (dark surface, validated categorical order)
SURFACE, INK, MUTED, GRID = "#0b1020", "#e2e8f0", "#94a3b8", "#1e2638"
SERIES = ["#3987e5", "#d95926", "#199e70", "#c98500", "#d55181", "#0ca30c"]
MODEL_COLOURS = dict(zip(MODELS, SERIES))

state = {}


def _text(value):
    return {"type": "text", "value": str(value)}


def _table(df, title, float_format="{:.4f}"):
    html = df.to_html(classes="demo-table", border=0, float_format=float_format.format, na_rep="—")
    return {"type": "table", "title": title, "html": html}


def _figure(fig, alt):
    buffer = io.BytesIO()
    fig.savefig(buffer, format="png", dpi=110, facecolor=SURFACE, bbox_inches="tight")
    plt.close(fig)
    return {"type": "image", "alt": alt, "src": "data:image/png;base64," + base64.b64encode(buffer.getvalue()).decode()}


def _axes(figsize=(11, 4.4)):
    fig, ax = plt.subplots(figsize=figsize)
    fig.patch.set_facecolor(SURFACE)
    ax.set_facecolor(SURFACE)
    for spine in ax.spines.values():
        spine.set_visible(False)
    ax.tick_params(colors=MUTED, length=0)
    ax.grid(axis="y", color=GRID)
    ax.set_axisbelow(True)
    return fig, ax


def _legend(ax):
    legend = ax.legend(frameon=False, loc="upper left", ncol=3)
    for text in legend.get_texts():
        text.set_color(INK)


def _require(*keys):
    missing = [key for key in keys if key not in state]
    if missing:
        raise RuntimeError("Run the earlier steps first.")


# Step 1
def load_dataset(name):
    df = pd.read_csv(DATASETS[name])
    df = df.rename(columns={
        "exchange_rate": "gbp_usd_exchange_rate",
        "us_rate": "us_effr",  # US Effective Federal Funds Rate
        "uk_rate": "uk_bank_rate",
        "target_next_rate": TARGET,
    })
    state.clear()
    state["df"] = df
    return {"blocks": [
        _text(f"Dataset loaded: {df.shape[0]:,} rows × {df.shape[1]} columns"),
        _table(df.head(10), "First 10 rows"),
    ]}


# Step 2
def inspect_data():
    _require("df")
    df = state["df"]
    info = io.StringIO()
    df.info(buf=info)
    missing = df.isnull().sum().rename("missing values").to_frame()
    return {"blocks": [
        {"type": "code", "title": "Dataset information", "value": info.getvalue()},
        _table(df.describe(), "Dataset statistics"),
        _table(missing, "Missing values", "{:.0f}"),
        _text(f"Duplicate rows: {df.duplicated().sum()}"),
    ]}


# Step 3
def process_data():
    _require("df")
    df = state["df"].copy()
    dtypes_before = df.dtypes.astype(str).rename("before")

    df["date"] = pd.to_datetime(df["date"])
    df = df.sort_values("date").drop_duplicates().reset_index(drop=True)

    # US rate only changes at Fed meetings, so carry the last known value forward
    missing_before = int(df["us_effr"].isnull().sum())
    df["us_effr"] = df["us_effr"].ffill()

    df["uk_us_rate_differential"] = df["uk_bank_rate"] - df["us_effr"]
    df["gbp_usd_return"] = df["gbp_usd_exchange_rate"].pct_change() * 100
    rows_before = len(df)
    df = df.dropna().reset_index(drop=True)

    state["processed"] = df
    dtypes = pd.concat([dtypes_before, df.dtypes.astype(str).rename("after")], axis=1)
    ranges = df[FEATURES + [TARGET]].agg(["min", "max"]).T
    return {"blocks": [
        _table(dtypes, "Data types before and after processing", "{}"),
        _text(f"Filled {missing_before} missing US rate values with the previous day's rate. "
              f"Dropped {rows_before - len(df)} rows left incomplete by the new features. {len(df):,} rows remain."),
        _table(df.sample(5, random_state=1).sort_values("date"), "Sample with new features: rate differential and daily return (%)"),
        _table(ranges, "Outlier check: min and max of each column (kept, as they reflect real market moves)"),
    ]}


# Step 4
def split_data():
    _require("processed")
    df = state["processed"]
    split = int(len(df) * 0.8)
    train, test = df.iloc[:split], df.iloc[split:]
    state.update(train=train, test=test)

    ranges = pd.DataFrame({
        "train min": train[FEATURES].min(), "train max": train[FEATURES].max(),
        "test min": test[FEATURES].min(), "test max": test[FEATURES].max(),
    })
    fig, ax = _axes()
    ax.plot(df["date"], df["uk_bank_rate"], color=SERIES[0], lw=1.8, label="UK Bank Rate")
    ax.plot(df["date"], df["us_effr"], color=SERIES[1], lw=1.8, label="US Effective Fed Funds Rate")
    ax.axvspan(test["date"].iloc[0], df["date"].iloc[-1], color="#818cf8", alpha=.10, lw=0)
    ax.text(test["date"].iloc[0], 5.6, "  Test period", color=INK, va="top")
    ax.set_ylabel("Interest rate (%)", color=MUTED)
    _legend(ax)
    return {"blocks": [
        _text(f"Chronological 80/20 split. Training: {train['date'].min().date()} to {train['date'].max().date()} "
              f"({len(train):,} rows). Testing: {test['date'].min().date()} to {test['date'].max().date()} ({len(test):,} rows)."),
        _figure(fig, "UK and US interest rates from 2010 to 2025, with the test period from October 2022 shaded"),
        _table(ranges, "Feature ranges: the test period's interest rates sit above anything seen in training"),
    ]}


def _build_model(name):
    estimator = {
        "Linear Regression": LinearRegression(),
        "Decision Tree": DecisionTreeRegressor(random_state=42),
        "Random Forest": RandomForestRegressor(n_estimators=100, random_state=42),
        "Polynomial Regression": None,
        "Support Vector Regression": SVR(),
    }[name]
    if name == "Polynomial Regression":
        return make_pipeline(StandardScaler(), PolynomialFeatures(degree=2), LinearRegression())
    return make_pipeline(StandardScaler(), estimator)


def _scores(name, today, actual, predicted):
    moved = np.sign(actual - today) != 0
    direction = (np.sign(predicted - today)[moved] == np.sign(actual - today)[moved]).mean()
    return {"model": name, "MAE": mean_absolute_error(actual, predicted),
            "RMSE": np.sqrt(mean_squared_error(actual, predicted)), "R²": r2_score(actual, predicted),
            "direction accuracy": direction}


# Step 5
def train_models(choice):
    _require("train", "test")
    train, test = state["train"], state["test"]
    names = MODELS if choice == "All models" else [choice]
    today, actual = test["gbp_usd_exchange_rate"].values, test[TARGET].values

    rows = [_scores("Naive baseline (tomorrow = today)", today, actual, today)]
    rows[0]["direction accuracy"] = np.nan  # the baseline never predicts a move
    predictions = {}
    for name in names:
        model = _build_model(name).fit(train[FEATURES], train[TARGET])
        predictions[name] = model.predict(test[FEATURES])
        rows.append(_scores(name, today, actual, predictions[name]))

    results = pd.DataFrame(rows).set_index("model")
    baseline_mae = results["MAE"].iloc[0]
    results["MAE vs baseline"] = (results["MAE"] / baseline_mae - 1).map(lambda v: f"{v:+.0%}")
    results["direction accuracy"] = results["direction accuracy"].map(lambda v: "—" if pd.isna(v) else f"{v:.0%}")
    beat = [name for name in names if results.loc[name, "MAE"] < baseline_mae]

    fig, ax = _axes()
    ax.plot(test["date"], actual, color=INK, lw=2.2, label="Actual")
    for name, predicted in predictions.items():
        ax.plot(test["date"], predicted, color=MODEL_COLOURS[name], lw=1.4, label=name)
    ax.set_ylabel("Next-day GBP/USD", color=MUTED)
    _legend(ax)

    verdict = (f"{', '.join(beat)} beat the naive baseline." if beat else
               "No model beat the naive baseline. A high R² here mostly reflects that tomorrow's rate is close to today's.")
    return {"blocks": [
        _table(results, "Test period results (Oct 2022 – Dec 2025)"),
        _text(verdict),
        _figure(fig, "Actual next-day GBP/USD over the test period compared with model predictions"),
    ]}


# Step 6
def find_regimes(k):
    _require("processed")
    df = state["processed"].copy()
    features = ["us_effr", "uk_bank_rate", "uk_us_rate_differential"]
    X = StandardScaler().fit_transform(df[features])

    # Silhouette on a fixed 2,000-row sample keeps this quick in the browser
    silhouettes = {n: silhouette_score(X, KMeans(n_clusters=n, random_state=42, n_init=10).fit_predict(X), sample_size=2000, random_state=42)
                   for n in range(2, 7)}
    labels = KMeans(n_clusters=k, random_state=42, n_init=10).fit_predict(X)
    # Number clusters by when they first appear, so colours read left to right
    order = {old: new for new, old in enumerate(pd.Series(labels).drop_duplicates())}
    df["regime"] = [order[label] + 1 for label in labels]

    profile = df.groupby("regime").agg(
        first_day=("date", "min"), last_day=("date", "max"), days=("date", "size"),
        us_effr=("us_effr", "mean"), uk_bank_rate=("uk_bank_rate", "mean"),
        gbp_usd=("gbp_usd_exchange_rate", "mean"), daily_volatility=("gbp_usd_return", "std"))
    profile["first_day"] = profile["first_day"].dt.date
    profile["last_day"] = profile["last_day"].dt.date

    fig, ax = _axes()
    for regime in sorted(df["regime"].unique()):
        part = df[df["regime"] == regime]
        ax.scatter(part["date"], part["gbp_usd_exchange_rate"], s=5, color=SERIES[regime - 1], label=f"Cluster {regime}")
    ax.set_ylabel("GBP/USD", color=MUTED)
    _legend(ax)

    best = max(silhouettes, key=silhouettes.get)
    silhouette_table = pd.Series(silhouettes, name="silhouette score").rename_axis("k").to_frame()
    return {"blocks": [
        _table(silhouette_table, f"Silhouette score by k (higher is better; best is k = {best})", "{:.3f}"),
        _figure(fig, f"GBP/USD exchange rate from 2010 to 2025 coloured by K-Means cluster, k = {k}"),
        _table(profile, f"Cluster profiles for k = {k}"),
    ]}
