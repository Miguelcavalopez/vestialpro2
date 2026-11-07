import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";
import { ArrowIcon, Eyebrow } from "../components/Ui";
import { site } from "../data/site";

export function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Hablemos de tu <span className="text-accent">plantilla</span>.
          </>
        }
        lead="Cuéntanos cuántas personas hay, qué puestos cubren y qué equipo estáis usando ahora. Te respondemos con una propuesta concreta, no con un catálogo genérico."
        meta={
          <ul className="hero-chips">
            <li>Respuesta en 24 h laborables</li>
            <li>{site.address.city}</li>
            <li>Visitas con cita previa</li>
          </ul>
        }
      />

      <section className="section section--paper">
        <div className="contact-layout">
          <div className="contact-main">
            <Eyebrow>01 · Escríbenos</Eyebrow>
            <h2 className="contact-main__title">Cuéntanos qué necesitas</h2>
            <p className="contact-main__lead">
              Los campos marcados con asterisco son obligatorios. Usaremos tus datos solo para responder a esta
              consulta, tal como explicamos en la <a href="/privacidad">política de privacidad</a>.
            </p>
            <ContactForm />
          </div>

          <aside className="contact-aside">
            <div className="contact-block">
              <h2>Datos de contacto</h2>
              <dl>
                <div>
                  <dt>Correo</dt>
                  <dd>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Teléfono</dt>
                  <dd>
                    <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  </dd>
                </div>
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
              </dl>
              <a className="link-arrow" href={site.mapsUrl} target="_blank" rel="noreferrer noopener">
                Cómo llegar
                <ArrowIcon />
              </a>
            </div>

            <div className="contact-block contact-block--hours">
              <h2>Horario</h2>
              <ul>
                {site.hours.map((entry) => (
                  <li key={entry.days}>
                    <span>{entry.days}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-block contact-block--note">
              <h2>Zona de servicio</h2>
              <p>
                {`Entregamos en ${site.serviceArea}. Para envíos fuera de la Región, consulta plazos y portes antes de cerrar el pedido.`}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--dark contact-tail">
        <div className="contact-tail__inner">
          <div>
            <Eyebrow>02 · Visítanos</Eyebrow>
            <h2>
              Ven a la nave y <span className="text-accent">prueba las tallas</span>
            </h2>
            <p>
              Atendemos con cita previa para que no esperes. Trae tu evaluación de riesgos si la tienes: salimos
              de la visita con una selección cerrada.
            </p>
          </div>
          <div className="contact-tail__actions">
            <a className="btn btn--primary" href={`tel:${site.phoneHref}`}>
              Llamar ahora
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href={`mailto:${site.email}?subject=${encodeURIComponent("Cita en la nave")}`}>
              Pedir cita
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
