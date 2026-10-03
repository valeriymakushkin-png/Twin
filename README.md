# Mascot AI

**Your face. Your mascot.** A Telegram Mini App that turns 5–15 selfies into a personal, stylised 3D mascot that is
unmistakably *you* — then turns it into Telegram sticker packs, memes, profile pictures and short videos.

- **Mini App** (Next.js 16 · React 19 · Tailwind v4 · Framer Motion · Telegram Mini Apps SDK)
- **API + bot + workers** (NestJS 11 · Prisma 6 · PostgreSQL · BullMQ · Redis · Sharp · ffmpeg)
- **AI pipeline**: InsightFace + MediaPipe face analysis → **Mascot DNA** → OpenAI Images / FLUX → identity-scored best-of-N;
  Kling / Runway / Veo video; OpenAI vision, TTS and moderation
- **Storage**: Cloudflare R2 (private biometric inputs, public CDN outputs)
- **Payments**: Telegram Stars (subscriptions, passes, credits, refunds)
- **Admin**: analytics, users, revenue, generations, abuse monitoring, style engine

## Deliverables map

| # | Requested output | Where |
|---|---|---|
| 1 | Full project architecture | [docs/01-architecture.md](docs/01-architecture.md) |
| 2 | Folder structure | [docs/02-folder-structure.md](docs/02-folder-structure.md) |
| 3 | Database schema | [docs/03-database.md](docs/03-database.md) |
| 4 | Prisma schema | [apps/api/prisma/schema.prisma](apps/api/prisma/schema.prisma) (+ migration) |
| 5 | Backend architecture | [docs/04-backend.md](docs/04-backend.md) |
| 6 | Frontend architecture | [docs/05-frontend.md](docs/05-frontend.md) |
| 7 | API endpoints | [docs/06-api.md](docs/06-api.md) |
| 8 | AI pipeline | [docs/07-ai-pipeline.md](docs/07-ai-pipeline.md) |
| 9 | Telegram integration | [docs/08-telegram.md](docs/08-telegram.md) |
| 10 | Payment integration | [docs/09-payments.md](docs/09-payments.md) |
| 11 | Production deployment architecture | [docs/10-deployment.md](docs/10-deployment.md), [infra/](infra/), [.github/workflows/](.github/workflows/) |
| 12 | MVP roadmap | [docs/11-roadmap.md](docs/11-roadmap.md) |
| 13 | Complete source code | [apps/api](apps/api) · [apps/web](apps/web) · [apps/admin](apps/admin) · [apps/face-service](apps/face-service) · [packages/shared](packages/shared) |

## Quick start (local, no AI keys needed)

Prerequisites: Node 22, pnpm 10, Docker (or local Postgres 16 + Redis 7), ffmpeg.

```bash
pnpm install
docker compose up -d postgres redis            # or use local services
cp .env.example apps/api/.env                  # mock AI providers + local storage by default
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local

pnpm --filter @mascot/shared build
pnpm db:migrate                                # prisma migrate dev
pnpm db:seed                                   # styles (+ SEED_ADMIN_TELEGRAM_ID=… for an admin)

pnpm --filter @mascot/api dev                  # API      http://localhost:4000
pnpm --filter @mascot/api dev:worker           # workers  (health :4001)
pnpm --filter @mascot/web dev                  # Mini App http://localhost:3000  (dev auth outside Telegram)
pnpm --filter @mascot/admin dev                # Admin    http://localhost:3001  ("Dev login")
```

With mock providers every feature works end to end: face analysis is simulated, mascots are rendered procedurally
from the extracted DNA, videos are produced locally with ffmpeg.

Full stack in containers (incl. MinIO as R2 and the real face service):

```bash
docker compose --profile app up -d --build
```

To use real AI, set in `apps/api/.env`: `AI_IMAGE_PROVIDER=openai` + `OPENAI_API_KEY`, `VISION_PROVIDER=openai`,
`AI_VIDEO_PROVIDER=kling` + Kling keys, `FACE_ANALYSIS_PROVIDER=service` (run `apps/face-service`), `MODERATION_PROVIDER=openai`.
Connecting a real bot: see [docs/08-telegram.md](docs/08-telegram.md) (BotFather steps + `pnpm telegram:setup`).

## Testing

```bash
pnpm --filter @mascot/api test        # Jest: Telegram auth, DNA builder, prompts, image ops, i18n (46 tests)
pnpm --filter @mascot/api test:e2e    # end-to-end against a running API + worker (mock AI + fake Bot API):
                                      # auth → upload → avatar pipeline → stickers + publish → meme → PFP →
                                      # Stars payment via webhook → video → style variant → share → EN/RU → admin
pnpm --filter @mascot/web i18n:check  # translation parity (placeholders, Russian plural forms)
pnpm --filter @mascot/api eval:likeness --synthetic 3   # likeness harness smoke (real: --dir ./golden)
k6 run infra/loadtest/k6-mascot.js -e PROFILE=smoke     # load test (see infra/loadtest/README.md)
cd apps/face-service && pytest        # geometry & colorimetry
pnpm -r typecheck && pnpm -r build
```

## Repository layout

```
apps/api           NestJS API, Telegram webhook, BullMQ workers, Prisma schema
apps/web           Telegram Mini App
apps/admin         Admin dashboard
apps/face-service  FastAPI · InsightFace · MediaPipe · rembg
packages/shared    Mascot DNA, style engine, plans, API contracts, procedural mascot renderer
infra/             Kubernetes (Kustomize), MinIO bootstrap, Cloudflare R2 config
docs/              Architecture & operations documentation
```

## Highlights

- **Mascot DNA**: identity extracted once (closed-vocabulary traits + landmark proportions + ArcFace embedding) and reused by every generation → consistent character across styles, stickers, memes and videos.
- **Identity-scored generation**: candidates are re-analysed and ranked by ArcFace similarity to the user.
- **Charge-before-work, refund-on-failure** with exactly-once semantics; idempotency keys on every generation.
- **EN / RU out of the box**: typed dictionaries for the Mini App, localized bot, notifications, invoices and memes; auto-detected from Telegram.
- **Measured likeness**: an evaluation harness scores identity per style and gates prompt/model changes.
- **Privacy by design**: explicit biometric consent, private bucket + signed URLs, 30-day photo retention, GDPR erasure.
- **Built for 100k users**: stateless API, queue-depth autoscaling (KEDA), cluster-wide provider rate limiting, priority queue for Premium, CDN-served media.
