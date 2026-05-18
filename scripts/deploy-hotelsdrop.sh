#!/usr/bin/env bash
# Deploy HotelsDrop su Vercel + variabili da .env.local
set -euo pipefail
cd "$(dirname "$0")/.."

if ! command -v vercel >/dev/null 2>&1; then
  npm i -g vercel@latest
fi

if ! vercel whoami >/dev/null 2>&1; then
  echo "Esegui prima: vercel login"
  exit 1
fi

if [[ ! -f .env.local ]]; then
  echo "Manca .env.local — copia da .env.example"
  exit 1
fi

echo "→ Deploy produzione Vercel..."
vercel link --yes 2>/dev/null || vercel link

while IFS= read -r line || [[ -n "$line" ]]; do
  [[ "$line" =~ ^#.*$ ]] && continue
  [[ -z "${line// }" ]] && continue
  key="${line%%=*}"
  val="${line#*=}"
  val="${val%\"}"
  val="${val#\"}"
  case "$key" in
    NEXT_PUBLIC_*|SUPABASE_*|STRIPE_*|RESEND_*|EMAIL_FROM|NOTIFICATION_*)
      vercel env rm "$key" production -y 2>/dev/null || true
      printf '%s' "$val" | vercel env add "$key" production
      ;;
  esac
done < .env.local

vercel --prod
echo ""
echo "Poi in Vercel → Settings → Domains aggiungi hotelsdrop.com e www.hotelsdrop.com"
echo "DNS Aruba: A @ → 76.76.21.21  |  CNAME www → cname.vercel-dns.com"
