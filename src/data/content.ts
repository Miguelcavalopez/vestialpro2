export type ServiceIcon = "vestuario" | "epi" | "normativa" | "suministro";

export interface Service {
  title: string;
  text: string;
  tags: string[];
  icon: ServiceIcon;
}

export const sitioServicios: Service[] = [
  {
    title: "Vestuario técnico",
    text: "Polos, pantalones, chaquetas y ropa de alta visibilidad en tejidos que aguantan lavado industrial y jornadas largas.",
    tags: ["EN ISO 20471", "EN 343", "Bordado"],
    icon: "vestuario",
  },
  {
    title: "EPI certificado",
    text: "Cascos, calzado S3, guantes anticorte, protección ocular y respiratoria. Solo categorías II y III con certificado vigente.",
    tags: ["EN 397", "EN ISO 20345", "EN 388"],
    icon: "epi",
  },
  {
    title: "Asesoramiento normativo",
    text: "Traducimos tu evaluación de riesgos a una ficha de EPI concreta, con su marcado CE, su norma y su vida útil.",
    tags: ["RD 773/1997", "2016/425", "Registro"],
    icon: "normativa",
  },
  {
    title: "Suministro y reposición",
    text: "Stock reservado de tu talla y tu modelo, entregas programadas y avisos de sustitución sin que tengas que pedirlo.",
    tags: ["48–72 h", "Stock", "Reposición"],
    icon: "suministro",
  },
];

export const valores = [
  {
    title: "Criterio antes que catálogo",
    text: "Si un equipo no cubre el riesgo, no lo vendemos. Preferimos decir que no y explicar por qué.",
  },
  {
    title: "Trato directo",
    text: "Hablas siempre con la misma persona: la que conoce tu plantilla y tus tallas.",
  },
  {
    title: "Stock real",
    text: "No prometemos disponibilidad que no tenemos. Lo que decimos que hay, está en el almacén.",
  },
  {
    title: "Compromiso local",
    text: "Estamos en Torre Pacheco: entregamos, ajustamos y reponemos en la Región de Murcia.",
  },
];

export const pasos = [
  {
    title: "Escuchamos",
    text: "Visita o llamada para entender la plantilla, los turnos y los puestos de trabajo.",
  },
  {
    title: "Evaluamos",
    text: "Cruzamos tu evaluación de riesgos con las normas UNE-EN que cubren cada exposición.",
  },
  {
    title: "Equipamos",
    text: "Propuesta cerrada con tallaje, prueba en planta y personalización de marca.",
  },
  {
    title: "Reponemos",
    text: "Calendario de reposición y registro documental de entregas y revisiones.",
  },
];
