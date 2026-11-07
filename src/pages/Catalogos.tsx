import { PageHero } from "../components/PageHero";
import { ArrowIcon, Eyebrow, SectionHead } from "../components/Ui";
import { site } from "../data/site";

const upcoming = [
  {
    title: "Vestuario técnico",
    text: "Polos, pantalones, softshell y alta visibilidad. Tejidos, tallas y opciones de personalización.",
    tag: "Edición 2026",
  },
  {
    title: "Calzado de seguridad",
    text: "S1P, S3 y S7. Puntera composite, antiperforación y suelas resistentes a hidrocarburos.",
    tag: "Edición 2026",
  },
  {
    title: "Protección individual",
    text: "Cascos, guantes, protección ocular, auditiva y respiratoria con su norma UNE-EN.",
    tag: "Edición 2026",
  },
];

export function Catalogos() {
  return (
    <>
      <PageHero
        eyebrow="Catálogos"
        title={
          <>
            Nuestros catálogos, <span className="text-accent">en PDF</span>.
          </>
        }
        lead="Estamos maquetando las nuevas ediciones de vestuario técnico, calzado de seguridad y protección individual. En cuanto estén listas se podrán descargar desde esta página."
        meta={
          <ul className="hero-chips">
            <li>Formato PDF</li>
            <li>Edición 2026</li>
            <li>Descarga directa</li>
          </ul>
        }
      />

      <section className="section section--paper">
        <SectionHead
          index="01"
          title={
            <>
              Todavía no hay <span className="text-accent">catálogos publicados</span>
            </>
          }
          lead="Esta página está preparada para alojar los PDF de VESTIALPRO. Mientras llegan, podemos enviarte la ficha técnica exacta que necesites."
        />

        <div className="catalog-empty" data-reveal>
          <div className="catalog-empty__icon" aria-hidden="true">
            <svg viewBox="0 0 48 56">
              <path d="M8 2h22l10 10v42H8z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M30 2v10h10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M16 26h16M16 34h16M16 42h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="catalog-empty__ext">PDF</span>
          </div>
          <div className="catalog-empty__body">
            <p className="catalog-empty__status">
              <span className="dot" aria-hidden="true" />
              En preparación
            </p>
            <h3>Estamos preparando la estantería</h3>
            <p>
              Vamos a publicar tres catálogos: vestuario técnico, calzado de seguridad y equipos de protección
              individual. Cada uno incluirá la norma UNE-EN de cada referencia y las tallas disponibles.
            </p>
            <div className="catalog-empty__actions">
              <a className="btn btn--primary" href="/contacto">
                Avísame cuando estén
                <ArrowIcon />
              </a>
              <a className="link-arrow" href={`mailto:${site.email}?subject=${encodeURIComponent("Solicitud de ficha técnica")}`}>
                Pedir una ficha técnica
              </a>
            </div>
          </div>
        </div>

        <div className="catalog-slots">
          {upcoming.map((item, index) => (
            <article className="catalog-slot" key={item.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="catalog-slot__thumb" aria-hidden="true">
                <span className="catalog-slot__lines" />
                <span className="catalog-slot__badge">Próximamente</span>
              </div>
              <div className="catalog-slot__body">
                <span className="catalog-slot__tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="catalog-alternatives">
          <div data-reveal>
            <Eyebrow>Mientras tanto</Eyebrow>
            <h2>
              Lo que sí podemos <span className="text-accent">enviarte hoy</span>
            </h2>
            <p>
              No hace falta esperar al catálogo. Si nos dices el puesto y el riesgo, preparamos la propuesta con
              la ficha del fabricante y el precio unitario.
            </p>
          </div>
          <ul className="catalog-options" data-reveal>
            <li>
              <span>01</span>
              <div>
                <h3>Ficha técnica del fabricante</h3>
                <p>Norma aplicada, niveles de prestación y declaración UE de conformidad.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Muestras y tallaje</h3>
                <p>Te llevamos tallas de prueba a la nave para validar ajuste y tejido.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Propuesta económica</h3>
                <p>Precio unitario, mínimos, plazos de entrega y personalización de marca.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
