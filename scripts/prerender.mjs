/**
 * Genera una carpeta con HTML estático por ruta a partir del bundle SSR de Vite.
 * Cada URL publicada entrega contenido real sin ejecutar JavaScript.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const entry = await import(pathToFileURL(path.join(root, "dist-server", "entry-server.js")).href);
const { render, routes } = entry;

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const head = (route) =>
  [
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(route.keywords.join(", "))}" />`,
    `<meta name="robots" content="${route.index ? "index, follow" : "noindex, follow"}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="VESTIALPRO" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
  ].join("\n    ");

for (const route of routes) {
  const { html } = render(route.page);
  const document = template
    .replace("<title>VESTIALPRO · Ropa laboral y EPI en Torre Pacheco</title>", `<title>${escapeHtml(route.title)}</title>`)
    .replace("<!--app-head-->", head(route))
    .replace(
      '<div id="root"><!--app-html--></div>',
      `<div id="root">${html}</div>`,
    )
    .replace('<body data-page="home">', `<body data-page="${route.page}">`);

  const target =
    route.page === "404"
      ? path.join(dist, "404.html")
      : route.path === "/"
        ? path.join(dist, "index.html")
        : path.join(dist, route.path.replace(/^\//, ""), "index.html");

  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, document, "utf8");
  console.log(`prerender ${route.path} -> ${path.relative(root, target)}`);
}

console.log(`prerender listo: ${routes.length} rutas`);
