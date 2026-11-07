import { renderToStaticMarkup } from "react-dom/server";
import { App } from "./App";
import { routes, type PageId } from "./data/routes";

export { routes };

export function render(page: PageId): { html: string } {
  return { html: renderToStaticMarkup(<App page={page} />) };
}
