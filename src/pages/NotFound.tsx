import { PageHero } from "../components/PageHero";
import { ArrowIcon, Melon } from "../components/Ui";

export function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title={
          <>
            Esta página <span className="text-accent">no existe</span>.
          </>
        }
        lead="Puede que el enlace haya cambiado de sitio o que la dirección esté mal escrita. Nada que no se arregle en dos clics."
        size="sm"
      />
      <section className="section section--paper">
        <div className="notfound">
          <p className="notfound__code">404</p>
          <div>
            <h2>Volvamos a lo importante</h2>
            <p>
              Si buscabas un catálogo, una ficha técnica o hablar con nosotros, estas son las rutas más
              directas.
            </p>
            <div className="notfound__actions">
              <a className="btn btn--primary" href="/">
                Ir al inicio
                <ArrowIcon />
              </a>
              <a className="btn btn--outline" href="/normativa">
                Ver normativa
              </a>
              <a className="link-arrow" href="/contacto">
                Escribirnos
              </a>
            </div>
          </div>
          <Melon className="notfound__melon" />
        </div>
      </section>
    </>
  );
}
