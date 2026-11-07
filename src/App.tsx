import { useEffect } from "react";
import { CookieBanner } from "./components/CookieBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import type { PageId } from "./data/routes";
import { About } from "./pages/About";
import { Catalogos } from "./pages/Catalogos";
import { Contacto } from "./pages/Contacto";
import { Home } from "./pages/Home";
import { PoliticaCookies, Privacidad, ProteccionDatos } from "./pages/Legal";
import { Normativa } from "./pages/Normativa";
import { NotFound } from "./pages/NotFound";

function Page({ page }: { page: PageId }) {
  switch (page) {
    case "about":
      return <About />;
    case "normativa":
      return <Normativa />;
    case "catalogos":
      return <Catalogos />;
    case "contacto":
      return <Contacto />;
    case "privacidad":
      return <Privacidad />;
    case "proteccion-datos":
      return <ProteccionDatos />;
    case "cookies":
      return <PoliticaCookies />;
    case "404":
      return <NotFound />;
    default:
      return <Home />;
  }
}

function ScrollProgress() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}

export function App({ page }: { page: PageId }) {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <Header page={page} />
      <main id="contenido" className="site-main">
        <Page page={page} />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
