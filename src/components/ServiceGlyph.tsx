import type { ServiceIcon } from "../data/content";

export function ServiceGlyph({ name }: { name: ServiceIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="glyph">
      {name === "vestuario" && (
        <g {...common}>
          <path d="M12 5.5 6 8.2l-2 6.4 4.6 1.6V27h14.8V16.2L28 14.6l-2-6.4-6-2.7" />
          <path d="M12 5.5c0 2.2 1.8 3.6 4 3.6s4-1.4 4-3.6" />
        </g>
      )}
      {name === "epi" && (
        <g {...common}>
          <path d="M5 20.5c.4-7.4 4.6-12 11-12s10.6 4.6 11 12" />
          <path d="M3.4 20.5h25.2c-.6 2.4-2.2 3.6-5 3.6H8.4c-2.8 0-4.4-1.2-5-3.6Z" />
          <path d="M16 8.5v9.2" />
        </g>
      )}
      {name === "normativa" && (
        <g {...common}>
          <path d="M8 4h11l5 5v19H8z" />
          <path d="M19 4v5h5" />
          <path d="M12 18.5l3 3 5.5-6" />
        </g>
      )}
      {name === "suministro" && (
        <g {...common}>
          <path d="M15.8 4 27 9v14l-11.2 5L4.6 23V9z" />
          <path d="M4.6 9l11.2 5 11.2-5M15.8 14v14" />
        </g>
      )}
    </svg>
  );
}
