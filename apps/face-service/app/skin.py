"""Skin tone estimation in CIE Lab and mapping to the Monk Skin Tone scale."""
from __future__ import annotations

import cv2
import numpy as np

MST_HEX = {
    "mst-1": "#f6ede4", "mst-2": "#f3e7db", "mst-3": "#f7ead0", "mst-4": "#eadaba", "mst-5": "#d7bd96",
    "mst-6": "#a07e56", "mst-7": "#825c43", "mst-8": "#604134", "mst-9": "#3a312a", "mst-10": "#292420",
}


def _hex_to_lab(hex_color: str) -> np.ndarray:
    rgb = np.array([[[int(hex_color[i : i + 2], 16) for i in (1, 3, 5)]]], dtype=np.uint8)
    lab = cv2.cvtColor(rgb, cv2.COLOR_RGB2LAB).astype(np.float32)[0, 0]
    return np.array([lab[0] * 100 / 255, lab[1] - 128, lab[2] - 128])


MST_LAB = {k: _hex_to_lab(v) for k, v in MST_HEX.items()}


def gray_world_gains(scene_bgr: np.ndarray) -> np.ndarray:
    """Per-channel gains from the WHOLE photo (gray-world assumption holds for scenes, not for
    a skin-dominated face crop). Clamped to ±10% so it only removes strong colour casts."""
    means = scene_bgr.reshape(-1, 3).astype(np.float32).mean(axis=0)
    return np.clip(means.mean() / np.maximum(means, 1), 0.9, 1.1)


def sample_skin(
    img_bgr: np.ndarray,
    centers: list[tuple[float, float]],
    radius: int,
    gains: np.ndarray | None = None,
) -> tuple[float, float, float] | None:
    balanced = img_bgr if gains is None else np.clip(img_bgr.astype(np.float32) * gains, 0, 255).astype(np.uint8)
    lab = cv2.cvtColor(balanced, cv2.COLOR_BGR2LAB).astype(np.float32)
    h, w = lab.shape[:2]
    samples = []
    for cx, cy in centers:
        x0, x1 = max(0, int(cx - radius)), min(w, int(cx + radius))
        y0, y1 = max(0, int(cy - radius)), min(h, int(cy + radius))
        if x1 <= x0 or y1 <= y0:
            continue
        patch = lab[y0:y1, x0:x1].reshape(-1, 3)
        light = patch[:, 0] * 100 / 255
        keep = (light > 12) & (light < 95)  # drop deep shadows and specular highlights
        if keep.sum() > 10:
            samples.append(patch[keep])
    if not samples:
        return None
    pix = np.concatenate(samples)
    med = np.median(pix, axis=0)
    return float(med[0] * 100 / 255), float(med[1] - 128), float(med[2] - 128)


def lab_to_hex(lab: tuple[float, float, float]) -> str:
    arr = np.array([[[lab[0] * 255 / 100, lab[1] + 128, lab[2] + 128]]], dtype=np.float32)
    rgb = cv2.cvtColor(np.clip(arr, 0, 255).astype(np.uint8), cv2.COLOR_LAB2RGB)[0, 0]
    return "#%02x%02x%02x" % tuple(int(c) for c in rgb)


def nearest_mst(lab: tuple[float, float, float]) -> str:
    l, a, b = lab
    def dist(ref: np.ndarray) -> float:
        return float(np.sqrt(1.6 * (l - ref[0]) ** 2 + (a - ref[1]) ** 2 + (b - ref[2]) ** 2))
    return min(MST_LAB, key=lambda k: dist(MST_LAB[k]))
