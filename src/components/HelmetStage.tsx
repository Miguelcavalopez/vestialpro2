import { useEffect, useRef, useState } from "react";

type StageState = "loading" | "ready" | "failed";

/** Flat illustration shown before WebGL starts, and kept when it is unavailable. */
function HelmetIllustration() {
  return (
    <svg className="helmet-svg" viewBox="0 0 420 340" role="img" aria-label="Casco de seguridad de VESTIALPRO">
      <defs>
        <linearGradient id="helmetDome" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#FF9A52" />
          <stop offset="0.55" stopColor="#FF6A00" />
          <stop offset="1" stopColor="#E25500" />
        </linearGradient>
        <linearGradient id="helmetBrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16375A" />
          <stop offset="1" stopColor="#08182B" />
        </linearGradient>
      </defs>
      <ellipse cx="210" cy="238" rx="176" ry="46" fill="url(#helmetBrim)" />
      <ellipse cx="210" cy="252" rx="150" ry="22" fill="#04101C" opacity="0.55" />
      <path d="M62 232C64 142 124 82 210 82C296 82 356 142 358 232Z" fill="url(#helmetDome)" />
      <path d="M210 84C214 140 214 188 211 232" stroke="#B84300" strokeWidth="16" fill="none" opacity="0.18" />
      <path d="M198 86C201 140 201 188 199 230" stroke="#FFDCC2" strokeWidth="7" fill="none" opacity="0.55" />
      <path d="M62 232C96 250 150 258 210 258C270 258 324 250 358 232" stroke="#0A1D33" strokeWidth="6" fill="none" opacity="0.5" />
      <circle cx="210" cy="168" r="31" fill="#0B2138" />
      <circle cx="210" cy="168" r="31" fill="none" stroke="#F4F1EA" strokeWidth="2" opacity="0.35" />
      <path d="M196 154L210 184L224 154" stroke="#F4F1EA" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HelmetStage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<StageState>("loading");

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let handle: { dispose: () => void } | null = null;

    import("../three/helmetScene")
      .then((module) => {
        if (cancelled) return;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        handle = module.mountHelmet(host, { reducedMotion });
        setStage(handle ? "ready" : "failed");
      })
      .catch(() => {
        if (!cancelled) setStage("failed");
      });

    return () => {
      cancelled = true;
      handle?.dispose();
    };
  }, []);

  return (
    <div className={`helmet-stage ${stage === "ready" ? "is-ready" : ""} ${stage === "failed" ? "is-failed" : ""}`}>
      <div className="helmet-glow" aria-hidden="true" />
      <HelmetIllustration />
      <div className="helmet-canvas" ref={hostRef} />
      <div className="helmet-meta">
        <span className="helmet-meta__tag">Casco de seguridad</span>
        <span className="helmet-meta__norm">EN 397</span>
      </div>
      <p className="helmet-hint">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 4v16M16 4v16M4 8h4M4 16h4M16 8h4M16 16h4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        Arrastra para girar
      </p>
    </div>
  );
}
