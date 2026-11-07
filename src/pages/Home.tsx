import { HelmetStage } from "../components/HelmetStage";
import { ServiceGlyph } from "../components/ServiceGlyph";
import { ArrowIcon, Eyebrow, SectionHead } from "../components/Ui";
import { media } from "../data/media";
import { sitioServicios } from "../data/content";

const stats = [
  { value: "I – III", label: "Categorías de EPI certificadas" },
  { value: "UNE-EN", label: "Norma y ficha en cada entrega" },
  { value: "48–72 h", label: "Entrega en la Región de Murcia" },
  { value: "1:1", label: "Tallaje y personalización" },
];

const marquee = [
  "Alta visibilidad",
  "Ignífugo",
  "Anticorte",
  "Químico",
  "Anticaídas",
  "Calzado S3",
  "Protector auditivo",
  "Respiratoria",
  "Soldadura",
  "Frío y lluvia",
];

const sectores = [
  {
    index: "01",
    name: "Agroalimentario",
    text: "Cámaras frigoríficas, muelles de carga y manipulación de producto fresco.",
    tag: "Frío · Humedad · Corte",
  },
  {
    index: "02",
    name: "Construcción y obra",
    text: "Cubiertas, estructura y trabajos en altura con sistemas anticaídas certificados.",
    tag: "Altura · Impacto",
  },
  {
    index: "03",
    name: "Industria y mantenimiento",
    text: "Soldadura, ambientes con calor, ruido continuo y riesgo eléctrico.",
    tag: "Calor · Ruido · Arco",
  },
  {
    index: "04",
    name: "Talleres y logística",
    text: "Manipulación de cargas, carretillas y exposición a golpes y atrapamientos.",
    tag: "Mecánico · Visibilidad",
  },
];

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__copy">
            <Eyebrow>Torre Pacheco · Murcia · EPI certificado</Eyebrow>
            <h1 className="hero__title">
              Protección que
              <br />
              <span className="hero__title-accent">se lleva puesta.</span>
            </h1>
            <p className="hero__lead">
              Vestuario técnico y equipos de protección individual seleccionados por riesgo real, no por
              catálogo. Certificado, tallado y repuesto antes de que haga falta.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="/contacto">
                Solicitar información
                <ArrowIcon />
              </a>
              <a className="btn btn--ghost" href="/normativa">
                Ver normativa
              </a>
            </div>
            <p className="hero__micro">
              Asesoramiento sin coste · Stock reservado por talla · Reposición programada
            </p>
          </div>

          <div className="hero__visual">
            <HelmetStage />
          </div>
        </div>

        <dl className="hero__stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt className="stat__value">{stat.value}</dt>
              <dd className="stat__label">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <div className="marquee__group" key={copy}>
                {marquee.map((item) => (
                  <span className="marquee__item" key={`${copy}-${item}`}>
                    {item}
                    <i aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" id="servicios">
        <SectionHead
          index="01"
          title={
            <>
              Cuatro formas de <span className="text-accent">reducir el riesgo</span>
            </>
          }
          lead="No vendemos ropa: resolvemos la última barrera entre una persona y el accidente. Esto es lo que hacemos en cada pedido."
        />
        <div className="service-grid">
          {sitioServicios.map((service, index) => (
            <article className="service-card" key={service.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="service-card__top">
                <span className="service-card__index">{String(index + 1).padStart(2, "0")}</span>
                <span className="service-card__icon" aria-hidden="true">
                  <ServiceGlyph name={service.icon} />
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul className="tag-list">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark split-section">
        <div className="split-section__media" data-reveal>
          <img src={media.flatlay} alt="Equipo de protección individual dispuesto sobre una superficie oscura" loading="lazy" />
          <span className="media-tag">Selección por puesto</span>
        </div>
        <div className="split-section__body">
          <Eyebrow>02 · Método</Eyebrow>
          <h2 className="split-section__title">
            Cada puesto tiene <span className="text-accent">su barrera</span>
          </h2>
          <p className="split-section__lead">
            Antes de proponerte un modelo miramos la evaluación de riesgos. De ahí salen la norma, la
            categoría y la vida útil de cada equipo.
          </p>
          <ol className="method-list">
            <li>
              <span className="method-list__num">01</span>
              <div>
                <h3>Leemos el riesgo</h3>
                <p>Qué golpea, qué quema, qué corta y durante cuántas horas al día.</p>
              </div>
            </li>
            <li>
              <span className="method-list__num">02</span>
              <div>
                <h3>Elegimos la norma</h3>
                <p>EN 397, EN 388, EN ISO 20471… la norma que cubre ese riesgo concreto.</p>
              </div>
            </li>
            <li>
              <span className="method-list__num">03</span>
              <div>
                <h3>Ajustamos a la persona</h3>
                <p>Tallaje real, prueba en planta y alternativas por complexión.</p>
              </div>
            </li>
            <li>
              <span className="method-list__num">04</span>
              <div>
                <h3>Programamos la reposición</h3>
                <p>Stock reservado y avisos de sustitución antes de que el equipo falle.</p>
              </div>
            </li>
          </ol>
          <a className="link-arrow" href="/normativa">
            Ver el marco normativo completo
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="section section--paper" id="sectores">
        <SectionHead
          index="03"
          title={
            <>
              Sectores donde <span className="text-accent">no se falla</span>
            </>
          }
          lead="Trabajamos con servicios de prevención y empresas de Murcia que necesitan criterio técnico y suministro fiable."
        />
        <div className="sector-layout">
          <ul className="sector-list">
            {sectores.map((sector, index) => (
              <li key={sector.name} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
                <span className="sector-list__index">{sector.index}</span>
                <div className="sector-list__body">
                  <h3>{sector.name}</h3>
                  <p>{sector.text}</p>
                </div>
                <span className="sector-list__tag">{sector.tag}</span>
              </li>
            ))}
          </ul>
          <figure className="sector-figure" data-reveal>
            <img src={media.agro} alt="Trabajadora con polo de alta visibilidad y casco en una planta de manipulación de melones" loading="lazy" />
            <figcaption>Torre Pacheco · Campo de Cartagena</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--dark normativa-band">
        <div className="hazard-strip" aria-hidden="true" />
        <SectionHead
          index="04"
          tone="dark"
          title={
            <>
              La norma no es papeleo.
              <br />
              <span className="text-accent">Es lo que evita el accidente.</span>
            </>
          }
          lead="Estas son las tres referencias que más consultamos cuando un cliente nos pregunta qué equipo necesita."
        />
        <div className="law-grid">
          <article className="law-card" data-reveal>
            <span className="law-card__code">Reglamento (UE) 2016/425</span>
            <h3>Diseño y certificación</h3>
            <p>
              Define las categorías I, II y III, el examen UE de tipo y la declaración de conformidad que
              debe acompañar a cada EPI.
            </p>
          </article>
          <article className="law-card" data-reveal style={{ transitionDelay: "80ms" }}>
            <span className="law-card__code">RD 773/1997</span>
            <h3>Uso en el puesto</h3>
            <p>
              Cómo se eligen, entregan, usan y revisan los equipos, y qué información debe recibir el
              trabajador.
            </p>
          </article>
          <article className="law-card" data-reveal style={{ transitionDelay: "160ms" }}>
            <span className="law-card__code">Ley 31/1995</span>
            <h3>Obligación de proteger</h3>
            <p>
              El EPI se entrega gratis, en la talla correcta y con formación. La protección es una
              obligación de la empresa.
            </p>
          </article>
        </div>
        <a className="btn btn--ghost law-grid__cta" href="/normativa">
          Leer la guía completa
          <ArrowIcon />
        </a>
      </section>

      <section className="section section--paper" id="catalogos">
        <SectionHead
          index="05"
          title={
            <>
              Catálogos <span className="text-accent">en preparación</span>
            </>
          }
          lead="Estamos maquetando las nuevas ediciones de vestuario, calzado y protección respiratoria. Mientras tanto, pedimos las fichas técnicas una a una."
        />
        <div className="catalog-teaser" data-reveal>
          <div className="catalog-teaser__stub">
            <span className="catalog-teaser__ext">PDF</span>
            <span className="catalog-teaser__lines" aria-hidden="true" />
            <span className="catalog-teaser__status">Próximamente</span>
          </div>
          <div className="catalog-teaser__body">
            <h3>¿Necesitas el catálogo ahora?</h3>
            <p>
              Si tu servicio de prevención necesita una ficha concreta —un guante anticorte, un casco con
              barboquejo, un S3 con puntera composite— la enviamos el mismo día por correo.
            </p>
            <div className="catalog-teaser__actions">
              <a className="btn btn--primary" href="/contacto">
                Pedir una ficha técnica
                <ArrowIcon />
              </a>
              <a className="link-arrow" href="/catalogos">
                Ver la página de catálogos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark cta-final">
        <div className="cta-final__inner">
          <div>
            <Eyebrow>06 · Siguiente paso</Eyebrow>
            <h2>
              ¿Empezamos por tu <span className="text-accent">evaluación de riesgos</span>?
            </h2>
            <p>
              Cuéntanos cuántas personas hay en plantilla y qué puestos cubren. Te devolvemos una propuesta
              de EPI con norma, talla y precio unitario.
            </p>
          </div>
          <div className="cta-final__actions">
            <a className="btn btn--primary" href="/contacto">
              Hablar con VESTIALPRO
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href="/sobre-nosotros">
              Conocer el equipo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
