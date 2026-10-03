import numpy as np

from app import skin


def test_mst_roundtrip():
    for tone, hex_color in skin.MST_HEX.items():
        assert skin.nearest_mst(tuple(skin.MST_LAB[tone])) == tone
        assert skin.lab_to_hex(tuple(skin.MST_LAB[tone]))[0] == "#"


def test_sample_skin_on_uniform_patch():
    img = np.full((200, 200, 3), (120, 160, 210), dtype=np.uint8)  # BGR warm skin-like
    lab = skin.sample_skin(img, [(100.0, 100.0)], 20)
    assert lab is not None and 0 < lab[0] < 100
