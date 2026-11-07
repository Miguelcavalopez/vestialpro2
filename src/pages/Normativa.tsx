import { useMemo, useState } from "react";
import { PageHero } from "../components/PageHero";
import { ArrowIcon, Eyebrow, SectionHead } from "../components/Ui";
import {
  categorias,
  familyFilters,
  marcoLegal,
  obligaciones,
  preguntas,
  standards,
  type FamilyFilter,
} from "../data/normas";
import { site } from "../data/site";

const anchors = [
  { id: "marco-legal", label: "Marco legal" },
  { id: "categorias", label: "Categorías" },
  { id: "marcado-ce", label: "Marcado CE" },
  { id: "normas", label: "Normas UNE-EN" },
  { id: "obligaciones", label: "Obligaciones" },
  { id: "vida-util", label: "Vida útil" },
  { id: "preguntas", label: "Preguntas" },
];

const marcadoPasos = [
  {
    title: "Evaluación del riesgo",
    text: "El punto de partida no es el producto, es la exposición: qué golpea, qué corta, qué quema y durante cuánto tiempo.",
  },
  {
    title: "Elección de la norma",
    text: "Cada familia de EPI tiene su norma UNE-EN armonizada. El fabricante diseña y ensaya contra ella.",
  },
  {
    title: "Examen UE de tipo",
    text: "Un organismo notificado verifica el prototipo en categorías II y III antes de que el modelo se comercialice.",
  },
  {
    title: "Control de producción",
    text: "En categoría III el fabricante mantiene un sistema de calidad vigilado para que cada unidad sea igual al prototipo.",
  },
  {
    title: "Declaración UE de conformidad",
    text: "El documento que acompaña al producto: norma aplicada, organismo interviniente y responsabilidad del fabricante.",
  },
  {
    title: "Marcado CE y trazabilidad",
    text: "El marcado CE acredita la conformidad. En categoría III va seguido del número del organismo notificado.",
  },
];

const vidaUtil = [
  {
    title: "Cascos",
    text: "Sustitución inmediata tras un impacto. La radiación UV y el calor degradan el material: revisa la fecha de fabricación y las instrucciones del fabricante.",
  },
  {
    title: "Calzado de seguridad",
    text: "Comprueba suela, puntera y costuras. Un S3 con la suela cristalizada o la puntera deformada ya no protege.",
  },
  {
    title: "Anticaídas",
    text: "Revisión documentada por persona competente al menos una vez al año y después de cada caída. Un arnés que ha detenido una caída se retira.",
  },
  {
    title: "Protección respiratoria y química",
    text: "Los filtros tienen vida limitada y los guantes pierden eficacia según la sustancia. Respeta el tiempo de paso indicado por el fabricante.",
  },
];

export function Normativa() {
  const [filter, setFilter] = useState<FamilyFilter>("Todas");

  const rows = useMemo(
    () => (filter === "Todas" ? standards : standards.filter((standard) => standard.family === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Normativa"
        title={
          <>
            El marco que convierte un EPI en una <span className="text-accent">garantía</span>.
          </>
        }
        lead="Qué exige la ley, cómo se certifica un equipo y qué norma corresponde a cada riesgo. La guía que usamos cuando un cliente nos pregunta qué necesita."
        meta={
          <ul className="hero-chips">
            <li>Reglamento (UE) 2016/425</li>
            <li>RD 1407/1992</li>
            <li>RD 773/1997</li>
            <li>Ley 31/1995</li>
          </ul>
        }
      />

      <nav className="anchor-nav" aria-label="Contenido de la página">
        <ul>
          {anchors.map((anchor) => (
            <li key={anchor.id}>
              <a href={`#${anchor.id}`}>{anchor.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="section section--paper" id="marco-legal">
        <SectionHead
          index="01"
          title={
            <>
              Seis normas que <span className="text-accent">lo ordenan todo</span>
            </>
          }
          lead="En España conviven la norma europea de producto y la normativa nacional de prevención. Las dos son obligatorias y se complementan."
        />
        <div className="law-grid law-grid--light">
          {marcoLegal.map((law, index) => (
            <article className="law-card law-card--light" key={law.code} data-reveal style={{ transitionDelay: `${index * 50}ms` }}>
              <span className="law-card__scope">{law.scope}</span>
              <span className="law-card__code">{law.code}</span>
              <h3>{law.title}</h3>
              <p>{law.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark" id="categorias">
        <SectionHead
          index="02"
          tone="dark"
          title={
            <>
              Tres categorías, <span className="text-accent">tres niveles de control</span>
            </>
          }
          lead="La categoría de un EPI no depende de su precio, sino del riesgo que cubre. Determina qué controles pasa antes de llegar a tu plantilla."
        />
        <div className="category-grid">
          {categorias.map((category, index) => (
            <article className={`category-card category-card--${category.id.toLowerCase()}`} key={category.id} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="category-card__head">
                <span className="category-card__badge">{category.id}</span>
                <span className="category-card__risk">{category.risk}</span>
              </div>
              <h3>{category.label}</h3>
              <p className="category-card__examples">{category.examples}</p>
              <dl>
                <div>
                  <dt>Conformidad</dt>
                  <dd>{category.conformity}</dd>
                </div>
              </dl>
              <p className="category-card__note">{category.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--paper" id="marcado-ce">
        <SectionHead
          index="03"
          title={
            <>
              Del riesgo al <span className="text-accent">marcado CE</span>
            </>
          }
          lead="Seis pasos que todo EPI recorre antes de poder venderse en la Unión Europea. Si falta uno, el equipo no es conforme."
        />
        <ol className="steps-grid">
          {marcadoPasos.map((step, index) => (
            <li className="step-card" key={step.title} data-reveal style={{ transitionDelay: `${index * 55}ms` }}>
              <span className="step-card__num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <aside className="callout" data-reveal>
          <span className="callout__label">Ojo con esto</span>
          <p>
            El marcado CE certifica el producto, no la elección. Un casco EN 397 perfectamente certificado no
            protege de una caída de altura: para eso existe un arnés EN 361 y un sistema anticaídas completo.
          </p>
        </aside>
      </section>

      <section className="section section--dark" id="normas">
        <SectionHead
          index="04"
          tone="dark"
          title={
            <>
              Qué norma cubre <span className="text-accent">cada riesgo</span>
            </>
          }
          lead="Las referencias UNE-EN que más nos piden. Filtra por familia para encontrar la que necesitas."
        />
        <div className="filter-bar" role="group" aria-label="Filtrar normas por familia">
          {familyFilters.map((family) => (
            <button
              type="button"
              key={family}
              className={`chip ${filter === family ? "is-active" : ""}`}
              aria-pressed={filter === family}
              onClick={() => setFilter(family)}
            >
              {family}
            </button>
          ))}
        </div>
        <div className="table-scroll">
          <table className="standards-table">
            <caption className="sr-only">Normas UNE-EN por familia de equipo de protección individual</caption>
            <thead>
              <tr>
                <th scope="col">Norma</th>
                <th scope="col">Familia</th>
                <th scope="col">Qué certifica</th>
                <th scope="col">Uso habitual</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((standard) => (
                <tr key={standard.norm}>
                  <th scope="row">{standard.norm}</th>
                  <td data-label="Familia">
                    <span className="family-tag">{standard.family}</span>
                  </td>
                  <td data-label="Qué certifica">{standard.what}</td>
                  <td data-label="Uso habitual">{standard.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">
          {`${rows.length} ${rows.length === 1 ? "norma" : "normas"} · La versión vigente de cada norma es la que figura en la declaración UE de conformidad del fabricante.`}
        </p>
      </section>

      <section className="section section--paper" id="obligaciones">
        <SectionHead
          index="05"
          title={
            <>
              Quién responde de <span className="text-accent">qué</span>
            </>
          }
          lead="La protección individual es una obligación compartida, pero no simétrica: la empresa debe poner los medios y el trabajador debe usarlos."
        />
        <div className="obligation-grid">
          {obligaciones.map((group, index) => (
            <article className="obligation-card" key={group.title} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
              <h3>{group.title}</h3>
              <p className="obligation-card__intro">{group.intro}</p>
              <ul className="check-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark" id="vida-util">
        <SectionHead
          index="06"
          tone="dark"
          title={
            <>
              Ningún EPI <span className="text-accent">dura para siempre</span>
            </>
          }
          lead="La ley no fija una fecha única de caducidad: manda el fabricante y el estado real del equipo. Estas son las señales que revisamos."
        />
        <div className="life-grid">
          {vidaUtil.map((item, index) => (
            <article className="life-card" key={item.title} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="life-note" data-reveal>
          <Eyebrow>Documentación</Eyebrow>
          <p>
            Cada entrega se registra con fecha, modelo, norma y firma. Es la prueba de que la protección estaba
            implantada y permite planificar la reposición antes de que el equipo pierda eficacia.
          </p>
          <a className="link-arrow link-arrow--light" href="/contacto">
            Pedir una revisión de EPI
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="section section--paper" id="preguntas">
        <SectionHead
          index="07"
          title={
            <>
              Las dudas que <span className="text-accent">más nos llegan</span>
            </>
          }
          lead="Respuestas cortas, sin letra pequeña. Si tu caso es concreto, escríbenos y lo miramos."
        />
        <div className="faq">
          {preguntas.map((item, index) => (
            <details className="faq__item" key={item.question} data-reveal style={{ transitionDelay: `${index * 40}ms` }}>
              <summary>
                <span className="faq__index">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq__question">{item.question}</span>
                <span className="faq__marker" aria-hidden="true" />
              </summary>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <p className="disclaimer">
          {`Contenido informativo actualizado en ${site.updated}. No sustituye el asesoramiento de tu servicio de prevención, la evaluación de riesgos del puesto ni las instrucciones del fabricante. Ante una duda concreta, consulta la declaración UE de conformidad del producto.`}
        </p>
      </section>
    </>
  );
}
