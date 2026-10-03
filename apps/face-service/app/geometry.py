"""Pure landmark geometry (MediaPipe Face Mesh, 468/478 points) → facial proportions.

Kept free of model dependencies so it can be unit-tested with synthetic landmarks.
Indices reference the canonical MediaPipe face mesh topology.
"""
from __future__ import annotations

import math
from dataclasses import dataclass

import numpy as np

# Face outline / structure
FOREHEAD_TOP = 10
CHIN = 152
CHEEK_LEFT, CHEEK_RIGHT = 234, 454
JAW_LEFT, JAW_RIGHT = 172, 397
TEMPLE_LEFT, TEMPLE_RIGHT = 54, 284
# Eyes (corner, corner, upper lid, lower lid)
EYE_A = (33, 133, 159, 145)   # outer, inner, upper, lower
EYE_B = (263, 362, 386, 374)  # outer, inner, upper, lower
IRIS_A, IRIS_B = 468, 473     # available with refine_landmarks=True
# Nose
NOSE_BRIDGE = 168
SUBNASALE = 2
ALAR_LEFT, ALAR_RIGHT = 64, 294
# Mouth
MOUTH_LEFT, MOUTH_RIGHT = 61, 291
UPPER_LIP_TOP, UPPER_LIP_BOTTOM = 0, 13
LOWER_LIP_TOP, LOWER_LIP_BOTTOM = 14, 17
# Cheek sampling centers for skin tone
CHEEK_SAMPLE = (50, 280)
FOREHEAD_SAMPLE = 151


@dataclass(frozen=True)
class Proportions:
    widthToHeight: float
    jawToCheek: float
    foreheadToCheek: float
    eyeSpacing: float
    eyeOpenness: float
    canthalTiltDeg: float
    noseWidthRatio: float
    noseLengthRatio: float
    mouthWidthRatio: float
    lipFullness: float


def _d(pts: np.ndarray, a: int, b: int) -> float:
    return float(np.linalg.norm(pts[a, :2] - pts[b, :2]))


def deroll(pts: np.ndarray) -> np.ndarray:
    """Rotates landmarks so the eye line is horizontal (removes head roll)."""
    a = pts[EYE_A[1], :2]
    b = pts[EYE_B[1], :2]
    angle = math.atan2(b[1] - a[1], b[0] - a[0])
    c, s = math.cos(-angle), math.sin(-angle)
    rot = np.array([[c, -s], [s, c]])
    center = (a + b) / 2
    out = pts.copy()
    out[:, :2] = (pts[:, :2] - center) @ rot.T + center
    return out


def proportions(landmarks: np.ndarray) -> Proportions:
    """landmarks: (N, 3) array in pixel units (x right, y down)."""
    pts = deroll(landmarks)
    face_h = _d(pts, FOREHEAD_TOP, CHIN)
    face_w = _d(pts, CHEEK_LEFT, CHEEK_RIGHT)
    if face_h <= 0 or face_w <= 0:
        raise ValueError("degenerate landmarks")

    if pts.shape[0] > IRIS_B:
        eye_spacing = _d(pts, IRIS_A, IRIS_B)
    else:
        ca = pts[[EYE_A[0], EYE_A[1]], :2].mean(axis=0)
        cb = pts[[EYE_B[0], EYE_B[1]], :2].mean(axis=0)
        eye_spacing = float(np.linalg.norm(ca - cb))

    def openness(eye: tuple[int, int, int, int]) -> float:
        outer, inner, upper, lower = eye
        width = _d(pts, outer, inner)
        return _d(pts, upper, lower) / width if width else 0.0

    def tilt(eye: tuple[int, int, int, int]) -> float:
        outer, inner, _, _ = eye
        dx = abs(pts[outer, 0] - pts[inner, 0])
        dy = pts[inner, 1] - pts[outer, 1]  # outer corner higher (smaller y) → positive
        return math.degrees(math.atan2(dy, dx)) if dx else 0.0

    intercanthal = _d(pts, EYE_A[1], EYE_B[1])
    nose_w = _d(pts, ALAR_LEFT, ALAR_RIGHT)
    return Proportions(
        widthToHeight=round(face_w / face_h, 4),
        jawToCheek=round(_d(pts, JAW_LEFT, JAW_RIGHT) / face_w, 4),
        foreheadToCheek=round(_d(pts, TEMPLE_LEFT, TEMPLE_RIGHT) / face_w, 4),
        eyeSpacing=round(eye_spacing / face_w, 4),
        eyeOpenness=round((openness(EYE_A) + openness(EYE_B)) / 2, 4),
        canthalTiltDeg=round((tilt(EYE_A) + tilt(EYE_B)) / 2, 2),
        noseWidthRatio=round(nose_w / intercanthal, 4) if intercanthal else 1.0,
        noseLengthRatio=round(_d(pts, NOSE_BRIDGE, SUBNASALE) / face_h, 4),
        mouthWidthRatio=round(_d(pts, MOUTH_LEFT, MOUTH_RIGHT) / nose_w, 4) if nose_w else 1.5,
        lipFullness=round((_d(pts, UPPER_LIP_TOP, UPPER_LIP_BOTTOM) + _d(pts, LOWER_LIP_TOP, LOWER_LIP_BOTTOM)) / face_h, 4),
    )


def smile_score(landmarks: np.ndarray) -> float:
    """0..1: mouth width relative to face + mouth corners lifted above the lip midline."""
    pts = deroll(landmarks)
    face_w = _d(pts, CHEEK_LEFT, CHEEK_RIGHT)
    face_h = _d(pts, FOREHEAD_TOP, CHIN)
    if not face_w or not face_h:
        return 0.0
    width_term = (_d(pts, MOUTH_LEFT, MOUTH_RIGHT) / face_w - 0.36) / 0.12
    mid_y = (pts[UPPER_LIP_BOTTOM, 1] + pts[LOWER_LIP_TOP, 1]) / 2
    corners_y = (pts[MOUTH_LEFT, 1] + pts[MOUTH_RIGHT, 1]) / 2
    lift_term = ((mid_y - corners_y) / face_h) / 0.03
    teeth_term = (_d(pts, UPPER_LIP_BOTTOM, LOWER_LIP_TOP) / face_h) / 0.06
    score = 0.45 * width_term + 0.35 * lift_term + 0.2 * teeth_term
    return float(max(0.0, min(1.0, score)))


def pose_from_kps(kps: np.ndarray) -> tuple[float, float, float]:
    """Approximate (yaw, pitch, roll) in degrees from InsightFace 5-point landmarks.

    kps rows: left eye, right eye, nose, left mouth, right mouth (image coordinates).
    Positive yaw = nose shifted to image-right = subject turned to their left
    (for non-mirrored photos).
    """
    pts = np.asarray(kps[:5, :2], dtype=np.float64)
    roll = math.degrees(math.atan2(pts[1, 1] - pts[0, 1], pts[1, 0] - pts[0, 0]))
    # De-roll around the eye midpoint so yaw/pitch are measured in the face's own frame.
    c, s = math.cos(math.radians(-roll)), math.sin(math.radians(-roll))
    center = (pts[0] + pts[1]) / 2
    pts = (pts - center) @ np.array([[c, -s], [s, c]]).T + center
    le, re, nose, lm, rm = pts
    eye_mid = (le + re) / 2
    mouth_mid = (lm + rm) / 2
    iod = float(np.linalg.norm(re - le)) or 1.0
    yaw = max(-90.0, min(90.0, (nose[0] - eye_mid[0]) / iod * 110.0))
    vertical = float(np.linalg.norm(mouth_mid - eye_mid)) or 1.0
    # 0.495 = nose position between eyes and mouth in the canonical ArcFace 5-point template.
    pitch = max(-90.0, min(90.0, ((nose[1] - eye_mid[1]) / vertical - 0.495) * 160.0))
    return round(yaw, 1), round(pitch, 1), round(roll, 1)
