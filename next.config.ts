import type { NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tavbgqcsizqdceobauli.supabase.co",
        pathname: "/storage/v1/object/public/**",
     },
    ],
 },
  async redirects() {
    return [{ source: "/register", destination: "/registrazione", permanent: true}];
 },
};

export default nextConfig;
