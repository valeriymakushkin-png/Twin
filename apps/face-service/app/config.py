from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Runtime configuration (env vars, prefix-free to match the Node services)."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    face_service_token: str = "dev-face-token"
    # InsightFace model pack: buffalo_l (accuracy) or buffalo_s (speed).
    insightface_model: str = "buffalo_l"
    # Model cache directory (baked into the Docker image at /models/insightface).
    insightface_root: str = "~/.insightface"
    insightface_det_size: int = 640
    # -1 = CPU, >= 0 = CUDA device id (requires onnxruntime-gpu image).
    insightface_ctx_id: int = -1
    rembg_model: str = "isnet-general-use"
    max_image_bytes: int = 15 * 1024 * 1024
    max_concurrent_inferences: int = 2
    download_timeout_s: float = 15.0
    log_level: str = "info"


@lru_cache
def get_settings() -> Settings:
    return Settings()
