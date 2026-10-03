# 2. Folder structure

pnpm workspace + Turborepo monorepo. One shared domain package, three TypeScript apps, one Python service.

```
.
├── apps/
│   ├── api/                         NestJS — REST API, Telegram bot webhook, BullMQ workers (one image, two entrypoints)
│   │   ├── prisma/
│   │   │   ├── schema.prisma        Full data model (users … daily_stats)
│   │   │   ├── migrations/          SQL migrations (prisma migrate)
│   │   │   └── seed.ts              Styles + optional bootstrap admin
│   │   ├── scripts/
│   │   │   ├── e2e-smoke.ts         End-to-end test incl. mock Telegram Bot API
│   │   │   ├── eval-likeness.ts     Likeness evaluation harness (identity / rank-1 / gates)
│   │   │   └── telegram-setup.ts    setWebhook, commands, menu button, descriptions (EN + RU)
│   │   ├── src/
│   │   │   ├── main.ts              HTTP entrypoint (helmet, CORS, /v1 prefix, body limits)
│   │   │   ├── worker.ts            Worker entrypoint (+ /health, /metrics on :4001)
│   │   │   ├── app.module.ts        API composition
│   │   │   ├── worker.module.ts     Worker composition
│   │   │   ├── core.module.ts       Shared infra + domain services (logger, prisma, redis, queues, AI…)
│   │   │   ├── i18n/                bot catalog (EN/RU): commands, notifications, invoices, captions
│   │   │   ├── config/              zod-validated env (prod refuses unsafe defaults) → AppConfig
│   │   │   ├── common/              errors (Paywall/Pipeline/Provider), decorators, zod pipe, filter, utils
│   │   │   ├── infra/
│   │   │   │   ├── prisma/          PrismaService
│   │   │   │   ├── redis/           RedisService (windows, cache-aside)
│   │   │   │   ├── storage/         R2/S3 + local drivers, key layout, signed local file server
│   │   │   │   ├── queue/           queue names, job payloads, schedules, QueueService
│   │   │   │   └── metrics/         Prometheus registry & metrics
│   │   │   ├── ai/
│   │   │   │   ├── face/            FaceAnalyzer interface, face-service client, deterministic mock
│   │   │   │   ├── dna/             DNA builder (pure), OpenAI vision extractor (strict JSON schema), mock
│   │   │   │   ├── prompts/         Prompt compiler (avatar, style, sticker, meme, pfp, video)
│   │   │   │   ├── image/           OpenAI Images, Flux Kontext, procedural mock
│   │   │   │   ├── video/           Kling, Runway, Veo, ffmpeg mock
│   │   │   │   ├── tts/             OpenAI TTS, mock
│   │   │   │   ├── media/           ffmpeg helpers (mux, thumbnail, normalise)
│   │   │   │   ├── render/          Sharp ops: uploads, stickers, memes, PFPs, character cards, frames
│   │   │   │   ├── mascot-engine.service.ts   best-of-N + identity scoring + transparency guarantee
│   │   │   │   └── provider-rate-limiter.ts   cluster-wide RPM limiter
│   │   │   ├── modules/
│   │   │   │   ├── auth/            initData + Login Widget auth, global JWT & rate-limit guards
│   │   │   │   ├── users/           GET/PATCH/DELETE /profile, referrals, activity (HLL DAU)
│   │   │   │   ├── quota/           entitlements, credits ledger, atomic charges & refunds
│   │   │   │   ├── uploads/         POST /upload pipeline
│   │   │   │   ├── avatars/         POST /generate-avatar, GET /avatars, style variants, HD export
│   │   │   │   ├── generations/     launch protocol, polling, cancel, lifecycle helpers
│   │   │   │   ├── styles/          style engine registry (code recipes + DB overrides)
│   │   │   │   ├── stickers/        POST /generate-stickers, publish to Telegram
│   │   │   │   ├── memes/ pfp/ videos/   generators
│   │   │   │   ├── library/         DTO mapper, GET /library
│   │   │   │   ├── payments/        Telegram Stars invoices, webhooks, subscriptions, refunds
│   │   │   │   ├── telegram/        Bot API client, initData validation, webhook, update router
│   │   │   │   ├── share/           prepared inline messages + referral deep links
│   │   │   │   ├── moderation/      content moderation, abuse ledger, bans
│   │   │   │   ├── admin/           analytics + management API
│   │   │   │   └── health/          /health, /health/ready, /metrics
│   │   │   └── workers/             avatar, sticker, meme, pfp, video, telegram, notify, maintenance
│   │   ├── test/                    Jest unit tests (auth, DNA, prompts, image ops)
│   │   └── Dockerfile
│   ├── web/                         Telegram Mini App (Next.js App Router)
│   │   └── src/
│   │       ├── app/                 / · /create · /processing/[id] · /mascot/[id]{,/stickers,/memes,/pfp,/videos,/styles}
│   │       │                        /library · /premium · /profile · /legal · /m/[slug] (SSR share page)
│   │       ├── components/          ui kit, brand, landing, upload, processing, mascot, paywall, share
│   │       ├── lib/                 api client, Telegram SDK wrapper, React Query hooks, image resize
│   │       │   └── i18n/            en.ts (source of truth) · ru.ts · useT() · catalog helpers
│   │       ├── providers/           auth (initData → JWT), locale, query, Telegram back button
│   │       └── store/               zustand: create flow, paywall
│   ├── admin/                       Admin dashboard (Next.js + Recharts)
│   │   └── src/{app,components,lib} overview, users, revenue, generations, abuse, payments, styles, login
│   └── face-service/                Python FastAPI — InsightFace, MediaPipe, rembg
│       ├── app/                     main (routes), analyzer, geometry (pure), skin (Monk scale), schemas
│       ├── tests/                   pytest (geometry, colorimetry)
│       └── Dockerfile               bakes model weights into the image
├── packages/
│   └── shared/                      Domain model shared by API, web and admin
│       └── src/                     dna · styles · emotions · wardrobe · memes · videos · pfp · plans
│                                    generation · api (zod request schemas + DTOs) · mascot-svg (procedural renderer) · locale
├── infra/
│   ├── k8s/                         Kustomize base: deployments, HPA, KEDA, PDB, ingress, netpol, monitoring, alerts
│   ├── minio/                       local R2 stand-in bootstrap
│   ├── cloudflare/                  R2 CORS + lifecycle rules
│   └── loadtest/                    k6 scenarios (signed initData) + fixtures
├── docs/                            This documentation
├── .github/workflows/               ci.yml (typecheck, tests, builds, e2e, images) · deploy.yml
├── docker-compose.yml               Postgres, Redis, MinIO (+ full app with --profile app)
├── .env.example                     Every API/worker variable, documented
├── turbo.json · pnpm-workspace.yaml · tsconfig.base.json
└── README.md
```

## Conventions

- **Shared contracts**: request schemas are zod objects in `@mascot/shared`; the API validates with `ZodPipe`, the clients reuse the inferred types — one definition, no drift.
- **Closed vocabularies** (DNA traits, styles, emotions, templates, products) live in `@mascot/shared` and are the only allowed values end-to-end.
- **Pure core, effectful shell**: DNA building, prompt compilation, image ops and geometry are pure and unit-tested; services orchestrate I/O.
- **One image, many roles**: the API Docker image runs the HTTP server, any subset of workers (`WORKER_QUEUES`), and migrations.
