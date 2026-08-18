# HotelsDrop — pacchetto traduzioni SEO hub

Cartella per tradurre **homepage + 30 hub destinazione** senza tradurre tutto il sito.

## File

| File | Contenuto |
|------|-----------|
| `cities-v1.json` | Lista 30 città, slug, URL target, `displayNameDe/Fr/Es…` |
| `homepage.json` | Title, meta, hero, FAQ homepage |
| `destination-hubs.json` | Meta, intro, editorial, POI, FAQ per ogni hub |
| `seo-templates.json` | Pattern title/description riutilizzabili |
| `GLOSSARY.md` | Termini fissi (non tradurre liberamente) |

## Come compilare

1. Leggi `GLOSSARY.md` prima di tradurre.
2. Compila solo le chiavi lingua vuote (`de`, `fr`, `es`, `nl`, `pl`) in ogni file.
3. **Non cambiare** `slug`, `cityId`, `source.*` (riferimento IT/EN).
4. Limiti SERP:
   - **title** ≤ 60 caratteri
   - **metaDescription** ≤ 155 caratteri
5. `{count}` nei testi source = numero strutture; in traduzione usa `{count}` o equivalente naturale nella lingua.
6. FAQ hub: traduci ogni `question` e `answer` sotto `faq[].question.translations.de` ecc.

## Esempio (hub)

```json
"translations": {
  "title": {
    "de": "Hotels in Reggio Calabria: {count} Unterkünfte — Direktangebote"
  }
}
```

## Dopo la traduzione

Quando hai finito (es. solo `de` compilato), scrivi in Cursor:

```text
Traduzioni SEO in data/seo/export/ — DE completato. Implementa hub-only /de, hreflang, sitemap.
```

L'agente leggerà i JSON da questa cartella.

## Lingue previste

| Codice | Segmento hub | hreflang | Stato |
|--------|----------------|----------|-------|
| `de` | `/de/reiseziele/` | `de-DE` | homepage + 30 hub |
| `zh` | `/zh/destinations/` | `zh-CN` | homepage + 30 hub |
| `es` | `/es/destinos/` | `es` | solo homepage (hub in attesa di copy) |
| `fr` | `/fr/destinations/` | `fr-FR` | non attiva |

Hotel: sempre canonical `/en/hotel/...` — **non tradurre** schede hotel.

## Aggiungere una lingua

Tutta la configurazione sta in `lib/seo/hub-locale-registry.ts`. Non serve toccare
routing, sitemap, IndexNow o metadata: leggono dal registro.

1. Aggiungi il file `data/seo/export/<locale>/content.json` (homepage, `ui`, `cityDisplayNames`, `hubs`).
2. Aggiungi la voce nel registro: segmento URL, hreflang, OG locale, label hub.
3. Aggiungi il locale in `supportedLocales` e `localeLabels` (`lib/i18n/translations.ts`) e la bandiera nel `LanguageSwitcher`.
4. Tieni `hubsEnabled: false` fino a quando esiste copy unica per ogni città: evita 30 pagine template thin.
5. Prima del push: `npm run verify` (typecheck + build). Un build rotto su Vercel lascia online la versione precedente senza errori visibili.
6. Dopo il deploy: `npm run seo:check-locales` e poi `npm run seo:indexnow-hubs`.

## Rigenerare export da codice

Se cambiano copy IT/EN in produzione:

```bash
node scripts/export-seo-translation-pack.mjs
```

⚠️ Sovrascrive i JSON: fai backup delle traduzioni già compilate.
