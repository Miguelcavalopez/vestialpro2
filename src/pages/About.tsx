import { PageHero } from "../components/PageHero";
import { ArrowIcon, Eyebrow, Melon, SectionHead } from "../components/Ui";
import { pasos, valores } from "../data/content";
import { media } from "../data/media";
import { site } from "../data/site";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nosotros"
        title={
          <>
            Protección con <span className="text-accent">nombre y apellidos</span>.
          </>
        }
        lead="Somos el proveedor de vestuario y EPI de empresas que trabajan con las manos. Desde Torre Pacheco, para toda la Región de Murcia."
        meta={
          <ul className="hero-chips">
            <li>Torre Pacheco · Murcia</li>
            <li>EPI categoría II y III</li>
            <li>Servicios de prevención</li>
          </ul>
        }
      />

      <section className="section section--paper">
        <div className="story">
          <div className="story__body" data-reveal>
            <Eyebrow>01 · Origen</Eyebrow>
            <h2 className="story__title">
              Empezamos por una pregunta <span className="text-accent">incómoda</span>
            </h2>
            <p>
              ¿Qué lleva puesto la persona que entra en esa cámara a las seis de la mañana? Esa pregunta es
              el origen de VESTIALPRO. Nacimos en Torre Pacheco junto a empresas agrícolas, talleres y obras
              donde el equipo de protección se compraba por inercia: el mismo modelo de siempre y la misma
              talla para toda la plantilla.
            </p>
            <p>
              Nuestro trabajo es el contrario. Miramos el puesto, la exposición y las horas de uso, y de ahí
              sale una ficha concreta: qué norma cubre el riesgo, qué categoría exige la ley, qué talla
              corresponde a cada persona y cuándo toca sustituirlo.
            </p>
            <p>
              Vendemos ropa de trabajo y EPI, sí. Pero lo que de verdad entregamos es criterio técnico,
              existencias reales y una persona al otro lado del teléfono que conoce tu plantilla.
            </p>
            <ul className="fact-list">
              <li>
                <span className="fact-list__label">Base</span>
                <span className="fact-list__value">Torre Pacheco, Murcia</span>
              </li>
              <li>
                <span className="fact-list__label">Especialidad</span>
                <span className="fact-list__value">Vestuario técnico y EPI</span>
              </li>
              <li>
                <span className="fact-list__label">Cobertura</span>
                <span className="fact-list__value">{site.serviceArea}</span>
              </li>
            </ul>
          </div>
          <figure className="story__media" data-reveal>
            <img
              src={media.team}
              alt="Dos profesionales con ropa de trabajo técnica y casco de seguridad en un almacén logístico"
              loading="lazy"
            />
            <figcaption>
              <span className="media-tag">Vestuario y EPI</span>
              Selección por puesto, no por catálogo.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--dark">
        <SectionHead
          index="02"
          tone="dark"
          title={
            <>
              Lo que nos <span className="text-accent">mueve</span>
            </>
          }
          lead="Cuatro reglas que aplicamos incluso cuando nos cuestan una venta."
        />
        <div className="value-grid">
          {valores.map((value, index) => (
            <article className="value-card" key={value.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
              <span className="value-card__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--paper">
        <SectionHead
          index="03"
          title={
            <>
              Cómo <span className="text-accent">trabajamos</span>
            </>
          }
          lead="Un proceso corto, con nombre y fechas. Sin intermediarios que no conocen tu planta."
        />
        <div className="process-layout">
          <ol className="process-list">
            {pasos.map((step, index) => (
              <li key={step.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="process-list__num">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="process-media" data-reveal>
            <img src={media.boot} alt="Bota de seguridad S3 sobre suelo de taller" loading="lazy" />
            <figcaption>El EPI que más horas aguanta puesto: el calzado.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--dark place">
        <div className="place__card" data-reveal>
          <Eyebrow>04 · Dónde estamos</Eyebrow>
          <h2>
            En el corazón del <span className="text-accent">Campo de Cartagena</span>
          </h2>
          <p>
            Nuestra nave está en Torre Pacheco, a quince minutos de Cartagena y a media hora de Murcia. Desde
            ahí servimos a empresas agrícolas, constructoras, talleres e industria de toda la comarca.
          </p>
          <dl className="place__data">
            <div>
              <dt>Dirección</dt>
              <dd>
                {site.address.street}
                <br />
                {`${site.address.city} · ${site.address.province}`}
              </dd>
            </div>
            <div>
              <dt>Coordenadas</dt>
              <dd>{site.coordinates}</dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>{site.hours[0].time}</dd>
            </div>
          </dl>
          <div className="place__actions">
            <a className="btn btn--primary" href="/contacto">
              Visítanos
              <ArrowIcon />
            </a>
            <a className="link-arrow" href={site.mapsUrl} target="_blank" rel="noreferrer noopener">
              Abrir en Google Maps
            </a>
          </div>
        </div>
        <div className="place__aside">
          <Melon className="place__melon" />
          <p>
            «Hecho en Torre Pacheco» no es un eslogan: es el sitio donde cargamos la furgoneta cada mañana.
          </p>
        </div>
      </section>
    </>
  );
}
