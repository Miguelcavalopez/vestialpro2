/**
 * Datos corporativos de VESTIALPRO.
 * Los valores marcados como pendientes deben sustituirse por los definitivos
 * antes de publicar el sitio en el dominio real.
 */
export const site = {
  name: "VESTIALPRO",
  legalName: "VESTIALPRO, S.L.",
  claim: "Vestuario técnico y equipos de protección individual",
  email: "hola@vestialpro.es",
  phone: "968 000 000",
  phoneHref: "+34968000000",
  whatsapp: "600 000 000",
  nif: "B-00000000",
  address: {
    street: "Polígono Industrial Las Salinas, nave 12",
    city: "30700 Torre Pacheco",
    province: "Murcia",
    country: "España",
  },
  coordinates: "37.7433° N · 1.0333° O",
  hours: [
    { days: "Lunes a jueves", time: "08:00 – 14:00 · 15:30 – 18:30" },
    { days: "Viernes", time: "08:00 – 14:00" },
    { days: "Agosto", time: "Cita previa" },
  ],
  serviceArea: "Región de Murcia, sur de Alicante y Almería",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Torre+Pacheco%2C+Murcia",
  updated: "Noviembre de 2026",
} as const;

export const legalUpdated = "7 de noviembre de 2026";
