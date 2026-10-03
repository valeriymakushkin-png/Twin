# Load testing

`k6-mascot.js` drives the API the way the Mini App does, with **Telegram-signed initData** (every virtual user is a
distinct Telegram account, signed with the bot token exactly like Telegram signs launch parameters).

| Scenario | Who | Flow |
|---|---|---|
| `browse` | returning users | auth (session reused for 10 "app opens") → profile + styles + mascots (batched) → library → products |
| `create` | new users | consent upload (2×3 selfies, multipart) → generate mascot → poll progress → 5-sticker pack → meme |

| Profile | Shape |
|---|---|
| `smoke` | 5 browse rps for 1 min + 2 full creations — run after every deploy to staging |
| `load` | ramp → steady `MASCOTS_PER_HOUR` (default 5,000) + `BROWSE_RPS` (default 60) for `DURATION` → ramp down |
| `spike` | steady → 10× burst for 5 min (creator campaign) → recovery while the queue drains |

Thresholds (the run fails when any is crossed): HTTP errors < 1 %, read p95 < 300 ms / p99 < 800 ms,
write p95 < 1.5 s, upload p95 < 4 s, **mascot end-to-end p95 < 90 s**, generation success > 97 %, checks > 98 %.

```bash
# staging (stub AI providers!)
k6 run infra/loadtest/k6-mascot.js \
  -e API_URL=https://api.staging.mascot.ai -e BOT_TOKEN="$STAGING_BOT_TOKEN" \
  -e PROFILE=load -e MASCOTS_PER_HOUR=5000 -e DURATION=30m

# local, against pnpm dev (mock providers)
k6 run infra/loadtest/k6-mascot.js -e PROFILE=smoke
```

Staging prerequisites:

- `AI_IMAGE_PROVIDER=mock`, `AI_VIDEO_PROVIDER=mock`, `FACE_ANALYSIS_PROVIDER=mock`, `VISION_PROVIDER=mock` (or
  latency-faithful stubs) — never burn real provider budget, and the fixtures are procedural, not real faces.
- `TELEGRAM_NOTIFICATIONS_ENABLED=false` (virtual users have no chats).
- The load generators' egress IPs in `RATE_LIMIT_EXEMPT_IPS`, otherwise the per-IP auth limit (30/min) throttles the test.
- **Never run against production**: it creates real users and generations.

Watch during the run: Grafana queue depth (`queue_jobs{state="waiting"}`), KEDA replica counts for `worker-general`,
API p95, Postgres CPU / connections (PgBouncer), Redis memory.

## Reference result

Single 4-vCPU dev box, one API process + one worker process (default concurrency), Postgres + Redis local, mock AI:

```
k6 run -e PROFILE=load -e MASCOTS_PER_HOUR=1800 -e RAMP=1m -e DURATION=3m -e BROWSE_RPS=30

  mascots created      135 (1351/hour, including ramps)
  mascot e2e p95       3.7 s
  stickers e2e p95     6.1 s
  generation success   100.0 %
  read p95             24 ms   (write p95 67 ms, upload p95 337 ms)
  HTTP errors          0.00 %  (44,919 requests)
```

With mock providers the pipeline cost is dominated by image post-processing (Sharp) and the database, so this measures
the platform's own overhead; production throughput is bounded by provider rate limits (`IMAGE_PROVIDER_RPM`), which
the cluster-wide limiter enforces, and scaled by KEDA on queue depth.
