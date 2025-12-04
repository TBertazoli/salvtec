import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Image optimization */
  images: {
    formats: ["image/avif", "image/webp"],
  },
  /* Compression and performance */
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
