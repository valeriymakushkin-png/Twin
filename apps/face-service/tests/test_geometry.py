import math

import numpy as np
import pytest

from app import geometry


def synthetic_face(width=200.0, height=260.0, roll_deg=0.0, smile=False) -> np.ndarray:
    """Builds a 478-point landmark array with plausible positions for the indices we use."""
    pts = np.zeros((478, 3), dtype=np.float32)
    cx, cy = 300.0, 300.0
    def put(i, x, y):
        pts[i, :2] = (cx + x, cy + y)
    put(geometry.FOREHEAD_TOP, 0, -height / 2)
    put(geometry.CHIN, 0, height / 2)
    put(geometry.CHEEK_LEFT, -width / 2, 0)
    put(geometry.CHEEK_RIGHT, width / 2, 0)
    put(geometry.JAW_LEFT, -width * 0.4, height * 0.3)
    put(geometry.JAW_RIGHT, width * 0.4, height * 0.3)
    put(geometry.TEMPLE_LEFT, -width * 0.45, -height * 0.3)
    put(geometry.TEMPLE_RIGHT, width * 0.45, -height * 0.3)
    # eyes: outer, inner, upper, lower
    put(33, -70, -30); put(133, -25, -30); put(159, -47, -40); put(145, -47, -20)
    put(263, 70, -30); put(362, 25, -30); put(386, 47, -40); put(374, 47, -20)
    put(geometry.IRIS_A, -47, -30); put(geometry.IRIS_B, 47, -30)
    put(geometry.NOSE_BRIDGE, 0, -30); put(geometry.SUBNASALE, 0, 45)
    put(geometry.ALAR_LEFT, -24, 38); put(geometry.ALAR_RIGHT, 24, 38)
    mouth_w = 50 if smile else 36
    corner_y = 66 if smile else 75
    put(geometry.MOUTH_LEFT, -mouth_w, corner_y); put(geometry.MOUTH_RIGHT, mouth_w, corner_y)
    put(geometry.UPPER_LIP_TOP, 0, 64); put(geometry.UPPER_LIP_BOTTOM, 0, 72)
    put(geometry.LOWER_LIP_TOP, 0, 80 if smile else 74); put(geometry.LOWER_LIP_BOTTOM, 0, 88)
    if roll_deg:
        a = math.radians(roll_deg)
        rot = np.array([[math.cos(a), -math.sin(a)], [math.sin(a), math.cos(a)]])
        pts[:, :2] = (pts[:, :2] - [cx, cy]) @ rot.T + [cx, cy]
    return pts


def test_proportions_basic():
    p = geometry.proportions(synthetic_face())
    assert p.widthToHeight == pytest.approx(200 / 260, rel=1e-3)
    assert p.jawToCheek == pytest.approx(0.8, rel=1e-3)
    assert p.eyeSpacing == pytest.approx(94 / 200, rel=1e-3)
    assert abs(p.canthalTiltDeg) < 0.5
    assert p.noseWidthRatio == pytest.approx(48 / 50, rel=1e-3)


def test_proportions_are_roll_invariant():
    a = geometry.proportions(synthetic_face())
    b = geometry.proportions(synthetic_face(roll_deg=17))
    assert a.widthToHeight == pytest.approx(b.widthToHeight, abs=1e-3)
    assert a.canthalTiltDeg == pytest.approx(b.canthalTiltDeg, abs=0.2)


def test_smile_detection():
    assert geometry.smile_score(synthetic_face(smile=True)) > geometry.smile_score(synthetic_face()) + 0.3


def test_pose_from_kps():
    frontal = np.array([[100, 100], [160, 100], [130, 130], [110, 160], [150, 160]], dtype=np.float32)
    yaw, pitch, roll = geometry.pose_from_kps(frontal)
    assert abs(yaw) < 1 and abs(roll) < 1
    turned = frontal.copy(); turned[2, 0] += 20
    assert geometry.pose_from_kps(turned)[0] > 20


def test_pose_from_kps_is_roll_invariant():
    frontal = np.array([[100, 100], [160, 100], [130, 130], [110, 160], [150, 160]], dtype=np.float32)
    a = math.radians(25)
    rot = np.array([[math.cos(a), -math.sin(a)], [math.sin(a), math.cos(a)]])
    rolled = (frontal - [130, 100]) @ rot.T + [130, 100]
    yaw, _, roll = geometry.pose_from_kps(rolled.astype(np.float32))
    assert abs(yaw) < 1
    assert roll == pytest.approx(25, abs=0.5)
