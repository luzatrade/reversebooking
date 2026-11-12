"use client";

import { useEffect } from "react";

const SW_URL = "/sw-console-anteprima-email.js";

export function EmailPreviewPwaHead() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    void navigator.serviceWorker.register(SW_URL, { scope: "/console/" }).catch((error) => {
      console.warn("PWA service worker registration failed", error);
    });
  }, []);

  return null;
}
