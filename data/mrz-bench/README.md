# MRZ Learning Bench — HotelsDrop check-in

Banco di prova offline per tarare il motore OCR/parse MRZ (CIE, passaporti) prima del porting in `lib/check-in/mrz/`.

## Comandi

```bash
# Import PDF/WhatsApp → PNG corpus
npm run mrz:import

# Benchmark completo corpus (103 immagini, ~3h)
npm run mrz:bench

# Solo campioni con ground truth (35 immagini)
npm run mrz:bench:verified

# Singolo campione
npx tsx scripts/mrz-bench/bench.ts --corpus --compact --engines G --photo zavaglia-1

# Diagnostica bande/OCR
npm run mrz:probe -- gronchi-1

# Report automatico da file risultati
npm run mrz:report -- data/mrz-bench/corpus-results-v5.txt
```

## Corpus

| File | Contenuto |
|------|-----------|
| `samples.json` | 96 campioni logici con metadati |
| `corpus-manifest.json` | 103 PNG rasterizzati (PDF multi-pagina) |
| `corpus/` | Immagini documenti (non committare in repo pubblico) |
| `truths-batch2.json` | Ground truth batch WhatsApp/PDF |
| `failure-tags.json` | Tag auto failure da probe |

- **35 verificati** (`truth` ≠ null): punteggio benchmark
- **68 scoperta** (`truth: null`): solo log lettura, esclusi dal punteggio

## Motore G (`scripts/mrz-bench/engine-lib.ts`)

1. Rilevamento banda MRZ (transizioni riga, non densità pixel)
2. Deskew + upscale banda (min 56px/riga)
3. OCR multi-strategia: riga-per-riga → blocco → binarizzato × soglie
4. Validazione **campo per campo** (doc, nascita, scadenza) — **no veto composite**
5. Gate CIE italiana: formato `AA#####AA#` + nazionalità/emittente ITA (OCR-tolerant `1TA→ITA`)
6. Veto ambiguità: 2+ documenti ITA validi distinti → `non_letto`
7. Voto maggioranza sui nomi tra letture multiple
8. Fallback crop (basso + lati + rotazioni) e path TD3 dedicato

## Verdict benchmark

| Verdict | Significato | Azione operatore |
|---------|-------------|------------------|
| `tutto_corretto` | Tutti i campi ok | Nessuno |
| `solo_nomi_errati` | Doc/date ok, nomi OCR dubbi | Conferma nomi a video |
| `campo_verificabile_errato` | **GRAVE** — doc o data sbagliati accettati | Mai in produzione |
| `non_letto` | Nessun MRZ accettato | Inserimento manuale |

**Utilizzabile** = `tutto_corretto` + `solo_nomi_errati` (nomi sempre da confermare in UI).

## Risultati storici (Engine G, campioni verificati)

| Run | tutto_corretto | utilizzabile | errori gravi | non_letto |
|-----|----------------|--------------|--------------|-----------|
| v3 (21) | 8/21 | 14/21 (67%) | 0/21 | 6/21 |
| v4 (35) | 9/35 | 14/35 (40%) | **9/35** | 12/35 |
| v5 (35) | 8/35 | 14/35 (40%) | **8/35** | 13/35 |

### Fix v4 → v5

- Gate italiano strict con tolleranza OCR nazionalità (`looksItalianTd1`)
- Veto multi-documento (`hasAmbiguousDocuments`)
- Flag `--verified` per benchmark rapido

### Limiti noti

- Foto con **due CIE** ma OCR legge solo quello sbagliato → resta ERR (serve crop manuale o seconda foto)
- Nomi MRZ **senza check digit** → sempre conferma operatore
- Tempo ~3–250s/immagine in modalità thorough
- Non ancora portato in produzione (`lib/check-in/mrz/`)

## Prossimo passo

Porting motore G in produzione dopo stabilizzazione v5 (0 errori gravi sui 35 verificati).
