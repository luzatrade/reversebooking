-- Google Indexing API: log invii e coda priorità (eventi slug/indexability).

CREATE TABLE IF NOT EXISTS seo_google_indexing_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url TEXT NOT NULL,
  notified_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  http_status INT,
  ok BOOLEAN NOT NULL DEFAULT false,
  tier SMALLINT,
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS seo_google_indexing_log_notified_at_idx
  ON seo_google_indexing_log (notified_at DESC);

CREATE INDEX IF NOT EXISTS seo_google_indexing_log_url_notified_at_idx
  ON seo_google_indexing_log (url, notified_at DESC);

CREATE TABLE IF NOT EXISTS seo_google_indexing_pending (
  url TEXT PRIMARY KEY,
  priority SMALLINT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS seo_google_indexing_pending_pick_idx
  ON seo_google_indexing_pending (priority ASC, created_at ASC);

ALTER TABLE seo_google_indexing_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_google_indexing_pending ENABLE ROW LEVEL SECURITY;