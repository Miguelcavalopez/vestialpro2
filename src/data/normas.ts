export interface LegalRef {
  code: string;
  title: string;
  scope: string;
  detail: string;
}

export const marcoLegal: LegalRef[] = [
  {
    code: "Ley 31/1995",
    title: "Prevención de Riesgos Laborales",
    scope: "Marco general",
    detail:
      "Obliga a evaluar los riesgos antes de elegir cualquier medida y a proporcionar gratuitamente los equipos de protección individual que resulten necesarios, con formación e información sobre su uso.",
  },
  {
    code: "RD 39/1997",
    title: "Reglamento de los Servicios de Prevención",
    scope: "Gestión preventiva",
    detail:
      "Desarrolla la evaluación de riesgos y la planificación de la actividad preventiva. De aquí sale el documento que justifica por qué un puesto necesita un EPI concreto.",
  },
  {
    code: "RD 1407/1992",
    title: "Comercialización de los EPI",
    scope: "Producto",
    detail:
      "Regula las condiciones de comercialización: marcado CE, declaración de conformidad e información al usuario. Sigue siendo la norma española de referencia para los EPI puestos en el mercado.",
  },
  {
    code: "RD 773/1997",
    title: "Utilización de los EPI por los trabajadores",
    scope: "Uso en el puesto",
    detail:
      "Fija cómo se eligen, se entregan, se usan, se mantienen y se revisan los equipos. Incluye la obligación de informar y formar al trabajador y de registrar la entrega.",
  },
  {
    code: "Reglamento (UE) 2016/425",
    title: "Diseño y certificación de los EPI",
    scope: "Producto europeo",
    detail:
      "Sustituye a la Directiva 89/686/CEE. Establece las categorías I, II y III, el examen UE de tipo, el control de la producción, la declaración UE de conformidad y la trazabilidad del fabricante.",
  },
  {
    code: "RD 1215/1997",
    title: "Equipos de trabajo",
    scope: "Equipos y anclajes",
    detail:
      "Aplica a los equipos auxiliares que hacen posible la protección: plataformas, líneas de vida y puntos de anclaje donde se conectan los sistemas anticaídas.",
  },
];

export interface Category {
  id: "I" | "II" | "III";
  label: string;
  risk: string;
  examples: string;
  conformity: string;
  note: string;
}

export const categorias: Category[] = [
  {
    id: "I",
    label: "Categoría I",
    risk: "Riesgo mínimo",
    examples: "Guantes de jardinería, gafas de protección solar, delantales de limpieza",
    conformity: "Autocertificación del fabricante",
    note: "El fabricante declara la conformidad por sí mismo y aplica el marcado CE sin intervención de un organismo notificado.",
  },
  {
    id: "II",
    label: "Categoría II",
    risk: "Riesgo intermedio",
    examples: "Cascos, gafas, guantes mecánicos, calzado de seguridad, protección auditiva",
    conformity: "Examen UE de tipo",
    note: "Es la categoría más habitual en industria y construcción. Un organismo notificado verifica el prototipo antes de su comercialización.",
  },
  {
    id: "III",
    label: "Categoría III",
    risk: "Riesgo grave o mortal",
    examples: "Protección respiratoria, química, arneses anticaídas, dieléctricos, arco eléctrico",
    conformity: "Examen UE de tipo + control de producción",
    note: "Además del examen de tipo, el fabricante se somete a un control de calidad vigilado. Junto al marcado CE aparece el número del organismo notificado.",
  },
];

export interface StandardRow {
  norm: string;
  family: string;
  what: string;
  use: string;
}

export const familyFilters = [
  "Todas",
  "Cabeza",
  "Ocular",
  "Auditiva",
  "Respiratoria",
  "Manos",
  "Calzado",
  "Ropa",
  "Anticaídas",
] as const;

export type FamilyFilter = (typeof familyFilters)[number];

export const standards: StandardRow[] = [
  {
    norm: "EN 397",
    family: "Cabeza",
    what: "Cascos de protección para la industria",
    use: "Impacto, penetración y llama. Admite requisitos opcionales de frío extremo o contacto eléctrico.",
  },
  {
    norm: "EN 12492",
    family: "Cabeza",
    what: "Cascos para trabajos en altura",
    use: "Montaña, cubiertas y rescate: barboquejo que evita la caída del casco y ventilación.",
  },
  {
    norm: "EN 166",
    family: "Ocular",
    what: "Protección individual de los ojos",
    use: "Requisitos generales de montura y lente; el código de campo de uso indica el riesgo cubierto.",
  },
  {
    norm: "EN 170",
    family: "Ocular",
    what: "Filtros ultravioleta",
    use: "Trabajos con exposición a radiación UV: soldadura ligera, laboratorio, exterior.",
  },
  {
    norm: "EN 352-1 / -2 / -3",
    family: "Auditiva",
    what: "Protectores auditivos",
    use: "Orejeras, orejeras acopladas a casco y tapones. El valor SNR orienta la atenuación real.",
  },
  {
    norm: "EN 149",
    family: "Respiratoria",
    what: "Mascarillas filtrantes FFP1, FFP2 y FFP3",
    use: "Partículas y aerosoles. No protegen frente a gases ni vapores.",
  },
  {
    norm: "EN 140",
    family: "Respiratoria",
    what: "Medias máscaras y cuartos de máscara",
    use: "Base de los equipos filtrantes reutilizables con filtros intercambiables.",
  },
  {
    norm: "EN 388",
    family: "Manos",
    what: "Guantes contra riesgos mecánicos",
    use: "Código de cuatro dígitos: abrasión, corte, desgarro y perforación, más el ensayo de corte TDM.",
  },
  {
    norm: "EN 407",
    family: "Manos",
    what: "Guantes contra riesgos térmicos",
    use: "Calor y llama, calor de contacto, calor convectivo, radiación, salpicaduras de metal fundido.",
  },
  {
    norm: "EN ISO 374",
    family: "Manos",
    what: "Guantes frente a productos químicos",
    use: "La norma indica el nivel de protección y el tiempo de paso para cada sustancia ensayada.",
  },
  {
    norm: "EN ISO 20345",
    family: "Calzado",
    what: "Calzado de seguridad",
    use: "Puntera de 200 J. Los códigos S1P, S2, S3 y S7 añaden propiedades como antiperforación o impermeabilidad.",
  },
  {
    norm: "EN ISO 20347",
    family: "Calzado",
    what: "Calzado de trabajo",
    use: "Sin puntera protectora. Para puestos donde no hay riesgo de impacto, pero sí de deslizamiento o fatiga.",
  },
  {
    norm: "EN ISO 20471",
    family: "Ropa",
    what: "Ropa de alta visibilidad",
    use: "Clases 1, 2 y 3 según la superficie de material fluorescente y retrorreflectante.",
  },
  {
    norm: "EN 343",
    family: "Ropa",
    what: "Ropa de protección contra la lluvia",
    use: "Combina resistencia al agua y transpirabilidad en dos dígitos (por ejemplo 3.1).",
  },
  {
    norm: "EN ISO 11612",
    family: "Ropa",
    what: "Ropa contra calor y llama",
    use: "Industria, fundición y trabajos con calor radiante. Se complementa con EN ISO 11611 para soldadura.",
  },
  {
    norm: "EN ISO 14116",
    family: "Ropa",
    what: "Ropa con propagación limitada de la llama",
    use: "Prendas que no se prenden solas, sin protección térmica completa.",
  },
  {
    norm: "EN 1149-5",
    family: "Ropa",
    what: "Ropa antiestática",
    use: "Evita la acumulación de carga electrostática en atmósferas potencialmente explosivas.",
  },
  {
    norm: "EN 13034",
    family: "Ropa",
    what: "Protección química líquida (tipo 6)",
    use: "Salpicaduras ligeras y niebla; no sirve para proyecciones fuertes ni gases.",
  },
  {
    norm: "EN 361",
    family: "Anticaídas",
    what: "Arneses anticaídas",
    use: "Arnés de cuerpo completo con puntos de anclaje definidos para detención de caídas y trabajo.",
  },
  {
    norm: "EN 360",
    family: "Anticaídas",
    what: "Dispositivos anticaídas retráctiles",
    use: "Línea de vida autoenrollable: bloqueo por velocidad y absorción de energía integrada.",
  },
  {
    norm: "EN 795",
    family: "Anticaídas",
    what: "Puntos y dispositivos de anclaje",
    use: "Define los anclajes estructurales y portátiles a los que se conecta el sistema.",
  },
];

export interface ObligationGroup {
  title: string;
  intro: string;
  items: string[];
}

export const obligaciones: ObligationGroup[] = [
  {
    title: "De la empresa",
    intro: "La protección es una obligación del empleador, no un extra del salario.",
    items: [
      "Evaluar el riesgo del puesto antes de elegir el equipo: el EPI es la última barrera, no la primera.",
      "Seleccionar EPI con marcado CE, categoría adecuada y norma coherente con el riesgo real.",
      "Entregar el equipo de forma gratuita, en la talla correcta y adaptado a la persona.",
      "Formar e informar sobre uso, limitaciones, conservación y fecha de sustitución.",
      "Vigilar que el EPI se use correctamente y sustituirlo cuando pierda eficacia.",
      "Registrar cada entrega y cada revisión con fecha, modelo y firma.",
    ],
  },
  {
    title: "Del trabajador",
    intro: "El equipo protege cuando se usa, se cuida y se comunica su estado.",
    items: [
      "Utilizar el EPI según las instrucciones recibidas y durante todo el tiempo de exposición.",
      "Conservarlo en las condiciones indicadas y no modificarlo ni manipularlo.",
      "Comunicar de inmediato cualquier deterioro, pérdida o anomalía.",
      "Participar en la formación y en las revisiones periódicas.",
      "No anular ni retirar protecciones colectivas por comodidad.",
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const preguntas: FaqItem[] = [
  {
    question: "¿Quién tiene que pagar el EPI?",
    answer:
      "Siempre la empresa. El coste no puede repercutirse en el trabajador ni descontarse del salario: es una obligación derivada de la Ley 31/1995 y del RD 773/1997.",
  },
  {
    question: "¿Puedo usar mi propio equipo de protección?",
    answer:
      "Solo de forma excepcional y con autorización de la empresa, siempre que cumpla los requisitos de diseño y certificación. La responsabilidad de proporcionar el EPI adecuado sigue siendo del empleador.",
  },
  {
    question: "¿Caduca un casco de seguridad?",
    answer:
      "La normativa no fija una fecha única de caducidad. Debes atender a las instrucciones del fabricante y al entorno: la radiación UV, el calor y el sudor degradan el material. Un casco que ha recibido un impacto se sustituye siempre, aunque no presente daños visibles.",
  },
  {
    question: "¿Qué significa el número que aparece junto al marcado CE?",
    answer:
      "Es el código de cuatro dígitos del organismo notificado que ha intervenido en el control de producción. Solo aparece en los EPI de categoría III, los de riesgo grave o mortal.",
  },
  {
    question: "¿Un EPI con marcado CE ya me protege?",
    answer:
      "El marcado CE acredita que el producto cumple los requisitos esenciales y la norma aplicable. La protección real depende además de la elección correcta, del ajuste a la persona y de que se use durante toda la exposición.",
  },
  {
    question: "¿Qué documentación debo conservar?",
    answer:
      "La declaración UE de conformidad, las instrucciones del fabricante, el registro de entrega al trabajador y las revisiones periódicas. Es la prueba documental de que la protección estaba correctamente implantada.",
  },
];
