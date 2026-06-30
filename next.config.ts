import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Add this if your images fail to load
  images: {
    unoptimized: true,
  },
};

export default nextConfig;