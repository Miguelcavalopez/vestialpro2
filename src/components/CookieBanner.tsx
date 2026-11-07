import { useEffect, useState } from "react";

const STORAGE_KEY = "vestialpro.cookies.v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "acknowledged");
    } catch {
      /* El almacenamiento puede estar bloqueado: el aviso se cierra igualmente. */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Aviso de cookies">
      <p className="cookie-banner__title">Cookies y almacenamiento</p>
      <p className="cookie-banner__text">
        Esta web no usa cookies publicitarias ni de seguimiento. Solo guardamos un registro técnico en tu
        navegador para recordar que has leído este aviso.
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="btn btn--primary btn--xs" onClick={dismiss}>
          Entendido
        </button>
        <a className="cookie-banner__link" href="/cookies">
          Ver política de cookies
        </a>
      </div>
    </aside>
  );
}
