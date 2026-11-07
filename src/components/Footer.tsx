import { site } from "../data/site";
import { ArrowIcon, Logo, Melon } from "./Ui";

const columns = [
  {
    title: "Empresa",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Sobre nosotros", href: "/sobre-nosotros" },
      { label: "Catálogos", href: "/catalogos" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Normativa",
    links: [
      { label: "Marco legal", href: "/normativa#marco-legal" },
      { label: "Categorías de EPI", href: "/normativa#categorias" },
      { label: "Marcado CE", href: "/normativa#marcado-ce" },
      { label: "Normas UNE-EN", href: "/normativa#normas" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de privacidad", href: "/privacidad" },
      { label: "Protección de datos", href: "/proteccion-de-datos" },
      { label: "Política de cookies", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-main">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p className="footer-claim">{site.claim}</p>
          <address className="footer-address">
            {site.address.street}
            <br />
            {`${site.address.city} · ${site.address.province}`}
            <br />
            {site.address.country}
          </address>
          <p className="footer-coords">{site.coordinates}</p>
        </div>

        <div className="footer-columns">
          {columns.map((column) => (
            <nav key={column.title} className="footer-column" aria-label={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-contact">
          <h2>Hablemos</h2>
          <a className="footer-mail" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowIcon />
          </a>
          <a className="footer-phone" href={`tel:${site.phoneHref}`}>
            {site.phone}
          </a>
          <ul className="footer-hours">
            {site.hours.map((entry) => (
              <li key={entry.days}>
                <span>{entry.days}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-legal">
        <p>
          {`© ${new Date().getFullYear()} ${site.legalName} · CIF ${site.nif}`}
        </p>
        <p className="footer-legal__note">EPI conforme al Reglamento (UE) 2016/425</p>
      </div>

      <div className="watermark">
        <Melon className="watermark__melon" />
        <span>Hecho en Torre Pacheco</span>
      </div>
    </footer>
  );
}
