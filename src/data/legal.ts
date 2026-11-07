import { legalUpdated, site } from "./site";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; label?: string; text: string };

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
}

const responsable = `${site.legalName}, con domicilio social en ${site.address.street}, ${site.address.city} (${site.address.province}), España, y CIF ${site.nif}. Correo electrónico de contacto: ${site.email}. Teléfono: ${site.phone}.`;

export const privacidad: LegalDocument = {
  eyebrow: "Legal",
  title: "Política de privacidad",
  lead: "Cómo tratamos los datos personales que nos facilitas a través de esta web, quién los recibe y qué puedes hacer para controlarlos.",
  updated: legalUpdated,
  sections: [
    {
      id: "responsable",
      title: "1. Responsable del tratamiento",
      blocks: [
        { type: "p", text: responsable },
        {
          type: "p",
          text: "Esta política se aplica al sitio web de VESTIALPRO y a las comunicaciones que realices a través de los canales de contacto publicados en él. Se redacta conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).",
        },
      ],
    },
    {
      id: "datos",
      title: "2. Qué datos tratamos",
      blocks: [
        {
          type: "p",
          text: "Solo tratamos los datos necesarios para atenderte. En función del canal utilizado pueden ser:",
        },
        {
          type: "ul",
          items: [
            "Datos identificativos y de contacto: nombre y apellidos, empresa, correo electrónico y teléfono.",
            "Contenido de tu consulta: puesto de trabajo, número de personas, equipo solicitado y cualquier información que decidas incluir en el mensaje.",
            "Datos de facturación y expediente, si la consulta termina en una relación comercial: denominación social, CIF, dirección fiscal y datos de pago.",
            "Datos técnicos de navegación estrictamente necesarios para servir la web, sin elaboración de perfiles ni publicidad.",
          ],
        },
        {
          type: "p",
          text: "No solicitamos categorías especiales de datos (salud, ideología, origen étnico, etc.). Si nos los facilitas de forma espontánea, los trataremos solo para la finalidad concreta de tu solicitud y los eliminaremos cuando deje de ser necesaria.",
        },
      ],
    },
    {
      id: "finalidades",
      title: "3. Para qué los usamos y con qué base jurídica",
      blocks: [
        {
          type: "table",
          head: ["Finalidad", "Base jurídica", "Conservación"],
          rows: [
            [
              "Responder consultas recibidas por formulario, correo o teléfono",
              "Consentimiento del interesado (art. 6.1.a RGPD) e interés legítimo en atender la solicitud (art. 6.1.f)",
              "Hasta resolver la consulta y, después, 1 año",
            ],
            [
              "Elaborar presupuestos y gestionar pedidos",
              "Ejecución de un contrato o medidas precontractuales (art. 6.1.b)",
              "Duración de la relación comercial",
            ],
            [
              "Facturación, contabilidad y obligaciones fiscales",
              "Obligación legal (art. 6.1.c)",
              "6 años (Código de Comercio y normativa fiscal)",
            ],
            [
              "Atención de responsabilidades derivadas de la venta de EPI",
              "Obligación legal e interés legítimo en la defensa de reclamaciones",
              "Según plazos de garantía y prescripción legal",
            ],
            [
              "Seguridad de la web y prevención del fraude",
              "Interés legítimo (art. 6.1.f)",
              "Máximo 12 meses",
            ],
          ],
        },
        {
          type: "p",
          text: "No elaboramos perfiles comerciales ni tomamos decisiones automatizadas con efectos jurídicos sobre las personas.",
        },
      ],
    },
    {
      id: "destinatarios",
      title: "4. Quién puede acceder a tus datos",
      blocks: [
        {
          type: "p",
          text: "No vendemos ni cedemos datos personales a terceros con fines publicitarios. Podrán acceder a ellos, como encargados del tratamiento y con contrato conforme al artículo 28 del RGPD:",
        },
        {
          type: "ul",
          items: [
            "El proveedor de alojamiento web y correo electrónico, ubicado en la Unión Europea.",
            "La asesoría fiscal y contable, para la facturación y las obligaciones legales.",
            "Las empresas de transporte, exclusivamente con los datos necesarios para entregar un pedido.",
            "Los servicios profesionales (abogados, consultores) cuando sea necesario para atender una reclamación.",
          ],
        },
        {
          type: "p",
          text: "También podrán comunicarse datos a administraciones públicas, juzgados y tribunales cuando exista una obligación legal o un requerimiento válido.",
        },
      ],
    },
    {
      id: "transferencias",
      title: "5. Transferencias internacionales",
      blocks: [
        {
          type: "p",
          text: "Con carácter general, los datos se alojan en servidores situados en la Unión Europea. Si algún proveedor implicara una transferencia fuera del Espacio Económico Europeo, se formalizarían las garantías adecuadas del artículo 46 del RGPD —cláusulas contractuales tipo o decisión de adecuación— y se informaría en esta misma página.",
        },
      ],
    },
    {
      id: "derechos",
      title: "6. Tus derechos",
      blocks: [
        {
          type: "p",
          text: "Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición, así como retirar el consentimiento prestado sin que ello afecte a la licitud del tratamiento previo.",
        },
        {
          type: "p",
          text: `Para ejercerlos, escríbenos a ${site.email} indicando el derecho que deseas ejercer y adjuntando un documento que acredite tu identidad. Responderemos en el plazo máximo de un mes, ampliable otros dos en casos complejos.`,
        },
        {
          type: "p",
          text: "Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), C/ Jorge Juan 6, 28001 Madrid, o a través de su sede electrónica (www.aepd.es).",
        },
      ],
    },
    {
      id: "cookies",
      title: "7. Cookies y almacenamiento local",
      blocks: [
        {
          type: "p",
          text: "Esta web no utiliza cookies publicitarias, de perfilado ni de redes sociales. Solo guardamos un registro técnico en el almacenamiento local de tu navegador para recordar que has leído el aviso de cookies. Puedes consultar el detalle en la política de cookies.",
        },
      ],
    },
    {
      id: "menores",
      title: "8. Menores de edad",
      blocks: [
        {
          type: "p",
          text: "Los servicios de esta web están dirigidos a empresas y profesionales. No recogemos conscientemente datos de menores de 14 años. Si detectamos que se han facilitado, procederemos a su supresión inmediata.",
        },
      ],
    },
    {
      id: "seguridad",
      title: "9. Seguridad de la información",
      blocks: [
        {
          type: "p",
          text: "Aplicamos medidas técnicas y organizativas proporcionadas al riesgo: cifrado del sitio mediante HTTPS, control de acceso a los sistemas, copias de seguridad, gestión de incidencias y formación básica del personal que trata datos. El detalle se recoge en la política de protección de datos.",
        },
      ],
    },
    {
      id: "cambios",
      title: "10. Cambios en esta política",
      blocks: [
        {
          type: "p",
          text: `Esta política puede actualizarse para adaptarse a cambios normativos o a nuevos tratamientos. La versión vigente es la publicada en esta página, con fecha de última revisión ${legalUpdated}.`,
        },
      ],
    },
  ],
};

export const proteccionDatos: LegalDocument = {
  eyebrow: "Legal",
  title: "Política de protección de datos",
  lead: "El modelo de gobernanza que aplicamos al tratamiento de datos personales: principios, registro de actividades, medidas de seguridad y gestión de incidencias.",
  updated: legalUpdated,
  sections: [
    {
      id: "objeto",
      title: "1. Objeto y alcance",
      blocks: [
        {
          type: "p",
          text: `${site.legalName} trata datos personales en el marco de su actividad de suministro de vestuario técnico y equipos de protección individual. Esta política describe cómo se organiza ese tratamiento conforme al RGPD y a la LOPDGDD, y complementa a la política de privacidad.`,
        },
        {
          type: "p",
          text: "Afecta a todos los tratamientos realizados por la empresa, con independencia del soporte —web, correo electrónico, teléfono, facturación o documentación de entregas de EPI— y a todo el personal que tenga acceso a ellos.",
        },
      ],
    },
    {
      id: "principios",
      title: "2. Principios aplicados",
      blocks: [
        {
          type: "ul",
          items: [
            "Licitud, lealtad y transparencia: cada tratamiento tiene una base jurídica identificada y se informa al interesado.",
            "Limitación de la finalidad: los datos no se reutilizan para fines incompatibles con aquel para el que se recogieron.",
            "Minimización: solo se solicitan los datos imprescindibles para la consulta o el pedido.",
            "Exactitud: se corrige cualquier dato inexacto que se detecte o que el interesado comunique.",
            "Limitación del plazo de conservación: se aplican los plazos indicados en el registro de actividades.",
            "Integridad y confidencialidad: acceso restringido, cifrado en tránsito y copias de seguridad.",
            "Responsabilidad proactiva: se documentan las decisiones y se revisan periódicamente.",
          ],
        },
      ],
    },
    {
      id: "registro",
      title: "3. Registro de actividades de tratamiento",
      blocks: [
        {
          type: "p",
          text: "El registro interno identifica, para cada actividad, la base jurídica, las categorías de datos e interesados, los destinatarios y el plazo de conservación. Este es su resumen:",
        },
        {
          type: "table",
          head: ["Actividad", "Datos", "Base jurídica", "Conservación"],
          rows: [
            ["Gestión de consultas web", "Identificativos y de contacto", "Consentimiento", "1 año"],
            ["Clientes y presupuestos", "Identificativos, fiscales y de contacto", "Contrato", "Relación + 6 años"],
            ["Facturación y contabilidad", "Fiscales y bancarios", "Obligación legal", "6 años"],
            ["Proveedores y transporte", "Identificativos y de contacto", "Contrato", "Relación + 6 años"],
            ["Registro de entregas de EPI", "Nombre, talla, modelo y firma", "Obligación legal (RD 773/1997)", "Plazo de garantía y prescripción"],
            ["Selección de personal", "Currículum y contacto", "Consentimiento", "1 año"],
            ["Videovigilancia de la nave, si existe", "Imagen", "Interés legítimo", "30 días"],
          ],
        },
      ],
    },
    {
      id: "base",
      title: "4. Base de licitud y consentimiento",
      blocks: [
        {
          type: "p",
          text: "Cuando la base es el consentimiento, este se recoge mediante una acción afirmativa y separada, con información previa sobre la finalidad. Puede retirarse en cualquier momento con la misma facilidad con la que se otorgó, sin que ello afecte a la licitud del tratamiento anterior.",
        },
        {
          type: "p",
          text: "Cuando la base es el interés legítimo, se ha realizado una ponderación que confirma que no prevalecen los derechos y libertades del interesado. Puedes oponerte a este tratamiento en cualquier momento.",
        },
      ],
    },
    {
      id: "seguridad",
      title: "5. Medidas de seguridad",
      blocks: [
        {
          type: "p",
          text: "Las medidas se organizan en cuatro ámbitos y se revisan al menos una vez al año o cuando cambia un proveedor relevante:",
        },
        {
          type: "ul",
          items: [
            "Control de acceso: cuentas nominativas, contraseñas robustas, doble factor en los servicios críticos y revisión de permisos al cambiar de puesto.",
            "Confidencialidad: deber de secreto del personal y de los proveedores, y acceso limitado a la información estrictamente necesaria.",
            "Integridad y disponibilidad: copias de seguridad periódicas, verificación de restauración y protección frente a malware.",
            "Trazabilidad: registro de incidencias, de brechas y de las decisiones adoptadas en materia de protección de datos.",
          ],
        },
        {
          type: "callout",
          label: "Cifrado",
          text: "La web se sirve siempre mediante HTTPS. Los documentos con datos personales se comparten por canales cifrados y nunca por enlaces abiertos.",
        },
      ],
    },
    {
      id: "encargados",
      title: "6. Encargados del tratamiento",
      blocks: [
        {
          type: "p",
          text: "Todo proveedor que acceda a datos personales por cuenta de VESTIALPRO firma un contrato que regula el objeto, la duración, la naturaleza del tratamiento, las instrucciones, las medidas de seguridad, la subcontratación y la devolución o supresión de los datos al terminar el servicio.",
        },
        {
          type: "p",
          text: "Se mantiene una relación actualizada de encargados —alojamiento, correo, asesoría, transporte y mantenimiento informático— con la ubicación de sus servidores y las garantías aplicables.",
        },
      ],
    },
    {
      id: "derechos",
      title: "7. Ejercicio de derechos y procedimiento",
      blocks: [
        {
          type: "p",
          text: `Cualquier persona puede solicitar el acceso, la rectificación, la supresión, la limitación, la portabilidad o la oposición escribiendo a ${site.email}. La solicitud se registra con fecha de entrada y se responde en el plazo máximo de un mes.`,
        },
        {
          type: "p",
          text: "El ejercicio de derechos es gratuito. Solo se cobrará un importe cuando las solicitudes sean manifiestamente infundadas o excesivas, y en ese caso se motivará la decisión.",
        },
      ],
    },
    {
      id: "brechas",
      title: "8. Brechas de seguridad",
      blocks: [
        {
          type: "p",
          text: "Cualquier incidente que afecte a la confidencialidad, integridad o disponibilidad de los datos se comunica de inmediato al responsable. Se valora el riesgo para los derechos de las personas y, si procede, se notifica a la AEPD en un plazo máximo de 72 horas y a los interesados afectados cuando el riesgo sea alto.",
        },
        {
          type: "p",
          text: "Todas las brechas quedan documentadas —incluidas las que no requieren notificación— con su descripción, efectos y medidas adoptadas.",
        },
      ],
    },
    {
      id: "eipd",
      title: "9. Evaluación de impacto y consulta previa",
      blocks: [
        {
          type: "p",
          text: "Antes de implantar un tratamiento que pueda entrañar un alto riesgo —por su naturaleza, alcance o uso de nuevas tecnologías— se realiza una evaluación de impacto relativa a la protección de datos y, cuando la evaluación concluya un riesgo residual alto, se consulta previamente a la autoridad de control.",
        },
      ],
    },
    {
      id: "dpd",
      title: "10. Delegado de Protección de Datos",
      blocks: [
        {
          type: "p",
          text: `La empresa no está obligada a designar un Delegado de Protección de Datos por su actividad principal. Las funciones de supervisión y coordinación las asume la dirección, que puede ser contactada en ${site.email} con el asunto «Protección de datos».`,
        },
      ],
    },
    {
      id: "autoridad",
      title: "11. Autoridad de control",
      blocks: [
        {
          type: "p",
          text: "La autoridad competente en España es la Agencia Española de Protección de Datos, C/ Jorge Juan 6, 28001 Madrid. Puedes presentar reclamaciones en su sede electrónica (www.aepd.es) o por cualquiera de los medios previstos en la Ley 39/2015.",
        },
      ],
    },
    {
      id: "revision",
      title: "12. Revisión y vigencia",
      blocks: [
        {
          type: "p",
          text: `Esta política se revisa al menos anualmente y siempre que se produzca un cambio normativo relevante o una incidencia significativa. Última revisión: ${legalUpdated}.`,
        },
      ],
    },
  ],
};

export const cookies: LegalDocument = {
  eyebrow: "Legal",
  title: "Política de cookies",
  lead: "Qué guarda esta web en tu navegador, para qué sirve y cómo puedes eliminarlo. Sin cookies publicitarias ni de seguimiento.",
  updated: legalUpdated,
  sections: [
    {
      id: "que-son",
      title: "1. Qué es una cookie",
      blocks: [
        {
          type: "p",
          text: "Una cookie es un pequeño archivo que un sitio web guarda en tu dispositivo para recordar información entre visitas. Junto a ellas existen tecnologías equivalentes como el almacenamiento local (localStorage), que funciona de forma parecida dentro del navegador.",
        },
        {
          type: "p",
          text: "La normativa española (artículo 22.2 de la LIS) exige informar y obtener consentimiento para las cookies que no sean estrictamente necesarias para el funcionamiento del servicio.",
        },
      ],
    },
    {
      id: "que-usamos",
      title: "2. Qué utilizamos en esta web",
      blocks: [
        {
          type: "p",
          text: "Únicamente un registro técnico de almacenamiento local, necesario para recordar que ya has leído el aviso:",
        },
        {
          type: "table",
          head: ["Nombre", "Tecnología", "Finalidad", "Duración"],
          rows: [
            [
              "vestialpro.cookies.v1",
              "Almacenamiento local",
              "Recordar que has aceptado el aviso de cookies y no volver a mostrarlo",
              "Hasta que borres los datos del navegador",
            ],
          ],
        },
        {
          type: "p",
          text: "Este registro no identifica a personas, no se comparte con terceros y no permite elaborar perfiles. Por su carácter estrictamente técnico está exento de consentimiento previo, pero informamos de él por transparencia.",
        },
      ],
    },
    {
      id: "que-no",
      title: "3. Qué no utilizamos",
      blocks: [
        {
          type: "ul",
          items: [
            "Cookies publicitarias o de retargeting.",
            "Herramientas de analítica de terceros con seguimiento entre sitios.",
            "Píxeles de redes sociales ni botones que envíen datos sin tu acción.",
            "Cookies de personalización que construyan un perfil de navegación.",
          ],
        },
        {
          type: "p",
          text: "Tampoco incrustamos vídeos ni mapas de terceros que instalen cookies por defecto: los enlaces a mapas se abren en una pestaña nueva del servicio correspondiente.",
        },
      ],
    },
    {
      id: "gestion",
      title: "4. Cómo eliminar o bloquear este registro",
      blocks: [
        {
          type: "p",
          text: "Puedes borrar el almacenamiento local desde la configuración de tu navegador, en el apartado de privacidad y datos de sitios. Al hacerlo, el aviso de cookies volverá a mostrarse en tu próxima visita.",
        },
        {
          type: "ul",
          items: [
            "Chrome: Configuración › Privacidad y seguridad › Datos de sitios.",
            "Firefox: Ajustes › Privacidad y seguridad › Cookies y datos del sitio.",
            "Safari: Ajustes › Privacidad › Gestionar datos de sitios web.",
            "Edge: Configuración › Cookies y permisos del sitio.",
          ],
        },
        {
          type: "p",
          text: "Bloquear el almacenamiento local no impide navegar por la web ni acceder a sus contenidos.",
        },
      ],
    },
    {
      id: "actualizaciones",
      title: "5. Actualizaciones",
      blocks: [
        {
          type: "p",
          text: `Si en el futuro incorporamos cookies de analítica o de terceros, actualizaremos esta política y solicitaremos el consentimiento previo mediante un panel de configuración. Última revisión: ${legalUpdated}.`,
        },
      ],
    },
  ],
};
