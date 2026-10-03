"""Face analysis: InsightFace (detection, 5-pt kps, age/sex, ArcFace embedding) +
MediaPipe Face Mesh (dense landmarks → proportions, smile) + colorimetry (skin tone)."""
from __future__ import annotations

import logging
import threading
from typing import Any

import cv2
import numpy as np

from . import geometry, skin
from .config import Settings
from .schemas import FaceAnalysis, Pose, Proportions, Quality, Skin

log = logging.getLogger("face-service")


class FaceAnalyzer:
    """Loads models once per process. Thread-safe for concurrent requests (per-model locks)."""

    def __init__(self, settings: Settings) -> None:
        from insightface.app import FaceAnalysis as InsightFace
        import mediapipe as mp

        self.settings = settings
        self._insight = InsightFace(
            name=settings.insightface_model,
            root=settings.insightface_root,
            # landmark_3d_68 provides head pose (pitch/yaw/roll) robust to smiles and roll.
            allowed_modules=["detection", "landmark_3d_68", "genderage", "recognition"],
            providers=["CUDAExecutionProvider", "CPUExecutionProvider"] if settings.insightface_ctx_id >= 0 else ["CPUExecutionProvider"],
        )
        self._insight.prepare(ctx_id=settings.insightface_ctx_id, det_size=(settings.insightface_det_size, settings.insightface_det_size))
        self._mesh = mp.solutions.face_mesh.FaceMesh(
            static_image_mode=True, max_num_faces=1, refine_landmarks=True, min_detection_confidence=0.5
        )
        self._mesh_lock = threading.Lock()
        log.info("models loaded: insightface=%s mediapipe=face_mesh", settings.insightface_model)

    def _landmarks(self, crop_rgb: np.ndarray) -> np.ndarray | None:
        with self._mesh_lock:  # MediaPipe graphs are not re-entrant
            res = self._mesh.process(crop_rgb)
        if not res.multi_face_landmarks:
            return None
        h, w = crop_rgb.shape[:2]
        lm = res.multi_face_landmarks[0].landmark
        return np.array([[p.x * w, p.y * h, p.z * w] for p in lm], dtype=np.float32)

    def _detect(self, img_bgr: np.ndarray) -> tuple[list[Any], np.ndarray, int, float]:
        """Returns (faces, image used, padding px, upscale factor)."""
        faces: list[Any] = self._insight.get(img_bgr)
        if faces:
            return faces, img_bgr, 0, 1.0
        # Tightly cropped selfies/avatars: the detector needs context around the face.
        h, w = img_bgr.shape[:2]
        pad = int(max(h, w) * 0.6)
        padded = cv2.copyMakeBorder(img_bgr, pad, pad, pad, pad, cv2.BORDER_CONSTANT, value=(127, 127, 127))
        scale = max(1.0, 320 / max(padded.shape[:2]))
        if scale > 1.0:
            padded = cv2.resize(padded, None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)
        return self._insight.get(padded), padded, pad, scale

    def analyze(self, original_bgr: np.ndarray) -> FaceAnalysis:
        faces, img_bgr, pad, scale = self._detect(original_bgr)
        h, w = img_bgr.shape[:2]
        oh, ow = original_bgr.shape[:2]

        def to_original(x: float, y: float) -> tuple[float, float]:
            return (min(ow, max(0.0, x / scale - pad)), min(oh, max(0.0, y / scale - pad)))
        gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)
        if not faces:
            return FaceAnalysis(
                faceCount=0, detScore=0.0, bbox=None, pose=Pose(yaw=0, pitch=0, roll=0), age=None, sex=None,
                embedding=None, proportions=None, skin=None, smile=0.0,
                quality=Quality(sharpness=float(cv2.Laplacian(gray, cv2.CV_64F).var()), brightness=float(gray.mean() / 255), faceAreaRatio=0.0),
            )
        # Ignore tiny background faces when counting (posters, crowds far away).
        areas = [max(0.0, (f.bbox[2] - f.bbox[0]) * (f.bbox[3] - f.bbox[1])) for f in faces]
        main_idx = int(np.argmax(areas))
        main = faces[main_idx]
        significant = sum(1 for a in areas if a >= areas[main_idx] * 0.25)

        x1, y1, x2, y2 = [float(v) for v in main.bbox]
        bw, bh = x2 - x1, y2 - y1
        # Expanded crop for the dense mesh (forehead/chin need margin).
        cx1, cy1 = int(max(0, x1 - 0.35 * bw)), int(max(0, y1 - 0.45 * bh))
        cx2, cy2 = int(min(w, x2 + 0.35 * bw)), int(min(h, y2 + 0.3 * bh))
        crop = img_bgr[cy1:cy2, cx1:cx2]
        face_gray = cv2.resize(cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY), (256, 256))

        proportions = None
        smile = 0.0
        skin_out = None
        lms = self._landmarks(cv2.cvtColor(crop, cv2.COLOR_BGR2RGB)) if crop.size else None
        if lms is not None:
            try:
                p = geometry.proportions(lms)
                proportions = Proportions(**p.__dict__)
                smile = geometry.smile_score(lms)
            except ValueError:
                pass
            radius = max(3, int(bw * 0.04))
            centers = [(float(lms[i, 0]), float(lms[i, 1])) for i in (*geometry.CHEEK_SAMPLE, geometry.FOREHEAD_SAMPLE)]
            lab = skin.sample_skin(crop, centers, radius, skin.gray_world_gains(original_bgr))
            if lab:
                skin_out = Skin(lab=lab, hex=skin.lab_to_hex(lab), mst=skin.nearest_mst(lab))

        pose3d = getattr(main, "pose", None)
        if pose3d is not None and len(pose3d) == 3:
            pitch, yaw, roll = (round(float(v), 1) for v in pose3d)
        else:
            yaw, pitch, roll = geometry.pose_from_kps(np.asarray(main.kps))
        sex = getattr(main, "sex", None)
        embedding = getattr(main, "normed_embedding", None)
        return FaceAnalysis(
            faceCount=significant,
            detScore=round(float(main.det_score), 4),
            bbox=(
                round(to_original(x1, y1)[0] / ow, 4),
                round(to_original(x1, y1)[1] / oh, 4),
                round(to_original(x2, y2)[0] / ow, 4),
                round(to_original(x2, y2)[1] / oh, 4),
            ),
            pose=Pose(yaw=yaw, pitch=pitch, roll=roll),
            age=float(main.age) if getattr(main, "age", None) is not None else None,
            sex=sex if sex in ("M", "F") else None,
            embedding=[round(float(v), 6) for v in embedding] if embedding is not None else None,
            proportions=proportions,
            skin=skin_out,
            smile=round(smile, 3),
            quality=Quality(
                sharpness=round(float(cv2.Laplacian(face_gray, cv2.CV_64F).var()), 2),
                brightness=round(float(face_gray.mean() / 255), 4),
                faceAreaRatio=round(min(1.0, (bw / scale) * (bh / scale) / (ow * oh)), 4),
            ),
        )


class BackgroundRemover:
    def __init__(self, settings: Settings) -> None:
        from rembg import new_session

        self._session = new_session(settings.rembg_model)
        self._lock = threading.Lock()

    def remove(self, data: bytes) -> bytes:
        from rembg import remove

        with self._lock:
            out = remove(data, session=self._session, post_process_mask=True)
        return out if isinstance(out, bytes) else bytes(out)


def decode_image(data: bytes, max_side: int = 1600) -> np.ndarray:
    arr = np.frombuffer(data, dtype=np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img is None:
        raise ValueError("unreadable image")
    h, w = img.shape[:2]
    scale = max_side / max(h, w)
    if scale < 1:
        img = cv2.resize(img, (int(w * scale), int(h * scale)), interpolation=cv2.INTER_AREA)
    return img
