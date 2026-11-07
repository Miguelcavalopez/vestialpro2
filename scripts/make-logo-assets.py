"""Derive web-ready brand assets from the supplied VESTIALPRO logo.

The source is a flat studio render on white. Instead of a luminance key (which leaves a
light fringe over dark surfaces) each pixel is matted against the two brand inks: the
closest ink wins the colour and the coverage becomes the alpha, so edges stay clean on
any background.

Outputs (public/brand):
  logo-color.png  - transparent, original navy + orange wordmark
  logo-light.png  - transparent, cream + orange wordmark for dark surfaces
  mark.png        - the "V" symbol only, transparent
  mark-light.png  - the "V" symbol in cream + orange
  favicon.png     - square icon on a cream plate

Usage: python3 scripts/make-logo-assets.py
"""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "brand"

NAVY = np.array([11, 34, 66], dtype=np.float64)
ORANGE = np.array([247, 110, 20], dtype=np.float64)
CREAM = (244, 241, 234)
WHITE = np.array([255.0, 255.0, 255.0])


def find_source() -> Path:
    candidates = sorted(Path("/home/ubuntu/upload").glob("*.png"))
    candidates += sorted((ROOT.parent / "projects").glob("**/*.png"))
    if not candidates:
        raise FileNotFoundError("No source logo found")
    return candidates[0]


def matte(image: Image.Image) -> Image.Image:
    """Cut the artwork out of white by growing its solid core into the anti-aliased edge.

    Each edge pixel borrows the colour of the nearest solid ink (so the navy blade keeps
    its gradient) and receives coverage from its own lightness. Nothing is composited onto
    white, so the mark stays clean over dark surfaces too.
    """
    rgb = np.asarray(image.convert("RGB"), dtype=np.float64)
    height, width, _ = rgb.shape
    luminance = rgb @ np.array([0.299, 0.587, 0.114])

    distance = 255.0 - rgb.min(axis=2)
    filled = distance > 58.0
    color = rgb.copy()
    alpha = np.where(filled, 1.0, 0.0)

    for _ in range(5):
        frontier = ~filled & (
            np.roll(filled, 1, axis=0)
            | np.roll(filled, -1, axis=0)
            | np.roll(filled, 1, axis=1)
            | np.roll(filled, -1, axis=1)
        )
        if not frontier.any():
            break
        neighbours = np.zeros((height, width, 3))
        weight = np.zeros((height, width))
        for axis, shift in ((0, 1), (0, -1), (1, 1), (1, -1)):
            shifted_filled = np.roll(filled, shift, axis=axis)
            shifted_color = np.roll(color, shift, axis=axis)
            neighbours += np.where(shifted_filled[..., None], shifted_color, 0.0)
            weight += shifted_filled.astype(float)
        has_neighbour = frontier & (weight > 0)
        borrowed = neighbours / np.maximum(weight, 1.0)[..., None]
        ink_luminance = borrowed @ np.array([0.299, 0.587, 0.114])
        coverage = np.clip(
            (255.0 - luminance) / np.maximum(255.0 - ink_luminance, 1.0), 0.0, 1.0
        )
        color = np.where(has_neighbour[..., None], borrowed, color)
        alpha = np.where(has_neighbour, coverage, alpha)
        filled = filled | has_neighbour

    alpha = np.where(alpha < 0.08, 0.0, alpha)
    rgba = np.dstack([np.clip(color, 0, 255), alpha[..., None] * 255.0]).astype(np.uint8)
    return Image.fromarray(rgba, mode="RGBA").crop(Image.fromarray(rgba).getbbox())


def split_mark(logo: Image.Image) -> tuple[Image.Image, Image.Image]:
    """Cut the symbol from the wordmark where the least ink crosses a column.

    The mark and the wordmark almost touch, so the thinnest column in the 15–30% band
    is the safe boundary.
    """
    alpha = np.asarray(logo.split()[-1], dtype=np.float64)
    columns = (alpha > 200).sum(axis=0)
    start, end = int(logo.width * 0.16), int(logo.width * 0.30)
    cut = start + int(np.argmin(columns[start:end]))
    return logo.crop((0, 0, cut, logo.height)), logo.crop((cut, 0, logo.width, logo.height))


def recolour(image: Image.Image, target: tuple[int, int, int], navy_only: bool = True) -> Image.Image:
    """Turn the blue ink into another colour, leaving the orange ink untouched.

    The blade carries a blue gradient, so the match is hue based rather than exact.
    """
    rgba = np.asarray(image).astype(np.int16)
    red, green, blue = rgba[..., 0], rgba[..., 1], rgba[..., 2]
    if navy_only:
        match = (blue > red + 12) & (blue >= green - 6) & (rgba[..., 3] > 4)
    else:
        match = np.abs(rgba[..., :3] - np.array([11, 34, 66])).sum(axis=2) < 40
    rgba[..., 0] = np.where(match, target[0], rgba[..., 0])
    rgba[..., 1] = np.where(match, target[1], rgba[..., 1])
    rgba[..., 2] = np.where(match, target[2], rgba[..., 2])
    return Image.fromarray(rgba.astype(np.uint8), mode="RGBA")


def square_canvas(image: Image.Image, size: int, ratio: float, background: tuple[int, int, int, int]) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), background)
    target = int(size * ratio)
    copy = image.copy()
    copy.thumbnail((target, target), Image.LANCZOS)
    canvas.alpha_composite(copy, ((size - copy.width) // 2, (size - copy.height) // 2))
    return canvas


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    logo = matte(Image.open(find_source()))
    logo.save(OUT / "logo-color.png")
    recolour(logo, CREAM).save(OUT / "logo-light.png")

    mark, _wordmark = split_mark(logo)
    mark.save(OUT / "mark.png")
    recolour(mark, CREAM).save(OUT / "mark-light.png")

    square_canvas(mark, 512, 0.72, CREAM + (255,)).save(OUT / "favicon.png")
    square_canvas(mark, 180, 0.72, CREAM + (255,)).save(ROOT / "public" / "apple-touch-icon.png")

    for name in ("logo-color.png", "logo-light.png", "mark.png", "mark-light.png", "favicon.png"):
        with Image.open(OUT / name) as check:
            print(name, check.size)


if __name__ == "__main__":
    main()
