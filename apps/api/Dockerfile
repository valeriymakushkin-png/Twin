# syntax=docker/dockerfile:1.7
# One image, two processes:  API  → node dist/main.js   |   workers → node dist/worker.js
FROM node:22-bookworm-slim AS base
ENV PNPM_HOME=/pnpm PATH=/pnpm:$PATH NEXT_TELEMETRY_DISABLED=1
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /repo

FROM base AS build
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json tsconfig.base.json ./
COPY packages/shared/package.json packages/shared/
COPY apps/api/package.json apps/api/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --filter @mascot/api... --ignore-scripts
COPY packages/shared packages/shared
COPY apps/api apps/api
RUN pnpm --filter @mascot/shared build \
 && pnpm --filter @mascot/api exec prisma generate \
 && pnpm --filter @mascot/api build \
 && pnpm --filter @mascot/api deploy --legacy --prod /prod/api \
 && cd /prod/api && npx prisma generate

FROM node:22-bookworm-slim AS runtime
# ffmpeg: video mux/thumbnails · fonts: SVG text in memes and character cards (librsvg via sharp)
RUN apt-get update && apt-get install -y --no-install-recommends \
      ffmpeg openssl ca-certificates tini fonts-dejavu-core fonts-liberation2 fonts-noto-color-emoji \
    && rm -rf /var/lib/apt/lists/* && useradd -r -u 10001 -m app
ENV NODE_ENV=production NODE_OPTIONS=--enable-source-maps
WORKDIR /app
COPY --from=build --chown=app /prod/api ./
COPY --from=build --chown=app /repo/apps/api/dist ./dist
USER app
EXPOSE 4000 4001
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "dist/main.js"]
