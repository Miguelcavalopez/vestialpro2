import { LegalLayout } from "../components/LegalLayout";
import { cookies, privacidad, proteccionDatos } from "../data/legal";

export function Privacidad() {
  return <LegalLayout doc={privacidad} />;
}

export function ProteccionDatos() {
  return <LegalLayout doc={proteccionDatos} />;
}

export function PoliticaCookies() {
  return <LegalLayout doc={cookies} />;
}
