from typing import Literal, Optional

from pydantic import BaseModel, Field, model_validator


class ImageInput(BaseModel):
    id: str = Field(min_length=1, max_length=64)
    image_b64: Optional[str] = None
    url: Optional[str] = None

    @model_validator(mode="after")
    def one_source(self) -> "ImageInput":
        if bool(self.image_b64) == bool(self.url):
            raise ValueError("provide exactly one of image_b64 or url")
        return self


class AnalyzeRequest(BaseModel):
    images: list[ImageInput] = Field(min_length=1, max_length=24)


class Pose(BaseModel):
    yaw: float
    pitch: float
    roll: float


class Proportions(BaseModel):
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


class Skin(BaseModel):
    lab: tuple[float, float, float]
    hex: str
    mst: str


class Quality(BaseModel):
    sharpness: float
    brightness: float
    faceAreaRatio: float


class FaceAnalysis(BaseModel):
    """Mirrors `FaceAnalysis` in apps/api/src/ai/face/face.types.ts (camelCase on purpose)."""

    faceCount: int
    detScore: float
    bbox: Optional[tuple[float, float, float, float]]
    pose: Pose
    age: Optional[float]
    sex: Optional[Literal["M", "F"]]
    embedding: Optional[list[float]]
    proportions: Optional[Proportions]
    skin: Optional[Skin]
    smile: float
    quality: Quality


class AnalyzeResult(BaseModel):
    id: str
    ok: bool
    error: Optional[str] = None
    analysis: Optional[FaceAnalysis] = None


class AnalyzeResponse(BaseModel):
    results: list[AnalyzeResult]
