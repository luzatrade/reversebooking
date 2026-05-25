import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    return [{ source: "/register", destination: "/registrazione", permanent: true }];
  },
};

export default nextConfig;
