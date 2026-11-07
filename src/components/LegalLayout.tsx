import type { LegalDocument } from "../data/legal";
import { site } from "../data/site";
import { PageHero } from "./PageHero";
import { ArrowIcon } from "./Ui";

export function LegalLayout({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <PageHero
        eyebrow={doc.eyebrow}
        title={doc.title}
        lead={doc.lead}
        size="sm"
        meta={
          <ul className="hero-chips">
            <li>RGPD · LOPDGDD</li>
            <li>{`Actualizado el ${doc.updated}`}</li>
          </ul>
        }
      />

      <section className="section section--paper legal">
        <div className="legal-layout">
          <nav className="legal-index" aria-label="Índice del documento">
            <p className="legal-index__title">Índice</p>
            <ol>
              {doc.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-body">
            {doc.sections.map((section) => (
              <article className="legal-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.blocks.map((block, index) => {
                  if (block.type === "p") {
                    return <p key={index}>{block.text}</p>;
                  }
                  if (block.type === "ul") {
                    return (
                      <ul className="legal-list" key={index}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "table") {
                    return (
                      <div className="table-scroll" key={index}>
                        <table className="legal-table">
                          <thead>
                            <tr>
                              {block.head.map((cell) => (
                                <th scope="col" key={cell}>
                                  {cell}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return (
                    <aside className="legal-callout" key={index}>
                      {block.label ? <span>{block.label}</span> : null}
                      <p>{block.text}</p>
                    </aside>
                  );
                })}
              </article>
            ))}

            <div className="legal-contact">
              <div>
                <p className="legal-contact__title">¿Quieres ejercer tus derechos?</p>
                <p>
                  Escríbenos indicando el derecho que deseas ejercer y adjuntando un documento que acredite tu
                  identidad.
                </p>
              </div>
              <a className="btn btn--primary" href={`mailto:${site.email}?subject=${encodeURIComponent("Protección de datos")}`}>
                Contactar
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
