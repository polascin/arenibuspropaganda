import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Own HTML shell + metadata for unmatched routes (avoids root layout index/OG).
    globalNotFound: true,
  },
};

export default nextConfig;
