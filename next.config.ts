import type { NextConfig } from "next";
import { BRAND_DOMAIN } from "./lib/legal/company";
import { APEX_REDIRECT_PATH_REGEX } from "./lib/seo/crawler-paths";

const isDev = process.env.NODE_ENV === "development";

// Content Security Policy in modalità BLOCCANTE.
// Verificata in produzione (Report-Only) senza violazioni reali sulle pagine
// chiave. 'unsafe-inline' resta necessario per gli script/stili inline di
// Next.js; un futuro hardening potrà introdurre i nonce per rimuoverlo.
const contentSecurityPolicy = [
  "default-src 'self'",
  // wasm-unsafe-eval: Tesseract.js MRZ reader; worker-src blob: per Web Worker OCR
  `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'${isDev ? " 'unsafe-eval'" : ""} https://js.stripe.com`,
  "worker-src 'self' blob:",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https:",
  "font-src 'self' data:",
  "connect-src 'self' blob: data: https://*.supabase.co wss://*.supabase.co https://api.resend.com https://places-api.foursquare.com https://nominatim.openstreetmap.org https://api.stripe.com",
  "frame-src 'self' https://js.stripe.com https://hooks.stripe.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(self), microphone=(), geolocation=(self), browsing-topics=()",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tavbgqcsizqdceobauli.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fastly.4sqi.net",
      },
    ],
  },
  async redirects() {
    const apexHost = BRAND_DOMAIN;
    const wwwOrigin = `https://www.${apexHost}`;

    return [
      { source: "/register", destination: "/registrazione", permanent: true },
      { source: "/vetrina", destination: "/", permanent: true },
      { source: "/vetrina/:path*", destination: "/", permanent: true },
      {
        source: "/",
        has: [{ type: "host", value: apexHost }],
        destination: `${wwwOrigin}/`,
        permanent: true,
      },
      {
        source: `/:path(${APEX_REDIRECT_PATH_REGEX})`,
        has: [{ type: "host", value: apexHost }],
        destination: `${wwwOrigin}/:path`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
