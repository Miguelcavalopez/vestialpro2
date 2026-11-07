import type { ReactNode } from "react";
import { Eyebrow } from "./Ui";

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  size = "md",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  meta?: ReactNode;
  size?: "md" | "sm";
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero page-hero--${size}`}>
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="page-hero__inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__lead">{lead}</p>
        {meta ? <div className="page-hero__meta">{meta}</div> : null}
        {children}
      </div>
    </section>
  );
}
