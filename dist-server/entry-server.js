import { renderToStaticMarkup } from "react-dom/server";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/components/CookieBanner.tsx
var STORAGE_KEY = "vestialpro.cookies.v1";
function CookieBanner() {
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
		} catch {}
		setVisible(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ jsxs("aside", {
		className: "cookie-banner",
		"aria-label": "Aviso de cookies",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "cookie-banner__title",
				children: "Cookies y almacenamiento"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "cookie-banner__text",
				children: "Esta web no usa cookies publicitarias ni de seguimiento. Solo guardamos un registro técnico en tu navegador para recordar que has leído este aviso."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "cookie-banner__actions",
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "btn btn--primary btn--xs",
					onClick: dismiss,
					children: "Entendido"
				}), /* @__PURE__ */ jsx("a", {
					className: "cookie-banner__link",
					href: "/cookies",
					children: "Ver política de cookies"
				})]
			})
		]
	});
}
// src/data/site.ts
/**
* Datos corporativos de VESTIALPRO.
* Los valores marcados como pendientes deben sustituirse por los definitivos
* antes de publicar el sitio en el dominio real.
*/
var site = {
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
		country: "España"
	},
	coordinates: "37.7433° N · 1.0333° O",
	hours: [
		{
			days: "Lunes a jueves",
			time: "08:00 – 14:00 · 15:30 – 18:30"
		},
		{
			days: "Viernes",
			time: "08:00 – 14:00"
		},
		{
			days: "Agosto",
			time: "Cita previa"
		}
	],
	serviceArea: "Región de Murcia, sur de Alicante y Almería",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=Torre+Pacheco%2C+Murcia",
	updated: "Noviembre de 2026"
};
var legalUpdated = "7 de noviembre de 2026";
// src/components/Ui.tsx
function Melon({ className = "melon" }) {
	return /* @__PURE__ */ jsxs("svg", {
		className,
		viewBox: "0 0 40 40",
		role: "img",
		"aria-label": "Melón de Torre Pacheco",
		children: [
			/* @__PURE__ */ jsx("path", {
				d: "M20 9c8.3 0 13.7 5.5 13.7 12.6S28.3 34.6 20 34.6 6.3 28.7 6.3 21.6 11.7 9 20 9Z",
				fill: "currentColor",
				opacity: "0.17"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M20 9c8.3 0 13.7 5.5 13.7 12.6S28.3 34.6 20 34.6 6.3 28.7 6.3 21.6 11.7 9 20 9Z",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M20 9.6c-4.2 2.9-6.3 6.9-6.3 11.9S15.8 30.9 20 33.9M20 9.6c4.2 2.9 6.3 6.9 6.3 11.9S24.2 30.9 20 33.9M20 9v25",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M13.5 17.6c1.9-.7 3.4-.3 4.6 1M26.5 17.6c-1.9-.7-3.4-.3-4.6 1",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.3",
				strokeLinecap: "round",
				opacity: "0.65"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M20 9c-.4-2.2.3-3.5 1.8-4.4",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M21.6 4.4c1.9-1.3 3.7-1 4.8.3-1.3 1.4-3.1 1.5-4.8-.3Z",
				fill: "currentColor"
			})
		]
	});
}
function ArrowIcon() {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 16 16",
		"aria-hidden": "true",
		className: "arrow-icon",
		children: /* @__PURE__ */ jsx("path", {
			d: "M2 8h11M9 4l4 4-4 4",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "square"
		})
	});
}
function Logo({ variant = "light", className = "" }) {
	const source = variant === "light" ? "/brand/logo-light.png" : "/brand/logo-color.png";
	return /* @__PURE__ */ jsx("img", {
		className: `brand-logo ${className}`,
		src: source,
		alt: "VESTIALPRO",
		width: 2051,
		height: 338,
		decoding: "async"
	});
}
function Eyebrow({ children, tone = "orange" }) {
	return /* @__PURE__ */ jsxs("p", {
		className: `eyebrow eyebrow--${tone}`,
		children: [/* @__PURE__ */ jsx("span", {
			className: "eyebrow__mark",
			"aria-hidden": "true"
		}), children]
	});
}
function SectionHead({ index, title, lead, tone = "light" }) {
	return /* @__PURE__ */ jsxs("header", {
		className: `section-head section-head--${tone}`,
		"data-reveal": true,
		children: [/* @__PURE__ */ jsx("div", {
			className: "section-head__index",
			children: /* @__PURE__ */ jsx("span", { children: index })
		}), /* @__PURE__ */ jsxs("div", {
			className: "section-head__body",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "section-head__title",
				children: title
			}), lead ? /* @__PURE__ */ jsx("p", {
				className: "section-head__lead",
				children: lead
			}) : null]
		})]
	});
}
// src/components/Footer.tsx
var columns = [
	{
		title: "Empresa",
		links: [
			{
				label: "Inicio",
				href: "/"
			},
			{
				label: "Sobre nosotros",
				href: "/sobre-nosotros"
			},
			{
				label: "Catálogos",
				href: "/catalogos"
			},
			{
				label: "Contacto",
				href: "/contacto"
			}
		]
	},
	{
		title: "Normativa",
		links: [
			{
				label: "Marco legal",
				href: "/normativa#marco-legal"
			},
			{
				label: "Categorías de EPI",
				href: "/normativa#categorias"
			},
			{
				label: "Marcado CE",
				href: "/normativa#marcado-ce"
			},
			{
				label: "Normas UNE-EN",
				href: "/normativa#normas"
			}
		]
	},
	{
		title: "Legal",
		links: [
			{
				label: "Política de privacidad",
				href: "/privacidad"
			},
			{
				label: "Protección de datos",
				href: "/proteccion-de-datos"
			},
			{
				label: "Política de cookies",
				href: "/cookies"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "site-footer",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "footer-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "footer-main",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "footer-brand",
						children: [
							/* @__PURE__ */ jsx(Logo, { className: "footer-logo" }),
							/* @__PURE__ */ jsx("p", {
								className: "footer-claim",
								children: site.claim
							}),
							/* @__PURE__ */ jsxs("address", {
								className: "footer-address",
								children: [
									site.address.street,
									/* @__PURE__ */ jsx("br", {}),
									`${site.address.city} · ${site.address.province}`,
									/* @__PURE__ */ jsx("br", {}),
									site.address.country
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "footer-coords",
								children: site.coordinates
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "footer-columns",
						children: columns.map((column) => /* @__PURE__ */ jsxs("nav", {
							className: "footer-column",
							"aria-label": column.title,
							children: [/* @__PURE__ */ jsx("h2", { children: column.title }), /* @__PURE__ */ jsx("ul", { children: column.links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: link.href,
								children: link.label
							}) }, link.href)) })]
						}, column.title))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-contact",
						children: [
							/* @__PURE__ */ jsx("h2", { children: "Hablemos" }),
							/* @__PURE__ */ jsxs("a", {
								className: "footer-mail",
								href: `mailto:${site.email}`,
								children: [site.email, /* @__PURE__ */ jsx(ArrowIcon, {})]
							}),
							/* @__PURE__ */ jsx("a", {
								className: "footer-phone",
								href: `tel:${site.phoneHref}`,
								children: site.phone
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "footer-hours",
								children: site.hours.map((entry) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: entry.days }), /* @__PURE__ */ jsx("span", { children: entry.time })] }, entry.days))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "footer-legal",
				children: [/* @__PURE__ */ jsx("p", { children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${site.legalName} · CIF ${site.nif}` }), /* @__PURE__ */ jsx("p", {
					className: "footer-legal__note",
					children: "EPI conforme al Reglamento (UE) 2016/425"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "watermark",
				children: [/* @__PURE__ */ jsx(Melon, { className: "watermark__melon" }), /* @__PURE__ */ jsx("span", { children: "Hecho en Torre Pacheco" })]
			})
		]
	});
}
// src/data/routes.ts
var routes = [
	{
		page: "home",
		path: "/",
		label: "Inicio",
		title: "VESTIALPRO · Ropa laboral y EPI en Torre Pacheco",
		description: "Ropa de protección laboral y equipos de protección individual certificados en Torre Pacheco, Murcia. Asesoramiento normativo, tallaje y reposición programada.",
		keywords: [
			"ropa laboral",
			"EPI",
			"Torre Pacheco",
			"protección laboral",
			"equipos de protección individual"
		],
		index: true
	},
	{
		page: "about",
		path: "/sobre-nosotros",
		label: "Sobre nosotros",
		title: "Sobre nosotros · VESTIALPRO, EPI en Murcia",
		description: "Quiénes somos, cómo trabajamos y por qué cada EPI que entregamos lleva su norma, su talla y su fecha de reposición. Arraigo en Torre Pacheco, Murcia.",
		keywords: [
			"VESTIALPRO",
			"sobre nosotros",
			"empresa de EPI",
			"Torre Pacheco",
			"Murcia"
		],
		index: true
	},
	{
		page: "normativa",
		path: "/normativa",
		label: "Normativa",
		title: "Normativa de EPI: Reglamento UE 2016/425 y RD 773/1997",
		description: "Guía completa de normativa de equipos de protección individual: marco legal, categorías I a III, marcado CE, normas UNE-EN por familia y obligaciones.",
		keywords: [
			"normativa EPI",
			"Reglamento UE 2016/425",
			"RD 773/1997",
			"marcado CE",
			"normas UNE-EN"
		],
		index: true
	},
	{
		page: "catalogos",
		path: "/catalogos",
		label: "Catálogos",
		title: "Catálogos de ropa laboral y EPI · VESTIALPRO",
		description: "Catálogos en PDF de vestuario técnico, calzado de seguridad y protección individual. Estamos preparando las nuevas ediciones: pide la ficha que necesites.",
		keywords: [
			"catálogos EPI",
			"catálogo ropa laboral",
			"PDF",
			"vestuario técnico"
		],
		index: true
	},
	{
		page: "contacto",
		path: "/contacto",
		label: "Contacto",
		title: "Contacto · VESTIALPRO en Torre Pacheco, Murcia",
		description: "Habla con VESTIALPRO: teléfono, correo y visita en Torre Pacheco (Murcia). Respondemos consultas técnicas y presupuestos en menos de 24 horas laborables.",
		keywords: [
			"contacto VESTIALPRO",
			"teléfono",
			"Torre Pacheco",
			"presupuesto EPI"
		],
		index: true
	},
	{
		page: "privacidad",
		path: "/privacidad",
		label: "Política de privacidad",
		title: "Política de privacidad · VESTIALPRO",
		description: "Política de privacidad de VESTIALPRO conforme al RGPD y la LOPDGDD: datos tratados, finalidades, base jurídica, conservación, destinatarios y derechos.",
		keywords: [
			"política de privacidad",
			"RGPD",
			"LOPDGDD",
			"datos personales"
		],
		index: true
	},
	{
		page: "proteccion-datos",
		path: "/proteccion-de-datos",
		label: "Protección de datos",
		title: "Política de protección de datos · VESTIALPRO",
		description: "Política de protección de datos de VESTIALPRO: principios, registro de actividades, medidas de seguridad, encargados, brechas y ejercicio de derechos.",
		keywords: [
			"protección de datos",
			"RGPD",
			"seguridad de la información",
			"AEPD"
		],
		index: true
	},
	{
		page: "cookies",
		path: "/cookies",
		label: "Política de cookies",
		title: "Política de cookies · VESTIALPRO",
		description: "Qué almacena esta web y para qué. VESTIALPRO no utiliza cookies publicitarias ni de seguimiento: solo almacenamiento técnico necesario.",
		keywords: [
			"política de cookies",
			"almacenamiento técnico",
			"privacidad"
		],
		index: true
	},
	{
		page: "404",
		path: "/404",
		label: "Página no encontrada",
		title: "Página no encontrada · VESTIALPRO",
		description: "La dirección que buscas no existe o ha cambiado de sitio. Vuelve al inicio o escríbenos y te ayudamos a encontrar lo que necesitas.",
		keywords: ["error 404", "página no encontrada"],
		index: false
	}
];
var navRoutes = routes.filter((route) => [
	"home",
	"about",
	"normativa",
	"catalogos",
	"contacto"
].includes(route.page));
// src/components/Header.tsx
function Header({ page }) {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		document.body.classList.toggle("nav-open", open);
		return () => document.body.classList.remove("nav-open");
	}, [open]);
	useEffect(() => {
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "topbar",
				children: /* @__PURE__ */ jsxs("div", {
					className: "topbar__inner",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "topbar__item",
							children: [/* @__PURE__ */ jsx("span", {
								className: "dot",
								"aria-hidden": "true"
							}), "Torre Pacheco · Murcia"]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "topbar__item topbar__item--muted",
							children: "Entrega en 48–72 h en la Región"
						}),
						/* @__PURE__ */ jsx("span", { className: "topbar__spacer" }),
						/* @__PURE__ */ jsx("a", {
							className: "topbar__link",
							href: `tel:${site.phoneHref}`,
							children: site.phone
						}),
						/* @__PURE__ */ jsx("a", {
							className: "topbar__link",
							href: `mailto:${site.email}`,
							children: site.email
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "header-inner",
				children: [
					/* @__PURE__ */ jsx("a", {
						className: "brand",
						href: "/",
						"aria-label": "VESTIALPRO, ir al inicio",
						children: /* @__PURE__ */ jsx(Logo, {})
					}),
					/* @__PURE__ */ jsx("nav", {
						className: "primary-nav",
						"aria-label": "Navegación principal",
						children: /* @__PURE__ */ jsx("ul", { children: navRoutes.map((route) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: route.path,
							className: page === route.page ? "is-active" : void 0,
							"aria-current": page === route.page ? "page" : void 0,
							children: route.label
						}) }, route.page)) })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "header-actions",
						children: [/* @__PURE__ */ jsxs("a", {
							className: "btn btn--primary btn--sm",
							href: "/contacto",
							children: ["Solicitar información", /* @__PURE__ */ jsx(ArrowIcon, {})]
						}), /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "nav-toggle",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							onClick: () => setOpen((value) => !value),
							children: [
								/* @__PURE__ */ jsx("span", { className: "nav-toggle__bar" }),
								/* @__PURE__ */ jsx("span", { className: "nav-toggle__bar" }),
								/* @__PURE__ */ jsx("span", {
									className: "sr-only",
									children: open ? "Cerrar menú" : "Abrir menú"
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mobile-nav",
				id: "mobile-nav",
				hidden: !open,
				children: [/* @__PURE__ */ jsx("nav", {
					"aria-label": "Navegación móvil",
					children: /* @__PURE__ */ jsx("ul", { children: navRoutes.map((route, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
						href: route.path,
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ jsx("span", {
							className: "mobile-nav__index",
							children: String(index + 1).padStart(2, "0")
						}), route.label]
					}) }, route.page)) })
				}), /* @__PURE__ */ jsxs("div", {
					className: "mobile-nav__foot",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: `tel:${site.phoneHref}`,
							children: site.phone
						}),
						/* @__PURE__ */ jsx("a", {
							href: `mailto:${site.email}`,
							children: site.email
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							site.address.street,
							/* @__PURE__ */ jsx("br", {}),
							`${site.address.city} · ${site.address.province}`
						] })
					]
				})]
			})
		]
	});
}
// src/components/PageHero.tsx
function PageHero({ eyebrow, title, lead, meta, size = "md", children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: `page-hero page-hero--${size}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "page-hero__grid",
			"aria-hidden": "true"
		}), /* @__PURE__ */ jsxs("div", {
			className: "page-hero__inner",
			children: [
				/* @__PURE__ */ jsx(Eyebrow, { children: eyebrow }),
				/* @__PURE__ */ jsx("h1", {
					className: "page-hero__title",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "page-hero__lead",
					children: lead
				}),
				meta ? /* @__PURE__ */ jsx("div", {
					className: "page-hero__meta",
					children: meta
				}) : null,
				children
			]
		})]
	});
}
// src/data/content.ts
var sitioServicios = [
	{
		title: "Vestuario técnico",
		text: "Polos, pantalones, chaquetas y ropa de alta visibilidad en tejidos que aguantan lavado industrial y jornadas largas.",
		tags: [
			"EN ISO 20471",
			"EN 343",
			"Bordado"
		],
		icon: "vestuario"
	},
	{
		title: "EPI certificado",
		text: "Cascos, calzado S3, guantes anticorte, protección ocular y respiratoria. Solo categorías II y III con certificado vigente.",
		tags: [
			"EN 397",
			"EN ISO 20345",
			"EN 388"
		],
		icon: "epi"
	},
	{
		title: "Asesoramiento normativo",
		text: "Traducimos tu evaluación de riesgos a una ficha de EPI concreta, con su marcado CE, su norma y su vida útil.",
		tags: [
			"RD 773/1997",
			"2016/425",
			"Registro"
		],
		icon: "normativa"
	},
	{
		title: "Suministro y reposición",
		text: "Stock reservado de tu talla y tu modelo, entregas programadas y avisos de sustitución sin que tengas que pedirlo.",
		tags: [
			"48–72 h",
			"Stock",
			"Reposición"
		],
		icon: "suministro"
	}
];
var valores = [
	{
		title: "Criterio antes que catálogo",
		text: "Si un equipo no cubre el riesgo, no lo vendemos. Preferimos decir que no y explicar por qué."
	},
	{
		title: "Trato directo",
		text: "Hablas siempre con la misma persona: la que conoce tu plantilla y tus tallas."
	},
	{
		title: "Stock real",
		text: "No prometemos disponibilidad que no tenemos. Lo que decimos que hay, está en el almacén."
	},
	{
		title: "Compromiso local",
		text: "Estamos en Torre Pacheco: entregamos, ajustamos y reponemos en la Región de Murcia."
	}
];
var pasos = [
	{
		title: "Escuchamos",
		text: "Visita o llamada para entender la plantilla, los turnos y los puestos de trabajo."
	},
	{
		title: "Evaluamos",
		text: "Cruzamos tu evaluación de riesgos con las normas UNE-EN que cubren cada exposición."
	},
	{
		title: "Equipamos",
		text: "Propuesta cerrada con tallaje, prueba en planta y personalización de marca."
	},
	{
		title: "Reponemos",
		text: "Calendario de reposición y registro documental de entregas y revisiones."
	}
];
// src/data/media.ts
var base = "/manus-storage/async-images/rHT5bDUYhb84UxCSlzM17a";
var media = {
	team: `${base}/image-1.webp`,
	flatlay: `${base}/image-2.webp`,
	agro: `${base}/image-3.webp`,
	boot: `${base}/image-4.webp`
};
// src/pages/About.tsx
function About() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Sobre nosotros",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Protección con ",
				/* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "nombre y apellidos"
				}),
				"."
			] }),
			lead: "Somos el proveedor de vestuario y EPI de empresas que trabajan con las manos. Desde Torre Pacheco, para toda la Región de Murcia.",
			meta: /* @__PURE__ */ jsxs("ul", {
				className: "hero-chips",
				children: [
					/* @__PURE__ */ jsx("li", { children: "Torre Pacheco · Murcia" }),
					/* @__PURE__ */ jsx("li", { children: "EPI categoría II y III" }),
					/* @__PURE__ */ jsx("li", { children: "Servicios de prevención" })
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section--paper",
			children: /* @__PURE__ */ jsxs("div", {
				className: "story",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "story__body",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ jsx(Eyebrow, { children: "01 · Origen" }),
						/* @__PURE__ */ jsxs("h2", {
							className: "story__title",
							children: ["Empezamos por una pregunta ", /* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: "incómoda"
							})]
						}),
						/* @__PURE__ */ jsx("p", { children: "¿Qué lleva puesto la persona que entra en esa cámara a las seis de la mañana? Esa pregunta es el origen de VESTIALPRO. Nacimos en Torre Pacheco junto a empresas agrícolas, talleres y obras donde el equipo de protección se compraba por inercia: el mismo modelo de siempre y la misma talla para toda la plantilla." }),
						/* @__PURE__ */ jsx("p", { children: "Nuestro trabajo es el contrario. Miramos el puesto, la exposición y las horas de uso, y de ahí sale una ficha concreta: qué norma cubre el riesgo, qué categoría exige la ley, qué talla corresponde a cada persona y cuándo toca sustituirlo." }),
						/* @__PURE__ */ jsx("p", { children: "Vendemos ropa de trabajo y EPI, sí. Pero lo que de verdad entregamos es criterio técnico, existencias reales y una persona al otro lado del teléfono que conoce tu plantilla." }),
						/* @__PURE__ */ jsxs("ul", {
							className: "fact-list",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "fact-list__label",
									children: "Base"
								}), /* @__PURE__ */ jsx("span", {
									className: "fact-list__value",
									children: "Torre Pacheco, Murcia"
								})] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "fact-list__label",
									children: "Especialidad"
								}), /* @__PURE__ */ jsx("span", {
									className: "fact-list__value",
									children: "Vestuario técnico y EPI"
								})] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "fact-list__label",
									children: "Cobertura"
								}), /* @__PURE__ */ jsx("span", {
									className: "fact-list__value",
									children: site.serviceArea
								})] })
							]
						})
					]
				}), /* @__PURE__ */ jsxs("figure", {
					className: "story__media",
					"data-reveal": true,
					children: [/* @__PURE__ */ jsx("img", {
						src: media.team,
						alt: "Dos profesionales con ropa de trabajo técnica y casco de seguridad en un almacén logístico",
						loading: "lazy"
					}), /* @__PURE__ */ jsxs("figcaption", { children: [/* @__PURE__ */ jsx("span", {
						className: "media-tag",
						children: "Vestuario y EPI"
					}), "Selección por puesto, no por catálogo."] })]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--dark",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				index: "02",
				tone: "dark",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Lo que nos ", /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "mueve"
				})] }),
				lead: "Cuatro reglas que aplicamos incluso cuando nos cuestan una venta."
			}), /* @__PURE__ */ jsx("div", {
				className: "value-grid",
				children: valores.map((value, index) => /* @__PURE__ */ jsxs("article", {
					className: "value-card",
					"data-reveal": true,
					style: { transitionDelay: `${index * 70}ms` },
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "value-card__index",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ jsx("h3", { children: value.title }),
						/* @__PURE__ */ jsx("p", { children: value.text })
					]
				}, value.title))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				index: "03",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Cómo ", /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "trabajamos"
				})] }),
				lead: "Un proceso corto, con nombre y fechas. Sin intermediarios que no conocen tu planta."
			}), /* @__PURE__ */ jsxs("div", {
				className: "process-layout",
				children: [/* @__PURE__ */ jsx("ol", {
					className: "process-list",
					children: pasos.map((step, index) => /* @__PURE__ */ jsxs("li", {
						"data-reveal": true,
						style: { transitionDelay: `${index * 70}ms` },
						children: [/* @__PURE__ */ jsx("span", {
							className: "process-list__num",
							children: String(index + 1).padStart(2, "0")
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: step.title }), /* @__PURE__ */ jsx("p", { children: step.text })] })]
					}, step.title))
				}), /* @__PURE__ */ jsxs("figure", {
					className: "process-media",
					"data-reveal": true,
					children: [/* @__PURE__ */ jsx("img", {
						src: media.boot,
						alt: "Bota de seguridad S3 sobre suelo de taller",
						loading: "lazy"
					}), /* @__PURE__ */ jsx("figcaption", { children: "El EPI que más horas aguanta puesto: el calzado." })]
				})]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--dark place",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "place__card",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ jsx(Eyebrow, { children: "04 · Dónde estamos" }),
					/* @__PURE__ */ jsxs("h2", { children: ["En el corazón del ", /* @__PURE__ */ jsx("span", {
						className: "text-accent",
						children: "Campo de Cartagena"
					})] }),
					/* @__PURE__ */ jsx("p", { children: "Nuestra nave está en Torre Pacheco, a quince minutos de Cartagena y a media hora de Murcia. Desde ahí servimos a empresas agrícolas, constructoras, talleres e industria de toda la comarca." }),
					/* @__PURE__ */ jsxs("dl", {
						className: "place__data",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "Dirección" }), /* @__PURE__ */ jsxs("dd", { children: [
								site.address.street,
								/* @__PURE__ */ jsx("br", {}),
								`${site.address.city} · ${site.address.province}`
							] })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "Coordenadas" }), /* @__PURE__ */ jsx("dd", { children: site.coordinates })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "Horario" }), /* @__PURE__ */ jsx("dd", { children: site.hours[0].time })] })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "place__actions",
						children: [/* @__PURE__ */ jsxs("a", {
							className: "btn btn--primary",
							href: "/contacto",
							children: ["Visítanos", /* @__PURE__ */ jsx(ArrowIcon, {})]
						}), /* @__PURE__ */ jsx("a", {
							className: "link-arrow",
							href: site.mapsUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Abrir en Google Maps"
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "place__aside",
				children: [/* @__PURE__ */ jsx(Melon, { className: "place__melon" }), /* @__PURE__ */ jsx("p", { children: "«Hecho en Torre Pacheco» no es un eslogan: es el sitio donde cargamos la furgoneta cada mañana." })]
			})]
		})
	] });
}
// src/pages/Catalogos.tsx
var upcoming = [
	{
		title: "Vestuario técnico",
		text: "Polos, pantalones, softshell y alta visibilidad. Tejidos, tallas y opciones de personalización.",
		tag: "Edición 2026"
	},
	{
		title: "Calzado de seguridad",
		text: "S1P, S3 y S7. Puntera composite, antiperforación y suelas resistentes a hidrocarburos.",
		tag: "Edición 2026"
	},
	{
		title: "Protección individual",
		text: "Cascos, guantes, protección ocular, auditiva y respiratoria con su norma UNE-EN.",
		tag: "Edición 2026"
	}
];
function Catalogos() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Catálogos",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Nuestros catálogos, ",
				/* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "en PDF"
				}),
				"."
			] }),
			lead: "Estamos maquetando las nuevas ediciones de vestuario técnico, calzado de seguridad y protección individual. En cuanto estén listas se podrán descargar desde esta página.",
			meta: /* @__PURE__ */ jsxs("ul", {
				className: "hero-chips",
				children: [
					/* @__PURE__ */ jsx("li", { children: "Formato PDF" }),
					/* @__PURE__ */ jsx("li", { children: "Edición 2026" }),
					/* @__PURE__ */ jsx("li", { children: "Descarga directa" })
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			children: [
				/* @__PURE__ */ jsx(SectionHead, {
					index: "01",
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["Todavía no hay ", /* @__PURE__ */ jsx("span", {
						className: "text-accent",
						children: "catálogos publicados"
					})] }),
					lead: "Esta página está preparada para alojar los PDF de VESTIALPRO. Mientras llegan, podemos enviarte la ficha técnica exacta que necesites."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "catalog-empty",
					"data-reveal": true,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "catalog-empty__icon",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ jsxs("svg", {
							viewBox: "0 0 48 56",
							children: [
								/* @__PURE__ */ jsx("path", {
									d: "M8 2h22l10 10v42H8z",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M30 2v10h10",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M16 26h16M16 34h16M16 42h9",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round"
								})
							]
						}), /* @__PURE__ */ jsx("span", {
							className: "catalog-empty__ext",
							children: "PDF"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "catalog-empty__body",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "catalog-empty__status",
								children: [/* @__PURE__ */ jsx("span", {
									className: "dot",
									"aria-hidden": "true"
								}), "En preparación"]
							}),
							/* @__PURE__ */ jsx("h3", { children: "Estamos preparando la estantería" }),
							/* @__PURE__ */ jsx("p", { children: "Vamos a publicar tres catálogos: vestuario técnico, calzado de seguridad y equipos de protección individual. Cada uno incluirá la norma UNE-EN de cada referencia y las tallas disponibles." }),
							/* @__PURE__ */ jsxs("div", {
								className: "catalog-empty__actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "btn btn--primary",
									href: "/contacto",
									children: ["Avísame cuando estén", /* @__PURE__ */ jsx(ArrowIcon, {})]
								}), /* @__PURE__ */ jsx("a", {
									className: "link-arrow",
									href: `mailto:${site.email}?subject=${encodeURIComponent("Solicitud de ficha técnica")}`,
									children: "Pedir una ficha técnica"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "catalog-slots",
					children: upcoming.map((item, index) => /* @__PURE__ */ jsxs("article", {
						className: "catalog-slot",
						"data-reveal": true,
						style: { transitionDelay: `${index * 70}ms` },
						children: [/* @__PURE__ */ jsxs("div", {
							className: "catalog-slot__thumb",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ jsx("span", { className: "catalog-slot__lines" }), /* @__PURE__ */ jsx("span", {
								className: "catalog-slot__badge",
								children: "Próximamente"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "catalog-slot__body",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "catalog-slot__tag",
									children: item.tag
								}),
								/* @__PURE__ */ jsx("h3", { children: item.title }),
								/* @__PURE__ */ jsx("p", { children: item.text })
							]
						})]
					}, item.title))
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section--dark",
			children: /* @__PURE__ */ jsxs("div", {
				className: "catalog-alternatives",
				children: [/* @__PURE__ */ jsxs("div", {
					"data-reveal": true,
					children: [
						/* @__PURE__ */ jsx(Eyebrow, { children: "Mientras tanto" }),
						/* @__PURE__ */ jsxs("h2", { children: ["Lo que sí podemos ", /* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "enviarte hoy"
						})] }),
						/* @__PURE__ */ jsx("p", { children: "No hace falta esperar al catálogo. Si nos dices el puesto y el riesgo, preparamos la propuesta con la ficha del fabricante y el precio unitario." })
					]
				}), /* @__PURE__ */ jsxs("ul", {
					className: "catalog-options",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "01" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Ficha técnica del fabricante" }), /* @__PURE__ */ jsx("p", { children: "Norma aplicada, niveles de prestación y declaración UE de conformidad." })] })] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "02" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Muestras y tallaje" }), /* @__PURE__ */ jsx("p", { children: "Te llevamos tallas de prueba a la nave para validar ajuste y tejido." })] })] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "03" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Propuesta económica" }), /* @__PURE__ */ jsx("p", { children: "Precio unitario, mínimos, plazos de entrega y personalización de marca." })] })] })
					]
				})]
			})
		})
	] });
}
// src/components/ContactForm.tsx
var subjects = [
	"Ropa de trabajo y vestuario técnico",
	"EPI de categoría II",
	"EPI de categoría III",
	"Asesoramiento normativo",
	"Catálogos y fichas técnicas",
	"Otro"
];
function ContactForm() {
	const [status, setStatus] = useState("idle");
	const handleSubmit = (event) => {
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
			"Enviado desde vestialpro.es"
		].join("\n");
		window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setStatus("opened");
	};
	return /* @__PURE__ */ jsxs("form", {
		className: "contact-form",
		onSubmit: handleSubmit,
		noValidate: false,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "field-grid",
				children: [
					/* @__PURE__ */ jsxs("label", {
						className: "field",
						children: [/* @__PURE__ */ jsx("span", {
							className: "field__label",
							children: "Nombre y apellidos *"
						}), /* @__PURE__ */ jsx("input", {
							name: "nombre",
							type: "text",
							autoComplete: "name",
							required: true,
							placeholder: "María López"
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "field",
						children: [/* @__PURE__ */ jsx("span", {
							className: "field__label",
							children: "Empresa"
						}), /* @__PURE__ */ jsx("input", {
							name: "empresa",
							type: "text",
							autoComplete: "organization",
							placeholder: "Nombre de la empresa"
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "field",
						children: [/* @__PURE__ */ jsx("span", {
							className: "field__label",
							children: "Correo electrónico *"
						}), /* @__PURE__ */ jsx("input", {
							name: "email",
							type: "email",
							autoComplete: "email",
							required: true,
							placeholder: "nombre@empresa.es"
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "field",
						children: [/* @__PURE__ */ jsx("span", {
							className: "field__label",
							children: "Teléfono"
						}), /* @__PURE__ */ jsx("input", {
							name: "telefono",
							type: "tel",
							autoComplete: "tel",
							placeholder: "600 000 000"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "field",
				children: [/* @__PURE__ */ jsx("span", {
					className: "field__label",
					children: "¿Qué necesitas?"
				}), /* @__PURE__ */ jsx("span", {
					className: "select-wrap",
					children: /* @__PURE__ */ jsx("select", {
						name: "motivo",
						defaultValue: subjects[0],
						children: subjects.map((subject) => /* @__PURE__ */ jsx("option", {
							value: subject,
							children: subject
						}, subject))
					})
				})]
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "field",
				children: [/* @__PURE__ */ jsx("span", {
					className: "field__label",
					children: "Mensaje *"
				}), /* @__PURE__ */ jsx("textarea", {
					name: "mensaje",
					rows: 5,
					required: true,
					placeholder: "Cuéntanos el puesto de trabajo, el número de personas y el riesgo a cubrir."
				})]
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "checkbox",
				children: [/* @__PURE__ */ jsx("input", {
					type: "checkbox",
					name: "consentimiento",
					required: true
				}), /* @__PURE__ */ jsxs("span", { children: [
					"He leído y acepto la ",
					/* @__PURE__ */ jsx("a", {
						href: "/privacidad",
						children: "política de privacidad"
					}),
					" y el tratamiento de mis datos para responder a esta consulta."
				] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-form__actions",
				children: [/* @__PURE__ */ jsx("button", {
					type: "submit",
					className: "btn btn--primary",
					children: "Enviar consulta"
				}), /* @__PURE__ */ jsx("p", {
					className: "contact-form__note",
					children: "Se abrirá tu programa de correo con el mensaje ya redactado. Respondemos en menos de 24 horas laborables."
				})]
			}),
			status === "opened" ? /* @__PURE__ */ jsxs("p", {
				className: "contact-form__status",
				role: "status",
				children: [
					"Hemos preparado el correo en tu cliente de mensajería. Si no se abre, escríbenos directamente a",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: `mailto:${site.email}`,
						children: site.email
					})
				]
			}) : null
		]
	});
}
// src/pages/Contacto.tsx
function Contacto() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Contacto",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Hablemos de tu ",
				/* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "plantilla"
				}),
				"."
			] }),
			lead: "Cuéntanos cuántas personas hay, qué puestos cubren y qué equipo estáis usando ahora. Te respondemos con una propuesta concreta, no con un catálogo genérico.",
			meta: /* @__PURE__ */ jsxs("ul", {
				className: "hero-chips",
				children: [
					/* @__PURE__ */ jsx("li", { children: "Respuesta en 24 h laborables" }),
					/* @__PURE__ */ jsx("li", { children: site.address.city }),
					/* @__PURE__ */ jsx("li", { children: "Visitas con cita previa" })
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section--paper",
			children: /* @__PURE__ */ jsxs("div", {
				className: "contact-layout",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "contact-main",
					children: [
						/* @__PURE__ */ jsx(Eyebrow, { children: "01 · Escríbenos" }),
						/* @__PURE__ */ jsx("h2", {
							className: "contact-main__title",
							children: "Cuéntanos qué necesitas"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "contact-main__lead",
							children: [
								"Los campos marcados con asterisco son obligatorios. Usaremos tus datos solo para responder a esta consulta, tal como explicamos en la ",
								/* @__PURE__ */ jsx("a", {
									href: "/privacidad",
									children: "política de privacidad"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx(ContactForm, {})
					]
				}), /* @__PURE__ */ jsxs("aside", {
					className: "contact-aside",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "contact-block",
							children: [
								/* @__PURE__ */ jsx("h2", { children: "Datos de contacto" }),
								/* @__PURE__ */ jsxs("dl", { children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "Correo" }), /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsx("a", {
										href: `mailto:${site.email}`,
										children: site.email
									}) })] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "Teléfono" }), /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsx("a", {
										href: `tel:${site.phoneHref}`,
										children: site.phone
									}) })] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "Dirección" }), /* @__PURE__ */ jsxs("dd", { children: [
										site.address.street,
										/* @__PURE__ */ jsx("br", {}),
										`${site.address.city} · ${site.address.province}`
									] })] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "Coordenadas" }), /* @__PURE__ */ jsx("dd", { children: site.coordinates })] })
								] }),
								/* @__PURE__ */ jsxs("a", {
									className: "link-arrow",
									href: site.mapsUrl,
									target: "_blank",
									rel: "noreferrer noopener",
									children: ["Cómo llegar", /* @__PURE__ */ jsx(ArrowIcon, {})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "contact-block contact-block--hours",
							children: [/* @__PURE__ */ jsx("h2", { children: "Horario" }), /* @__PURE__ */ jsx("ul", { children: site.hours.map((entry) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: entry.days }), /* @__PURE__ */ jsx("span", { children: entry.time })] }, entry.days)) })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "contact-block contact-block--note",
							children: [/* @__PURE__ */ jsx("h2", { children: "Zona de servicio" }), /* @__PURE__ */ jsx("p", { children: `Entregamos en ${site.serviceArea}. Para envíos fuera de la Región, consulta plazos y portes antes de cerrar el pedido.` })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section--dark contact-tail",
			children: /* @__PURE__ */ jsxs("div", {
				className: "contact-tail__inner",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Eyebrow, { children: "02 · Visítanos" }),
					/* @__PURE__ */ jsxs("h2", { children: ["Ven a la nave y ", /* @__PURE__ */ jsx("span", {
						className: "text-accent",
						children: "prueba las tallas"
					})] }),
					/* @__PURE__ */ jsx("p", { children: "Atendemos con cita previa para que no esperes. Trae tu evaluación de riesgos si la tienes: salimos de la visita con una selección cerrada." })
				] }), /* @__PURE__ */ jsxs("div", {
					className: "contact-tail__actions",
					children: [/* @__PURE__ */ jsxs("a", {
						className: "btn btn--primary",
						href: `tel:${site.phoneHref}`,
						children: ["Llamar ahora", /* @__PURE__ */ jsx(ArrowIcon, {})]
					}), /* @__PURE__ */ jsx("a", {
						className: "btn btn--ghost",
						href: `mailto:${site.email}?subject=${encodeURIComponent("Cita en la nave")}`,
						children: "Pedir cita"
					})]
				})]
			})
		})
	] });
}
// src/components/HelmetStage.tsx
/** Flat illustration shown before WebGL starts, and kept when it is unavailable. */
function HelmetIllustration() {
	return /* @__PURE__ */ jsxs("svg", {
		className: "helmet-svg",
		viewBox: "0 0 420 340",
		role: "img",
		"aria-label": "Casco de seguridad de VESTIALPRO",
		children: [
			/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
				id: "helmetDome",
				x1: "0.2",
				y1: "0",
				x2: "0.8",
				y2: "1",
				children: [
					/* @__PURE__ */ jsx("stop", {
						offset: "0",
						stopColor: "#FF9A52"
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "0.55",
						stopColor: "#FF6A00"
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "1",
						stopColor: "#E25500"
					})
				]
			}), /* @__PURE__ */ jsxs("linearGradient", {
				id: "helmetBrim",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ jsx("stop", {
					offset: "0",
					stopColor: "#16375A"
				}), /* @__PURE__ */ jsx("stop", {
					offset: "1",
					stopColor: "#08182B"
				})]
			})] }),
			/* @__PURE__ */ jsx("ellipse", {
				cx: "210",
				cy: "238",
				rx: "176",
				ry: "46",
				fill: "url(#helmetBrim)"
			}),
			/* @__PURE__ */ jsx("ellipse", {
				cx: "210",
				cy: "252",
				rx: "150",
				ry: "22",
				fill: "#04101C",
				opacity: "0.55"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M62 232C64 142 124 82 210 82C296 82 356 142 358 232Z",
				fill: "url(#helmetDome)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M210 84C214 140 214 188 211 232",
				stroke: "#B84300",
				strokeWidth: "16",
				fill: "none",
				opacity: "0.18"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M198 86C201 140 201 188 199 230",
				stroke: "#FFDCC2",
				strokeWidth: "7",
				fill: "none",
				opacity: "0.55"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M62 232C96 250 150 258 210 258C270 258 324 250 358 232",
				stroke: "#0A1D33",
				strokeWidth: "6",
				fill: "none",
				opacity: "0.5"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "210",
				cy: "168",
				r: "31",
				fill: "#0B2138"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "210",
				cy: "168",
				r: "31",
				fill: "none",
				stroke: "#F4F1EA",
				strokeWidth: "2",
				opacity: "0.35"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M196 154L210 184L224 154",
				stroke: "#F4F1EA",
				strokeWidth: "9",
				fill: "none",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		]
	});
}
function HelmetStage() {
	const hostRef = useRef(null);
	const [stage, setStage] = useState("loading");
	useEffect(() => {
		const host = hostRef.current;
		if (!host) return;
		let cancelled = false;
		let handle = null;
		import("./assets/helmetScene-DpSRlGy8.js").then((module) => {
			if (cancelled) return;
			const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			handle = module.mountHelmet(host, { reducedMotion });
			setStage(handle ? "ready" : "failed");
		}).catch(() => {
			if (!cancelled) setStage("failed");
		});
		return () => {
			cancelled = true;
			handle?.dispose();
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: `helmet-stage ${stage === "ready" ? "is-ready" : ""} ${stage === "failed" ? "is-failed" : ""}`,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "helmet-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx(HelmetIllustration, {}),
			/* @__PURE__ */ jsx("div", {
				className: "helmet-canvas",
				ref: hostRef
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "helmet-meta",
				children: [/* @__PURE__ */ jsx("span", {
					className: "helmet-meta__tag",
					children: "Casco de seguridad"
				}), /* @__PURE__ */ jsx("span", {
					className: "helmet-meta__norm",
					children: "EN 397"
				})]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "helmet-hint",
				children: [/* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsx("path", {
						d: "M8 4v16M16 4v16M4 8h4M4 16h4M16 8h4M16 16h4",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.4",
						strokeLinecap: "round"
					})
				}), "Arrastra para girar"]
			})
		]
	});
}
// src/components/ServiceGlyph.tsx
function ServiceGlyph({ name }) {
	const common = {
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.5,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	};
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 32 32",
		"aria-hidden": "true",
		className: "glyph",
		children: [
			name === "vestuario" && /* @__PURE__ */ jsxs("g", {
				...common,
				children: [/* @__PURE__ */ jsx("path", { d: "M12 5.5 6 8.2l-2 6.4 4.6 1.6V27h14.8V16.2L28 14.6l-2-6.4-6-2.7" }), /* @__PURE__ */ jsx("path", { d: "M12 5.5c0 2.2 1.8 3.6 4 3.6s4-1.4 4-3.6" })]
			}),
			name === "epi" && /* @__PURE__ */ jsxs("g", {
				...common,
				children: [
					/* @__PURE__ */ jsx("path", { d: "M5 20.5c.4-7.4 4.6-12 11-12s10.6 4.6 11 12" }),
					/* @__PURE__ */ jsx("path", { d: "M3.4 20.5h25.2c-.6 2.4-2.2 3.6-5 3.6H8.4c-2.8 0-4.4-1.2-5-3.6Z" }),
					/* @__PURE__ */ jsx("path", { d: "M16 8.5v9.2" })
				]
			}),
			name === "normativa" && /* @__PURE__ */ jsxs("g", {
				...common,
				children: [
					/* @__PURE__ */ jsx("path", { d: "M8 4h11l5 5v19H8z" }),
					/* @__PURE__ */ jsx("path", { d: "M19 4v5h5" }),
					/* @__PURE__ */ jsx("path", { d: "M12 18.5l3 3 5.5-6" })
				]
			}),
			name === "suministro" && /* @__PURE__ */ jsxs("g", {
				...common,
				children: [/* @__PURE__ */ jsx("path", { d: "M15.8 4 27 9v14l-11.2 5L4.6 23V9z" }), /* @__PURE__ */ jsx("path", { d: "M4.6 9l11.2 5 11.2-5M15.8 14v14" })]
			})
		]
	});
}
// src/pages/Home.tsx
var stats = [
	{
		value: "I – III",
		label: "Categorías de EPI certificadas"
	},
	{
		value: "UNE-EN",
		label: "Norma y ficha en cada entrega"
	},
	{
		value: "48–72 h",
		label: "Entrega en la Región de Murcia"
	},
	{
		value: "1:1",
		label: "Tallaje y personalización"
	}
];
var marquee = [
	"Alta visibilidad",
	"Ignífugo",
	"Anticorte",
	"Químico",
	"Anticaídas",
	"Calzado S3",
	"Protector auditivo",
	"Respiratoria",
	"Soldadura",
	"Frío y lluvia"
];
var sectores = [
	{
		index: "01",
		name: "Agroalimentario",
		text: "Cámaras frigoríficas, muelles de carga y manipulación de producto fresco.",
		tag: "Frío · Humedad · Corte"
	},
	{
		index: "02",
		name: "Construcción y obra",
		text: "Cubiertas, estructura y trabajos en altura con sistemas anticaídas certificados.",
		tag: "Altura · Impacto"
	},
	{
		index: "03",
		name: "Industria y mantenimiento",
		text: "Soldadura, ambientes con calor, ruido continuo y riesgo eléctrico.",
		tag: "Calor · Ruido · Arco"
	},
	{
		index: "04",
		name: "Talleres y logística",
		text: "Manipulación de cargas, carretillas y exposición a golpes y atrapamientos.",
		tag: "Mecánico · Visibilidad"
	}
];
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "hero",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "hero__grid",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hero__glow",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hero__inner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hero__copy",
						children: [
							/* @__PURE__ */ jsx(Eyebrow, { children: "Torre Pacheco · Murcia · EPI certificado" }),
							/* @__PURE__ */ jsxs("h1", {
								className: "hero__title",
								children: [
									"Protección que",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "hero__title-accent",
										children: "se lleva puesta."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "hero__lead",
								children: "Vestuario técnico y equipos de protección individual seleccionados por riesgo real, no por catálogo. Certificado, tallado y repuesto antes de que haga falta."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "hero__actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "btn btn--primary",
									href: "/contacto",
									children: ["Solicitar información", /* @__PURE__ */ jsx(ArrowIcon, {})]
								}), /* @__PURE__ */ jsx("a", {
									className: "btn btn--ghost",
									href: "/normativa",
									children: "Ver normativa"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "hero__micro",
								children: "Asesoramiento sin coste · Stock reservado por talla · Reposición programada"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hero__visual",
						children: /* @__PURE__ */ jsx(HelmetStage, {})
					})]
				}),
				/* @__PURE__ */ jsx("dl", {
					className: "hero__stats",
					children: stats.map((stat) => /* @__PURE__ */ jsxs("div", {
						className: "stat",
						children: [/* @__PURE__ */ jsx("dt", {
							className: "stat__value",
							children: stat.value
						}), /* @__PURE__ */ jsx("dd", {
							className: "stat__label",
							children: stat.label
						})]
					}, stat.label))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "marquee",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsx("div", {
						className: "marquee__track",
						children: [0, 1].map((copy) => /* @__PURE__ */ jsx("div", {
							className: "marquee__group",
							children: marquee.map((item) => /* @__PURE__ */ jsxs("span", {
								className: "marquee__item",
								children: [item, /* @__PURE__ */ jsx("i", { "aria-hidden": "true" })]
							}, `${copy}-${item}`))
						}, copy))
					})
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			id: "servicios",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				index: "01",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Cuatro formas de ", /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "reducir el riesgo"
				})] }),
				lead: "No vendemos ropa: resolvemos la última barrera entre una persona y el accidente. Esto es lo que hacemos en cada pedido."
			}), /* @__PURE__ */ jsx("div", {
				className: "service-grid",
				children: sitioServicios.map((service, index) => /* @__PURE__ */ jsxs("article", {
					className: "service-card",
					"data-reveal": true,
					style: { transitionDelay: `${index * 70}ms` },
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "service-card__top",
							children: [/* @__PURE__ */ jsx("span", {
								className: "service-card__index",
								children: String(index + 1).padStart(2, "0")
							}), /* @__PURE__ */ jsx("span", {
								className: "service-card__icon",
								"aria-hidden": "true",
								children: /* @__PURE__ */ jsx(ServiceGlyph, { name: service.icon })
							})]
						}),
						/* @__PURE__ */ jsx("h3", { children: service.title }),
						/* @__PURE__ */ jsx("p", { children: service.text }),
						/* @__PURE__ */ jsx("ul", {
							className: "tag-list",
							children: service.tags.map((tag) => /* @__PURE__ */ jsx("li", { children: tag }, tag))
						})
					]
				}, service.title))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--dark split-section",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "split-section__media",
				"data-reveal": true,
				children: [/* @__PURE__ */ jsx("img", {
					src: media.flatlay,
					alt: "Equipo de protección individual dispuesto sobre una superficie oscura",
					loading: "lazy"
				}), /* @__PURE__ */ jsx("span", {
					className: "media-tag",
					children: "Selección por puesto"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "split-section__body",
				children: [
					/* @__PURE__ */ jsx(Eyebrow, { children: "02 · Método" }),
					/* @__PURE__ */ jsxs("h2", {
						className: "split-section__title",
						children: ["Cada puesto tiene ", /* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "su barrera"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "split-section__lead",
						children: "Antes de proponerte un modelo miramos la evaluación de riesgos. De ahí salen la norma, la categoría y la vida útil de cada equipo."
					}),
					/* @__PURE__ */ jsxs("ol", {
						className: "method-list",
						children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "method-list__num",
								children: "01"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Leemos el riesgo" }), /* @__PURE__ */ jsx("p", { children: "Qué golpea, qué quema, qué corta y durante cuántas horas al día." })] })] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "method-list__num",
								children: "02"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Elegimos la norma" }), /* @__PURE__ */ jsx("p", { children: "EN 397, EN 388, EN ISO 20471… la norma que cubre ese riesgo concreto." })] })] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "method-list__num",
								children: "03"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Ajustamos a la persona" }), /* @__PURE__ */ jsx("p", { children: "Tallaje real, prueba en planta y alternativas por complexión." })] })] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
								className: "method-list__num",
								children: "04"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Programamos la reposición" }), /* @__PURE__ */ jsx("p", { children: "Stock reservado y avisos de sustitución antes de que el equipo falle." })] })] })
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						className: "link-arrow",
						href: "/normativa",
						children: ["Ver el marco normativo completo", /* @__PURE__ */ jsx(ArrowIcon, {})]
					})
				]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			id: "sectores",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				index: "03",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Sectores donde ", /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "no se falla"
				})] }),
				lead: "Trabajamos con servicios de prevención y empresas de Murcia que necesitan criterio técnico y suministro fiable."
			}), /* @__PURE__ */ jsxs("div", {
				className: "sector-layout",
				children: [/* @__PURE__ */ jsx("ul", {
					className: "sector-list",
					children: sectores.map((sector, index) => /* @__PURE__ */ jsxs("li", {
						"data-reveal": true,
						style: { transitionDelay: `${index * 60}ms` },
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "sector-list__index",
								children: sector.index
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sector-list__body",
								children: [/* @__PURE__ */ jsx("h3", { children: sector.name }), /* @__PURE__ */ jsx("p", { children: sector.text })]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "sector-list__tag",
								children: sector.tag
							})
						]
					}, sector.name))
				}), /* @__PURE__ */ jsxs("figure", {
					className: "sector-figure",
					"data-reveal": true,
					children: [/* @__PURE__ */ jsx("img", {
						src: media.agro,
						alt: "Trabajadora con polo de alta visibilidad y casco en una planta de manipulación de melones",
						loading: "lazy"
					}), /* @__PURE__ */ jsx("figcaption", { children: "Torre Pacheco · Campo de Cartagena" })]
				})]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--dark normativa-band",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "hazard-strip",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ jsx(SectionHead, {
					index: "04",
					tone: "dark",
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"La norma no es papeleo.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "Es lo que evita el accidente."
						})
					] }),
					lead: "Estas son las tres referencias que más consultamos cuando un cliente nos pregunta qué equipo necesita."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "law-grid",
					children: [
						/* @__PURE__ */ jsxs("article", {
							className: "law-card",
							"data-reveal": true,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "law-card__code",
									children: "Reglamento (UE) 2016/425"
								}),
								/* @__PURE__ */ jsx("h3", { children: "Diseño y certificación" }),
								/* @__PURE__ */ jsx("p", { children: "Define las categorías I, II y III, el examen UE de tipo y la declaración de conformidad que debe acompañar a cada EPI." })
							]
						}),
						/* @__PURE__ */ jsxs("article", {
							className: "law-card",
							"data-reveal": true,
							style: { transitionDelay: "80ms" },
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "law-card__code",
									children: "RD 773/1997"
								}),
								/* @__PURE__ */ jsx("h3", { children: "Uso en el puesto" }),
								/* @__PURE__ */ jsx("p", { children: "Cómo se eligen, entregan, usan y revisan los equipos, y qué información debe recibir el trabajador." })
							]
						}),
						/* @__PURE__ */ jsxs("article", {
							className: "law-card",
							"data-reveal": true,
							style: { transitionDelay: "160ms" },
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "law-card__code",
									children: "Ley 31/1995"
								}),
								/* @__PURE__ */ jsx("h3", { children: "Obligación de proteger" }),
								/* @__PURE__ */ jsx("p", { children: "El EPI se entrega gratis, en la talla correcta y con formación. La protección es una obligación de la empresa." })
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "btn btn--ghost law-grid__cta",
					href: "/normativa",
					children: ["Leer la guía completa", /* @__PURE__ */ jsx(ArrowIcon, {})]
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			id: "catalogos",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				index: "05",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Catálogos ", /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "en preparación"
				})] }),
				lead: "Estamos maquetando las nuevas ediciones de vestuario, calzado y protección respiratoria. Mientras tanto, pedimos las fichas técnicas una a una."
			}), /* @__PURE__ */ jsxs("div", {
				className: "catalog-teaser",
				"data-reveal": true,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "catalog-teaser__stub",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "catalog-teaser__ext",
							children: "PDF"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "catalog-teaser__lines",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "catalog-teaser__status",
							children: "Próximamente"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "catalog-teaser__body",
					children: [
						/* @__PURE__ */ jsx("h3", { children: "¿Necesitas el catálogo ahora?" }),
						/* @__PURE__ */ jsx("p", { children: "Si tu servicio de prevención necesita una ficha concreta —un guante anticorte, un casco con barboquejo, un S3 con puntera composite— la enviamos el mismo día por correo." }),
						/* @__PURE__ */ jsxs("div", {
							className: "catalog-teaser__actions",
							children: [/* @__PURE__ */ jsxs("a", {
								className: "btn btn--primary",
								href: "/contacto",
								children: ["Pedir una ficha técnica", /* @__PURE__ */ jsx(ArrowIcon, {})]
							}), /* @__PURE__ */ jsx("a", {
								className: "link-arrow",
								href: "/catalogos",
								children: "Ver la página de catálogos"
							})]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section--dark cta-final",
			children: /* @__PURE__ */ jsxs("div", {
				className: "cta-final__inner",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Eyebrow, { children: "06 · Siguiente paso" }),
					/* @__PURE__ */ jsxs("h2", { children: [
						"¿Empezamos por tu ",
						/* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "evaluación de riesgos"
						}),
						"?"
					] }),
					/* @__PURE__ */ jsx("p", { children: "Cuéntanos cuántas personas hay en plantilla y qué puestos cubren. Te devolvemos una propuesta de EPI con norma, talla y precio unitario." })
				] }), /* @__PURE__ */ jsxs("div", {
					className: "cta-final__actions",
					children: [/* @__PURE__ */ jsxs("a", {
						className: "btn btn--primary",
						href: "/contacto",
						children: ["Hablar con VESTIALPRO", /* @__PURE__ */ jsx(ArrowIcon, {})]
					}), /* @__PURE__ */ jsx("a", {
						className: "btn btn--ghost",
						href: "/sobre-nosotros",
						children: "Conocer el equipo"
					})]
				})]
			})
		})
	] });
}
// src/components/LegalLayout.tsx
function LegalLayout({ doc }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: doc.eyebrow,
		title: doc.title,
		lead: doc.lead,
		size: "sm",
		meta: /* @__PURE__ */ jsxs("ul", {
			className: "hero-chips",
			children: [/* @__PURE__ */ jsx("li", { children: "RGPD · LOPDGDD" }), /* @__PURE__ */ jsx("li", { children: `Actualizado el ${doc.updated}` })]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "section section--paper legal",
		children: /* @__PURE__ */ jsxs("div", {
			className: "legal-layout",
			children: [/* @__PURE__ */ jsxs("nav", {
				className: "legal-index",
				"aria-label": "Índice del documento",
				children: [/* @__PURE__ */ jsx("p", {
					className: "legal-index__title",
					children: "Índice"
				}), /* @__PURE__ */ jsx("ol", { children: doc.sections.map((section) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
					href: `#${section.id}`,
					children: section.title
				}) }, section.id)) })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "legal-body",
				children: [doc.sections.map((section) => /* @__PURE__ */ jsxs("article", {
					className: "legal-section",
					id: section.id,
					children: [/* @__PURE__ */ jsx("h2", { children: section.title }), section.blocks.map((block, index) => {
						if (block.type === "p") return /* @__PURE__ */ jsx("p", { children: block.text }, index);
						if (block.type === "ul") return /* @__PURE__ */ jsx("ul", {
							className: "legal-list",
							children: block.items.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item))
						}, index);
						if (block.type === "table") return /* @__PURE__ */ jsx("div", {
							className: "table-scroll",
							children: /* @__PURE__ */ jsxs("table", {
								className: "legal-table",
								children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: block.head.map((cell) => /* @__PURE__ */ jsx("th", {
									scope: "col",
									children: cell
								}, cell)) }) }), /* @__PURE__ */ jsx("tbody", { children: block.rows.map((row, rowIndex) => /* @__PURE__ */ jsx("tr", { children: row.map((cell, cellIndex) => /* @__PURE__ */ jsx("td", { children: cell }, cellIndex)) }, rowIndex)) })]
							})
						}, index);
						return /* @__PURE__ */ jsxs("aside", {
							className: "legal-callout",
							children: [block.label ? /* @__PURE__ */ jsx("span", { children: block.label }) : null, /* @__PURE__ */ jsx("p", { children: block.text })]
						}, index);
					})]
				}, section.id)), /* @__PURE__ */ jsxs("div", {
					className: "legal-contact",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "legal-contact__title",
						children: "¿Quieres ejercer tus derechos?"
					}), /* @__PURE__ */ jsx("p", { children: "Escríbenos indicando el derecho que deseas ejercer y adjuntando un documento que acredite tu identidad." })] }), /* @__PURE__ */ jsxs("a", {
						className: "btn btn--primary",
						href: `mailto:${site.email}?subject=${encodeURIComponent("Protección de datos")}`,
						children: ["Contactar", /* @__PURE__ */ jsx(ArrowIcon, {})]
					})]
				})]
			})]
		})
	})] });
}
var privacidad = {
	eyebrow: "Legal",
	title: "Política de privacidad",
	lead: "Cómo tratamos los datos personales que nos facilitas a través de esta web, quién los recibe y qué puedes hacer para controlarlos.",
	updated: legalUpdated,
	sections: [
		{
			id: "responsable",
			title: "1. Responsable del tratamiento",
			blocks: [{
				type: "p",
				text: `${site.legalName}, con domicilio social en ${site.address.street}, ${site.address.city} (${site.address.province}), España, y CIF ${site.nif}. Correo electrónico de contacto: ${site.email}. Teléfono: ${site.phone}.`
			}, {
				type: "p",
				text: "Esta política se aplica al sitio web de VESTIALPRO y a las comunicaciones que realices a través de los canales de contacto publicados en él. Se redacta conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)."
			}]
		},
		{
			id: "datos",
			title: "2. Qué datos tratamos",
			blocks: [
				{
					type: "p",
					text: "Solo tratamos los datos necesarios para atenderte. En función del canal utilizado pueden ser:"
				},
				{
					type: "ul",
					items: [
						"Datos identificativos y de contacto: nombre y apellidos, empresa, correo electrónico y teléfono.",
						"Contenido de tu consulta: puesto de trabajo, número de personas, equipo solicitado y cualquier información que decidas incluir en el mensaje.",
						"Datos de facturación y expediente, si la consulta termina en una relación comercial: denominación social, CIF, dirección fiscal y datos de pago.",
						"Datos técnicos de navegación estrictamente necesarios para servir la web, sin elaboración de perfiles ni publicidad."
					]
				},
				{
					type: "p",
					text: "No solicitamos categorías especiales de datos (salud, ideología, origen étnico, etc.). Si nos los facilitas de forma espontánea, los trataremos solo para la finalidad concreta de tu solicitud y los eliminaremos cuando deje de ser necesaria."
				}
			]
		},
		{
			id: "finalidades",
			title: "3. Para qué los usamos y con qué base jurídica",
			blocks: [{
				type: "table",
				head: [
					"Finalidad",
					"Base jurídica",
					"Conservación"
				],
				rows: [
					[
						"Responder consultas recibidas por formulario, correo o teléfono",
						"Consentimiento del interesado (art. 6.1.a RGPD) e interés legítimo en atender la solicitud (art. 6.1.f)",
						"Hasta resolver la consulta y, después, 1 año"
					],
					[
						"Elaborar presupuestos y gestionar pedidos",
						"Ejecución de un contrato o medidas precontractuales (art. 6.1.b)",
						"Duración de la relación comercial"
					],
					[
						"Facturación, contabilidad y obligaciones fiscales",
						"Obligación legal (art. 6.1.c)",
						"6 años (Código de Comercio y normativa fiscal)"
					],
					[
						"Atención de responsabilidades derivadas de la venta de EPI",
						"Obligación legal e interés legítimo en la defensa de reclamaciones",
						"Según plazos de garantía y prescripción legal"
					],
					[
						"Seguridad de la web y prevención del fraude",
						"Interés legítimo (art. 6.1.f)",
						"Máximo 12 meses"
					]
				]
			}, {
				type: "p",
				text: "No elaboramos perfiles comerciales ni tomamos decisiones automatizadas con efectos jurídicos sobre las personas."
			}]
		},
		{
			id: "destinatarios",
			title: "4. Quién puede acceder a tus datos",
			blocks: [
				{
					type: "p",
					text: "No vendemos ni cedemos datos personales a terceros con fines publicitarios. Podrán acceder a ellos, como encargados del tratamiento y con contrato conforme al artículo 28 del RGPD:"
				},
				{
					type: "ul",
					items: [
						"El proveedor de alojamiento web y correo electrónico, ubicado en la Unión Europea.",
						"La asesoría fiscal y contable, para la facturación y las obligaciones legales.",
						"Las empresas de transporte, exclusivamente con los datos necesarios para entregar un pedido.",
						"Los servicios profesionales (abogados, consultores) cuando sea necesario para atender una reclamación."
					]
				},
				{
					type: "p",
					text: "También podrán comunicarse datos a administraciones públicas, juzgados y tribunales cuando exista una obligación legal o un requerimiento válido."
				}
			]
		},
		{
			id: "transferencias",
			title: "5. Transferencias internacionales",
			blocks: [{
				type: "p",
				text: "Con carácter general, los datos se alojan en servidores situados en la Unión Europea. Si algún proveedor implicara una transferencia fuera del Espacio Económico Europeo, se formalizarían las garantías adecuadas del artículo 46 del RGPD —cláusulas contractuales tipo o decisión de adecuación— y se informaría en esta misma página."
			}]
		},
		{
			id: "derechos",
			title: "6. Tus derechos",
			blocks: [
				{
					type: "p",
					text: "Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición, así como retirar el consentimiento prestado sin que ello afecte a la licitud del tratamiento previo."
				},
				{
					type: "p",
					text: `Para ejercerlos, escríbenos a ${site.email} indicando el derecho que deseas ejercer y adjuntando un documento que acredite tu identidad. Responderemos en el plazo máximo de un mes, ampliable otros dos en casos complejos.`
				},
				{
					type: "p",
					text: "Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), C/ Jorge Juan 6, 28001 Madrid, o a través de su sede electrónica (www.aepd.es)."
				}
			]
		},
		{
			id: "cookies",
			title: "7. Cookies y almacenamiento local",
			blocks: [{
				type: "p",
				text: "Esta web no utiliza cookies publicitarias, de perfilado ni de redes sociales. Solo guardamos un registro técnico en el almacenamiento local de tu navegador para recordar que has leído el aviso de cookies. Puedes consultar el detalle en la política de cookies."
			}]
		},
		{
			id: "menores",
			title: "8. Menores de edad",
			blocks: [{
				type: "p",
				text: "Los servicios de esta web están dirigidos a empresas y profesionales. No recogemos conscientemente datos de menores de 14 años. Si detectamos que se han facilitado, procederemos a su supresión inmediata."
			}]
		},
		{
			id: "seguridad",
			title: "9. Seguridad de la información",
			blocks: [{
				type: "p",
				text: "Aplicamos medidas técnicas y organizativas proporcionadas al riesgo: cifrado del sitio mediante HTTPS, control de acceso a los sistemas, copias de seguridad, gestión de incidencias y formación básica del personal que trata datos. El detalle se recoge en la política de protección de datos."
			}]
		},
		{
			id: "cambios",
			title: "10. Cambios en esta política",
			blocks: [{
				type: "p",
				text: `Esta política puede actualizarse para adaptarse a cambios normativos o a nuevos tratamientos. La versión vigente es la publicada en esta página, con fecha de última revisión ${legalUpdated}.`
			}]
		}
	]
};
var proteccionDatos = {
	eyebrow: "Legal",
	title: "Política de protección de datos",
	lead: "El modelo de gobernanza que aplicamos al tratamiento de datos personales: principios, registro de actividades, medidas de seguridad y gestión de incidencias.",
	updated: legalUpdated,
	sections: [
		{
			id: "objeto",
			title: "1. Objeto y alcance",
			blocks: [{
				type: "p",
				text: `${site.legalName} trata datos personales en el marco de su actividad de suministro de vestuario técnico y equipos de protección individual. Esta política describe cómo se organiza ese tratamiento conforme al RGPD y a la LOPDGDD, y complementa a la política de privacidad.`
			}, {
				type: "p",
				text: "Afecta a todos los tratamientos realizados por la empresa, con independencia del soporte —web, correo electrónico, teléfono, facturación o documentación de entregas de EPI— y a todo el personal que tenga acceso a ellos."
			}]
		},
		{
			id: "principios",
			title: "2. Principios aplicados",
			blocks: [{
				type: "ul",
				items: [
					"Licitud, lealtad y transparencia: cada tratamiento tiene una base jurídica identificada y se informa al interesado.",
					"Limitación de la finalidad: los datos no se reutilizan para fines incompatibles con aquel para el que se recogieron.",
					"Minimización: solo se solicitan los datos imprescindibles para la consulta o el pedido.",
					"Exactitud: se corrige cualquier dato inexacto que se detecte o que el interesado comunique.",
					"Limitación del plazo de conservación: se aplican los plazos indicados en el registro de actividades.",
					"Integridad y confidencialidad: acceso restringido, cifrado en tránsito y copias de seguridad.",
					"Responsabilidad proactiva: se documentan las decisiones y se revisan periódicamente."
				]
			}]
		},
		{
			id: "registro",
			title: "3. Registro de actividades de tratamiento",
			blocks: [{
				type: "p",
				text: "El registro interno identifica, para cada actividad, la base jurídica, las categorías de datos e interesados, los destinatarios y el plazo de conservación. Este es su resumen:"
			}, {
				type: "table",
				head: [
					"Actividad",
					"Datos",
					"Base jurídica",
					"Conservación"
				],
				rows: [
					[
						"Gestión de consultas web",
						"Identificativos y de contacto",
						"Consentimiento",
						"1 año"
					],
					[
						"Clientes y presupuestos",
						"Identificativos, fiscales y de contacto",
						"Contrato",
						"Relación + 6 años"
					],
					[
						"Facturación y contabilidad",
						"Fiscales y bancarios",
						"Obligación legal",
						"6 años"
					],
					[
						"Proveedores y transporte",
						"Identificativos y de contacto",
						"Contrato",
						"Relación + 6 años"
					],
					[
						"Registro de entregas de EPI",
						"Nombre, talla, modelo y firma",
						"Obligación legal (RD 773/1997)",
						"Plazo de garantía y prescripción"
					],
					[
						"Selección de personal",
						"Currículum y contacto",
						"Consentimiento",
						"1 año"
					],
					[
						"Videovigilancia de la nave, si existe",
						"Imagen",
						"Interés legítimo",
						"30 días"
					]
				]
			}]
		},
		{
			id: "base",
			title: "4. Base de licitud y consentimiento",
			blocks: [{
				type: "p",
				text: "Cuando la base es el consentimiento, este se recoge mediante una acción afirmativa y separada, con información previa sobre la finalidad. Puede retirarse en cualquier momento con la misma facilidad con la que se otorgó, sin que ello afecte a la licitud del tratamiento anterior."
			}, {
				type: "p",
				text: "Cuando la base es el interés legítimo, se ha realizado una ponderación que confirma que no prevalecen los derechos y libertades del interesado. Puedes oponerte a este tratamiento en cualquier momento."
			}]
		},
		{
			id: "seguridad",
			title: "5. Medidas de seguridad",
			blocks: [
				{
					type: "p",
					text: "Las medidas se organizan en cuatro ámbitos y se revisan al menos una vez al año o cuando cambia un proveedor relevante:"
				},
				{
					type: "ul",
					items: [
						"Control de acceso: cuentas nominativas, contraseñas robustas, doble factor en los servicios críticos y revisión de permisos al cambiar de puesto.",
						"Confidencialidad: deber de secreto del personal y de los proveedores, y acceso limitado a la información estrictamente necesaria.",
						"Integridad y disponibilidad: copias de seguridad periódicas, verificación de restauración y protección frente a malware.",
						"Trazabilidad: registro de incidencias, de brechas y de las decisiones adoptadas en materia de protección de datos."
					]
				},
				{
					type: "callout",
					label: "Cifrado",
					text: "La web se sirve siempre mediante HTTPS. Los documentos con datos personales se comparten por canales cifrados y nunca por enlaces abiertos."
				}
			]
		},
		{
			id: "encargados",
			title: "6. Encargados del tratamiento",
			blocks: [{
				type: "p",
				text: "Todo proveedor que acceda a datos personales por cuenta de VESTIALPRO firma un contrato que regula el objeto, la duración, la naturaleza del tratamiento, las instrucciones, las medidas de seguridad, la subcontratación y la devolución o supresión de los datos al terminar el servicio."
			}, {
				type: "p",
				text: "Se mantiene una relación actualizada de encargados —alojamiento, correo, asesoría, transporte y mantenimiento informático— con la ubicación de sus servidores y las garantías aplicables."
			}]
		},
		{
			id: "derechos",
			title: "7. Ejercicio de derechos y procedimiento",
			blocks: [{
				type: "p",
				text: `Cualquier persona puede solicitar el acceso, la rectificación, la supresión, la limitación, la portabilidad o la oposición escribiendo a ${site.email}. La solicitud se registra con fecha de entrada y se responde en el plazo máximo de un mes.`
			}, {
				type: "p",
				text: "El ejercicio de derechos es gratuito. Solo se cobrará un importe cuando las solicitudes sean manifiestamente infundadas o excesivas, y en ese caso se motivará la decisión."
			}]
		},
		{
			id: "brechas",
			title: "8. Brechas de seguridad",
			blocks: [{
				type: "p",
				text: "Cualquier incidente que afecte a la confidencialidad, integridad o disponibilidad de los datos se comunica de inmediato al responsable. Se valora el riesgo para los derechos de las personas y, si procede, se notifica a la AEPD en un plazo máximo de 72 horas y a los interesados afectados cuando el riesgo sea alto."
			}, {
				type: "p",
				text: "Todas las brechas quedan documentadas —incluidas las que no requieren notificación— con su descripción, efectos y medidas adoptadas."
			}]
		},
		{
			id: "eipd",
			title: "9. Evaluación de impacto y consulta previa",
			blocks: [{
				type: "p",
				text: "Antes de implantar un tratamiento que pueda entrañar un alto riesgo —por su naturaleza, alcance o uso de nuevas tecnologías— se realiza una evaluación de impacto relativa a la protección de datos y, cuando la evaluación concluya un riesgo residual alto, se consulta previamente a la autoridad de control."
			}]
		},
		{
			id: "dpd",
			title: "10. Delegado de Protección de Datos",
			blocks: [{
				type: "p",
				text: `La empresa no está obligada a designar un Delegado de Protección de Datos por su actividad principal. Las funciones de supervisión y coordinación las asume la dirección, que puede ser contactada en ${site.email} con el asunto «Protección de datos».`
			}]
		},
		{
			id: "autoridad",
			title: "11. Autoridad de control",
			blocks: [{
				type: "p",
				text: "La autoridad competente en España es la Agencia Española de Protección de Datos, C/ Jorge Juan 6, 28001 Madrid. Puedes presentar reclamaciones en su sede electrónica (www.aepd.es) o por cualquiera de los medios previstos en la Ley 39/2015."
			}]
		},
		{
			id: "revision",
			title: "12. Revisión y vigencia",
			blocks: [{
				type: "p",
				text: `Esta política se revisa al menos anualmente y siempre que se produzca un cambio normativo relevante o una incidencia significativa. Última revisión: ${legalUpdated}.`
			}]
		}
	]
};
var cookies = {
	eyebrow: "Legal",
	title: "Política de cookies",
	lead: "Qué guarda esta web en tu navegador, para qué sirve y cómo puedes eliminarlo. Sin cookies publicitarias ni de seguimiento.",
	updated: legalUpdated,
	sections: [
		{
			id: "que-son",
			title: "1. Qué es una cookie",
			blocks: [{
				type: "p",
				text: "Una cookie es un pequeño archivo que un sitio web guarda en tu dispositivo para recordar información entre visitas. Junto a ellas existen tecnologías equivalentes como el almacenamiento local (localStorage), que funciona de forma parecida dentro del navegador."
			}, {
				type: "p",
				text: "La normativa española (artículo 22.2 de la LIS) exige informar y obtener consentimiento para las cookies que no sean estrictamente necesarias para el funcionamiento del servicio."
			}]
		},
		{
			id: "que-usamos",
			title: "2. Qué utilizamos en esta web",
			blocks: [
				{
					type: "p",
					text: "Únicamente un registro técnico de almacenamiento local, necesario para recordar que ya has leído el aviso:"
				},
				{
					type: "table",
					head: [
						"Nombre",
						"Tecnología",
						"Finalidad",
						"Duración"
					],
					rows: [[
						"vestialpro.cookies.v1",
						"Almacenamiento local",
						"Recordar que has aceptado el aviso de cookies y no volver a mostrarlo",
						"Hasta que borres los datos del navegador"
					]]
				},
				{
					type: "p",
					text: "Este registro no identifica a personas, no se comparte con terceros y no permite elaborar perfiles. Por su carácter estrictamente técnico está exento de consentimiento previo, pero informamos de él por transparencia."
				}
			]
		},
		{
			id: "que-no",
			title: "3. Qué no utilizamos",
			blocks: [{
				type: "ul",
				items: [
					"Cookies publicitarias o de retargeting.",
					"Herramientas de analítica de terceros con seguimiento entre sitios.",
					"Píxeles de redes sociales ni botones que envíen datos sin tu acción.",
					"Cookies de personalización que construyan un perfil de navegación."
				]
			}, {
				type: "p",
				text: "Tampoco incrustamos vídeos ni mapas de terceros que instalen cookies por defecto: los enlaces a mapas se abren en una pestaña nueva del servicio correspondiente."
			}]
		},
		{
			id: "gestion",
			title: "4. Cómo eliminar o bloquear este registro",
			blocks: [
				{
					type: "p",
					text: "Puedes borrar el almacenamiento local desde la configuración de tu navegador, en el apartado de privacidad y datos de sitios. Al hacerlo, el aviso de cookies volverá a mostrarse en tu próxima visita."
				},
				{
					type: "ul",
					items: [
						"Chrome: Configuración › Privacidad y seguridad › Datos de sitios.",
						"Firefox: Ajustes › Privacidad y seguridad › Cookies y datos del sitio.",
						"Safari: Ajustes › Privacidad › Gestionar datos de sitios web.",
						"Edge: Configuración › Cookies y permisos del sitio."
					]
				},
				{
					type: "p",
					text: "Bloquear el almacenamiento local no impide navegar por la web ni acceder a sus contenidos."
				}
			]
		},
		{
			id: "actualizaciones",
			title: "5. Actualizaciones",
			blocks: [{
				type: "p",
				text: `Si en el futuro incorporamos cookies de analítica o de terceros, actualizaremos esta política y solicitaremos el consentimiento previo mediante un panel de configuración. Última revisión: ${legalUpdated}.`
			}]
		}
	]
};
// src/pages/Legal.tsx
function Privacidad() {
	return /* @__PURE__ */ jsx(LegalLayout, { doc: privacidad });
}
function ProteccionDatos() {
	return /* @__PURE__ */ jsx(LegalLayout, { doc: proteccionDatos });
}
function PoliticaCookies() {
	return /* @__PURE__ */ jsx(LegalLayout, { doc: cookies });
}
// src/data/normas.ts
var marcoLegal = [
	{
		code: "Ley 31/1995",
		title: "Prevención de Riesgos Laborales",
		scope: "Marco general",
		detail: "Obliga a evaluar los riesgos antes de elegir cualquier medida y a proporcionar gratuitamente los equipos de protección individual que resulten necesarios, con formación e información sobre su uso."
	},
	{
		code: "RD 39/1997",
		title: "Reglamento de los Servicios de Prevención",
		scope: "Gestión preventiva",
		detail: "Desarrolla la evaluación de riesgos y la planificación de la actividad preventiva. De aquí sale el documento que justifica por qué un puesto necesita un EPI concreto."
	},
	{
		code: "RD 1407/1992",
		title: "Comercialización de los EPI",
		scope: "Producto",
		detail: "Regula las condiciones de comercialización: marcado CE, declaración de conformidad e información al usuario. Sigue siendo la norma española de referencia para los EPI puestos en el mercado."
	},
	{
		code: "RD 773/1997",
		title: "Utilización de los EPI por los trabajadores",
		scope: "Uso en el puesto",
		detail: "Fija cómo se eligen, se entregan, se usan, se mantienen y se revisan los equipos. Incluye la obligación de informar y formar al trabajador y de registrar la entrega."
	},
	{
		code: "Reglamento (UE) 2016/425",
		title: "Diseño y certificación de los EPI",
		scope: "Producto europeo",
		detail: "Sustituye a la Directiva 89/686/CEE. Establece las categorías I, II y III, el examen UE de tipo, el control de la producción, la declaración UE de conformidad y la trazabilidad del fabricante."
	},
	{
		code: "RD 1215/1997",
		title: "Equipos de trabajo",
		scope: "Equipos y anclajes",
		detail: "Aplica a los equipos auxiliares que hacen posible la protección: plataformas, líneas de vida y puntos de anclaje donde se conectan los sistemas anticaídas."
	}
];
var categorias = [
	{
		id: "I",
		label: "Categoría I",
		risk: "Riesgo mínimo",
		examples: "Guantes de jardinería, gafas de protección solar, delantales de limpieza",
		conformity: "Autocertificación del fabricante",
		note: "El fabricante declara la conformidad por sí mismo y aplica el marcado CE sin intervención de un organismo notificado."
	},
	{
		id: "II",
		label: "Categoría II",
		risk: "Riesgo intermedio",
		examples: "Cascos, gafas, guantes mecánicos, calzado de seguridad, protección auditiva",
		conformity: "Examen UE de tipo",
		note: "Es la categoría más habitual en industria y construcción. Un organismo notificado verifica el prototipo antes de su comercialización."
	},
	{
		id: "III",
		label: "Categoría III",
		risk: "Riesgo grave o mortal",
		examples: "Protección respiratoria, química, arneses anticaídas, dieléctricos, arco eléctrico",
		conformity: "Examen UE de tipo + control de producción",
		note: "Además del examen de tipo, el fabricante se somete a un control de calidad vigilado. Junto al marcado CE aparece el número del organismo notificado."
	}
];
var familyFilters = [
	"Todas",
	"Cabeza",
	"Ocular",
	"Auditiva",
	"Respiratoria",
	"Manos",
	"Calzado",
	"Ropa",
	"Anticaídas"
];
var standards = [
	{
		norm: "EN 397",
		family: "Cabeza",
		what: "Cascos de protección para la industria",
		use: "Impacto, penetración y llama. Admite requisitos opcionales de frío extremo o contacto eléctrico."
	},
	{
		norm: "EN 12492",
		family: "Cabeza",
		what: "Cascos para trabajos en altura",
		use: "Montaña, cubiertas y rescate: barboquejo que evita la caída del casco y ventilación."
	},
	{
		norm: "EN 166",
		family: "Ocular",
		what: "Protección individual de los ojos",
		use: "Requisitos generales de montura y lente; el código de campo de uso indica el riesgo cubierto."
	},
	{
		norm: "EN 170",
		family: "Ocular",
		what: "Filtros ultravioleta",
		use: "Trabajos con exposición a radiación UV: soldadura ligera, laboratorio, exterior."
	},
	{
		norm: "EN 352-1 / -2 / -3",
		family: "Auditiva",
		what: "Protectores auditivos",
		use: "Orejeras, orejeras acopladas a casco y tapones. El valor SNR orienta la atenuación real."
	},
	{
		norm: "EN 149",
		family: "Respiratoria",
		what: "Mascarillas filtrantes FFP1, FFP2 y FFP3",
		use: "Partículas y aerosoles. No protegen frente a gases ni vapores."
	},
	{
		norm: "EN 140",
		family: "Respiratoria",
		what: "Medias máscaras y cuartos de máscara",
		use: "Base de los equipos filtrantes reutilizables con filtros intercambiables."
	},
	{
		norm: "EN 388",
		family: "Manos",
		what: "Guantes contra riesgos mecánicos",
		use: "Código de cuatro dígitos: abrasión, corte, desgarro y perforación, más el ensayo de corte TDM."
	},
	{
		norm: "EN 407",
		family: "Manos",
		what: "Guantes contra riesgos térmicos",
		use: "Calor y llama, calor de contacto, calor convectivo, radiación, salpicaduras de metal fundido."
	},
	{
		norm: "EN ISO 374",
		family: "Manos",
		what: "Guantes frente a productos químicos",
		use: "La norma indica el nivel de protección y el tiempo de paso para cada sustancia ensayada."
	},
	{
		norm: "EN ISO 20345",
		family: "Calzado",
		what: "Calzado de seguridad",
		use: "Puntera de 200 J. Los códigos S1P, S2, S3 y S7 añaden propiedades como antiperforación o impermeabilidad."
	},
	{
		norm: "EN ISO 20347",
		family: "Calzado",
		what: "Calzado de trabajo",
		use: "Sin puntera protectora. Para puestos donde no hay riesgo de impacto, pero sí de deslizamiento o fatiga."
	},
	{
		norm: "EN ISO 20471",
		family: "Ropa",
		what: "Ropa de alta visibilidad",
		use: "Clases 1, 2 y 3 según la superficie de material fluorescente y retrorreflectante."
	},
	{
		norm: "EN 343",
		family: "Ropa",
		what: "Ropa de protección contra la lluvia",
		use: "Combina resistencia al agua y transpirabilidad en dos dígitos (por ejemplo 3.1)."
	},
	{
		norm: "EN ISO 11612",
		family: "Ropa",
		what: "Ropa contra calor y llama",
		use: "Industria, fundición y trabajos con calor radiante. Se complementa con EN ISO 11611 para soldadura."
	},
	{
		norm: "EN ISO 14116",
		family: "Ropa",
		what: "Ropa con propagación limitada de la llama",
		use: "Prendas que no se prenden solas, sin protección térmica completa."
	},
	{
		norm: "EN 1149-5",
		family: "Ropa",
		what: "Ropa antiestática",
		use: "Evita la acumulación de carga electrostática en atmósferas potencialmente explosivas."
	},
	{
		norm: "EN 13034",
		family: "Ropa",
		what: "Protección química líquida (tipo 6)",
		use: "Salpicaduras ligeras y niebla; no sirve para proyecciones fuertes ni gases."
	},
	{
		norm: "EN 361",
		family: "Anticaídas",
		what: "Arneses anticaídas",
		use: "Arnés de cuerpo completo con puntos de anclaje definidos para detención de caídas y trabajo."
	},
	{
		norm: "EN 360",
		family: "Anticaídas",
		what: "Dispositivos anticaídas retráctiles",
		use: "Línea de vida autoenrollable: bloqueo por velocidad y absorción de energía integrada."
	},
	{
		norm: "EN 795",
		family: "Anticaídas",
		what: "Puntos y dispositivos de anclaje",
		use: "Define los anclajes estructurales y portátiles a los que se conecta el sistema."
	}
];
var obligaciones = [{
	title: "De la empresa",
	intro: "La protección es una obligación del empleador, no un extra del salario.",
	items: [
		"Evaluar el riesgo del puesto antes de elegir el equipo: el EPI es la última barrera, no la primera.",
		"Seleccionar EPI con marcado CE, categoría adecuada y norma coherente con el riesgo real.",
		"Entregar el equipo de forma gratuita, en la talla correcta y adaptado a la persona.",
		"Formar e informar sobre uso, limitaciones, conservación y fecha de sustitución.",
		"Vigilar que el EPI se use correctamente y sustituirlo cuando pierda eficacia.",
		"Registrar cada entrega y cada revisión con fecha, modelo y firma."
	]
}, {
	title: "Del trabajador",
	intro: "El equipo protege cuando se usa, se cuida y se comunica su estado.",
	items: [
		"Utilizar el EPI según las instrucciones recibidas y durante todo el tiempo de exposición.",
		"Conservarlo en las condiciones indicadas y no modificarlo ni manipularlo.",
		"Comunicar de inmediato cualquier deterioro, pérdida o anomalía.",
		"Participar en la formación y en las revisiones periódicas.",
		"No anular ni retirar protecciones colectivas por comodidad."
	]
}];
var preguntas = [
	{
		question: "¿Quién tiene que pagar el EPI?",
		answer: "Siempre la empresa. El coste no puede repercutirse en el trabajador ni descontarse del salario: es una obligación derivada de la Ley 31/1995 y del RD 773/1997."
	},
	{
		question: "¿Puedo usar mi propio equipo de protección?",
		answer: "Solo de forma excepcional y con autorización de la empresa, siempre que cumpla los requisitos de diseño y certificación. La responsabilidad de proporcionar el EPI adecuado sigue siendo del empleador."
	},
	{
		question: "¿Caduca un casco de seguridad?",
		answer: "La normativa no fija una fecha única de caducidad. Debes atender a las instrucciones del fabricante y al entorno: la radiación UV, el calor y el sudor degradan el material. Un casco que ha recibido un impacto se sustituye siempre, aunque no presente daños visibles."
	},
	{
		question: "¿Qué significa el número que aparece junto al marcado CE?",
		answer: "Es el código de cuatro dígitos del organismo notificado que ha intervenido en el control de producción. Solo aparece en los EPI de categoría III, los de riesgo grave o mortal."
	},
	{
		question: "¿Un EPI con marcado CE ya me protege?",
		answer: "El marcado CE acredita que el producto cumple los requisitos esenciales y la norma aplicable. La protección real depende además de la elección correcta, del ajuste a la persona y de que se use durante toda la exposición."
	},
	{
		question: "¿Qué documentación debo conservar?",
		answer: "La declaración UE de conformidad, las instrucciones del fabricante, el registro de entrega al trabajador y las revisiones periódicas. Es la prueba documental de que la protección estaba correctamente implantada."
	}
];
// src/pages/Normativa.tsx
var anchors = [
	{
		id: "marco-legal",
		label: "Marco legal"
	},
	{
		id: "categorias",
		label: "Categorías"
	},
	{
		id: "marcado-ce",
		label: "Marcado CE"
	},
	{
		id: "normas",
		label: "Normas UNE-EN"
	},
	{
		id: "obligaciones",
		label: "Obligaciones"
	},
	{
		id: "vida-util",
		label: "Vida útil"
	},
	{
		id: "preguntas",
		label: "Preguntas"
	}
];
var marcadoPasos = [
	{
		title: "Evaluación del riesgo",
		text: "El punto de partida no es el producto, es la exposición: qué golpea, qué corta, qué quema y durante cuánto tiempo."
	},
	{
		title: "Elección de la norma",
		text: "Cada familia de EPI tiene su norma UNE-EN armonizada. El fabricante diseña y ensaya contra ella."
	},
	{
		title: "Examen UE de tipo",
		text: "Un organismo notificado verifica el prototipo en categorías II y III antes de que el modelo se comercialice."
	},
	{
		title: "Control de producción",
		text: "En categoría III el fabricante mantiene un sistema de calidad vigilado para que cada unidad sea igual al prototipo."
	},
	{
		title: "Declaración UE de conformidad",
		text: "El documento que acompaña al producto: norma aplicada, organismo interviniente y responsabilidad del fabricante."
	},
	{
		title: "Marcado CE y trazabilidad",
		text: "El marcado CE acredita la conformidad. En categoría III va seguido del número del organismo notificado."
	}
];
var vidaUtil = [
	{
		title: "Cascos",
		text: "Sustitución inmediata tras un impacto. La radiación UV y el calor degradan el material: revisa la fecha de fabricación y las instrucciones del fabricante."
	},
	{
		title: "Calzado de seguridad",
		text: "Comprueba suela, puntera y costuras. Un S3 con la suela cristalizada o la puntera deformada ya no protege."
	},
	{
		title: "Anticaídas",
		text: "Revisión documentada por persona competente al menos una vez al año y después de cada caída. Un arnés que ha detenido una caída se retira."
	},
	{
		title: "Protección respiratoria y química",
		text: "Los filtros tienen vida limitada y los guantes pierden eficacia según la sustancia. Respeta el tiempo de paso indicado por el fabricante."
	}
];
function Normativa() {
	const [filter, setFilter] = useState("Todas");
	const rows = useMemo(() => filter === "Todas" ? standards : standards.filter((standard) => standard.family === filter), [filter]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Normativa",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"El marco que convierte un EPI en una ",
				/* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "garantía"
				}),
				"."
			] }),
			lead: "Qué exige la ley, cómo se certifica un equipo y qué norma corresponde a cada riesgo. La guía que usamos cuando un cliente nos pregunta qué necesita.",
			meta: /* @__PURE__ */ jsxs("ul", {
				className: "hero-chips",
				children: [
					/* @__PURE__ */ jsx("li", { children: "Reglamento (UE) 2016/425" }),
					/* @__PURE__ */ jsx("li", { children: "RD 1407/1992" }),
					/* @__PURE__ */ jsx("li", { children: "RD 773/1997" }),
					/* @__PURE__ */ jsx("li", { children: "Ley 31/1995" })
				]
			})
		}),
		/* @__PURE__ */ jsx("nav", {
			className: "anchor-nav",
			"aria-label": "Contenido de la página",
			children: /* @__PURE__ */ jsx("ul", { children: anchors.map((anchor) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
				href: `#${anchor.id}`,
				children: anchor.label
			}) }, anchor.id)) })
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			id: "marco-legal",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				index: "01",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Seis normas que ", /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "lo ordenan todo"
				})] }),
				lead: "En España conviven la norma europea de producto y la normativa nacional de prevención. Las dos son obligatorias y se complementan."
			}), /* @__PURE__ */ jsx("div", {
				className: "law-grid law-grid--light",
				children: marcoLegal.map((law, index) => /* @__PURE__ */ jsxs("article", {
					className: "law-card law-card--light",
					"data-reveal": true,
					style: { transitionDelay: `${index * 50}ms` },
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "law-card__scope",
							children: law.scope
						}),
						/* @__PURE__ */ jsx("span", {
							className: "law-card__code",
							children: law.code
						}),
						/* @__PURE__ */ jsx("h3", { children: law.title }),
						/* @__PURE__ */ jsx("p", { children: law.detail })
					]
				}, law.code))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--dark",
			id: "categorias",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				index: "02",
				tone: "dark",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Tres categorías, ", /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "tres niveles de control"
				})] }),
				lead: "La categoría de un EPI no depende de su precio, sino del riesgo que cubre. Determina qué controles pasa antes de llegar a tu plantilla."
			}), /* @__PURE__ */ jsx("div", {
				className: "category-grid",
				children: categorias.map((category, index) => /* @__PURE__ */ jsxs("article", {
					className: `category-card category-card--${category.id.toLowerCase()}`,
					"data-reveal": true,
					style: { transitionDelay: `${index * 70}ms` },
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "category-card__head",
							children: [/* @__PURE__ */ jsx("span", {
								className: "category-card__badge",
								children: category.id
							}), /* @__PURE__ */ jsx("span", {
								className: "category-card__risk",
								children: category.risk
							})]
						}),
						/* @__PURE__ */ jsx("h3", { children: category.label }),
						/* @__PURE__ */ jsx("p", {
							className: "category-card__examples",
							children: category.examples
						}),
						/* @__PURE__ */ jsx("dl", { children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "Conformidad" }), /* @__PURE__ */ jsx("dd", { children: category.conformity })] }) }),
						/* @__PURE__ */ jsx("p", {
							className: "category-card__note",
							children: category.note
						})
					]
				}, category.id))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			id: "marcado-ce",
			children: [
				/* @__PURE__ */ jsx(SectionHead, {
					index: "03",
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["Del riesgo al ", /* @__PURE__ */ jsx("span", {
						className: "text-accent",
						children: "marcado CE"
					})] }),
					lead: "Seis pasos que todo EPI recorre antes de poder venderse en la Unión Europea. Si falta uno, el equipo no es conforme."
				}),
				/* @__PURE__ */ jsx("ol", {
					className: "steps-grid",
					children: marcadoPasos.map((step, index) => /* @__PURE__ */ jsxs("li", {
						className: "step-card",
						"data-reveal": true,
						style: { transitionDelay: `${index * 55}ms` },
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "step-card__num",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ jsx("h3", { children: step.title }),
							/* @__PURE__ */ jsx("p", { children: step.text })
						]
					}, step.title))
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "callout",
					"data-reveal": true,
					children: [/* @__PURE__ */ jsx("span", {
						className: "callout__label",
						children: "Ojo con esto"
					}), /* @__PURE__ */ jsx("p", { children: "El marcado CE certifica el producto, no la elección. Un casco EN 397 perfectamente certificado no protege de una caída de altura: para eso existe un arnés EN 361 y un sistema anticaídas completo." })]
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--dark",
			id: "normas",
			children: [
				/* @__PURE__ */ jsx(SectionHead, {
					index: "04",
					tone: "dark",
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["Qué norma cubre ", /* @__PURE__ */ jsx("span", {
						className: "text-accent",
						children: "cada riesgo"
					})] }),
					lead: "Las referencias UNE-EN que más nos piden. Filtra por familia para encontrar la que necesitas."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "filter-bar",
					role: "group",
					"aria-label": "Filtrar normas por familia",
					children: familyFilters.map((family) => /* @__PURE__ */ jsx("button", {
						type: "button",
						className: `chip ${filter === family ? "is-active" : ""}`,
						"aria-pressed": filter === family,
						onClick: () => setFilter(family),
						children: family
					}, family))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "table-scroll",
					children: /* @__PURE__ */ jsxs("table", {
						className: "standards-table",
						children: [
							/* @__PURE__ */ jsx("caption", {
								className: "sr-only",
								children: "Normas UNE-EN por familia de equipo de protección individual"
							}),
							/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									scope: "col",
									children: "Norma"
								}),
								/* @__PURE__ */ jsx("th", {
									scope: "col",
									children: "Familia"
								}),
								/* @__PURE__ */ jsx("th", {
									scope: "col",
									children: "Qué certifica"
								}),
								/* @__PURE__ */ jsx("th", {
									scope: "col",
									children: "Uso habitual"
								})
							] }) }),
							/* @__PURE__ */ jsx("tbody", { children: rows.map((standard) => /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									scope: "row",
									children: standard.norm
								}),
								/* @__PURE__ */ jsx("td", {
									"data-label": "Familia",
									children: /* @__PURE__ */ jsx("span", {
										className: "family-tag",
										children: standard.family
									})
								}),
								/* @__PURE__ */ jsx("td", {
									"data-label": "Qué certifica",
									children: standard.what
								}),
								/* @__PURE__ */ jsx("td", {
									"data-label": "Uso habitual",
									children: standard.use
								})
							] }, standard.norm)) })
						]
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "table-note",
					children: `${rows.length} ${rows.length === 1 ? "norma" : "normas"} · La versión vigente de cada norma es la que figura en la declaración UE de conformidad del fabricante.`
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			id: "obligaciones",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				index: "05",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Quién responde de ", /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "qué"
				})] }),
				lead: "La protección individual es una obligación compartida, pero no simétrica: la empresa debe poner los medios y el trabajador debe usarlos."
			}), /* @__PURE__ */ jsx("div", {
				className: "obligation-grid",
				children: obligaciones.map((group, index) => /* @__PURE__ */ jsxs("article", {
					className: "obligation-card",
					"data-reveal": true,
					style: { transitionDelay: `${index * 90}ms` },
					children: [
						/* @__PURE__ */ jsx("h3", { children: group.title }),
						/* @__PURE__ */ jsx("p", {
							className: "obligation-card__intro",
							children: group.intro
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "check-list",
							children: group.items.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item))
						})
					]
				}, group.title))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--dark",
			id: "vida-util",
			children: [
				/* @__PURE__ */ jsx(SectionHead, {
					index: "06",
					tone: "dark",
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["Ningún EPI ", /* @__PURE__ */ jsx("span", {
						className: "text-accent",
						children: "dura para siempre"
					})] }),
					lead: "La ley no fija una fecha única de caducidad: manda el fabricante y el estado real del equipo. Estas son las señales que revisamos."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "life-grid",
					children: vidaUtil.map((item, index) => /* @__PURE__ */ jsxs("article", {
						className: "life-card",
						"data-reveal": true,
						style: { transitionDelay: `${index * 60}ms` },
						children: [/* @__PURE__ */ jsx("h3", { children: item.title }), /* @__PURE__ */ jsx("p", { children: item.text })]
					}, item.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "life-note",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ jsx(Eyebrow, { children: "Documentación" }),
						/* @__PURE__ */ jsx("p", { children: "Cada entrega se registra con fecha, modelo, norma y firma. Es la prueba de que la protección estaba implantada y permite planificar la reposición antes de que el equipo pierda eficacia." }),
						/* @__PURE__ */ jsxs("a", {
							className: "link-arrow link-arrow--light",
							href: "/contacto",
							children: ["Pedir una revisión de EPI", /* @__PURE__ */ jsx(ArrowIcon, {})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section section--paper",
			id: "preguntas",
			children: [
				/* @__PURE__ */ jsx(SectionHead, {
					index: "07",
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["Las dudas que ", /* @__PURE__ */ jsx("span", {
						className: "text-accent",
						children: "más nos llegan"
					})] }),
					lead: "Respuestas cortas, sin letra pequeña. Si tu caso es concreto, escríbenos y lo miramos."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "faq",
					children: preguntas.map((item, index) => /* @__PURE__ */ jsxs("details", {
						className: "faq__item",
						"data-reveal": true,
						style: { transitionDelay: `${index * 40}ms` },
						children: [/* @__PURE__ */ jsxs("summary", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "faq__index",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ jsx("span", {
								className: "faq__question",
								children: item.question
							}),
							/* @__PURE__ */ jsx("span", {
								className: "faq__marker",
								"aria-hidden": "true"
							})
						] }), /* @__PURE__ */ jsx("div", {
							className: "faq__answer",
							children: /* @__PURE__ */ jsx("p", { children: item.answer })
						})]
					}, item.question))
				}),
				/* @__PURE__ */ jsx("p", {
					className: "disclaimer",
					children: `Contenido informativo actualizado en ${site.updated}. No sustituye el asesoramiento de tu servicio de prevención, la evaluación de riesgos del puesto ni las instrucciones del fabricante. Ante una duda concreta, consulta la declaración UE de conformidad del producto.`
				})
			]
		})
	] });
}
// src/pages/NotFound.tsx
function NotFound() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Error 404",
		title: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Esta página ",
			/* @__PURE__ */ jsx("span", {
				className: "text-accent",
				children: "no existe"
			}),
			"."
		] }),
		lead: "Puede que el enlace haya cambiado de sitio o que la dirección esté mal escrita. Nada que no se arregle en dos clics.",
		size: "sm"
	}), /* @__PURE__ */ jsx("section", {
		className: "section section--paper",
		children: /* @__PURE__ */ jsxs("div", {
			className: "notfound",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "notfound__code",
					children: "404"
				}),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h2", { children: "Volvamos a lo importante" }),
					/* @__PURE__ */ jsx("p", { children: "Si buscabas un catálogo, una ficha técnica o hablar con nosotros, estas son las rutas más directas." }),
					/* @__PURE__ */ jsxs("div", {
						className: "notfound__actions",
						children: [
							/* @__PURE__ */ jsxs("a", {
								className: "btn btn--primary",
								href: "/",
								children: ["Ir al inicio", /* @__PURE__ */ jsx(ArrowIcon, {})]
							}),
							/* @__PURE__ */ jsx("a", {
								className: "btn btn--outline",
								href: "/normativa",
								children: "Ver normativa"
							}),
							/* @__PURE__ */ jsx("a", {
								className: "link-arrow",
								href: "/contacto",
								children: "Escribirnos"
							})
						]
					})
				] }),
				/* @__PURE__ */ jsx(Melon, { className: "notfound__melon" })
			]
		})
	})] });
}
// src/App.tsx
function Page({ page }) {
	switch (page) {
		case "about": return /* @__PURE__ */ jsx(About, {});
		case "normativa": return /* @__PURE__ */ jsx(Normativa, {});
		case "catalogos": return /* @__PURE__ */ jsx(Catalogos, {});
		case "contacto": return /* @__PURE__ */ jsx(Contacto, {});
		case "privacidad": return /* @__PURE__ */ jsx(Privacidad, {});
		case "proteccion-datos": return /* @__PURE__ */ jsx(ProteccionDatos, {});
		case "cookies": return /* @__PURE__ */ jsx(PoliticaCookies, {});
		case "404": return /* @__PURE__ */ jsx(NotFound, {});
		default: return /* @__PURE__ */ jsx(Home, {});
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
	return /* @__PURE__ */ jsx("div", {
		className: "scroll-progress",
		"aria-hidden": "true"
	});
}
function App({ page }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("a", {
			className: "skip-link",
			href: "#contenido",
			children: "Saltar al contenido"
		}),
		/* @__PURE__ */ jsx(ScrollProgress, {}),
		/* @__PURE__ */ jsx(Header, { page }),
		/* @__PURE__ */ jsx("main", {
			id: "contenido",
			className: "site-main",
			children: /* @__PURE__ */ jsx(Page, { page })
		}),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsx(CookieBanner, {})
	] });
}
// src/entry-server.tsx
function render(page) {
	return { html: renderToStaticMarkup(/* @__PURE__ */ jsx(App, { page })) };
}
export { render, routes };
