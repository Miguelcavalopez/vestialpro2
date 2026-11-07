import { useState } from "react";
import { site } from "../data/site";

const subjects = [
  "Ropa de trabajo y vestuario técnico",
  "EPI de categoría II",
  "EPI de categoría III",
  "Asesoramiento normativo",
  "Catálogos y fichas técnicas",
  "Otro",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("nombre") ?? "").trim();
    const company = String(data.get("empresa") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("telefono") ?? "").trim();
    const topic = String(data.get("motivo") ?? "");
    const message = String(data.get("mensaje") ?? "").trim();

    const subject = `Consulta web · ${topic || "Información"} · ${company || name}`;
    const body = [
      `Nombre: ${name}`,
      `Empresa: ${company}`,
      `Correo: ${email}`,
      `Teléfono: ${phone}`,
      `Motivo: ${topic}`,
      "",
      message,
      "",
      "Enviado desde vestialpro.es",
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="field-grid">
        <label className="field">
          <span className="field__label">Nombre y apellidos *</span>
          <input name="nombre" type="text" autoComplete="name" required placeholder="María López" />
        </label>
        <label className="field">
          <span className="field__label">Empresa</span>
          <input name="empresa" type="text" autoComplete="organization" placeholder="Nombre de la empresa" />
        </label>
        <label className="field">
          <span className="field__label">Correo electrónico *</span>
          <input name="email" type="email" autoComplete="email" required placeholder="nombre@empresa.es" />
        </label>
        <label className="field">
          <span className="field__label">Teléfono</span>
          <input name="telefono" type="tel" autoComplete="tel" placeholder="600 000 000" />
        </label>
      </div>

      <label className="field">
        <span className="field__label">¿Qué necesitas?</span>
        <span className="select-wrap">
          <select name="motivo" defaultValue={subjects[0]}>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </span>
      </label>

      <label className="field">
        <span className="field__label">Mensaje *</span>
        <textarea
          name="mensaje"
          rows={5}
          required
          placeholder="Cuéntanos el puesto de trabajo, el número de personas y el riesgo a cubrir."
        />
      </label>

      <label className="checkbox">
        <input type="checkbox" name="consentimiento" required />
        <span>
          He leído y acepto la <a href="/privacidad">política de privacidad</a> y el tratamiento de mis datos
          para responder a esta consulta.
        </span>
      </label>

      <div className="contact-form__actions">
        <button type="submit" className="btn btn--primary">
          Enviar consulta
        </button>
        <p className="contact-form__note">
          Se abrirá tu programa de correo con el mensaje ya redactado. Respondemos en menos de 24 horas
          laborables.
        </p>
      </div>

      {status === "opened" ? (
        <p className="contact-form__status" role="status">
          Hemos preparado el correo en tu cliente de mensajería. Si no se abre, escríbenos directamente a{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      ) : null}
    </form>
  );
}
