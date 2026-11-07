import "@fontsource-variable/archivo/standard.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/pages.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { routes, type PageId } from "./data/routes";

const byPath = new Map(routes.map((route) => [route.path, route.page]));
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const page: PageId = byPath.get(path) ?? (path === "/" ? "home" : "404");

const container = document.getElementById("root");
if (container) {
  const app = <App page={page} />;
  if (container.firstElementChild) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}
