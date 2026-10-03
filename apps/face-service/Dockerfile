# syntax=docker/dockerfile:1.7
FROM python:3.11-slim AS base
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 PIP_NO_CACHE_DIR=1 \
    INSIGHTFACE_ROOT=/models/insightface U2NET_HOME=/models/rembg
RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential g++ libgl1 libglib2.0-0 curl \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /srv
COPY requirements.txt .
RUN pip install -r requirements.txt

# Bake model weights into the image: no cold-start downloads, reproducible deploys.
FROM base AS models
RUN python - <<'PY'
from insightface.app import FaceAnalysis
fa = FaceAnalysis(name="buffalo_l", root="/models/insightface", allowed_modules=["detection", "genderage", "recognition"], providers=["CPUExecutionProvider"])
fa.prepare(ctx_id=-1, det_size=(640, 640))
from rembg import new_session
new_session("isnet-general-use")
PY

FROM models AS runtime
RUN apt-get purge -y build-essential g++ && apt-get autoremove -y && useradd -r -u 10001 face && chown -R face /models
COPY app ./app
USER face
EXPOSE 8000
HEALTHCHECK --interval=15s --timeout=3s --start-period=60s CMD curl -fsS localhost:8000/health || exit 1
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1", "--timeout-keep-alive", "30"]
