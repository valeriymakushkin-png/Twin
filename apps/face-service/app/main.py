"""FastAPI entrypoint.

  POST /v1/analyze             → per-image FaceAnalysis (camelCase JSON for the Node API)
  POST /v1/remove-background   → transparent PNG (rembg)
  GET  /health, /metrics
"""
from __future__ import annotations

import asyncio
import base64
import binascii
import hmac
import logging
import time
from contextlib import asynccontextmanager

import httpx
from fastapi import Depends, FastAPI, Header, HTTPException, Request, Response
from fastapi.concurrency import run_in_threadpool
from prometheus_client import CONTENT_TYPE_LATEST, Counter, Histogram, generate_latest

from .analyzer import BackgroundRemover, FaceAnalyzer, decode_image
from .config import get_settings
from .schemas import AnalyzeRequest, AnalyzeResponse, AnalyzeResult, ImageInput

settings = get_settings()
logging.basicConfig(level=settings.log_level.upper(), format="%(asctime)s %(levelname)s %(name)s %(message)s")
log = logging.getLogger("face-service")

ANALYZE_SECONDS = Histogram("face_analyze_seconds", "Per-image analysis latency", buckets=(0.05, 0.1, 0.25, 0.5, 1, 2, 5))
ANALYZE_TOTAL = Counter("face_analyze_total", "Analysed images", ["outcome"])
REMBG_SECONDS = Histogram("rembg_seconds", "Background removal latency", buckets=(0.25, 0.5, 1, 2, 5, 10))


class State:
    analyzer: FaceAnalyzer | None = None
    remover: BackgroundRemover | None = None
    semaphore: asyncio.Semaphore
    http: httpx.AsyncClient


state = State()


@asynccontextmanager
async def lifespan(_: FastAPI):
    state.semaphore = asyncio.Semaphore(settings.max_concurrent_inferences)
    state.http = httpx.AsyncClient(timeout=settings.download_timeout_s, follow_redirects=True)
    state.analyzer = await run_in_threadpool(FaceAnalyzer, settings)
    try:
        state.remover = await run_in_threadpool(BackgroundRemover, settings)
    except Exception as exc:  # rembg is optional
        log.warning("background removal disabled: %s", exc)
    yield
    await state.http.aclose()


app = FastAPI(title="Mascot AI Face Service", version="1.0.0", lifespan=lifespan)


def require_token(x_service_token: str = Header(default="")) -> None:
    if not hmac.compare_digest(x_service_token, settings.face_service_token):
        raise HTTPException(status_code=401, detail="invalid service token")


async def load_bytes(item: ImageInput) -> bytes:
    if item.image_b64:
        try:
            data = base64.b64decode(item.image_b64, validate=True)
        except (binascii.Error, ValueError) as exc:
            raise ValueError("invalid base64") from exc
    else:
        async with state.http.stream("GET", item.url or "") as res:
            res.raise_for_status()
            chunks, size = [], 0
            async for chunk in res.aiter_bytes():
                size += len(chunk)
                if size > settings.max_image_bytes:
                    raise ValueError("image too large")
                chunks.append(chunk)
            data = b"".join(chunks)
    if len(data) > settings.max_image_bytes:
        raise ValueError("image too large")
    return data


async def analyze_one(item: ImageInput) -> AnalyzeResult:
    started = time.perf_counter()
    try:
        img = decode_image(await load_bytes(item))
        async with state.semaphore:
            analysis = await run_in_threadpool(state.analyzer.analyze, img)  # type: ignore[union-attr]
        ANALYZE_TOTAL.labels("ok").inc()
        return AnalyzeResult(id=item.id, ok=True, analysis=analysis)
    except Exception as exc:
        ANALYZE_TOTAL.labels("error").inc()
        log.warning("analyze %s failed: %s", item.id, exc)
        return AnalyzeResult(id=item.id, ok=False, error=str(exc)[:300])
    finally:
        ANALYZE_SECONDS.observe(time.perf_counter() - started)


@app.get("/health")
async def health() -> dict:
    return {"status": "ok" if state.analyzer else "loading", "rembg": state.remover is not None}


@app.get("/metrics")
async def metrics() -> Response:
    return Response(generate_latest(), media_type=CONTENT_TYPE_LATEST)


@app.post("/v1/analyze", response_model=AnalyzeResponse, dependencies=[Depends(require_token)])
async def analyze(req: AnalyzeRequest) -> AnalyzeResponse:
    if state.analyzer is None:
        raise HTTPException(status_code=503, detail="models loading")
    results = await asyncio.gather(*(analyze_one(item) for item in req.images))
    return AnalyzeResponse(results=list(results))


@app.post("/v1/remove-background", dependencies=[Depends(require_token)])
async def remove_background(request: Request) -> Response:
    if state.remover is None:
        raise HTTPException(status_code=503, detail="background removal unavailable")
    body = await request.body()
    if not body or len(body) > settings.max_image_bytes:
        raise HTTPException(status_code=413, detail="invalid image size")
    started = time.perf_counter()
    async with state.semaphore:
        png = await run_in_threadpool(state.remover.remove, body)
    REMBG_SECONDS.observe(time.perf_counter() - started)
    return Response(content=png, media_type="image/png")
