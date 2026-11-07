import type { ReactNode } from "react";

export function Melon({ className = "melon" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" role="img" aria-label="Melón de Torre Pacheco">
      <path
        d="M20 9c8.3 0 13.7 5.5 13.7 12.6S28.3 34.6 20 34.6 6.3 28.7 6.3 21.6 11.7 9 20 9Z"
        fill="currentColor"
        opacity="0.17"
      />
      <path
        d="M20 9c8.3 0 13.7 5.5 13.7 12.6S28.3 34.6 20 34.6 6.3 28.7 6.3 21.6 11.7 9 20 9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M20 9.6c-4.2 2.9-6.3 6.9-6.3 11.9S15.8 30.9 20 33.9M20 9.6c4.2 2.9 6.3 6.9 6.3 11.9S24.2 30.9 20 33.9M20 9v25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.5 17.6c1.9-.7 3.4-.3 4.6 1M26.5 17.6c-1.9-.7-3.4-.3-4.6 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path d="M20 9c-.4-2.2.3-3.5 1.8-4.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21.6 4.4c1.9-1.3 3.7-1 4.8.3-1.3 1.4-3.1 1.5-4.8-.3Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="arrow-icon">
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ variant = "light", className = "" }: { variant?: "light" | "color"; className?: string }) {
  const source = variant === "light" ? "/brand/logo-light.png" : "/brand/logo-color.png";
  return (
    <img
      className={`brand-logo ${className}`}
      src={source}
      alt="VESTIALPRO"
      width={2051}
      height={338}
      decoding="async"
    />
  );
}

export function Eyebrow({ children, tone = "orange" }: { children: ReactNode; tone?: "orange" | "muted" }) {
  return (
    <p className={`eyebrow eyebrow--${tone}`}>
      <span className="eyebrow__mark" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHead({
  index,
  title,
  lead,
  tone = "light",
}: {
  index: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <header className={`section-head section-head--${tone}`} data-reveal>
      <div className="section-head__index">
        <span>{index}</span>
      </div>
      <div className="section-head__body">
        <h2 className="section-head__title">{title}</h2>
        {lead ? <p className="section-head__lead">{lead}</p> : null}
      </div>
    </header>
  );
}
