export type PageId =
  | "home"
  | "about"
  | "normativa"
  | "catalogos"
  | "contacto"
  | "privacidad"
  | "proteccion-datos"
  | "cookies"
  | "404";

export interface RouteMeta {
  page: PageId;
  path: string;
  label: string;
  title: string;
  description: string;
  keywords: string[];
  index: boolean;
}

export const routes: RouteMeta[] = [
  {
    page: "home",
    path: "/",
    label: "Inicio",
    title: "VESTIALPRO · Ropa laboral y EPI en Torre Pacheco",
    description:
      "Ropa de protección laboral y equipos de protección individual certificados en Torre Pacheco, Murcia. Asesoramiento normativo, tallaje y reposición programada.",
    keywords: ["ropa laboral", "EPI", "Torre Pacheco", "protección laboral", "equipos de protección individual"],
    index: true,
  },
  {
    page: "about",
    path: "/sobre-nosotros",
    label: "Sobre nosotros",
    title: "Sobre nosotros · VESTIALPRO, EPI en Murcia",
    description:
      "Quiénes somos, cómo trabajamos y por qué cada EPI que entregamos lleva su norma, su talla y su fecha de reposición. Arraigo en Torre Pacheco, Murcia.",
    keywords: ["VESTIALPRO", "sobre nosotros", "empresa de EPI", "Torre Pacheco", "Murcia"],
    index: true,
  },
  {
    page: "normativa",
    path: "/normativa",
    label: "Normativa",
    title: "Normativa de EPI: Reglamento UE 2016/425 y RD 773/1997",
    description:
      "Guía completa de normativa de equipos de protección individual: marco legal, categorías I a III, marcado CE, normas UNE-EN por familia y obligaciones.",
    keywords: ["normativa EPI", "Reglamento UE 2016/425", "RD 773/1997", "marcado CE", "normas UNE-EN"],
    index: true,
  },
  {
    page: "catalogos",
    path: "/catalogos",
    label: "Catálogos",
    title: "Catálogos de ropa laboral y EPI · VESTIALPRO",
    description:
      "Catálogos en PDF de vestuario técnico, calzado de seguridad y protección individual. Estamos preparando las nuevas ediciones: pide la ficha que necesites.",
    keywords: ["catálogos EPI", "catálogo ropa laboral", "PDF", "vestuario técnico"],
    index: true,
  },
  {
    page: "contacto",
    path: "/contacto",
    label: "Contacto",
    title: "Contacto · VESTIALPRO en Torre Pacheco, Murcia",
    description:
      "Habla con VESTIALPRO: teléfono, correo y visita en Torre Pacheco (Murcia). Respondemos consultas técnicas y presupuestos en menos de 24 horas laborables.",
    keywords: ["contacto VESTIALPRO", "teléfono", "Torre Pacheco", "presupuesto EPI"],
    index: true,
  },
  {
    page: "privacidad",
    path: "/privacidad",
    label: "Política de privacidad",
    title: "Política de privacidad · VESTIALPRO",
    description:
      "Política de privacidad de VESTIALPRO conforme al RGPD y la LOPDGDD: datos tratados, finalidades, base jurídica, conservación, destinatarios y derechos.",
    keywords: ["política de privacidad", "RGPD", "LOPDGDD", "datos personales"],
    index: true,
  },
  {
    page: "proteccion-datos",
    path: "/proteccion-de-datos",
    label: "Protección de datos",
    title: "Política de protección de datos · VESTIALPRO",
    description:
      "Política de protección de datos de VESTIALPRO: principios, registro de actividades, medidas de seguridad, encargados, brechas y ejercicio de derechos.",
    keywords: ["protección de datos", "RGPD", "seguridad de la información", "AEPD"],
    index: true,
  },
  {
    page: "cookies",
    path: "/cookies",
    label: "Política de cookies",
    title: "Política de cookies · VESTIALPRO",
    description:
      "Qué almacena esta web y para qué. VESTIALPRO no utiliza cookies publicitarias ni de seguimiento: solo almacenamiento técnico necesario.",
    keywords: ["política de cookies", "almacenamiento técnico", "privacidad"],
    index: true,
  },
  {
    page: "404",
    path: "/404",
    label: "Página no encontrada",
    title: "Página no encontrada · VESTIALPRO",
    description: "La dirección que buscas no existe o ha cambiado de sitio. Vuelve al inicio o escríbenos y te ayudamos a encontrar lo que necesitas.",
    keywords: ["error 404", "página no encontrada"],
    index: false,
  },
];

export const navRoutes = routes.filter((route) =>
  ["home", "about", "normativa", "catalogos", "contacto"].includes(route.page),
);

export function routeFor(page: PageId): RouteMeta {
  return routes.find((route) => route.page === page) ?? routes[routes.length - 1];
}
