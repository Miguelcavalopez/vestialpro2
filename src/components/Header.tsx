import { useEffect, useState } from "react";
import { navRoutes, type PageId } from "../data/routes";
import { site } from "../data/site";
import { ArrowIcon, Logo } from "./Ui";

export function Header({ page }: { page: PageId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="topbar">
        <div className="topbar__inner">
          <span className="topbar__item">
            <span className="dot" aria-hidden="true" />
            Torre Pacheco · Murcia
          </span>
          <span className="topbar__item topbar__item--muted">Entrega en 48–72 h en la Región</span>
          <span className="topbar__spacer" />
          <a className="topbar__link" href={`tel:${site.phoneHref}`}>
            {site.phone}
          </a>
          <a className="topbar__link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>

      <div className="header-inner">
        <a className="brand" href="/" aria-label="VESTIALPRO, ir al inicio">
          <Logo />
        </a>

        <nav className="primary-nav" aria-label="Navegación principal">
          <ul>
            {navRoutes.map((route) => (
              <li key={route.page}>
                <a
                  href={route.path}
                  className={page === route.page ? "is-active" : undefined}
                  aria-current={page === route.page ? "page" : undefined}
                >
                  {route.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="btn btn--primary btn--sm" href="/contacto">
            Solicitar información
            <ArrowIcon />
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>
      </div>

      <div className="mobile-nav" id="mobile-nav" hidden={!open}>
        <nav aria-label="Navegación móvil">
          <ul>
            {navRoutes.map((route, index) => (
              <li key={route.page}>
                <a href={route.path} onClick={() => setOpen(false)}>
                  <span className="mobile-nav__index">{String(index + 1).padStart(2, "0")}</span>
                  {route.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-nav__foot">
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>
            {site.address.street}
            <br />
            {`${site.address.city} · ${site.address.province}`}
          </p>
        </div>
      </div>
    </header>
  );
}
