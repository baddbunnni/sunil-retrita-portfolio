"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "smr-portfolio-intro-seen";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "true") {
        setVisible(false);
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        sessionStorage.setItem(SESSION_KEY, "true");
        setVisible(false);
        return;
      }
      sessionStorage.setItem(SESSION_KEY, "true");
      const timeout = window.setTimeout(() => setVisible(false), 2850);
      return () => window.clearTimeout(timeout);
    } catch {
      return;
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-overlay" role="dialog" aria-label="Introduction to Sunil Retrita’s portfolio" aria-modal="true">
      <div className="intro-grid" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => <span key={i} className="intro-particle" style={{ left: `${(i * 41 + 7) % 100}%`, top: `${(i * 29 + 11) % 100}%`, animationDelay: `${(i % 8) * 0.13}s` }} />)}
      </div>
      <div className="intro-content">
        <p className="intro-eyebrow">TECHNOLOGY · DATA · FINANCE</p>
        <h1 className="intro-name">SUNIL <span>RETRITA</span></h1>
        <div className="intro-light-sweep" aria-hidden="true" />
        <p className="intro-tagline">Building intelligent solutions for real-world problems.</p>
      </div>
      <button type="button" className="intro-skip" onClick={() => setVisible(false)}>Skip intro <span aria-hidden="true">↗</span></button>
    </div>
  );
}
