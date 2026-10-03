#!/bin/sh
# Creates the two buckets that mirror the Cloudflare R2 layout:
#  mascot-private: source photos, HD masters (signed URLs only)
#  mascot-public:  web renders, stickers, memes, videos (CDN, anonymous read)
set -e
until mc alias set local http://minio:9000 minio minio-secret >/dev/null 2>&1; do sleep 1; done
mc mb --ignore-existing local/mascot-private
mc mb --ignore-existing local/mascot-public
mc anonymous set download local/mascot-public
echo "buckets ready"
