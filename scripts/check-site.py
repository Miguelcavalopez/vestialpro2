"""Comprobación de humo: interacción de la tabla normativa e hidratación del sitio compilado.

Uso: python3 scripts/check-site.py http://localhost:3000
"""
import sys

from playwright.sync_api import sync_playwright


def launch(playwright):
    for options in ({}, {"executable_path": "/usr/bin/chromium"}, {"channel": "chrome"}):
        try:
            return playwright.chromium.launch(args=["--no-sandbox"], **options)
        except Exception:  # noqa: BLE001 - se prueban varios binarios
            continue
    raise RuntimeError("No hay Chromium disponible")


def main() -> None:
    base = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000"
    with sync_playwright() as playwright:
        browser = launch(playwright)
        page = browser.new_page(viewport={"width": 1440, "height": 1000})
        problems: list[str] = []
        page.on("console", lambda message: problems.append(f"console {message.type}: {message.text}") if message.type == "error" else None)
        page.on("pageerror", lambda error: problems.append(f"pageerror: {error}"))

        page.goto(f"{base}/normativa", wait_until="networkidle")
        page.wait_for_timeout(600)

        total_rows = page.locator(".standards-table tbody tr").count()
        page.get_by_role("button", name="Calzado", exact=True).click()
        page.wait_for_timeout(250)
        filtered_rows = page.locator(".standards-table tbody tr").count()
        first_norm = page.locator(".standards-table tbody th").first.inner_text()

        page.get_by_role("button", name="Todas", exact=True).click()
        page.wait_for_timeout(200)
        restored_rows = page.locator(".standards-table tbody tr").count()

        page.locator(".faq__item summary").first.click()
        page.wait_for_timeout(250)
        faq_open = page.locator(".faq__item").first.get_attribute("open") is not None

        helmets = page.locator("canvas").count()

        page.goto(f"{base}/", wait_until="networkidle")
        page.wait_for_timeout(1800)
        home_canvas = page.locator("canvas").count()
        home_title = page.title()
        banner = page.locator(".cookie-banner").count()
        if banner:
            page.get_by_role("button", name="Entendido").click()
            page.wait_for_timeout(200)
        dismissed = page.locator(".cookie-banner").count()

        print(f"normativa filas totales: {total_rows}")
        print(f"normativa filas filtradas (Calzado): {filtered_rows} -> {first_norm}")
        print(f"normativa filas restauradas: {restored_rows}")
        print(f"faq abierto: {faq_open}")
        print(f"canvas en normativa: {helmets}")
        print(f"titulo inicio: {home_title}")
        print(f"canvas en inicio: {home_canvas}")
        print(f"aviso cookies mostrado: {banner}, cerrado tras aceptar: {dismissed}")
        print("errores de consola:" if problems else "sin errores de consola")
        for problem in problems:
            print("  -", problem)

        browser.close()


if __name__ == "__main__":
    main()
